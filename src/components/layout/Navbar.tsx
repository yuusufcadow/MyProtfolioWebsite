import {
  useEffect,
  useState,
} from "react";

import {
  NavLink,
} from "react-router-dom";

import {
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import ThemeToggle from "../theme/ThemeToggle";

import logo from "../../assets/logo.jpg";

interface NavigationLink {
  label: string;
  path: string;
}

const links: NavigationLink[] = [
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
];

const socialLinks = {
  github:
    "https://github.com/yuusufcadow",

  linkedin:
    "https://www.linkedin.com/in/yuusuf-adow-mohamuud-501737337/",
};

const ease = [
  0.22,
  1,
  0.36,
  1,
] as [
  number,
  number,
  number,
  number,
];

export default function Navbar() {
  const [
    open,
    setOpen,
  ] = useState(false);

  useEffect(() => {
    document.body.style.overflow =
      open
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          ease,
        }}
        className="
          fixed
          left-0
          top-0
          z-50

          w-full

          border-b
          border-zinc-200

          bg-white/90

          backdrop-blur-xl

          dark:border-white/[0.08]
          dark:bg-[#09090b]/90
        "
      >
        <nav
          className="
            mx-auto

            flex
            h-[68px]
            w-full
            max-w-[1400px]

            items-center
            justify-between

            px-4

            sm:px-6

            md:px-8

            lg:px-10
          "
        >
          <NavLink
            to="/"
            aria-label="Yuusuf Adow home"
            className="
              group

              flex
              min-w-0
              items-center

              gap-3
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 1.06,
              }}
              transition={{
                duration: 0.35,
                ease,
              }}
              className="
                relative

                h-10
                w-10

                shrink-0

                overflow-hidden

                border
                border-zinc-200

                bg-zinc-100

                sm:h-11
                sm:w-11

                dark:border-white/10
                dark:bg-white/[0.03]
              "
            >
              <img
                src={logo}
                alt="Yuusuf Adow"
                className="
                  h-full
                  w-full

                  object-cover
                  object-center

                  transition-transform
                  duration-700

                  group-hover:scale-110
                "
              />

              <span
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  border
                  border-transparent

                  transition-colors
                  duration-300

                  group-hover:border-blue-600/30

                  dark:group-hover:border-blue-400/30
                "
              />
            </motion.div>

            <div
              className="
                min-w-0
              "
            >
              <div
                className="
                  flex
                  items-center
                "
              >
                <motion.span
                  initial={{
                    opacity: 0,
                    x: 5,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                  }}
                  className="
                    text-[14px]
                    font-semibold

                    text-blue-600

                    transition-transform
                    duration-300

                    group-hover:-translate-x-[2px]

                    sm:text-[15px]

                    dark:text-blue-400
                  "
                >
                  &lt;
                </motion.span>

                <motion.span
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.12,
                    duration: 0.45,
                  }}
                  className="
                    mx-[3px]

                    truncate

                    text-[14px]
                    font-semibold

                    tracking-[-0.025em]

                    text-zinc-900

                    sm:text-[15px]

                    dark:text-white
                  "
                >
                  Yuusuf Adow
                </motion.span>

                <motion.span
                  initial={{
                    opacity: 0,
                    x: -5,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                  }}
                  className="
                    text-[14px]
                    font-semibold

                    text-blue-600

                    transition-transform
                    duration-300

                    group-hover:translate-x-[2px]

                    sm:text-[15px]

                    dark:text-blue-400
                  "
                >
                  &gt;
                </motion.span>
              </div>

              <span
                className="
                  hidden

                  text-[8px]
                  font-medium

                  uppercase
                  tracking-[0.16em]

                  text-zinc-400

                  sm:block
                "
              >
                Software Developer
              </span>
            </div>
          </NavLink>

          <div
            className="
              absolute
              left-1/2

              hidden

              -translate-x-1/2

              lg:flex
              lg:items-center
            "
          >
            <div
              className="
                flex
                items-center

                gap-7

                xl:gap-9
              "
            >
              {links.map(
                (
                  link,
                  index
                ) => (
                  <NavLink
                    key={
                      link.path
                    }
                    to={
                      link.path
                    }
                    className={({
                      isActive,
                    }) =>
                      `
                        group/nav
                        relative

                        flex
                        h-[68px]
                        items-center

                        text-[12px]
                        font-medium

                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? `
                              text-blue-600

                              dark:text-blue-400
                            `
                            : `
                              text-zinc-600

                              hover:text-zinc-950

                              dark:text-zinc-400

                              dark:hover:text-white
                            `
                        }
                      `
                    }
                  >
                    {({
                      isActive,
                    }) => (
                      <>
                        <motion.span
                          initial={{
                            opacity: 0,
                            y: -5,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay:
                              0.1 +
                              index *
                                0.04,
                            duration: 0.4,
                          }}
                        >
                          {link.label}
                        </motion.span>

                        {isActive && (
                          <motion.span
                            layoutId="navbar-active"
                            transition={{
                              duration: 0.35,
                              ease,
                            }}
                            className="
                              absolute

                              bottom-0
                              left-0
                              right-0

                              h-[2px]

                              bg-blue-600

                              dark:bg-blue-400
                            "
                          />
                        )}

                        {!isActive && (
                          <span
                            className="
                              absolute

                              bottom-0
                              left-1/2

                              h-[2px]
                              w-0

                              -translate-x-1/2

                              bg-zinc-300

                              transition-all
                              duration-300

                              group-hover/nav:w-full

                              dark:bg-white/20
                            "
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                )
              )}
            </div>
          </div>

          <div
            className="
              flex
              items-center

              gap-1
            "
          >
            <div
              className="
                hidden

                items-center

                lg:flex
              "
            >
              <motion.a
                href={
                  socialLinks.github
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  text-zinc-500

                  transition-colors
                  duration-300

                  hover:bg-zinc-100
                  hover:text-zinc-950

                  dark:text-zinc-400

                  dark:hover:bg-white/[0.05]
                  dark:hover:text-white
                "
              >
                <FiGithub
                  size={17}
                />
              </motion.a>

              <motion.a
                href={
                  socialLinks.linkedin
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  text-zinc-500

                  transition-colors
                  duration-300

                  hover:bg-zinc-100
                  hover:text-zinc-950

                  dark:text-zinc-400

                  dark:hover:bg-white/[0.05]
                  dark:hover:text-white
                "
              >
                <FiLinkedin
                  size={17}
                />
              </motion.a>

              <div
                className="
                  mx-2

                  h-5
                  w-px

                  bg-zinc-200

                  dark:bg-white/10
                "
              />

              <ThemeToggle />
            </div>

            <div
              className="
                lg:hidden
              "
            >
              <ThemeToggle />
            </div>

            <motion.button
              type="button"
              aria-label="Open menu"
              aria-expanded={
                open
              }
              onClick={() =>
                setOpen(true)
              }
              whileTap={{
                scale: 0.94,
              }}
              className="
                ml-1

                flex
                h-10
                w-10
                items-center
                justify-center

                border-l
                border-zinc-200

                text-zinc-800

                transition-colors

                hover:bg-zinc-100

                lg:hidden

                dark:border-white/10
                dark:text-white

                dark:hover:bg-white/[0.05]
              "
            >
              <FiMenu
                size={21}
              />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={
                closeMenu
              }
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                fixed
                inset-0
                z-[80]

                bg-black/55

                backdrop-blur-[2px]

                lg:hidden
              "
            />

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.45,
                ease,
              }}
              className="
                fixed
                bottom-0
                right-0
                top-0
                z-[90]

                flex
                w-[88%]
                max-w-[380px]
                flex-col

                border-l
                border-zinc-200

                bg-white

                lg:hidden

                dark:border-white/10
                dark:bg-[#09090b]
              "
            >
              <div
                className="
                  flex
                  h-[68px]
                  shrink-0

                  items-center
                  justify-between

                  border-b
                  border-zinc-200

                  px-5

                  dark:border-white/[0.08]
                "
              >
                <NavLink
                  to="/"
                  onClick={
                    closeMenu
                  }
                  className="
                    group

                    flex
                    items-center

                    gap-3
                  "
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.1,
                      duration: 0.4,
                    }}
                    className="
                      h-10
                      w-10

                      overflow-hidden

                      border
                      border-zinc-200

                      dark:border-white/10
                    "
                  >
                    <img
                      src={logo}
                      alt="Yuusuf Adow"
                      className="
                        h-full
                        w-full

                        object-cover
                        object-center

                        transition-transform
                        duration-700

                        group-hover:scale-110
                      "
                    />
                  </motion.div>

                  <div>
                    <div
                      className="
                        flex
                        items-center
                      "
                    >
                      <span
                        className="
                          text-sm
                          font-semibold

                          text-blue-600

                          dark:text-blue-400
                        "
                      >
                        &lt;
                      </span>

                      <span
                        className="
                          mx-[3px]

                          text-sm
                          font-semibold

                          tracking-[-0.025em]

                          text-zinc-900

                          dark:text-white
                        "
                      >
                        Yuusuf Adow
                      </span>

                      <span
                        className="
                          text-sm
                          font-semibold

                          text-blue-600

                          dark:text-blue-400
                        "
                      >
                        &gt;
                      </span>
                    </div>

                    <span
                      className="
                        mt-1
                        block

                        text-[7px]

                        uppercase
                        tracking-[0.15em]

                        text-zinc-400
                      "
                    >
                      Software Developer
                    </span>
                  </div>
                </NavLink>

                <motion.button
                  type="button"
                  aria-label="Close menu"
                  onClick={
                    closeMenu
                  }
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    border-l
                    border-zinc-200

                    text-zinc-700

                    transition-colors

                    hover:bg-zinc-100

                    dark:border-white/10
                    dark:text-white

                    dark:hover:bg-white/[0.05]
                  "
                >
                  <FiX
                    size={21}
                  />
                </motion.button>
              </div>

              <nav
                className="
                  flex
                  flex-1
                  flex-col

                  overflow-y-auto

                  px-5
                  py-6
                "
              >
                <div
                  className="
                    mb-5

                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-px
                      w-6

                      bg-blue-600

                      dark:bg-blue-400
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      font-semibold

                      uppercase
                      tracking-[0.2em]

                      text-zinc-400
                    "
                  >
                    Navigation
                  </span>
                </div>

                {links.map(
                  (
                    link,
                    index
                  ) => (
                    <motion.div
                      key={
                        link.path
                      }
                      initial={{
                        opacity: 0,
                        x: 24,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          0.08 +
                          index *
                            0.05,
                        duration: 0.45,
                        ease,
                      }}
                    >
                      <NavLink
                        to={
                          link.path
                        }
                        onClick={
                          closeMenu
                        }
                        className={({
                          isActive,
                        }) =>
                          `
                            relative

                            flex
                            items-center
                            justify-between

                            border-b
                            border-zinc-200

                            py-5

                            transition-colors

                            dark:border-white/[0.08]

                            ${
                              isActive
                                ? `
                                  text-blue-600

                                  dark:text-blue-400
                                `
                                : `
                                  text-zinc-900

                                  hover:text-blue-600

                                  dark:text-zinc-200

                                  dark:hover:text-blue-400
                                `
                            }
                          `
                        }
                      >
                        {({
                          isActive,
                        }) => (
                          <>
                            <span
                              className="
                                text-[20px]
                                font-medium

                                tracking-[-0.035em]
                              "
                            >
                              {
                                link.label
                              }
                            </span>

                            <span
                              className={`
                                font-mono

                                text-[9px]

                                ${
                                  isActive
                                    ? `
                                      text-blue-600

                                      dark:text-blue-400
                                    `
                                    : `
                                      text-zinc-400
                                    `
                                }
                              `}
                            >
                              {(
                                index +
                                1
                              )
                                .toString()
                                .padStart(
                                  2,
                                  "0"
                                )}
                            </span>
                          </>
                        )}
                      </NavLink>
                    </motion.div>
                  )
                )}
              </nav>

              <div
                className="
                  shrink-0

                  border-t
                  border-zinc-200

                  dark:border-white/[0.08]
                "
              >
                <div
                  className="
                    px-5
                    py-4
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold

                      uppercase
                      tracking-[0.2em]

                      text-zinc-400
                    "
                  >
                    Connect
                  </p>
                </div>

                <div
                  className="
                    flex
                    items-center

                    border-t
                    border-zinc-200

                    dark:border-white/[0.08]
                  "
                >
                  <a
                    href={
                      socialLinks.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="
                      flex
                      h-14
                      flex-1

                      items-center
                      justify-center

                      border-r
                      border-zinc-200

                      text-zinc-600

                      transition-colors

                      hover:bg-zinc-100
                      hover:text-zinc-950

                      dark:border-white/[0.08]
                      dark:text-zinc-400

                      dark:hover:bg-white/[0.05]
                      dark:hover:text-white
                    "
                  >
                    <FiGithub
                      size={19}
                    />
                  </a>

                  <a
                    href={
                      socialLinks.linkedin
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="
                      flex
                      h-14
                      flex-1

                      items-center
                      justify-center

                      text-zinc-600

                      transition-colors

                      hover:bg-zinc-100
                      hover:text-zinc-950

                      dark:text-zinc-400

                      dark:hover:bg-white/[0.05]
                      dark:hover:text-white
                    "
                  >
                    <FiLinkedin
                      size={19}
                    />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}