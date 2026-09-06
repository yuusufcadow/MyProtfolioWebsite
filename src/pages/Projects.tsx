import {
  useState,
} from "react";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiBriefcase,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiServer,
  FiTool,
} from "react-icons/fi";

import {
  motion,
} from "motion/react";

import {
  Link,
} from "react-router-dom";

import {
  portfolioData,
} from "../data/portfolioData";

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
    ease,
  },
};

const workAreas = [
  {
    icon: FiCode,
    title:
      "Frontend Development",
    description:
      "Production interfaces built and maintained with React JSX, TypeScript, Next.js and Vue.js.",
  },

  {
    icon: FiServer,
    title:
      "Backend & APIs",
    description:
      "Node.js, Express.js, REST APIs, backend debugging, CRUD workflows and integration testing.",
  },

  {
    icon: FiDatabase,
    title:
      "Database Workflows",
    description:
      "Full-stack application data using MongoDB, Mongoose and PostgreSQL.",
  },

  {
    icon: FiTool,
    title:
      "Odoo Maintenance",
    description:
      "Odoo maintenance, updates, workflow support, troubleshooting and release verification.",
  },
];

export default function Projects() {
  const [
    activeProject,
    setActiveProject,
  ] = useState(0);

  const projects =
    portfolioData.projects;

  const selectedProject =
    projects[
      activeProject
    ];

  return (
    <main
      className="
        min-h-screen
        overflow-hidden

        bg-white
        text-zinc-950

        dark:bg-[#09090b]
        dark:text-white
      "
    >
      <section
        className="
          relative

          px-4
          pb-20
          pt-[105px]

          sm:px-6
          sm:pb-24
          sm:pt-[120px]

          md:px-8

          lg:px-10
          lg:pb-32
          lg:pt-[140px]
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

        <div
          className="
            relative
            z-10

            mx-auto
            max-w-[1400px]
          "
        >
          <div
            className="
              grid
              gap-12

              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
              lg:gap-20
            "
          >
            <div>
              <div
                className="
                  overflow-hidden
                "
              >
                <motion.h1
                  initial={{
                    y: "110%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    ease,
                  }}
                  className="
                    text-[clamp(3.4rem,9vw,8rem)]

                    font-medium

                    leading-[0.88]

                    tracking-[-0.07em]
                  "
                >
                  Production
                </motion.h1>
              </div>

              <div
                className="
                  overflow-hidden
                "
              >
                <motion.h1
                  initial={{
                    y: "110%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.08,
                    ease,
                  }}
                  className="
                    text-[clamp(3.4rem,9vw,8rem)]

                    font-medium

                    leading-[0.88]

                    tracking-[-0.07em]

                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  work & delivery.
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease,
              }}
            >
              <p
                className="
                  max-w-xl

                  text-sm
                  leading-7

                  text-zinc-600

                  sm:text-base
                  sm:leading-8

                  lg:text-lg

                  dark:text-zinc-400
                "
              >
                I have contributed to
                more than 32 websites
                and business
                applications across
                corporate,
                public-sector,
                healthcare and service
                organizations.
              </p>

              <div
                className="
                  mt-8

                  flex
                  flex-wrap
                  items-center

                  gap-x-5
                  gap-y-3

                  border-t
                  border-zinc-200

                  pt-6

                  dark:border-white/10
                "
              >
                <span
                  className="
                    text-xs

                    text-zinc-500

                    dark:text-zinc-400
                  "
                >
                  React
                </span>

                <span
                  className="
                    text-xs

                    text-zinc-500

                    dark:text-zinc-400
                  "
                >
                  Next.js
                </span>

                <span
                  className="
                    text-xs

                    text-zinc-500

                    dark:text-zinc-400
                  "
                >
                  Vue.js
                </span>

                <span
                  className="
                    text-xs

                    text-zinc-500

                    dark:text-zinc-400
                  "
                >
                  Node.js
                </span>

                <span
                  className="
                    text-xs

                    text-zinc-500

                    dark:text-zinc-400
                  "
                >
                  Odoo
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.6,
            }}
            className="
              mt-16

              grid

              border-y
              border-zinc-200

              sm:grid-cols-3

              lg:mt-24

              dark:border-white/10
            "
          >
            <div
              className="
                border-b
                border-zinc-200

                py-6

                sm:border-b-0
                sm:border-r

                dark:border-white/10
              "
            >
              <p
                className="
                  text-[9px]

                  uppercase
                  tracking-[0.18em]

                  text-zinc-400
                "
              >
                Experience
              </p>

              <p
                className="
                  mt-2

                  text-3xl
                  font-medium

                  tracking-[-0.05em]
                "
              >
                2+
              </p>

              <p
                className="
                  mt-2

                  text-xs

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                Years
              </p>
            </div>

            <div
              className="
                border-b
                border-zinc-200

                py-6

                sm:border-b-0
                sm:border-r
                sm:px-7

                dark:border-white/10
              "
            >
              <p
                className="
                  text-[9px]

                  uppercase
                  tracking-[0.18em]

                  text-zinc-400
                "
              >
                Delivery
              </p>

              <p
                className="
                  mt-2

                  text-3xl
                  font-medium

                  tracking-[-0.05em]
                "
              >
                32+
              </p>

              <p
                className="
                  mt-2

                  text-xs

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                Websites & applications
              </p>
            </div>

            <div
              className="
                py-6

                sm:pl-7
              "
            >
              <p
                className="
                  text-[9px]

                  uppercase
                  tracking-[0.18em]

                  text-zinc-400
                "
              >
                Current
              </p>

              <p
                className="
                  mt-2

                  text-3xl
                  font-medium

                  tracking-[-0.05em]
                "
              >
                Heegan
              </p>

              <p
                className="
                  mt-2

                  text-xs

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                Technology
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="
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
            max-w-[1400px]

            py-16

            sm:py-20
            lg:py-28
          "
        >
          <motion.div
            {...reveal}
            className="
              grid
              gap-10

              lg:grid-cols-[0.32fr_1.68fr]
              lg:gap-16
            "
          >
            <div>
              <FiBriefcase
                size={20}
                className="
                  text-blue-600

                  dark:text-blue-400
                "
              />

              <p
                className="
                  mt-5

                  text-[10px]
                  font-semibold

                  uppercase
                  tracking-[0.2em]

                  text-zinc-400
                "
              >
                Professional Work
              </p>

              <h2
                className="
                  mt-4

                  text-4xl
                  font-medium

                  tracking-[-0.055em]

                  sm:text-5xl
                "
              >
                Selected{" "}
                <span
                  className="
                    block

                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  projects.
                </span>
              </h2>
            </div>

            <div>
              <div
                className="
                  grid

                  border-t
                  border-zinc-200

                  lg:grid-cols-[0.72fr_1.28fr]

                  dark:border-white/10
                "
              >
                <div
                  className="
                    lg:border-r
                    lg:border-zinc-200

                    dark:lg:border-white/10
                  "
                >
                  {projects.map(
                    (
                      project,
                      index
                    ) => {
                      const active =
                        activeProject ===
                        index;

                      return (
                        <button
                          key={
                            project.id
                          }
                          type="button"
                          onMouseEnter={() =>
                            setActiveProject(
                              index
                            )
                          }
                          onFocus={() =>
                            setActiveProject(
                              index
                            )
                          }
                          onClick={() =>
                            setActiveProject(
                              index
                            )
                          }
                          className={`
                            group
                            relative

                            block
                            w-full

                            border-b
                            border-zinc-200

                            px-4
                            py-6

                            text-left

                            transition-colors

                            sm:px-6

                            dark:border-white/10

                            ${
                              active
                                ? `
                                  bg-zinc-50

                                  dark:bg-white/[0.025]
                                `
                                : ""
                            }
                          `}
                        >
                          {active && (
                            <motion.span
                              layoutId="project-active"
                              className="
                                absolute
                                bottom-0
                                left-0
                                top-0

                                w-[2px]

                                bg-blue-600

                                dark:bg-blue-400
                              "
                            />
                          )}

                          <div
                            className="
                              grid

                              grid-cols-[42px_1fr]

                              gap-3
                            "
                          >
                            <span
                              className="
                                font-mono

                                text-[10px]

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

                            <div>
                              <p
                                className="
                                  text-[9px]
                                  font-semibold

                                  uppercase
                                  tracking-[0.16em]

                                  text-zinc-400
                                "
                              >
                                {
                                  project.category
                                }
                              </p>

                              <h3
                                className={`
                                  mt-2

                                  text-lg
                                  font-medium

                                  tracking-[-0.035em]

                                  transition-colors

                                  sm:text-xl

                                  ${
                                    active
                                      ? `
                                        text-zinc-950

                                        dark:text-white
                                      `
                                      : `
                                        text-zinc-600

                                        dark:text-zinc-400
                                      `
                                  }
                                `}
                              >
                                {
                                  project.title
                                }
                              </h3>
                            </div>
                          </div>
                        </button>
                      );
                    }
                  )}
                </div>

                {selectedProject && (
                  <motion.div
                    key={
                      selectedProject.id
                    }
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="
                      relative

                      min-h-[560px]

                      overflow-hidden

                      px-4
                      py-10

                      sm:px-7

                      lg:p-12
                    "
                  >
                    <span
                      className="
                        pointer-events-none

                        absolute

                        -right-3
                        -top-8

                        font-mono

                        text-[9rem]

                        leading-none

                        text-zinc-100

                        dark:text-white/[0.025]
                      "
                    >
                      {(
                        activeProject +
                        1
                      )
                        .toString()
                        .padStart(
                          2,
                          "0"
                        )}
                    </span>

                    <div
                      className="
                        relative
                        z-10
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center

                          border
                          border-zinc-200

                          dark:border-white/10
                        "
                      >
                        <FiGlobe
                          size={20}
                          className="
                            text-blue-600

                            dark:text-blue-400
                          "
                        />
                      </div>

                      <p
                        className="
                          mt-8

                          text-[9px]
                          font-semibold

                          uppercase
                          tracking-[0.18em]

                          text-blue-600

                          dark:text-blue-400
                        "
                      >
                        {
                          selectedProject.category
                        }
                      </p>

                      <h3
                        className="
                          mt-4
                          max-w-3xl

                          text-3xl
                          font-medium

                          leading-[1]

                          tracking-[-0.055em]

                          sm:text-4xl
                          lg:text-5xl
                        "
                      >
                        {
                          selectedProject.title
                        }
                      </h3>

                      <p
                        className="
                          mt-7
                          max-w-2xl

                          text-sm
                          leading-7

                          text-zinc-500

                          sm:text-base
                          sm:leading-8

                          dark:text-zinc-400
                        "
                      >
                        {
                          selectedProject.description
                        }
                      </p>

                      <div
                        className="
                          mt-10

                          border-t
                          border-zinc-200

                          dark:border-white/10
                        "
                      >
                        <div
                          className="
                            py-5
                          "
                        >
                          <p
                            className="
                              text-[9px]

                              uppercase
                              tracking-[0.18em]

                              text-zinc-400
                            "
                          >
                            Contribution
                          </p>

                          <p
                            className="
                              mt-3
                              max-w-2xl

                              text-sm
                              leading-7

                              text-zinc-600

                              dark:text-zinc-300
                            "
                          >
                            {
                              selectedProject.contribution
                            }
                          </p>
                        </div>
                      </div>

                      {selectedProject.liveUrl && (
                        <div
                          className="
                            mt-8
                          "
                        >
                          <a
                            href={
                              selectedProject.liveUrl
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              group

                              inline-flex
                              items-center

                              gap-3

                              border-b
                              border-zinc-950

                              pb-2

                              text-sm
                              font-medium

                              dark:border-white
                            "
                          >
                            Visit live website

                            <FiArrowUpRight
                              size={15}
                              className="
                                transition-transform

                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                              "
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="
          border-t
          border-zinc-200

          px-4

          sm:px-6
          md:px-8
          lg:px-10

          dark:border-white/10
        "
      >
        <motion.div
          {...reveal}
          className="
            mx-auto
            max-w-[1400px]

            py-16

            sm:py-20
            lg:py-28
          "
        >
          <div
            className="
              grid
              gap-10

              lg:grid-cols-[0.32fr_1.68fr]
              lg:gap-16
            "
          >
            <div>
              <FiLayers
                size={20}
                className="
                  text-blue-600

                  dark:text-blue-400
                "
              />

              <p
                className="
                  mt-5

                  text-[10px]
                  font-semibold

                  uppercase
                  tracking-[0.2em]

                  text-zinc-400
                "
              >
                Engineering
              </p>

              <h2
                className="
                  mt-4

                  text-4xl
                  font-medium

                  tracking-[-0.055em]

                  sm:text-5xl
                "
              >
                What I{" "}
                <span
                  className="
                    block

                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  work on.
                </span>
              </h2>
            </div>

            <div
              className="
                grid

                border-t
                border-zinc-200

                sm:grid-cols-2

                dark:border-white/10
              "
            >
              {workAreas.map(
                (
                  item,
                  index
                ) => {
                  const Icon =
                    item.icon;

                  return (
                    <motion.article
                      key={
                        item.title
                      }
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay:
                          index *
                          0.05,
                      }}
                      className={`
                        min-h-[260px]

                        border-b
                        border-zinc-200

                        py-8

                        dark:border-white/10

                        ${
                          index %
                            2 ===
                          0
                            ? `
                              sm:border-r
                              sm:pr-8
                            `
                            : `
                              sm:pl-8
                            `
                        }
                      `}
                    >
                      <Icon
                        size={19}
                        className="
                          text-blue-600

                          dark:text-blue-400
                        "
                      />

                      <h3
                        className="
                          mt-9

                          text-xl
                          font-medium

                          tracking-[-0.04em]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-md

                          text-sm
                          leading-7

                          text-zinc-500

                          dark:text-zinc-400
                        "
                      >
                        {
                          item.description
                        }
                      </p>
                    </motion.article>
                  );
                }
              )}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="
          border-t
          border-zinc-200

          px-4

          sm:px-6
          md:px-8
          lg:px-10

          dark:border-white/10
        "
      >
        <motion.div
          {...reveal}
          className="
            mx-auto
            max-w-[1400px]

            py-16

            sm:py-20
            lg:py-28
          "
        >
          <div
            className="
              flex
              flex-col

              gap-8

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <h2
              className="
                max-w-[950px]

                text-[clamp(2.7rem,7vw,6rem)]

                font-medium

                leading-[0.95]

                tracking-[-0.06em]
              "
            >
              Building beyond{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                the interface.
              </span>
            </h2>

            <Link
              to="/about"
              className="
                group

                inline-flex
                w-fit
                items-center

                gap-3

                border-b
                border-zinc-950

                pb-2

                text-sm
                font-medium

                dark:border-white
              "
            >
              About my experience

              <FiArrowRight
                size={15}
                className="
                  transition-transform

                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}