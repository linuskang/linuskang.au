import Header from "@/components/header";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-start justify-center min-h-screen px-4">
            <article className="max-w-lg w-full">
                <Header />

                <div className="mt-12 text-center">
                    <div className="mb-6">
                        <h1 className="text-6xl font-bold text-neutral-100 mb-2">404</h1>
                        <p className="text-lg text-neutral-400">Page not found</p>
                    </div>

                    <p className="text-sm text-neutral-500 mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved.
                    </p>

                    <div className="flex gap-3 justify-center flex-wrap">
                        <Link
                            href="/"
                            className="px-4 py-2 text-sm bg-neutral-100 text-neutral-900 rounded hover:bg-neutral-200 transition-colors font-medium"
                        >
                            Go Home
                        </Link>
                        <Link
                            href="/blog"
                            className="px-4 py-2 text-sm bg-neutral-800 text-neutral-100 rounded hover:bg-neutral-700 transition-colors"
                        >
                            Read Blog
                        </Link>
                        <Link
                            href="/playground"
                            className="px-4 py-2 text-sm bg-neutral-800 text-neutral-100 rounded hover:bg-neutral-700 transition-colors"
                        >
                            Try Playground
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
