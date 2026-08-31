import { formatScore } from "@/lib/ai-scores";

export function AiScoreBadge({ ai }) {
  if (!ai) return null;
  const tone =
    ai.botRisk > 0.55 ? "text-danger" : ai.quality > 0.8 ? "text-signal" : "text-ink-soft";

  return (
    <div className="mt-4 space-y-2">
      <div className="flex flex-wrap items-center gap-3 text-xs tracking-wide uppercase text-ink-soft">
        <span className={tone}>Quality {formatScore(ai.quality)}</span>
        <span>Original {formatScore(ai.originality)}</span>
        <span>Bot risk {formatScore(ai.botRisk)}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-mist">
        <div className="score-bar h-full rounded-full" style={{ width: `${ai.quality * 100}%` }} />
      </div>
      <p className="text-sm text-ink-soft">{ai.summary}</p>
    </div>
  );
}
