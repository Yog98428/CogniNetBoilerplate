/** Deterministic mock AI scoring for compose preview. */
export function scoreDraft(text = "") {
  const length = text.trim().length;
  const exclaim = (text.match(/!/g) || []).length;
  const words = text.trim().split(/\s+/).filter(Boolean);
  const uniqueRatio =
    words.length === 0 ? 0 : new Set(words.map((w) => w.toLowerCase())).size / words.length;

  const quality = clamp(0.2 + Math.min(length / 280, 1) * 0.55 + uniqueRatio * 0.25 - exclaim * 0.05);
  const originality = clamp(0.25 + uniqueRatio * 0.6 - (length < 20 ? 0.2 : 0));
  const botRisk = clamp(0.08 + exclaim * 0.08 + (uniqueRatio < 0.4 ? 0.35 : 0) + (length > 0 && length < 12 ? 0.3 : 0));

  let summary = "Balanced draft — enough substance for a useful feed signal.";
  if (botRisk > 0.55) summary = "Elevated synthetic markers. Tone down spam patterns.";
  else if (quality > 0.8) summary = "Strong information quality for Phase 1 ranking.";
  else if (length < 24) summary = "Too thin for meaningful quality scoring.";

  return { quality, originality, botRisk, summary };
}

function clamp(n) {
  return Math.max(0, Math.min(1, Number(n.toFixed(2))));
}

export function formatScore(n) {
  return `${Math.round(n * 100)}`;
}
