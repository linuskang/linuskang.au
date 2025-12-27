"use client";

import { useState } from "react";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/language-context";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://msg.linuskang.workers.dev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen px-4">
      <article className="max-w-lg w-full">
        <Header />

        <h1 className="text-xl font-semibold mt-4">{t("contact.title")}</h1>
        <p className="text-sm text-neutral-400 mt-2">
          {t("contact.description")}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-neutral-300">
              {t("contact.form.name")}
            </Label>
            <Input
              id="name"
              type="text"
              placeholder={t("contact.form.namePlaceholder")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-neutral-900 border-neutral-700/50 text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-neutral-300">
              {t("contact.form.email")}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={t("contact.form.emailPlaceholder")}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-neutral-900 border-neutral-700/50 text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-600"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-neutral-300">
              {t("contact.form.message")}
            </Label>
            <Textarea
              id="message"
              placeholder={t("contact.form.messagePlaceholder")}
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-neutral-900 border-neutral-700/50 text-neutral-100 placeholder:text-neutral-500 focus:border-neutral-600 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200 font-medium"
          >
            {status === "submitting" ? t("contact.form.submitting") : status === "success" ? t("contact.form.success") : t("contact.form.submit")}
          </Button>

          {status === "success" && (
            <p className="text-sm text-green-400 text-center">
              {t("contact.form.successMessage")}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center">
              {t("contact.form.errorMessage")}
            </p>
          )}
        </form>
      </article>
    </div>
  );
}
