"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "text" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="relative rounded border border-neutral-800 bg-neutral-900">
      <div className="absolute right-2 top-2">
        <button
          onClick={handleCopy}
          className="text-xs px-2 py-1 bg-neutral-800 hover:bg-neutral-700 rounded"
          aria-live="polite"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre className="p-3 overflow-x-auto text-xs leading-snug rounded-t">
        <code>
          {code}
        </code>
      </pre>
    </div>
  );
}