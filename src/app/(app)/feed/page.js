import { FeedPost } from "@/components/app/FeedPost";
import { MOCK_POSTS } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Feed · CogniNet",
};

export default function FeedPage() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-signal">Phase 1 · AI social</p>
          <h1 className="mt-1 font-display text-4xl text-ink">Signal feed</h1>
          <p className="mt-2 max-w-xl text-ink-soft">
            Posts are ranked by mock information-quality scores. Identity stays pseudonymous.
          </p>
        </div>
        <Button href="/compose">Compose</Button>
      </div>

      <div className="mt-8">
        {MOCK_POSTS.map((post) => (
          <FeedPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
