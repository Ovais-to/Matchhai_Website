"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { copy } from "@/lib/copy";
import { submitZoneInterest } from "@/lib/apiClient";
import { Toast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  zoneName: z.string().min(1, copy.forms.validation.required),
  city: z.string().min(1, copy.forms.validation.required),
  contactName: z.string().min(1, copy.forms.validation.required),
  phone: z.string().min(1, copy.forms.validation.required),
  email: z
    .string()
    .min(1, copy.forms.validation.required)
    .email(copy.forms.validation.email),
  games: z.string().min(1, copy.forms.validation.required),
  website: z.string().optional()
});

type FormValues = z.infer<typeof schema>;

export const ZoneInterestForm = () => {
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
    const { ok } = await submitZoneInterest(values);
    if (ok) {
      setToast({
        title: copy.forms.zoneInterest.success.title,
        message: copy.forms.zoneInterest.success.message,
        variant: "success"
      });
      reset();
      return;
    }
    setToast({
      title: copy.forms.zoneInterest.error.title,
      message: copy.forms.zoneInterest.error.message,
      variant: "error"
    });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm text-text-secondary">
              {copy.forms.zoneInterest.fields.zoneName.label}
            </label>
            <input
              {...register("zoneName")}
              placeholder={copy.forms.zoneInterest.fields.zoneName.placeholder}
              className="focus-ring mt-2 w-full rounded-xl border border-bg-tertiary bg-bg-primary px-4 py-3 text-sm text-text-primary"
            />
            {errors.zoneName ? (
              <p className="mt-1 text-xs text-status-error">
                {errors.zoneName.message}
              </p>
            ) : null}
          </div>
          <div>
            <label className="text-sm text-text-secondary">
              {copy.forms.zoneInterest.fields.city.label}
            </label>
            <input
              {...register("city")}
              placeholder={copy.forms.zoneInterest.fields.city.placeholder}
              className="focus-ring mt-2 w-full rounded-xl border border-bg-tertiary bg-bg-primary px-4 py-3 text-sm text-text-primary"
            />
            {errors.city ? (
              <p className="mt-1 text-xs text-status-error">
                {errors.city.message}
              </p>
            ) : null}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm text-text-secondary">
              {copy.forms.zoneInterest.fields.contactName.label}
            </label>
            <input
              {...register("contactName")}
              placeholder={copy.forms.zoneInterest.fields.contactName.placeholder}
              className="focus-ring mt-2 w-full rounded-xl border border-bg-tertiary bg-bg-primary px-4 py-3 text-sm text-text-primary"
            />
            {errors.contactName ? (
              <p className="mt-1 text-xs text-status-error">
                {errors.contactName.message}
              </p>
            ) : null}
          </div>
          <div>
            <label className="text-sm text-text-secondary">
              {copy.forms.zoneInterest.fields.phone.label}
            </label>
            <input
              {...register("phone")}
              placeholder={copy.forms.zoneInterest.fields.phone.placeholder}
              className="focus-ring mt-2 w-full rounded-xl border border-bg-tertiary bg-bg-primary px-4 py-3 text-sm text-text-primary"
            />
            {errors.phone ? (
              <p className="mt-1 text-xs text-status-error">
                {errors.phone.message}
              </p>
            ) : null}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm text-text-secondary">
              {copy.forms.zoneInterest.fields.email.label}
            </label>
            <input
              {...register("email")}
              placeholder={copy.forms.zoneInterest.fields.email.placeholder}
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
              {copy.forms.zoneInterest.fields.games.label}
            </label>
            <input
              {...register("games")}
              placeholder={copy.forms.zoneInterest.fields.games.placeholder}
              className="focus-ring mt-2 w-full rounded-xl border border-bg-tertiary bg-bg-primary px-4 py-3 text-sm text-text-primary"
            />
            {errors.games ? (
              <p className="mt-1 text-xs text-status-error">
                {errors.games.message}
              </p>
            ) : null}
          </div>
        </div>
        <div className="hidden">
          <label>{copy.forms.zoneInterest.honeypot.label}</label>
          <input
            {...register("website")}
            placeholder={copy.forms.zoneInterest.honeypot.placeholder}
          />
        </div>
        <Button type="submit" className="w-full" ariaLabel={copy.forms.zoneInterest.submit}>
          {isSubmitting ? copy.forms.loading : copy.forms.zoneInterest.submit}
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
