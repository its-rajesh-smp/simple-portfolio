import { HoverTooltip } from "@/components/ui/hover-tooltip";
import { FRIENDS } from "@/data/portfolio";
import Image from "next/image";

export function FriendsList() {
  return (
    <div>
      <p className="text-content-muted text-[10px]">some cool friends i am lucky to know</p>
      <ul className="mt-1 flex gap-2">
        {FRIENDS.map((friend) => (
          <li key={friend.name} className="group relative">
            <a href={friend.href} target="_blank" rel="noopener noreferrer" aria-label={friend.name} className="block size-7 overflow-hidden rounded-[5px]">
              <Image
                src={friend.image}
                alt={friend.name}
                width={28}
                height={28}
                unoptimized
                className="outline-image-outline h-full w-full rounded-[5px] object-contain opacity-80 outline -outline-offset-1 transition-opacity duration-150 ease-out group-hover:opacity-100"
              />
            </a>
            <HoverTooltip className="-top-9 px-2 py-1 text-[10px] font-medium capitalize">{friend.name}</HoverTooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}
