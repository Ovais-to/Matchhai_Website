"use client";

import { Component, ReactNode } from "react";
import { copy } from "@/lib/copy";
import Link from "next/link";
import { routes } from "@/lib/routes";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="section">
          <div className="container text-center">
            <h1 className="text-2xl font-semibold text-text-primary">
              {copy.errors.boundaryTitle}
            </h1>
            <p className="mt-2 text-sm text-text-secondary">
              {copy.errors.boundaryMessage}
            </p>
            <Link
              href={routes.home}
              className="focus-ring mt-6 inline-flex items-center justify-center rounded-full border border-border px-5 py-2 text-sm text-text-primary"
            >
              {copy.errors.backHome}
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
