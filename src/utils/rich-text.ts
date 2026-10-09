export interface TextSegment {
  text: string;
  bold: boolean;
}

/** Splits a string with **bold** markers into segments. */
export const parseBold = (value: string): TextSegment[] =>
  value
    .split(/(\*\*[^*]+\*\*)/g)
    .filter(Boolean)
    .map((part) =>
      part.startsWith("**") && part.endsWith("**") ? { text: part.slice(2, -2), bold: true } : { text: part, bold: false },
    );
