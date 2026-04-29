"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Linkedin } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type Recommendation = {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl?: string;
  relation?: string;
  recommendation: string;
};

type RecommendationsSectionProps = {
  recommendations: readonly Recommendation[];
};

const DEFAULT_VISIBLE_COUNT = 3;

function formatRecommendationText(content: string) {
  const normalized = content.replace(/\r\n/g, "\n");
  const lines = normalized.split("\n");
  const nonEmptyLines = lines.filter((line) => line.trim().length > 0);

  if (nonEmptyLines.length === 0) {
    return "";
  }

  const sharedIndent = Math.min(
    ...nonEmptyLines.map((line) => line.match(/^(\s*)/)?.[0].length ?? 0),
  );

  return lines
    .map((line) => line.slice(sharedIndent).trimEnd())
    .join("\n")
    .trim();
}

export function RecommendationsSection({
  recommendations,
}: RecommendationsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const visibleRecommendations = useMemo(
    () =>
      showAll
        ? recommendations
        : recommendations.slice(0, DEFAULT_VISIBLE_COUNT),
    [recommendations, showAll],
  );

  const toggleExpanded = (index: number) => {
    setExpandedItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  };

  return (
    <section id="recommendations" className="space-y-4">
      <div className="space-y-1">
        <h2 className="text-xl font-bold"> LinkedIn Recommendations</h2>
        <p className="text-sm text-muted-foreground">
          Feedback from people I&apos;ve worked with across teams and roles.
        </p>
      </div>

      <div className="grid gap-3">
        {visibleRecommendations.map((item, index) => {
          const isExpanded = expandedItems.includes(index);

          return (
            <Card
              key={`${item.name}-${item.recommendation.slice(0, 30)}`}
              className="border border-border/60 bg-card/70 transition-colors hover:border-border"
            >
              <button
                type="button"
                onClick={() => toggleExpanded(index)}
                className="w-full text-left"
                aria-expanded={isExpanded}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="size-12 border">
                            <AvatarImage src={item.imageUrl} alt={item.name} />
                            <AvatarFallback>
                              {item.name
                                .split(" ")
                                .map((part) => part[0])
                                .join("")
                                .slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              {item.linkedinUrl && (
                                <Link
                                  href={item.linkedinUrl}
                                  onClick={(event) => event.stopPropagation()}
                                  className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1"
                                  aria-label={`${item.name} LinkedIn profile`}
                                >
                                  <p className="truncate font-semibold text-foreground">
                                    {item.name}
                                  </p>
                                  <Linkedin className="size-4 text-blue-500" />
                                </Link>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.role}
                            </p>
                            {item.relation && (
                              <p className="mt-1 text-xs text-muted-foreground/90">
                                {item.relation}
                              </p>
                            )}
                          </div>
                        </div>

                        <div
                          className={cn(
                            "inline-flex items-center gap-1 text-xs font-medium text-muted-foreground self-end",
                          )}
                        >
                          <span>
                            {isExpanded ? "Hide feedback" : "Read feedback"}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="size-4" />
                          ) : (
                            <ChevronDown className="size-4" />
                          )}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-4 border-t border-border/60 pt-4">
                          <p className="whitespace-pre-line text-sm leading-6 lg:ml-[3.8rem] text-muted-foreground">
                            " {formatRecommendationText(item.recommendation)} "
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </button>
            </Card>
          );
        })}
      </div>

      {recommendations.length > DEFAULT_VISIBLE_COUNT && (
        <Button
          type="button"
          variant="outline"
          onClick={() => setShowAll((current) => !current)}
          className="w-full sm:w-auto"
        >
          {showAll
            ? "Show less"
            : `Show more (${recommendations.length - DEFAULT_VISIBLE_COUNT} more)`}
        </Button>
      )}
    </section>
  );
}
