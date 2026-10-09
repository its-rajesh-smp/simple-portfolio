import { SOCIAL_ICONS } from "@/components/icons/social-icons";
import { SOCIALS } from "@/data/portfolio";
import Image from "next/image";

/** Social icons; entries with a `preview` show a screenshot card on hover (md+). */
export function SocialLinks() {
  return (
    <ul className="mt-8 flex gap-2 font-bold">
      {SOCIALS.map((social) => {
        const Icon = SOCIAL_ICONS[social.kind];
        const external = social.kind !== "email";
        return (
          <li key={social.kind} className="group relative">
            {social.preview && (
              <div className="pointer-events-none absolute bottom-10 z-30 hidden w-[300px] translate-y-1 opacity-0 transition-[opacity,translate] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 md:block">
                <div className="border-line-strong/90 w-fit overflow-hidden rounded-3xl border-2">
                  <Image src={social.preview} alt="" width={300} height={170} unoptimized className="rounded-2xl" />
                </div>
              </div>
            )}
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
