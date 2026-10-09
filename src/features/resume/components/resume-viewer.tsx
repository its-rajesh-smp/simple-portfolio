"use client";

import { RESUME } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import { useState } from "react";
import { ResumeToolbar } from "./resume-toolbar";

const ZOOM_STEP = 10;

// Literal class maps (Tailwind needs complete class names in source).
const ZOOM_CLASS: Record<number, string> = {
  50: "scale-50", 60: "scale-60", 70: "scale-70", 80: "scale-80", 90: "scale-90", 100: "scale-100",
  110: "scale-110", 120: "scale-120", 130: "scale-130", 140: "scale-140", 150: "scale-150",
  160: "scale-160", 170: "scale-170", 180: "scale-180", 190: "scale-190", 200: "scale-200",
};
const ROTATE_CLASS: Record<number, string> = { 0: "rotate-0", 90: "rotate-90", 180: "rotate-180", 270: "rotate-270" };

/** Inline PDF viewer with zoom/rotate. Falls back to a placeholder when no PDF url is set. */
export function ResumeViewer() {
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  return (
    <div className="bg-surface-subtle overflow-hidden rounded-lg border">
      <ResumeToolbar
        fileName={RESUME.fileName}
        zoom={zoom}
        downloadUrl={RESUME.pdfUrl || RESUME.externalUrl}
        onZoomIn={() => setZoom((value) => Math.min(200, value + ZOOM_STEP))}
        onZoomOut={() => setZoom((value) => Math.max(50, value - ZOOM_STEP))}
        onRotate={() => setRotation((value) => (value + 90) % 360)}
      />
      <div className="flex min-h-[70vh] justify-center overflow-auto p-4">
        <div className={cn("w-full max-w-[800px] origin-top transition-transform duration-200", ZOOM_CLASS[zoom], ROTATE_CLASS[rotation])}>
          {RESUME.pdfUrl ? (
            <iframe src={`${RESUME.pdfUrl}#toolbar=0`} title="Resume" className="h-[1100px] w-full rounded bg-white" />
          ) : (
            <div className="text-content-muted flex h-[60vh] w-full flex-col items-center justify-center gap-3 rounded border border-dashed text-sm">
              <FileText size={28} aria-hidden="true" />
              <p>Resume preview coming soon — use Download to view it.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
