import Header from "@/components/header";
import PlaygroundContent from "@/components/playground-content";

export const metadata = {
  title: "Playground - Linus Kang",
  description: "A collection of small experiments and demos.",
};

export default function PlaygroundIndex() {
  return (
    <div className="flex items-start justify-center min-h-screen px-4">
      <article className="max-w-lg w-full">
        <Header />
        <PlaygroundContent />
      </article>
    </div>
  );
}
