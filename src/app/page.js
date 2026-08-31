import { Button } from "@/components/ui/Button";
import { ROADMAP } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <main className="atmosphere relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="mesh-orb animate-drift absolute -left-24 top-10 h-[420px] w-[420px] rounded-full" />
        <div className="mesh-orb animate-drift absolute -right-16 top-32 h-[360px] w-[360px] rounded-full opacity-70 [animation-delay:-6s]" />
        <div className="animate-pulse-soft absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-glow/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-8">
        <nav className="animate-rise flex items-center justify-between">
          <span className="font-display text-lg tracking-tight text-ink">CogniNet</span>
          <Button href="/feed" variant="secondary">
            Open app
          </Button>
        </nav>

        <section className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <p className="animate-rise font-display text-[clamp(3.4rem,12vw,8.5rem)] font-bold leading-[0.9] tracking-tight text-ink">
            CogniNet
          </p>
          <h1 className="animate-rise-delay mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug text-ink md:text-4xl">
            AI filters the noise. Privacy protects the person.
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Phase 1 boilerplate for an AI-native social feed — quality scoring first, wallets later.
          </p>
          <div className="animate-rise-delay-2 mt-10 flex flex-wrap gap-3">
            <Button href="/feed">Enter the feed</Button>
            <Button href="/intelligence" variant="secondary">
              See AI layer
            </Button>
          </div>
        </section>

        <section className="grid gap-10 border-t border-line pt-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl text-ink">Built around three ideas</h2>
            <ul className="mt-5 space-y-4 text-ink-soft">
              <li>
                <span className="font-medium text-ink">AI</span> understands information quality —
                not your legal identity.
              </li>
              <li>
                <span className="font-medium text-ink">Web3</span> verifies ownership later; this
                scaffold keeps crypto invisible for now.
              </li>
              <li>
                <span className="font-medium text-ink">Privacy</span> starts with local pseudonymous
                keys and data minimization stubs.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Roadmap map</h2>
            <ol className="mt-5 space-y-2">
              {ROADMAP.map((item) => (
                <li key={item.phase} className="flex items-center justify-between text-sm">
                  <span className="text-ink">
                    Phase {item.phase} — {item.name}
                  </span>
                  <span
                    className={
                      item.status === "active"
                        ? "text-signal"
                        : "text-ink-soft"
                    }
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </main>
  );
}
