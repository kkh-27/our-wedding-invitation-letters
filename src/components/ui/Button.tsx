import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  id?: string;
  variant?: "primary" | "outline";
};

export function Button({
  children,
  href,
  id,
  variant = "primary",
}: ButtonProps) {
  return (
    <a className={`button button--${variant}`} href={href} id={id}>
      {children}
    </a>
  );
}
