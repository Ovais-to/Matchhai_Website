"use client";

import { copy } from "@/lib/copy";

type ToastProps = {
  title: string;
  message: string;
  variant?: "success" | "error";
  onClose: () => void;
};

export const Toast = ({ title, message, variant = "success", onClose }: ToastProps) => {
  const color =
    variant === "success"
      ? "border-status-success text-status-success"
      : "border-status-error text-status-error";

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 w-full max-w-sm rounded-2xl border border-border bg-bg-secondary p-4 shadow-lg sm:bottom-6 sm:left-auto sm:right-6"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-sm font-semibold ${color}`}>{title}</p>
          <p className="mt-1 text-sm text-text-secondary">{message}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="focus-ring rounded-full px-2 py-1 text-text-muted"
          aria-label={title}
        >
          {copy.symbols.close}
        </button>
      </div>
    </div>
  );
};
