import clsx from "clsx";

export default function Container({
  children,
  className = "",
  as: Component = "div",
}) {
  return (
    <Component
      className={clsx(
        "w-full",
        "max-w-7xl",
        "mx-auto",
        "px-5",
        "sm:px-6",
        "lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}