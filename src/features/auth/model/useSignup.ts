import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { useAuthStore } from '@/entities/user';
import { parseAccessToken } from '@/shared/lib';
import { getUser } from '../api/getUser';
import type { SignupFormValues } from '../lib/validators';
import { signUpSchema } from '../lib/validators';
import { authQueries } from '../queries/authQueries';
import { AUTH_MESSAGES } from './messages';
import type { SignupFailureResponse } from './types';

export const useSignup = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);
  const updateUser = useAuthStore((state) => state.updateUser);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const methods = useForm<SignupFormValues>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const {
    handleSubmit,
    setError,
    trigger,
    formState: { isValid },
  } = methods;

  const password = methods.watch('password');
  const { touchedFields } = methods.formState;

  useEffect(() => {
    if (touchedFields.confirmPassword) {
      trigger('confirmPassword');
    }
  }, [password, touchedFields.confirmPassword, trigger]);

  const { mutate: signup, isPending: isSigningUp } = useMutation({
    ...authQueries.signup(),

    onSuccess: async (_, form) => {
      try {
        const { mutationFn: loginRequest } = authQueries.login();

        const response = await loginRequest!({
          username: form.username,
          password: form.password,
        });

        if (!('accessToken' in response)) {
          setErrorMessage('로그인에 실패했습니다.');
          return;
        }

        const { accessToken } = response;
        const { sub: id, nickname, tag } = parseAccessToken(accessToken);

        setAuth({
          user: { id, nickname, tag },
          accessToken: accessToken,
        });

        const profileData = await getUser();
        updateUser(profileData);

        setErrorMessage(null);
        navigate('/welcome');
      } catch {
        alert('회원가입에 성공했어요! 로그인 페이지로 이동합니다.');
        navigate('/login');
      }
    },

    onError: (err: AxiosError<SignupFailureResponse>) => {
      if (err.response?.status === 409) {
        err.response.data.errors?.forEach(
          (e: { field: string; reason: string }) => {
            let clientMessage: string | undefined;

            if (e.field === 'username') {
              clientMessage = AUTH_MESSAGES.USERNAME_DUPLICATE;
            } else if (e.field === 'nickname') {
              clientMessage = AUTH_MESSAGES.NICKNAME_DUPLICATE;
            }

            if (clientMessage) {
              setError(e.field as 'username' | 'nickname', {
                type: 'manual',
                message: clientMessage,
              });
            }
          },
        );
        return;
      }

      setErrorMessage(AUTH_MESSAGES.SIGNUP_GENERAL_FAILURE);
    },
  });

  const onSubmit = (formValues: SignupFormValues) => {
    signup({
      username: formValues.username,
      nickname: formValues.nickname,
      password: formValues.password,
    });
  };

  return {
    methods,
    handleSubmit,
    isValid,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isSigningUp,
    errorMessage,
    onSubmit,
  };
};
