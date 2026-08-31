"use client";

import { useEffect, useState } from "react";
import { ensureIdentity, maskKey, resetIdentity } from "@/lib/identity";
import { Button } from "@/components/ui/Button";

export function IdentityPanel({ compact = false }) {
  const [identity, setIdentity] = useState(null);

  useEffect(() => {
    setIdentity(ensureIdentity());
  }, []);

  if (!identity) {
    return (
      <div className="rounded-3xl border border-line bg-white/50 p-5 text-sm text-ink-soft">
        Generating local identity…
      </div>
    );
  }

  if (compact) {
    return (
      <div className="text-right">
        <p className="font-display text-base text-ink">{identity.username}</p>
        <p className="font-mono text-[11px] text-ink-soft">{maskKey(identity.did)}</p>
      </div>
    );
  }

  return (
    <section className="space-y-5 rounded-3xl border border-line bg-white/60 p-6 backdrop-blur">
      <div>
        <p className="text-xs uppercase tracking-wider text-ink-soft">Pseudonymous identity</p>
        <h2 className="mt-1 font-display text-3xl text-ink">{identity.username}</h2>
      </div>
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="text-ink-soft">DID</dt>
          <dd className="font-mono break-all text-ink">{identity.did}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">Public key stub</dt>
          <dd className="font-mono text-ink">{maskKey(identity.publicKeyStub)}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">Private key stub</dt>
          <dd className="font-mono text-ink">{maskKey(identity.privateKeyStub)} · local only</dd>
        </div>
      </dl>
      <p className="text-sm leading-relaxed text-ink-soft">
        Phase 1 stub: keys live in localStorage. Production CogniNet keeps private keys under user
        control and never uploads them to the platform.
      </p>
      <Button
        variant="secondary"
        onClick={() => setIdentity(resetIdentity())}
      >
        Rotate identity
      </Button>
    </section>
  );
}
