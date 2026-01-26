"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { copy } from "@/lib/copy";
import { submitContact } from "@/lib/apiClient";
import { Toast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(1, copy.forms.validation.required),
  email: z
    .string()
    .min(1, copy.forms.validation.required)
    .email(copy.forms.validation.email),
  message: z.string().min(1, copy.forms.validation.required),
  website: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const [toast, setToast] = useState<{
    title: string;
    message: string;
    variant: "success" | "error";
  } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (values: FormValues) => {
    if (values.website) {
      return;
    }
    const { ok } = await submitContact(values);
    if (ok) {
      setToast({
        title: copy.forms.contact.success.title,
        message: copy.forms.contact.success.message,
        variant: "success"
      });
      reset();
      return;
    }
    setToast({
      title: copy.forms.contact.error.title,
      message: copy.forms.contact.error.message,
      variant: "error"
    });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="text-sm font-semibold text-text-primary">
          {copy.forms.contact.title}
        </p>
        <p className="text-sm text-text-secondary">
          {copy.forms.contact.description}
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="text-sm text-text-secondary">
            {copy.forms.contact.fields.name.label}
          </label>
          <input
            {...register("name")}
            placeholder={copy.forms.contact.fields.name.placeholder}
            className="focus-ring mt-2 w-full rounded-xl border border-bg-tertiary bg-bg-primary px-4 py-3 text-sm text-text-primary"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-status-error">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div>
          <label className="text-sm text-text-secondary">
            {copy.forms.contact.fields.email.label}
          </label>
          <input
            {...register("email")}
            placeholder={copy.forms.contact.fields.email.placeholder}
            className="focus-ring mt-2 w-full rounded-xl border border-bg-tertiary bg-bg-primary px-4 py-3 text-sm text-text-primary"
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-status-error">
              {errors.email.message}
            </p>
          ) : null}
        </div>
        <div>
          <label className="text-sm text-text-secondary">
            {copy.forms.contact.fields.message.label}
          </label>
          <textarea
            {...register("message")}
            placeholder={copy.forms.contact.fields.message.placeholder}
            className="focus-ring mt-2 w-full rounded-xl border border-bg-tertiary bg-bg-primary px-4 py-3 text-sm text-text-primary"
            rows={4}
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-status-error">
              {errors.message.message}
            </p>
          ) : null}
        </div>
        <div className="hidden">
          <label>{copy.forms.contact.honeypot.label}</label>
          <input
            {...register("website")}
            placeholder={copy.forms.contact.honeypot.placeholder}
          />
        </div>
        <Button type="submit" className="w-full" ariaLabel={copy.forms.contact.submit}>
          {isSubmitting ? copy.forms.loading : copy.forms.contact.submit}
        </Button>
      </form>
      {toast ? (
        <Toast
          title={toast.title}
          message={toast.message}
          variant={toast.variant}
          onClose={() => setToast(null)}
        />
      ) : null}
    </div>
  );
};
