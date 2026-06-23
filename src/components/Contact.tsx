"use client";

import { useState } from "react";
import { Mail, MapPin, Globe, Send } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { contact } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something lasting together"
          description="Reach out for partnership, procurement, or project enquiries — our team responds within one business day."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal className="space-y-6">
            <div className="rounded-3xl border border-line bg-surface/50 p-2 overflow-hidden h-64">
              <iframe
                title="Quaise Nigeria Limited location"
                className="h-full w-full rounded-[1.25rem] grayscale invert-[0.92] contrast-[1.1]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  contact.mapQuery
                )}&z=13&output=embed`}
              />
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface/50 p-5">
              <MapPin className="mt-0.5 shrink-0 text-gold" size={20} />
              <div>
                <div className="text-sm font-medium text-bone">Office</div>
                <div className="mt-1 text-sm text-muted">{contact.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface/50 p-5">
              <Mail className="mt-0.5 shrink-0 text-gold" size={20} />
              <div>
                <div className="text-sm font-medium text-bone">Email</div>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 inline-block text-sm text-muted hover:text-gold"
                >
                  {contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface/50 p-5">
              <Globe className="mt-0.5 shrink-0 text-gold" size={20} />
              <div>
                <div className="text-sm font-medium text-bone">Website</div>
                <div className="mt-1 text-sm text-muted">{contact.website}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-3xl border border-line bg-surface/50 p-8 sm:p-10 flex flex-col gap-5"
            >
              <div>
                <label className="text-xs uppercase tracking-wide text-muted">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-line bg-ink-soft px-4 py-3 text-sm text-bone outline-none focus:border-gold/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wide text-muted">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-line bg-ink-soft px-4 py-3 text-sm text-bone outline-none focus:border-gold/60"
                  placeholder="you@email.com"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs uppercase tracking-wide text-muted">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-ink-soft px-4 py-3 text-sm text-bone outline-none focus:border-gold/60"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
