"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Field = "name" | "street" | "zip" | "phone" | "email" | "message";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    street: "",
    zip: "",
    phone: "",
    email: "",
    message: "",
  });

  function set(f: Field, v: string) {
    setValues((s) => ({ ...s, [f]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const body = encodeURIComponent(
      `Name: ${values.name}\nStraße: ${values.street}\nPLZ/Ort: ${values.zip}\nTelefon: ${values.phone}\nE-Mail: ${values.email}\n\nNachricht:\n${values.message}`,
    );
    const href = `mailto:immobilien-jost@gmx.de?subject=${encodeURIComponent(
      "Anfrage über immobilien-jost.de",
    )}&body=${body}`;
    window.location.href = href;
    setTimeout(() => setState("done"), 400);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-white p-8 shadow-soft md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Input label="Name*" value={values.name} onChange={(v) => set("name", v)} required />
        <Input label="Telefon*" value={values.phone} onChange={(v) => set("phone", v)} required />
        <Input label="Straße / Hausnummer" value={values.street} onChange={(v) => set("street", v)} />
        <Input label="PLZ / Ort" value={values.zip} onChange={(v) => set("zip", v)} />
        <div className="md:col-span-2">
          <Input
            label="E-Mail*"
            type="email"
            value={values.email}
            onChange={(v) => set("email", v)}
            required
          />
        </div>
        <div className="md:col-span-2">
          <Textarea
            label="Ihre Nachricht*"
            value={values.message}
            onChange={(v) => set("message", v)}
            required
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 text-[12px] text-muted md:flex-row md:items-center">
        <span>Es gilt unsere Datenschutzerklärung. Felder mit * sind Pflichtangaben.</span>
        <button type="submit" className="btn-gold">
          Nachricht senden
          <svg width="14" height="14" viewBox="0 0 12 12" aria-hidden>
            <path
              d="M2 6h8m0 0L7 3m3 3L7 9"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {state === "done" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="mt-6 rounded-xl border border-gold/40 bg-gold/10 px-5 py-3 text-[13px] text-ink"
          >
            Ihr E-Mail-Programm sollte sich geöffnet haben. Falls nicht,
            schreiben Sie uns bitte direkt an{" "}
            <a href="mailto:immobilien-jost@gmx.de" className="underline">
              immobilien-jost@gmx.de
            </a>
            .
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="group flex flex-col gap-2">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-line bg-white px-4 py-3 text-[14px] text-ink transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <textarea
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        className="rounded-xl border border-line bg-white px-4 py-3 text-[14px] text-ink transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25"
      />
    </label>
  );
}
