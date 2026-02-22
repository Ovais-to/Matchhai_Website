"use client";

import { useEffect, useId, useRef } from "react";
import { copy } from "@/lib/copy";

type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children?: React.ReactNode;
};

export const Modal = ({ open, title, description, onClose, children }: ModalProps) => {
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-lg rounded-2xl bg-bg-secondary p-6 shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <h3 id={titleId} className="text-lg font-semibold text-text-primary">
              {title}
            </h3>
            {description ? (
              <p id={descriptionId} className="mt-1 text-sm text-text-secondary">
                {description}
              </p>
            ) : null}
          </div>
          <button
            className="focus-ring rounded-full px-2 py-1 text-text-secondary"
            onClick={onClose}
            type="button"
            ref={closeButtonRef}
          >
            {copy.symbols.close}
          </button>
        </div>
        {children ? <div className="mt-4">{children}</div> : null}
      </div>
    </div>
  );
};
