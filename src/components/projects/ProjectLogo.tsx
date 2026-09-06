import {
  useState,
} from "react";

interface ProjectLogoProps {
  title: string;

  logoUrl?: string;

  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-10 w-10",

  md: "h-14 w-14",

  lg: "h-20 w-20",
};

function getInitials(
  title: string
) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(
      (
        word
      ) =>
        word[0]
    )
    .join("")
    .toUpperCase();
}

export default function ProjectLogo({
  title,
  logoUrl,
  size = "md",
}: ProjectLogoProps) {
  const [
    failed,
    setFailed,
  ] = useState(false);

  const showImage =
    logoUrl &&
    !failed;

  return (
    <div
      className={`
        ${sizes[size]}

        flex
        shrink-0
        items-center
        justify-center

        overflow-hidden

        border
        border-zinc-200

        bg-white

        dark:border-white/10
        dark:bg-white/[0.03]
      `}
    >
      {showImage ? (
        <img
          src={logoUrl}
          alt={`${title} logo`}
          onError={() =>
            setFailed(
              true
            )
          }
          className="
            h-full
            w-full

            object-contain

            p-2
          "
        />
      ) : (
        <span
          className="
            text-xs
            font-semibold

            tracking-[-0.03em]

            text-zinc-500

            dark:text-zinc-400
          "
        >
          {getInitials(
            title
          )}
        </span>
      )}
    </div>
  );
}