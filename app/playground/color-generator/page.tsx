"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import CodeBlock from "@/components/code-block";

function randomHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

export default function ColorGenerator() {
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchColorFromApi(format = "hex") {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/playground/color-generator/get?format=${encodeURIComponent(format)}&count=1`, { cache: "no-store" });
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const c = data.color ?? (Array.isArray(data.colors) ? data.colors[0] : undefined);
      if (c) setColor(c);
    } catch (e) {
      console.error(e);
      setError("Failed to fetch.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // initial load from API
    fetchColorFromApi();
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.error(e);
      setError("Copy failed");
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen px-4">
      <article className="max-w-lg w-full">
        <Header />

        <div className="mt-4">
          <h1 className="text-2xl font-semibold mb-3">Color Generator</h1>
          <p className="text-sm text-neutral-400 mb-4">Generate random colors from the API and copy their values.</p>

          <div className="rounded-lg overflow-hidden border border-neutral-800">
            <div className="h-40 flex items-center justify-center" style={{ background: color || undefined }}>
              <div className="bg-black/25 px-3 py-1 rounded text-white text-sm">{loading ? "Loading…" : color}</div>
            </div>

            <div className="p-4 flex items-center gap-3 flex-wrap">
              <button
                className="px-3 py-1 text-sm bg-neutral-800 hover:bg-neutral-700 rounded"
                onClick={() => fetchColorFromApi("hex")}
                disabled={loading}
              >
                {loading ? "…" : "Random Hex"}
              </button>

              <button
                className="px-3 py-1 text-sm bg-neutral-800 hover:bg-neutral-700 rounded"
                onClick={() => fetchColorFromApi("rgb")}
                disabled={loading}
              >
                {loading ? "…" : "Random RGB"}
              </button>

              <button className="px-3 py-1 text-sm bg-neutral-800 hover:bg-neutral-700 rounded" onClick={copy}>
                {copied ? "Copied" : "Copy"}
              </button>

              <input
                className="ml-2 bg-neutral-900 border border-neutral-800 px-2 py-1 rounded text-sm max-w-xs w-35"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />

              {error && <div className="text-xs text-red-500 ml-2">{error}</div>}
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-sm font-medium mb-2 text-neutral-100">API Example</h2>
            <CodeBlock code={`// Fetch a single hex color
fetch('/playground/color-generator/get?format=hex&count=1')
  .then(r => r.json())
  .then(data => console.log(data.color || data.colors[0]));`} language="js" />
          </div>
        </div>
      </article>
    </div>
  );
}
