import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-name">
              Valerii Kovalenko<span>.</span>
            </Link>
            <p>Quality Engineering. Practical AI. Stronger teams.</p>
          </div>
          <div className="footer-links">
            {[
              ["LinkedIn", site.linkedin],
              ["GitHub", site.github],
              ["Telegram", site.telegram],
            ].map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Valerii Kovalenko</span>
          <span>Personal website. Views and consultations are my own.</span>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
