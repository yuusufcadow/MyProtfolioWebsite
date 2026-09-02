import {
  FiMoon,
  FiSun,
} from "react-icons/fi";

import {
  motion,
} from "motion/react";

import {
  useTheme,
} from "../../context/ThemeContext";

export default function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <motion.button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full

        border
        border-zinc-200

        bg-white
        text-zinc-800

        transition-colors

        hover:bg-zinc-100

        dark:border-white/10
        dark:bg-white/5
        dark:text-white
        dark:hover:bg-white/10
      "
    >
      {theme === "dark" ? (
        <FiSun size={18} />
      ) : (
        <FiMoon size={18} />
      )}
    </motion.button>
  );
}