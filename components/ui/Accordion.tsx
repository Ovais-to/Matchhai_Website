"use client";

import { useState } from "react";

type Item = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: Item[];
  toggleLabels: {
    open: string;
    closed: string;
  };
};

export const Accordion = ({ items, toggleLabels }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-2xl border border-border bg-bg-secondary"
          >
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between px-5 py-4 text-left text-base text-text-primary"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <span className="text-text-muted">
                {isOpen ? toggleLabels.open : toggleLabels.closed}
              </span>
            </button>
            {isOpen ? (
              <div className="px-5 pb-4 text-sm text-text-secondary">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
