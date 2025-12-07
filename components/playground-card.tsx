import Link from "next/link";

interface PlaygroundCardProps {
  title: string;
  description: string;
  href: string;
}

export default function PlaygroundCard({ title, description, href }: PlaygroundCardProps) {
  return (
    <Link href={href} className="block group">
      <article className="p-4 rounded-lg hover:bg-neutral-900/40 transition-colors border border-neutral-800">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-medium text-neutral-100 group-hover:text-neutral-200">{title}</h3>
        </div>
        <p className="text-sm text-neutral-400 mt-2">{description}</p>
      </article>
    </Link>
  );
}
