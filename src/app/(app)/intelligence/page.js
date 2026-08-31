import { MOCK_INTELLIGENCE, MOCK_POSTS } from "@/lib/mock-data";
import { formatScore } from "@/lib/ai-scores";

export const metadata = {
  title: "Intelligence · CogniNet",
};

export default function IntelligencePage() {
  const ranked = [...MOCK_POSTS].sort((a, b) => b.ai.quality - a.ai.quality);

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs uppercase tracking-wider text-signal">Phase 1 · AI layer</p>
        <h1 className="mt-1 font-display text-4xl text-ink">Intelligence</h1>
        <p className="mt-2 max-w-2xl text-ink-soft">
          AI evaluates content and behavior — not real-world identity. These panels are UI stubs for
          the analysis surface described in the white paper.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {MOCK_INTELLIGENCE.map((item, index) => (
          <article
            key={item.id}
            className="animate-rise rounded-3xl border border-line bg-white/55 p-5 backdrop-blur"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <h2 className="font-display text-xl text-ink">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink">Quality ranking preview</h2>
        <ol className="mt-4 divide-y divide-line border-y border-line">
          {ranked.map((post, index) => (
            <li key={post.id} className="flex items-start justify-between gap-4 py-4">
              <div>
                <p className="text-xs text-ink-soft">#{index + 1} · {post.author}</p>
                <p className="mt-1 max-w-xl text-ink">{post.body}</p>
              </div>
              <p className="shrink-0 font-display text-2xl text-signal">
                {formatScore(post.ai.quality)}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
