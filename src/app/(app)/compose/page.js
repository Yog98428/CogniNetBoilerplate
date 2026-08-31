"use client";

import { useEffect, useState } from "react";
import { ComposeForm } from "@/components/app/ComposeForm";
import { ensureIdentity } from "@/lib/identity";

export default function ComposePage() {
  const [author, setAuthor] = useState("…");

  useEffect(() => {
    setAuthor(ensureIdentity().username);
  }, []);

  return (
    <div className="max-w-2xl">
      <p className="text-xs uppercase tracking-wider text-signal">Phase 1 · Creator tools</p>
      <h1 className="mt-1 font-display text-4xl text-ink">Compose</h1>
      <p className="mt-2 text-ink-soft">
        Draft locally and preview AI quality / originality / bot-risk before a mock publish.
      </p>
      <div className="mt-8">
        <ComposeForm author={author} />
      </div>
    </div>
  );
}
