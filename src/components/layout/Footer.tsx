import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

import {
  FiArrowUpRight,
  FiArrowUp,
} from "react-icons/fi";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  Link,
} from "react-router-dom";

import {
  portfolioData,
} from "../../data/portfolioData";

const footerLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Articles",
    path: "/articles",
  },
  {
    label: "Activities",
    path: "/activities",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    username: "@yuusufcadow",
    href:
      portfolioData.social.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    username: "Yuusuf Adow",
    href:
      portfolioData.social.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "TikTok",
    username: "@yuusuf.js",
    href:
      portfolioData.social.tiktok,
    icon: FaTiktok,
  },
  {
    label: "Instagram",
    username: "@ina_adoww",
    href:
      portfolioData.social.instagram,
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    username: "Yuusuf Adow",
    href:
      portfolioData.social.facebook,
    icon: FaFacebookF,
  },
];

const reveal = {
  initial: {
    opacity: 0,
    y: 28,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.12,
  },

  transition: {
    duration: 0.65,

    ease: [
      0.22,
      1,
      0.36,
      1,
    ] as [
      number,
      number,
      number,
      number,
    ],
  },
};

export default function Footer() {
  const reduceMotion =
    useReducedMotion();

  const currentYear =
    new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:
        reduceMotion
          ? "auto"
          : "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden

        border-t
        border-zinc-200

        bg-white
        text-zinc-950

        dark:border-white/10
        dark:bg-[#09090b]
        dark:text-white
      "
    >
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-[0.025]

          dark:opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              currentColor 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              currentColor 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "80px 80px",
        }}
      />

      <section
        className="
          relative
          z-10

          px-4

          sm:px-6
          md:px-8
          lg:px-10
        "
      >
   
      </section>

      <section
        className="
          relative
          z-10

          overflow-hidden

          border-y
          border-zinc-200

          py-5

          dark:border-white/10
        "
      >
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [
                    "0%",
                    "-50%",
                  ],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 24,
                  ease: "linear",
                  repeat:
                    Infinity,
                }
          }
          className="
            flex
            w-max

            whitespace-nowrap
          "
        >
          {[
            0,
            1,
          ].map(
            (
              group
            ) => (
              <div
                key={
                  group
                }
                className="
                  flex
                  items-center
                "
              >
                {[
                  "FULL-STACK DEVELOPMENT",
                  "FRONTEND ENGINEERING",
                  "BACKEND LEARNING",
                  "VISUAL DESIGN",
                  "TECHNOLOGY",
                ].map(
                  (
                    text
                  ) => (
                    <div
                      key={`${group}-${text}`}
                      className="
                        flex
                        items-center
                      "
                    >
                      <span
                        className="
                          px-6

                          text-[10px]
                          font-semibold

                          uppercase
                          tracking-[0.22em]

                          text-zinc-400

                          sm:px-9
                        "
                      >
                        {text}
                      </span>

                      <span
                        className="
                          h-1
                          w-1

                          bg-blue-600

                          dark:bg-blue-400
                        "
                      />
                    </div>
                  )
                )}
              </div>
            )
          )}
        </motion.div>
      </section>

      <section
        className="
          relative
          z-10

          px-4

          sm:px-6
          md:px-8
          lg:px-10
        "
      >
        <div
          className="
            mx-auto
            max-w-[1400px]

            py-14

            sm:py-16
            lg:py-20
          "
        >
          <div
            className="
              grid
              gap-12

              md:grid-cols-2

              lg:grid-cols-[1.2fr_0.7fr_1.1fr]
              lg:gap-14
            "
          >
            <motion.div
              {...reveal}
            >
              <Link
                to="/"
                className="
                  inline-block

                  text-2xl
                  font-medium

                  tracking-[-0.045em]

                  sm:text-3xl
                "
              >
                Yuusuf Adow
                <span
                  className="
                    text-blue-600

                    dark:text-blue-400
                  "
                >
                  .
                </span>
              </Link>

              <p
                className="
                  mt-5
                  max-w-sm

                  text-sm
                  leading-7

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                Full-Stack Software
                Developer, Visual Graphic
                Designer and technology
                professional based in
                Somalia.
              </p>

              <div
                className="
                  mt-8

                  grid

                  border-t
                  border-zinc-200

                  dark:border-white/10
                "
              >
                <a
                  href="https://heegantechnology.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    gap-5

                    border-b
                    border-zinc-200

                    py-4

                    text-sm

                    transition-colors

                    hover:text-blue-600

                    dark:border-white/10
                    dark:hover:text-blue-400
                  "
                >
                  <span>
                    Frontend Developer ·
                    Heegan Technology
                  </span>

                  <FiArrowUpRight
                    size={14}
                    className="
                      shrink-0

                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>

                <a
                  href={
                    portfolioData
                      .company
                      .facebook
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group

                    flex
                    items-center
                    justify-between

                    gap-5

                    border-b
                    border-zinc-200

                    py-4

                    text-sm

                    transition-colors

                    hover:text-blue-600

                    dark:border-white/10
                    dark:hover:text-blue-400
                  "
                >
                  <span>
                    CEO & Co-Founder ·
                    TechPoint
                  </span>

                  <FiArrowUpRight
                    size={14}
                    className="
                      shrink-0

                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </motion.div>

            <motion.div
              {...reveal}
            >
              <p
                className="
                  text-[9px]
                  font-semibold

                  uppercase
                  tracking-[0.2em]

                  text-zinc-400
                "
              >
                Navigation
              </p>

              <nav
                className="
                  mt-6

                  border-t
                  border-zinc-200

                  dark:border-white/10
                "
              >
                {footerLinks.map(
                  (
                    item,
                    index
                  ) => (
                    <Link
                      key={
                        item.path
                      }
                      to={
                        item.path
                      }
                      className="
                        group

                        flex
                        items-center
                        justify-between

                        border-b
                        border-zinc-200

                        py-3.5

                        text-sm

                        text-zinc-600

                        transition-colors

                        hover:text-zinc-950

                        dark:border-white/10
                        dark:text-zinc-400

                        dark:hover:text-white
                      "
                    >
                      <span>
                        {
                          item.label
                        }
                      </span>

                      <span
                        className="
                          font-mono

                          text-[9px]

                          text-zinc-400
                        "
                      >
                        {(
                          index + 1
                        )
                          .toString()
                          .padStart(
                            2,
                            "0"
                          )}
                      </span>
                    </Link>
                  )
                )}
              </nav>
            </motion.div>

            <motion.div
              {...reveal}
              className="
                md:col-span-2

                lg:col-span-1
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold

                  uppercase
                  tracking-[0.2em]

                  text-zinc-400
                "
              >
                Social
              </p>

              <div
                className="
                  mt-6

                  grid

                  border-l
                  border-t
                  border-zinc-200

                  sm:grid-cols-2

                  dark:border-white/10
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
                          social.label
                        }
                        href={
                          social.href
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group

                          flex
                          min-h-[90px]

                          items-center
                          justify-between

                          gap-4

                          border-b
                          border-r
                          border-zinc-200

                          p-4

                          transition-colors
                          duration-300

                          hover:bg-zinc-50

                          dark:border-white/10

                          dark:hover:bg-white/[0.025]
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <Icon
                            size={15}
                            className="
                              text-zinc-400

                              transition-colors

                              group-hover:text-blue-600

                              dark:group-hover:text-blue-400
                            "
                          />

                          <div>
                            <p
                              className="
                                text-xs
                                font-medium
                              "
                            >
                              {
                                social.label
                              }
                            </p>

                            <p
                              className="
                                mt-1

                                text-[9px]

                                text-zinc-400
                              "
                            >
                              {
                                social.username
                              }
                            </p>
                          </div>
                        </div>

                        <FiArrowUpRight
                          size={13}
                          className="
                            text-zinc-300

                            transition-all
                            duration-300

                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:text-blue-600

                            dark:text-zinc-700
                            dark:group-hover:text-blue-400
                          "
                        />
                      </a>
                    );
                  }
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="
          relative
          z-10

          overflow-hidden

          border-t
          border-zinc-200

          dark:border-white/10
        "
      >
        <div
          className="
            mx-auto
            max-w-[1600px]

            overflow-hidden

            px-4

            sm:px-6
            md:px-8
            lg:px-10
          "
        >
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.85,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              pointer-events-none

              whitespace-nowrap

              py-8

              text-center

              text-[clamp(4.2rem,14vw,13rem)]

              font-medium

              leading-[0.8]

              tracking-[-0.08em]

              text-zinc-100

              sm:py-12

              dark:text-white/[0.035]
            "
          >
            YUUSUF ADOW
          </motion.p>
        </div>
      </section>

      <section
        className="
          relative
          z-10

          border-t
          border-zinc-200

          px-4

          sm:px-6
          md:px-8
          lg:px-10

          dark:border-white/10
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]

            flex-col

            gap-5

            py-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center

              gap-x-4
              gap-y-2
            "
          >
            <p
              className="
                text-[9px]

                uppercase
                tracking-[0.15em]

                text-zinc-400
              "
            >
              © {currentYear} Yuusuf Adow
            </p>

            <span
              className="
                hidden

                h-1
                w-1

                bg-zinc-300

                sm:block

                dark:bg-zinc-700
              "
            />

            <p
              className="
                text-[9px]

                uppercase
                tracking-[0.15em]

                text-zinc-400
              "
            >
              Somalia
            </p>
          </div>

          <button
            type="button"
            onClick={
              scrollToTop
            }
            className="
              group

              inline-flex
              w-fit
              items-center

              gap-3

              text-[9px]
              font-semibold

              uppercase
              tracking-[0.17em]

              text-zinc-500

              transition-colors

              hover:text-zinc-950

              dark:text-zinc-400
              dark:hover:text-white
            "
          >
            Back to top

            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center

                border
                border-zinc-200

                transition-all
                duration-300

                group-hover:border-blue-600
                group-hover:bg-blue-600
                group-hover:text-white

                dark:border-white/10

                dark:group-hover:border-blue-400
                dark:group-hover:bg-blue-400
                dark:group-hover:text-zinc-950
              "
            >
              <FiArrowUp
                size={13}
                className="
                  transition-transform

                  group-hover:-translate-y-0.5
                "
              />
            </span>
          </button>
        </div>
      </section>
    </footer>
  );
}