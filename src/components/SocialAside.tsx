import {
  motion,
} from "motion/react";

import type {
  IconType,
} from "react-icons";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

import {
  portfolioData,
} from "../data/portfolioData";

interface SocialItem {
  name: string;
  username: string;
  url: string;
  icon: IconType;
}

const socialLinks: SocialItem[] = [
  {
    name: "TikTok",
    username: "@yuusuf.js",
    url:
      portfolioData.social.tiktok,
    icon: FaTiktok,
  },

  {
    name: "LinkedIn",
    username: "Yuusuf Adow",
    url:
      portfolioData.social.linkedin,
    icon: FaLinkedinIn,
  },

  {
    name: "Facebook",
    username: "Yuusuf Adow",
    url:
      portfolioData.social.facebook,
    icon: FaFacebookF,
  },

  {
    name: "Instagram",
    username: "@ina_adoww",
    url:
      portfolioData.social.instagram,
    icon: FaInstagram,
  },
];

export default function SocialAside() {
  return (
    <>
      <motion.aside
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.6,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        aria-label="Social media"
        className="
          fixed
          left-3
          top-1/2
          z-[60]

          hidden
          -translate-y-1/2

          xl:block
        "
      >
        <div
          className="
            border
            border-zinc-200

            bg-white/90

            backdrop-blur-xl

            dark:border-white/10
            dark:bg-[#09090b]/90
          "
        >
          <div
            className="
              flex
              h-[76px]
              w-12
              items-center
              justify-center

              border-b
              border-zinc-200

              dark:border-white/10
            "
          >
            <span
              className="
                -rotate-90

                whitespace-nowrap

                text-[8px]
                font-semibold

                uppercase
                tracking-[0.24em]

                text-zinc-400
              "
            >
              Social 
            </span>
          </div>

          {socialLinks.map(
            (
              social
            ) => {
              const Icon =
                social.icon;

              return (
                <motion.a
                  key={
                    social.name
                  }
                  href={
                    social.url
                  }
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.name} ${social.username}`}
                  title={`${social.name} — ${social.username}`}
                  whileHover={{
                    x: 2,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    group
                    relative

                    flex
                    h-12
                    w-12
                    items-center
                    justify-center

                    border-b
                    border-zinc-200

                    text-zinc-500

                    transition-colors
                    duration-300

                    last:border-b-0

                    hover:bg-zinc-950
                    hover:text-white

                    dark:border-white/10
                    dark:text-zinc-400

                    dark:hover:bg-white
                    dark:hover:text-zinc-950
                  "
                >
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0

                      w-[2px]

                      origin-bottom
                      scale-y-0

                      bg-blue-600

                      transition-transform
                      duration-300

                      group-hover:scale-y-100

                      dark:bg-blue-400
                    "
                  />

                  <Icon
                    size={16}
                    className="
                      relative
                      z-10
                    "
                  />
                </motion.a>
              );
            }
          )}
        </div>
      </motion.aside>

      <motion.aside
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
          duration: 0.55,
        }}
        aria-label="Social media"
        className="
          fixed
          bottom-0
          left-0
          right-0
          z-[60]

          border-t
          border-zinc-200

          bg-white/95

          backdrop-blur-xl

          xl:hidden

          dark:border-white/10
          dark:bg-[#09090b]/95
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[520px]
            items-stretch
          "
        >
          {socialLinks.map(
            (
              social
            ) => {
              const Icon =
                social.icon;

              return (
                <a
                  key={
                    social.name
                  }
                  href={
                    social.url
                  }
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.name} ${social.username}`}
                  className="
                    group

                    flex
                    h-12
                    flex-1
                    items-center
                    justify-center

                    border-r
                    border-zinc-200

                    text-zinc-500

                    transition-colors

                    last:border-r-0

                    hover:bg-zinc-950
                    hover:text-white

                    dark:border-white/10
                    dark:text-zinc-400

                    dark:hover:bg-white
                    dark:hover:text-zinc-950
                  "
                >
                  <Icon
                    size={16}
                    className="
                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                    "
                  />
                </a>
              );
            }
          )}
        </div>
      </motion.aside>
    </>
  );
}