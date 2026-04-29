"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string | string[];
  classNames?: {
    ul: string;
  };
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  classNames,
}: ResumeCardProps) => {
  return (
    <div className="block">
      <Card className="flex">
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <div className="flex-none">
                <Link href={href || "#"} className="cursor-pointer">
                  <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
                    <AvatarImage
                      src={logoUrl}
                      alt={altText}
                      className="object-contain"
                    />
                    <AvatarFallback>{altText[0]}</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
              <div className="flex-grow flex-col">
                <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                  <Link href={href || "#"} className="cursor-pointer">
                    {title}
                  </Link>
                  {badges && (
                    <span className="inline-flex gap-x-1">
                      {badges.map((badge, index) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={index}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  )}
                </h3>
                {subtitle && (
                  <div className="font-sans text-xs">{subtitle}</div>
                )}
                <div className="lg:hidden text-xs tabular-nums text-muted-foreground ">
                  {period}
                </div>
              </div>
              <div className="hidden lg:block text-xs tabular-nums text-muted-foreground ">
                {period}
              </div>
            </div>
          </CardHeader>

          {description && (
            <motion.div
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm lg:ml-[3.5rem]"
            >
              {Array.isArray(description) ? (
                <ul className={cn("list-disc pl-4", classNames?.ul)}>
                  {description.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              ) : (
                description
              )}
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
