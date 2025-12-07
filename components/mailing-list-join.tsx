"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MailingListJoin() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setMessage("");

        try {

            // Post to internal API which validates/forwards the subscription
            const response = await fetch("/api/mailing-list", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
                setMessage("Successfully joined!");
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                const data = await response.json();
                setStatus("error");
                setMessage(data.message || "Failed to subscribe. Please try again.");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error("Subscription error:", error);
            setStatus("error");
            setMessage("An error occurred. Please try again.");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div className="flex gap-2">
                <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "submitting"}
                    className="bg-neutral-900 border-neutral-700/50 text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-600 flex-1"
                />
                <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-neutral-100 text-neutral-900 hover:bg-neutral-200 font-medium px-4"
                >
                    {status === "submitting" ? "…" : "Join"}
                </Button>
            </div>

            {message && (
                <p className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
                    {message}
                </p>
            )}
        </form>
    );
}
