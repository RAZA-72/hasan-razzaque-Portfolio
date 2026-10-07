import clsx from "clsx";
import { Heading, Label, Paragraph } from "./Typography";

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className = "",
}) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={clsx(
        "flex flex-col gap-4 max-w-3xl mb-14",
        alignment[align],
        className
      )}
    >
      {label && <Label>{label}</Label>}

      {title && <Heading>{title}</Heading>}

      {description && (
        <Paragraph className="max-w-2xl">
          {description}
        </Paragraph>
      )}
    </div>
  );
}