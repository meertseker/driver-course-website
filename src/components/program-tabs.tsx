"use client";

import Link from "next/link";
import { useState } from "react";

type Program = {
  id: string;
  name: string;
  summary: string;
  badge?: string;
  duration: string;
  price: string;
  features: string[];
  href: string;
  cta: string;
};

interface ProgramTabsProps {
  programs: Program[];
}

export function ProgramTabs({ programs }: ProgramTabsProps) {
  const [activeProgram, setActiveProgram] = useState(
    programs[0]?.id ?? ""
  );

  const selected = programs.find((program) => program.id === activeProgram);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
      <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
        {programs.map((program) => {
          const isActive = program.id === activeProgram;
          return (
            <button
              key={program.id}
              type="button"
              onClick={() => setActiveProgram(program.id)}
              className={`relative flex min-w-[200px] flex-1 flex-col items-start gap-2 rounded-3xl border px-6 py-5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                isActive
                  ? "border-transparent bg-gradient-to-br from-primary to-blue-500 text-primary-foreground shadow-[0_20px_50px_rgba(79,158,248,0.35)]"
                  : "border-2 border-border bg-card text-foreground hover:border-primary hover:text-primary"
              }`}
              aria-pressed={isActive}
            >
              {program.badge ? (
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] ${
                    isActive
                      ? "bg-white/15 text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {program.badge}
                </span>
              ) : null}
              <span className="text-base font-semibold leading-tight">
                {program.name}
              </span>
              <span
                className={`text-xs leading-relaxed ${
                  isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {program.summary}
              </span>
            </button>
          );
        })}
      </div>

      {selected ? (
        <div className="flex-1 rounded-[32px] border border-border/60 bg-white/80 backdrop-blur-md p-10 shadow-[0_30px_85px_rgba(79,158,248,0.15)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Program Özeti
              </p>
              <h3 className="text-2xl font-bold text-foreground">
                {selected.name}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {selected.summary}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 text-right">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {selected.duration}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {selected.price}
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {selected.features.map((feature) => (
              <div
                key={feature}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]"
              >
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                <div className="relative flex flex-col gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-success/10 text-sm font-semibold text-success">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Program hakkında detaylı bilgi ve kişiye özel ödeme planı için danışmanlarımızla iletişime geçin.
            </p>
            <Link
              href={selected.href}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_18px_40px_rgba(79,158,248,0.3)] transition hover:shadow-[0_20px_45px_rgba(79,158,248,0.4)]"
            >
              {selected.cta}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

