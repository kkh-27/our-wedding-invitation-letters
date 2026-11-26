"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { InvitationEnvelope } from "@/components/InvitationEnvelope";

type InvitationExperienceProps = {
  children: ReactNode;
};

export function InvitationExperience({ children }: InvitationExperienceProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showEnvelope, setShowEnvelope] = useState(true);
  const invitationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isRevealed) {
      document.documentElement.classList.add("invitation-locked");
      return () => document.documentElement.classList.remove("invitation-locked");
    }

    document.documentElement.classList.remove("invitation-locked");
    invitationRef.current
      ?.querySelector<HTMLElement>("#couple")
      ?.focus({ preventScroll: true });
  }, [isRevealed]);

  return (
    <>
      <noscript>
        <style>{`
          #invitation-content[hidden] { display: block !important; }
          #invitation-envelope-screen { display: none !important; }
        `}</style>
      </noscript>
      {showEnvelope && (
        <div
          className="envelope-layer"
          aria-hidden={isRevealed}
          inert={isRevealed}
        >
        <InvitationEnvelope
          id="invitation-envelope-screen"
          onOpenComplete={() => setIsRevealed(true)}
          onExitComplete={() => setShowEnvelope(false)}
        />
        </div>
      )}
      <div
        ref={invitationRef}
        id="invitation-content"
        className={isRevealed ? "invitation-content is-revealed" : "invitation-content"}
        hidden={!isRevealed}
        inert={!isRevealed}
        aria-hidden={!isRevealed}
      >
        {children}
      </div>
    </>
  );
}
