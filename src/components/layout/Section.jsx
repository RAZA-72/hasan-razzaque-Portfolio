import clsx from "clsx";
import { Container } from "./";

export default function Section({
  children,
  id,
  className = "",
  container = false,
  as: Component = "section",
}) {
  const content = container ? (
    <Container>{children}</Container>
  ) : (
    children
  );

  return (
    <Component
      id={id}
      className={clsx(
        "relative overflow-hidden py-20 md:py-28",
        className
      )}
    >
      {content}
    </Component>
  );
}