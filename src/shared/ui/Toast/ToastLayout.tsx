import type { ReactNode } from 'react';

interface ToastLayoutProps {
  message: string;
  icon: ReactNode;
}

export const ToastLayout = ({ message, icon }: ToastLayoutProps) => (
  <div className="flex items-center gap-3 py-1 font-ssrm">
    <div className="flex-shrink-0">{icon}</div>
    <div className="flex-1 text-sm font-medium text-black">{message}</div>
  </div>
);
