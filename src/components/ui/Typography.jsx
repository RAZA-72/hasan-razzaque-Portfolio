import clsx from "clsx";
import { typography } from "@/theme";

export function Display({
  children,
  className = "",
  as: Component = "h1",
}) {
  return (
    <Component
      className={clsx(
        typography.fontFamily.sans,
        typography.fontSize.display,
        typography.fontWeight.bold,
        typography.lineHeight.display,
        typography.letterSpacing.display,
        "text-white",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Heading({
  children,
  className = "",
  as: Component = "h2",
}) {
  return (
    <Component
      className={clsx(
        typography.fontFamily.sans,
        typography.fontSize.h2,
        typography.fontWeight.bold,
        typography.lineHeight.heading,
        typography.letterSpacing.heading,
        "text-white",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function SubHeading({
  children,
  className = "",
  as: Component = "h3",
}) {
  return (
    <Component
      className={clsx(
        typography.fontFamily.sans,
        typography.fontSize.h4,
        typography.fontWeight.semibold,
        typography.lineHeight.heading,
        "text-white",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Paragraph({
  children,
  className = "",
  as: Component = "p",
}) {
  return (
    <Component
      className={clsx(
        typography.fontFamily.sans,
        typography.fontSize.body,
        typography.lineHeight.body,
        "text-zinc-400",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function Label({
  children,
  className = "",
  as: Component = "span",
}) {
  return (
    <Component
      className={clsx(
        typography.fontFamily.sans,
        typography.fontSize.bodySm,
        typography.fontWeight.medium,
        typography.letterSpacing.label,
        "uppercase text-blue-500",
        className
      )}
    >
      {children}
    </Component>
  );
}

export function GradientText({
  children,
  className = "",
}) {
  return (
    <span
      className={clsx(
        "bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}