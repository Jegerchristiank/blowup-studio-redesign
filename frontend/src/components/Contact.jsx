import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { links, topics } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const inputCls =
  "w-full bg-ink border border-line focus:border-signal outline-none px-4 py-3 text-bone placeholder:text-ash/60 transition-colors";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="overline text-ash block mb-2">{label}</span>
      {children}
    </label>
  );
}

export default function Contact() {
  const empty = { name: "", email: "", phone: "", topic: topics[0], message: "" };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle");
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("fejl");
      setStatus("success");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="kontakt"
      className="relative py-24 md:py-32 border-t border-line"
      data-testid="contact"
    >
      <div className="max-w-shell mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <Reveal className="overline text-signal mb-4">Kontakt</Reveal>
          <Reveal
            as="h2"
            delay={0.05}
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.98]"
          >
            Skriv til studiet.
          </Reveal>
          <Reveal delay={0.1} className="mt-6 text-ash text-lg max-w-md leading-relaxed">
            Har du et projekt, et spørgsmål eller vil du bare høre mere? Send en
            besked, så vender Patrick tilbage.
          </Reveal>
          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${links.email}`}
              className="flex items-center gap-4 group"
              data-testid="contact-email-link"
            >
              <span className="h-11 w-11 border border-line flex items-center justify-center text-signal group-hover:border-lineStrong transition-colors">
                <Mail size={18} />
              </span>
              <span className="text-bone/90 group-hover:text-bone">{links.email}</span>
            </a>
            <div className="flex items-center gap-4">
              <span className="h-11 w-11 border border-line flex items-center justify-center text-signal">
                <MapPin size={18} />
              </span>
              <span className="text-bone/90">{links.address}</span>
            </div>
          </div>
          <div className="mt-8 border border-line overflow-hidden h-56">
            <iframe
              title="Kort over BLOWUP studio"
              src={links.maps}
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            className="border border-line bg-surface p-7 md:p-9 space-y-5"
            data-testid="contact-form"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Navn">
                <input
                  required
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  className={inputCls}
                  placeholder="Dit navn"
                  data-testid="contact-name-input"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputCls}
                  placeholder="dig@email.dk"
                  data-testid="contact-email-input"
                />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Telefon (valgfri)">
                <input
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={inputCls}
                  placeholder="+45"
                  data-testid="contact-phone-input"
                />
              </Field>
              <Field label="Emne">
                <select
                  value={form.topic}
                  onChange={(e) => set("topic", e.target.value)}
                  className={inputCls}
                  data-testid="contact-topic-select"
                >
                  {topics.map((t) => (
                    <option key={t} className="bg-surface">
                      {t}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Besked">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                className={`${inputCls} resize-none`}
                placeholder="Fortæl om dit projekt..."
                data-testid="contact-message-input"
              />
            </Field>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2 bg-signal hover:bg-signalDeep disabled:opacity-60 text-white font-mono text-sm uppercase tracking-wider px-6 py-4 transition-colors"
              data-testid="contact-submit"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sender...
                </>
              ) : (
                <>
                  <Send size={16} /> Send besked
                </>
              )}
            </button>
            {status === "success" && (
              <p
                className="flex items-center gap-2 text-sm text-emerald-400"
                data-testid="contact-success"
              >
                <CheckCircle2 size={16} /> Tak! Din besked er sendt — vi vender
                tilbage hurtigst muligt.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-signal" data-testid="contact-error">
                Noget gik galt. Prøv igen eller skriv til os på mail.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
