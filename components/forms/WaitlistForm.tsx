"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { copy } from "@/lib/copy";
import { submitWaitlist } from "@/lib/apiClient";
import { Toast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(1, copy.forms.validation.required),
  email: z
    .string()
    .min(1, copy.forms.validation.required)
    .email(copy.forms.validation.email),
  city: z.string().min(1, copy.forms.validation.required),
  website: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export const WaitlistForm = () => {
  const fieldIds = {
    name: "waitlist-name",
    email: "waitlist-email",
    city: "waitlist-city",
    website: "waitlist-website"
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
    const { ok } = await submitWaitlist(values);
    if (ok) {
      setToast({
        title: copy.forms.waitlist.success.title,
        message: copy.forms.waitlist.success.message,
        variant: "success"
      });
      reset();
      return;
    }
    setToast({
      title: copy.forms.waitlist.error.title,
      message: copy.forms.waitlist.error.message,
      variant: "error"
    });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor={fieldIds.name} className="label">
            {copy.forms.waitlist.fields.name.label}
          </label>
          <input
            {...register("name")}
            id={fieldIds.name}
            placeholder={copy.forms.waitlist.fields.name.placeholder}
            className="input"
          />
          {errors.name ? (
            <p className="error-text">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor={fieldIds.email} className="label">
            {copy.forms.waitlist.fields.email.label}
          </label>
          <input
            {...register("email")}
            id={fieldIds.email}
            placeholder={copy.forms.waitlist.fields.email.placeholder}
            className="input"
          />
          {errors.email ? (
            <p className="error-text">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor={fieldIds.city} className="label">
            {copy.forms.waitlist.fields.city.label}
          </label>
          <input
            {...register("city")}
            id={fieldIds.city}
            placeholder={copy.forms.waitlist.fields.city.placeholder}
            className="input"
          />
          {errors.city ? (
            <p className="error-text">{errors.city.message}</p>
          ) : null}
        </div>
        <div className="hidden">
          <label htmlFor={fieldIds.website}>{copy.forms.waitlist.honeypot.label}</label>
          <input
            {...register("website")}
            id={fieldIds.website}
            placeholder={copy.forms.waitlist.honeypot.placeholder}
          />
        </div>
        <Button type="submit" className="w-full" ariaLabel={copy.forms.waitlist.submit}>
          {isSubmitting ? copy.forms.loading : copy.forms.waitlist.submit}
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
