const STORAGE_KEY = "cogninet.identity.v1";

function randomHex(bytes = 16) {
  const arr = new Uint8Array(bytes);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(arr);
  } else {
    for (let i = 0; i < bytes; i += 1) arr[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
}

function makeUsername(seed) {
  const adjectives = ["quiet", "signal", "north", "ember", "latent", "clear"];
  const nouns = ["harbor", "lattice", "orchard", "relay", "mirror", "circuit"];
  const a = adjectives[parseInt(seed.slice(0, 2), 16) % adjectives.length];
  const n = nouns[parseInt(seed.slice(2, 4), 16) % nouns.length];
  return `${a}.${n}`;
}

/** Local pseudonymous identity stub — not production crypto. */
export function createIdentity() {
  const privateKeyStub = randomHex(32);
  const publicKeyStub = randomHex(32);
  const did = `did:key:z6Mk${publicKeyStub.slice(0, 16)}`;
  return {
    username: makeUsername(publicKeyStub),
    did,
    publicKeyStub,
    privateKeyStub,
    createdAt: new Date().toISOString(),
  };
}

export function loadIdentity() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveIdentity(identity) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(identity));
}

export function ensureIdentity() {
  const existing = loadIdentity();
  if (existing) return existing;
  const created = createIdentity();
  saveIdentity(created);
  return created;
}

export function resetIdentity() {
  if (typeof window === "undefined") return null;
  window.localStorage.removeItem(STORAGE_KEY);
  return ensureIdentity();
}

export function maskKey(value = "") {
  if (value.length < 12) return value;
  return `${value.slice(0, 6)}…${value.slice(-4)}`;
}
