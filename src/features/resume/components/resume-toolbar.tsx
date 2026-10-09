import { Download, ExternalLink, RotateCw, ZoomIn, ZoomOut } from "lucide-react";

interface ResumeToolbarProps {
  fileName: string;
  zoom: number;
  downloadUrl: string;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onRotate: () => void;
}

const iconButton = "text-content-muted hover:text-content p-1 transition-colors disabled:opacity-40";

export function ResumeToolbar({ fileName, zoom, downloadUrl, onZoomIn, onZoomOut, onRotate }: ResumeToolbarProps) {
  return (
    <div className="flex items-center justify-between gap-3 border-b px-3 py-2">
      <span className="text-content-muted truncate font-mono text-[11px]">{fileName}</span>
      <div className="flex items-center gap-1">
        <button type="button" onClick={onZoomOut} disabled={zoom <= 50} aria-label="Zoom out" className={iconButton}>
          <ZoomOut size={14} />
        </button>
        <span className="text-content-muted w-10 text-center font-mono text-[11px] tabular-nums">{zoom}%</span>
        <button type="button" onClick={onZoomIn} disabled={zoom >= 200} aria-label="Zoom in" className={iconButton}>
          <ZoomIn size={14} />
        </button>
        <span className="bg-line mx-1 h-4 w-px" aria-hidden="true" />
        <button type="button" onClick={onRotate} aria-label="Rotate" className={iconButton}>
          <RotateCw size={14} />
        </button>
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer" aria-label="Open in new tab" className={iconButton}>
          <ExternalLink size={14} />
        </a>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand text-brand-content ml-1 flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium"
        >
          <Download size={12} aria-hidden="true" /> Download
        </a>
      </div>
    </div>
  );
}
