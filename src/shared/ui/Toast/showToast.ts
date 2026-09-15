import { createElement } from 'react';
import type { ToastOptions } from 'react-toastify';
import { toast } from 'react-toastify';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';

import { ToastLayout } from './ToastLayout';

const TOAST_COLORS = {
  success: 'text-green-400',
  error: 'text-red-400',
  info: 'text-blue-400',
  warning: 'text-yellow-400',
};

const TOAST_STYLE: ToastOptions = {
  position: 'top-center',
  autoClose: 2000,
  closeButton: false,
  className: 'bg-white backdrop-blur-md border border-white/10 shadow-2xl',
};

const renderToast = (
  message: string,
  Icon: typeof CheckCircleIcon,
  color: string,
) =>
  createElement(ToastLayout, {
    message,
    icon: createElement(Icon, { className: `w-6 h-6 ${color}` }),
  });

export const showToast = {
  success: (message: string) =>
    toast.success(
      renderToast(message, CheckCircleIcon, TOAST_COLORS.success),
      TOAST_STYLE,
    ),
  error: (message: string) =>
    toast.error(
      renderToast(message, ExclamationCircleIcon, TOAST_COLORS.error),
      TOAST_STYLE,
    ),
  info: (message: string) =>
    toast.info(
      renderToast(message, InformationCircleIcon, TOAST_COLORS.info),
      TOAST_STYLE,
    ),
  warning: (message: string) =>
    toast.warn(
      renderToast(message, ExclamationTriangleIcon, TOAST_COLORS.warning),
      TOAST_STYLE,
    ),
};
