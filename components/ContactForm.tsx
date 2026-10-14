"use client";

import { useRef, useState } from "react";
import { projectTypes, site } from "@/data/content";

// On Netlify, Netlify Forms receives submissions (turn on form detection in the Netlify dashboard).
// To use another service instead, such as Formspree, set NEXT_PUBLIC_FORM_ENDPOINT when building.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
const FORM_NAME = "contact";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message: string };

const field =
  "w-full min-w-0 rounded-lg border border-line bg-bg-alt px-3 py-2.5 text-base text-fg focus:border-accent focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-accent aria-[invalid=true]:border-orange-700";
const label = "grid gap-1.5 text-sm font-bold";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });
  const [invalid, setInvalid] = useState<string[]>([]);

  const compose = (d: FormData) =>
    [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      d.get("company") ? `Company: ${d.get("company")}` : null,
      `Need: ${d.get("project_type")}`,
      "",
      String(d.get("message")),
    ]
      .filter((l) => l !== null)
      .join("\n");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const bad = ["name", "email", "message"].filter((k) => {
      const v = String(data.get(k) ?? "").trim();
      return !v || (k === "email" && !/^\S+@\S+\.\S+$/.test(v));
    });
    setInvalid(bad);
    if (bad.length) {
      setStatus({ kind: "error", message: "Please fill in your name, a valid email, and a few details about the project." });
      form.current?.querySelector<HTMLElement>(`[name="${bad[0]}"]`)?.focus();
      return;
    }

    setStatus({ kind: "sending", message: "" });
    try {
      const res = FORM_ENDPOINT
        ? await fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
        : await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
          });
      if (!res.ok) throw new Error(String(res.status));
      form.current?.reset();
      setStatus({ kind: "sent", message: "Thanks, your message was sent. You’ll hear back soon." });
    } catch {
      setStatus({ kind: "error", message: `The message didn’t go through. Please try again, or email ${site.fallbackEmail}.` });
    }
  }

  async function copyMessage() {
    if (!form.current) return;
    try {
      await navigator.clipboard.writeText(compose(new FormData(form.current)));
      setStatus((s) => ({ ...s, message: s.message + " Your message is copied." }));
    } catch {
      /* clipboard blocked; the visitor can still copy from the form */
    }
  }

  const isInvalid = (k: string) => (invalid.includes(k) ? "true" : "false");

  return (
    <form
      ref={form}
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="_gotcha"
      onSubmit={onSubmit}
      noValidate
      className="grid gap-4 rounded-2xl bg-bg p-6 text-fg shadow-2xl"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={label}>
          Name
          <input name="name" type="text" autoComplete="name" required aria-invalid={isInvalid("name")} className={field} />
        </label>
        <label className={label}>
          Email
          <input name="email" type="email" autoComplete="email" required aria-invalid={isInvalid("email")} className={field} />
        </label>
      </div>
      <label className={label}>
        <span>
          Company <span className="font-medium text-muted">(optional)</span>
        </span>
        <input name="company" type="text" autoComplete="organization" className={field} />
      </label>
      <label className={label}>
        What do you need?
        <select name="project_type" className={field}>
          {projectTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className={label}>
        Project details
        <textarea
          name="message"
          rows={5}
          required
          aria-invalid={isInvalid("message")}
          placeholder="What are you building, and is there a deadline?"
          className={`${field} resize-y`}
        />
      </label>
      {/* Hidden field that only bots fill in; submissions with it are dropped */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="justify-self-start rounded-lg bg-orange px-6 py-3 font-bold text-white hover:brightness-105 disabled:cursor-wait disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-5 text-sm ${status.kind === "sent" ? "font-bold text-green-700" : status.kind === "idle" ? "" : "font-semibold text-orange-700"}`}
      >
        {status.message}
        {status.kind === "error" && invalid.length === 0 && (
          <button type="button" onClick={copyMessage} className="ml-1.5 font-bold text-accent underline">
            Copy my message
          </button>
        )}
      </p>
    </form>
  );
}
