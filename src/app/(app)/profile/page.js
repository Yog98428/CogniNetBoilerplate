import { IdentityPanel } from "@/components/app/IdentityPanel";

export const metadata = {
  title: "Profile · CogniNet",
};

export default function ProfilePage() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <p className="text-xs uppercase tracking-wider text-signal">Phase 1 · Identity stub</p>
        <h1 className="mt-1 font-display text-4xl text-ink">Profile</h1>
        <p className="mt-2 text-ink-soft">
          Wallet-free pseudonymous profile scaffold. Phase 2 will replace stubs with real DID /
          key management.
        </p>
      </div>
      <IdentityPanel />
      <section className="rounded-3xl border border-dashed border-line p-6 text-sm text-ink-soft">
        <h2 className="font-display text-xl text-ink">Coming later</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Multiple compartmentalized identities</li>
          <li>Key recovery & hardware-backed keys</li>
          <li>Reputation commitments without full history disclosure</li>
        </ul>
      </section>
    </div>
  );
}
