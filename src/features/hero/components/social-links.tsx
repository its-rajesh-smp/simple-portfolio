import { SOCIAL_ICONS } from "@/components/icons/social-icons";
import { SOCIALS } from "@/data/portfolio";

/** Social icons. */
export function SocialLinks() {
  return (
    <ul className="mt-8 flex gap-2 font-bold">
      {SOCIALS.map((social) => {
        const Icon = SOCIAL_ICONS[social.kind];
        const external = social.kind !== "email";
        return (
          <li key={social.kind}>
            <a
              href={social.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer me" : undefined}
              className="flex items-center gap-2 opacity-60 transition-opacity hover:opacity-100"
            >
              <span className="size-6">
                <Icon className="size-6" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
