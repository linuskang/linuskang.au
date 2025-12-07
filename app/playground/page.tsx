import Header from "@/components/header";
import PlaygroundCard from "@/components/playground-card";

export const metadata = {
  title: "Playground - Linus Kang",
  description: "A collection of small experiments and demos.",
};

const experiments = [
  {
    title: "Color Generator",
    description: "Generate and copy color hex codes quickly.",
    href: "/playground/color-generator",
  },
  {
    title: "Physics Simulator",
    description: "A simple physics simulation using Matter.js.",
    href: "/playground/physics-sim",
  }
];

export default function PlaygroundIndex() {
  return (
    <div className="flex items-start justify-center min-h-screen px-4">
      <article className="max-w-lg w-full">
        <Header />

        <header className="mt-4 mb-6">
          <h1 className="text-xl font-semibold">Playground</h1>
          <p className="text-sm text-neutral-400 mt-2">Random demos and experiments I've made.</p>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {experiments.map((exp) => (
            <PlaygroundCard key={exp.href} title={exp.title} description={exp.description} href={exp.href} />
          ))}
        </div>

      </article>
    </div>
  );
}
