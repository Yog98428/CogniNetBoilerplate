"use client";

import { useMemo, useState } from "react";
import { scoreDraft } from "@/lib/ai-scores";
import { AiScoreBadge } from "@/components/app/AiScoreBadge";
import { Button } from "@/components/ui/Button";

export function ComposeForm({ author }) {
  const [body, setBody] = useState("");
  const [published, setPublished] = useState(null);
  const preview = useMemo(() => scoreDraft(body), [body]);

  function onPublish(e) {
    e.preventDefault();
    if (!body.trim()) return;
    setPublished({
      body: body.trim(),
      ai: preview,
      at: new Date().toLocaleTimeString(),
    });
    setBody("");
  }

  return (
    <div className="space-y-8">
      <form onSubmit={onPublish} className="space-y-4">
        <label className="block">
          <span className="text-xs uppercase tracking-wider text-ink-soft">Draft as {author}</span>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={7}
            placeholder="Share signal, not noise…"
            className="mt-2 w-full resize-y rounded-2xl border border-line bg-white/70 px-4 py-3 text-base leading-relaxed text-ink outline-none ring-signal/30 transition focus:ring-2"
          />
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit">Publish locally</Button>
          <p className="text-sm text-ink-soft">Mock publish only — no network, no chain.</p>
        </div>
      </form>

      <section className="rounded-3xl border border-line bg-white/55 p-5 backdrop-blur">
        <h2 className="font-display text-xl text-ink">Live AI preview</h2>
        <AiScoreBadge ai={preview} />
      </section>

      {published && (
        <section className="animate-rise rounded-3xl border border-signal/30 bg-mist/80 p-5">
          <p className="text-xs uppercase tracking-wider text-signal">Published stub · {published.at}</p>
          <p className="mt-3 text-ink">{published.body}</p>
          <AiScoreBadge ai={published.ai} />
        </section>
      )}
    </div>
  );
}
