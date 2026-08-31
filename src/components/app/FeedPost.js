import { AiScoreBadge } from "@/components/app/AiScoreBadge";

export function FeedPost({ post }) {
  return (
    <article className="border-b border-line py-7 animate-rise">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="font-display text-lg text-ink">{post.author}</p>
          <p className="font-mono text-xs text-ink-soft">{post.did}</p>
        </div>
        <time className="text-xs uppercase tracking-wider text-ink-soft">{post.createdAt}</time>
      </header>
      <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink">{post.body}</p>
      {post.tags?.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li key={tag} className="text-xs uppercase tracking-wider text-signal">
              #{tag}
            </li>
          ))}
        </ul>
      )}
      <AiScoreBadge ai={post.ai} />
    </article>
  );
}
