import { company, contact } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#clients", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <span className="font-display text-xl font-semibold text-bone">
              QUAISE
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {company.tagline}. A subsidiary network company within the
              Zaina Group family of companies.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-gold">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wide text-gold">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>{contact.address}</li>
              <li>{contact.email}</li>
              <li>{contact.website}</li>
              <li>{company.rcNumber}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>Designed &amp; built for sustainable growth.</span>
        </div>
      </div>
    </footer>
  );
}
