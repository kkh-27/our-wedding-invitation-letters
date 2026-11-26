"use client";

import { useAnimate, useReducedMotion } from "motion/react";
import { useState } from "react";
import { FloralMotif } from "@/components/ui/FloralMotif";

type EnvelopePhase = "closed" | "opening" | "transitioning";

type InvitationEnvelopeProps = {
  id?: string;
  onOpenComplete: () => void;
  onExitComplete: () => void;
};

export function InvitationEnvelope({
  id = "invitation-envelope-screen",
  onOpenComplete,
  onExitComplete,
}: InvitationEnvelopeProps) {
  const [scope, animate] = useAnimate<HTMLElement>();
  const [phase, setPhase] = useState<EnvelopePhase>("closed");
  const [instantOpen, setInstantOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const isOpening = phase === "opening";
  const isActive = phase !== "closed";

  async function openEnvelope(skipAnimation = false) {
    if (phase !== "closed") return;

    if (skipAnimation || prefersReducedMotion) {
      setInstantOpen(true);
      setPhase("transitioning");
      onOpenComplete();
      onExitComplete();
      return;
    }

    setPhase("opening");

    try {
      await Promise.all([
        animate(
          ".cover-envelope-flap",
          { rotateX: -178 },
          { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
        ),
        animate(
          ".cover-envelope-seal",
          { opacity: 0, scale: 0.72 },
          { duration: 0.22, delay: 0.22, ease: "easeOut" },
        ),
        animate(
          ".cover-envelope-card",
          { zIndex: 5 },
          { duration: 0.01, delay: 0.7 },
        ),
      ]);

      await animate(
        ".cover-envelope-card",
        { y: -74, scale: 1.015, rotate: -0.4 },
        { duration: 0.82, ease: [0.2, 0.78, 0.24, 1] },
      );

      setPhase("transitioning");
      onOpenComplete();
      await animate(
        ".envelope-screen-content",
        { opacity: 0, scale: 1.015 },
        { duration: 0.48, ease: "easeInOut" },
      );
      onExitComplete();
    } catch {
      setInstantOpen(true);
      setPhase("transitioning");
      onOpenComplete();
      onExitComplete();
    }
  }

  return (
    <section
      className={`envelope-screen${isActive ? " is-opening" : ""}${instantOpen ? " is-instant" : ""}`}
      id={id}
      aria-labelledby="cover-title"
      aria-busy={isOpening}
      ref={scope}
    >
      <div className="envelope-screen-content">
        <FloralMotif className="cover-floral" variant="watercolor" />
        <FloralMotif className="cover-branch cover-branch--left" variant="corner" />
        <FloralMotif className="cover-branch cover-branch--right" variant="botanical" />
        <div className="cover-copy">
          <p className="cover-eyebrow">မင်္ဂလာဧည့်ခံပွဲ</p>
          <h1 className="cover-title" id="cover-title">
            မင်္ဂလာဖိတ်စာ
          </h1>
          <p className="cover-description">
            ချစ်ခင်ရသူများနှင့်အတူ မင်္ဂလာအခါသမယကို မျှဝေခံစားနိုင်ရန်
            ဖိတ်ကြားအပ်ပါသည်။
          </p>
        </div>

        <div className="cover-art">
          <div className="cover-envelope" data-phase={phase}>
            <div
              className="cover-envelope-card"
              id="invitation-card"
              aria-hidden="true"
            >
              <span className="cover-card-rule" aria-hidden="true" />
              <span className="cover-card-label">မင်္ဂလာဧည့်ခံပွဲ</span>
              <span className="cover-card-emblem" aria-hidden="true">❀</span>
              <span className="cover-card-title">မင်္ဂလာဖိတ်စာ</span>
              <span className="cover-card-note">ဖိတ်စာအချက်အလက်များကို ဖြည့်သွင်းရန်</span>
              <span className="cover-card-rule cover-card-rule--short" aria-hidden="true" />
            </div>
            <div className="cover-envelope-front" aria-hidden="true" />
            <div className="cover-envelope-flap" aria-hidden="true" />
            <div className="cover-envelope-seal" aria-hidden="true">
              <span className="cover-envelope-seal-mark">❀</span>
            </div>
            <button
              className="cover-envelope-trigger"
              type="button"
              onClick={() => void openEnvelope()}
              disabled={isActive}
              aria-label="မင်္ဂလာဖိတ်စာ ဖွင့်ရန်"
              aria-controls="invitation-content"
              aria-expanded={isActive}
            />
          </div>
        </div>

        <div className="envelope-actions">
          <button
            className="button button--primary open-envelope-button"
            type="button"
            onClick={() => void openEnvelope()}
            disabled={isActive}
            aria-controls="invitation-content"
            aria-expanded={isActive}
          >
            {isOpening ? "ဖိတ်စာကို ဖွင့်နေပါသည်။" : "မင်္ဂလာဖိတ်စာ ဖွင့်ရန်"}
          </button>
        </div>
        <p className="cover-art-caption">မင်္ဂလာနေ့ရက် အမှတ်တရ</p>
      </div>

      <p className="visually-hidden" role="status" aria-live="polite">
        {isOpening ? "ဖိတ်စာကို ဖွင့်နေပါသည်။" : isActive ? "ဖိတ်စာကို ဖွင့်လိုက်ပါပြီ။" : ""}
        </p>
    </section>
  );
}
