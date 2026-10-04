import { ArrowUpRight } from "lucide-react";

function Button({
  children,
  href,
  variant = "primary",
  target,
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`button button-${variant}`}
    >
      {children}

      <ArrowUpRight size={17} />
    </a>
  );
}

export default Button;