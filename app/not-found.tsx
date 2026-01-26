import Link from "next/link";
import { copy } from "@/lib/copy";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container text-center">
        <h1 className="text-3xl font-semibold text-text-primary">
          {copy.errors.notFoundTitle}
        </h1>
        <p className="mt-3 text-text-secondary">
          {copy.errors.notFoundMessage}
        </p>
        <Link
          href={routes.home}
          className="focus-ring mt-6 inline-flex items-center justify-center rounded-full border border-bg-tertiary px-5 py-2 text-sm text-text-primary"
        >
          {copy.errors.backHome}
        </Link>
      </div>
    </section>
  );
}
