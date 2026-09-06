import {
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
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

import ProjectLogo from "../components/projects/ProjectLogo";

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

const workAreas = [
  {
    icon: FiCode,

    title:
      "Frontend Development",

    description:
      "Building and maintaining responsive production interfaces with React JSX, TypeScript, Next.js and Vue.js.",
  },

  {
    icon: FiServer,

    title:
      "Backend & APIs",

    description:
      "Node.js, Express.js, REST APIs, CRUD workflows, debugging and integration testing.",
  },

  {
    icon: FiDatabase,

    title:
      "Database Workflows",

    description:
      "Working with MongoDB, Mongoose and PostgreSQL in full-stack applications.",
  },

  {
    icon: FiTool,

    title:
      "Odoo & Production",

    description:
      "Odoo maintenance, troubleshooting, workflow support, deployments and release verification.",
  },
];

export default function Projects() {
  const projects =
    portfolioData.projects;

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
              <div className="overflow-hidden">
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
                  Selected
                </motion.h1>
              </div>

              <div className="overflow-hidden">
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
                  production work.
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 22,
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
                Selected websites from my
                work across technology,
                healthcare, public-sector,
                security, corporate and
                business organizations.
              </p>

              <div
                className="
                  mt-8

                  border-t
                  border-zinc-200

                  pt-6

                  dark:border-white/10
                "
              >
                <p
                  className="
                    text-xs
                    leading-6

                    text-zinc-500

                    dark:text-zinc-400
                  "
                >
                  Part of 32+ websites,
                  applications, dashboards
                  and production systems.
                </p>
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
                Production projects
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
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 0.65,
              ease,
            }}
            className="
              flex
              flex-col

              gap-7

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-semibold

                  uppercase
                  tracking-[0.2em]

                  text-zinc-400
                "
              >
                Selected Projects
              </p>

              <h2
                className="
                  mt-4

                  max-w-3xl

                  text-[clamp(2.6rem,6vw,5.3rem)]

                  font-medium

                  leading-[1]

                  tracking-[-0.06em]
                "
              >
                Work delivered for{" "}
                <span
                  className="
                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  real organizations.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-md

                text-sm
                leading-7

                text-zinc-500

                dark:text-zinc-400
              "
            >
              Each project below is part
              of my professional website
              and software delivery
              experience.
            </p>
          </motion.div>

          <div
            className="
              mt-12

              grid
              gap-5

              md:grid-cols-2

              xl:grid-cols-3
              xl:gap-6
            "
          >
            {projects.map(
              (
                project,
                index
              ) => (
                <motion.article
                  key={
                    project.id
                  }
                  initial={{
                    opacity: 0,
                    y: 26,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.55,

                    delay:
                      index *
                      0.04,
                  }}
                  className="
                    group
                    relative

                    flex
                    min-h-[470px]
                    flex-col

                    overflow-hidden

                    border
                    border-zinc-200

                    bg-white

                    p-6

                    transition-colors
                    duration-300

                    hover:border-zinc-300
                    hover:bg-zinc-50

                    sm:p-7

                    dark:border-white/10
                    dark:bg-[#09090b]

                    dark:hover:border-white/20
                    dark:hover:bg-white/[0.025]
                  "
                >
                  <span
                    className="
                      pointer-events-none

                      absolute

                      -bottom-9
                      right-2

                      font-mono

                      text-[7rem]

                      leading-none

                      tracking-[-0.1em]

                      text-zinc-100

                      dark:text-white/[0.02]
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

                  <div
                    className="
                      relative
                      z-10

                      flex
                      items-start
                      justify-between

                      gap-5
                    "
                  >
                    <ProjectLogo
                      title={
                        project.title
                      }
                      logoUrl={
                        project.logoUrl
                      }
                      size="lg"
                    />

                    <span
                      className="
                        text-[9px]
                        font-medium

                        uppercase
                        tracking-[0.16em]

                        text-zinc-400
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  <div
                    className="
                      relative
                      z-10

                      mt-10
                    "
                  >
                    <h3
                      className="
                        max-w-md

                        text-2xl
                        font-medium

                        leading-[1.1]

                        tracking-[-0.05em]

                        transition-colors

                        group-hover:text-blue-600

                        sm:text-3xl

                        dark:group-hover:text-blue-400
                      "
                    >
                      {project.title}
                    </h3>

                    {project.organization && (
                      <p
                        className="
                          mt-3

                          text-[10px]

                          uppercase
                          tracking-[0.15em]

                          text-zinc-400
                        "
                      >
                        {
                          project.organization
                        }
                      </p>
                    )}

                    <p
                      className="
                        mt-6

                        text-sm
                        leading-7

                        text-zinc-500

                        dark:text-zinc-400
                      "
                    >
                      {project.description}
                    </p>
                  </div>

                  <div
                    className="
                      relative
                      z-10

                      mt-auto

                      pt-8
                    "
                  >
                    <div
                      className="
                        flex
                        flex-wrap

                        gap-x-4
                        gap-y-2
                      "
                    >
                      {project.technologies.map(
                        (
                          technology
                        ) => (
                          <span
                            key={
                              technology
                            }
                            className="
                              text-[10px]
                              font-medium

                              text-zinc-500

                              dark:text-zinc-400
                            "
                          >
                            {
                              technology
                            }
                          </span>
                        )
                      )}
                    </div>

                    <div
                      className="
                        mt-6

                        border-t
                        border-zinc-200

                        pt-5

                        dark:border-white/10
                      "
                    >
                      {project.liveUrl ? (
                        <a
                          href={
                            project.liveUrl
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/link

                            flex
                            items-center
                            justify-between

                            gap-4

                            text-sm
                            font-medium
                          "
                        >
                          <span>
                            Visit website
                          </span>

                          <span
                            className="
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center

                              border
                              border-zinc-200

                              text-zinc-500

                              transition-all

                              group-hover/link:border-blue-600
                              group-hover/link:bg-blue-600
                              group-hover/link:text-white

                              dark:border-white/10

                              dark:group-hover/link:border-blue-400
                              dark:group-hover/link:bg-blue-400
                              dark:group-hover/link:text-zinc-950
                            "
                          >
                            <FiArrowUpRight
                              size={15}
                              className="
                                transition-transform

                                group-hover/link:-translate-y-0.5
                                group-hover/link:translate-x-0.5
                              "
                            />
                          </span>
                        </a>
                      ) : (
                        <p
                          className="
                            text-xs

                            text-zinc-400
                          "
                        >
                          Professional project
                        </p>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            )}
          </div>
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

            grid
            max-w-[1400px]

            gap-10

            py-16

            sm:py-20

            lg:grid-cols-[0.32fr_1.68fr]
            lg:gap-16
            lg:py-28
          "
        >
          <motion.div
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
              duration: 0.6,
              ease,
            }}
          >
            <p
              className="
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
              Across the{" "}
              <span
                className="
                  block

                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                stack.
              </span>
            </h2>
          </motion.div>

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
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
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
              More than what{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                fits in a portfolio.
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