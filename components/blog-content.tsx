"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";
import { useState } from "react";

interface BlogContentProps {
  content: string;
  tags?: string[];
}

export default function BlogContent({ content, tags }: BlogContentProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = async (code: string, language: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(language);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="prose prose-invert prose-sm max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "");
            const codeString = String(children).replace(/\n$/, "");
            
            return !inline && match ? (
              <div className="relative group my-4">
                <div className="absolute right-2 top-2 z-10">
                  <button
                    onClick={() => handleCopyCode(codeString, match[1])}
                    className="px-2 py-1 text-xs bg-neutral-700 hover:bg-neutral-600 text-neutral-300 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Copy code"
                  >
                    {copiedCode === match[1] ? "Copied!" : "Copy"}
                  </button>
                </div>
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                  }}
                  {...props}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="px-1.5 py-0.5 bg-neutral-800 text-neutral-300 rounded text-xs" {...props}>
                {children}
              </code>
            );
          },
          h1: ({ children }) => (
            <h1 className="text-xl font-semibold mt-8 mb-4 text-neutral-100 scroll-mt-20">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-semibold mt-6 mb-3 text-neutral-100 scroll-mt-20">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-semibold mt-4 mb-2 text-neutral-200 scroll-mt-20">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside ml-4 mb-4 text-sm text-neutral-300 space-y-2">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside ml-4 mb-4 text-sm text-neutral-300 space-y-2">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-sm text-neutral-300 pl-1">{children}</li>
          ),
          a: ({ href, children }) => {
            const isInternal = href?.startsWith("/") || href?.startsWith("#");
            if (isInternal) {
              return (
                <Link
                  href={href || "#"}
                  className="text-neutral-200 hover:text-neutral-100 underline underline-offset-2 transition-colors"
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                className="text-neutral-200 hover:text-neutral-100 underline underline-offset-2 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            );
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-neutral-700 pl-4 italic text-neutral-400 my-4 py-2">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-neutral-100">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-neutral-300">{children}</em>
          ),
          hr: () => (
            <hr className="border-neutral-800 my-8" />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-neutral-800">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-neutral-900">{children}</thead>
          ),
          tbody: ({ children }) => (
            <tbody className="divide-y divide-neutral-800">{children}</tbody>
          ),
          tr: ({ children }) => (
            <tr className="hover:bg-neutral-900/50 transition-colors">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="px-3 py-2 text-left text-xs font-semibold text-neutral-300">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 text-sm text-neutral-400">{children}</td>
          ),
          pre: ({ children }) => <div>{children}</div>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
