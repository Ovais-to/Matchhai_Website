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
  const fieldIds = {
    name: "contact-name",
    email: "contact-email",
    message: "contact-message",
    website: "contact-website"
  };
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
          <label htmlFor={fieldIds.name} className="label">
            {copy.forms.contact.fields.name.label}
          </label>
          <input
            {...register("name")}
            id={fieldIds.name}
            placeholder={copy.forms.contact.fields.name.placeholder}
            className="input"
          />
          {errors.name ? (
            <p className="error-text">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor={fieldIds.email} className="label">
            {copy.forms.contact.fields.email.label}
          </label>
          <input
            {...register("email")}
            id={fieldIds.email}
            placeholder={copy.forms.contact.fields.email.placeholder}
            className="input"
          />
          {errors.email ? (
            <p className="error-text">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor={fieldIds.message} className="label">
            {copy.forms.contact.fields.message.label}
          </label>
          <textarea
            {...register("message")}
            id={fieldIds.message}
            placeholder={copy.forms.contact.fields.message.placeholder}
            className="input"
            rows={4}
          />
          {errors.message ? (
            <p className="error-text">{errors.message.message}</p>
          ) : null}
        </div>
        <div className="hidden">
          <label htmlFor={fieldIds.website}>{copy.forms.contact.honeypot.label}</label>
          <input
            {...register("website")}
            id={fieldIds.website}
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
