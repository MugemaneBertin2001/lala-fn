"use client";

import { toast as sonnerToast } from "sonner";

interface ToastProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "default" | "destructive" | "success";
}

function toast({ title, description, variant = "default" }: ToastProps) {
  switch (variant) {
    case "destructive":
      return sonnerToast.error(title, {
        description,
      });
    case "success":
      return sonnerToast.success(title, {
        description,
      });
    default:
      return sonnerToast(title, {
        description,
      });
  }
}

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => sonnerToast.dismiss(toastId),
  };
}

export { useToast, toast };
