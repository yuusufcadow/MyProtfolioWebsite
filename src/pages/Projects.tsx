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
  FiGrid,
  FiLayers,
  FiLock,
  FiShield,
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

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
}

interface PrivateWorkItem {
  number: string;
  title: string;
  description: string;
}

const HEEGAN_URL =
  "https://heegantechnology.com/";

const publicProjects =
  portfolioData.projects as ProjectItem[];

const privateWork: PrivateWorkItem[] = [
  {
    number: "01",
    title:
      "Ministry & Public-Sector Websites",
    description:
      "Web platforms and digital interfaces developed for public-sector and ministry-related projects. Client names, screenshots and project details are not presented publicly.",
  },

  {
    number: "02",
    title:
      "Admin Systems & Dashboards",
    description:
      "Administrative interfaces and dashboards built for managing business operations, application data and internal workflows.",
  },

  {
    number: "03",
    title:
      "Business Websites & Platforms",
    description:
      "Professional websites and application interfaces created for businesses across different industries.",
  },

  {
    number: "04",
    title:
      "Pharmacy Systems",
    description:
      "Digital interfaces and systems developed for pharmacy-related business operations and management.",
  },

  {
    number: "05",
    title:
      "Hospital & Healthcare Systems",
    description:
      "Web interfaces and software-related work for hospital and healthcare environments, with client information kept private.",
  },

  {
    number: "06",
    title:
      "Custom Web Applications",
    description:
      "Additional client-specific websites, dashboards and web applications built according to different organizational requirements.",
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

export default function Projects() {
  const [
    activeProject,
    setActiveProject,
  ] = useState<number>(0);

  const selectedProject =
    publicProjects[
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
          pb-16
          pt-[95px]

          sm:px-6
          sm:pb-20
          sm:pt-[110px]

          md:px-8

          lg:px-10
          lg:pb-28
          lg:pt-[125px]
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
              mt-8

              grid
              gap-10

              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
              lg:gap-16
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
                    duration: 0.85,

                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    text-[clamp(3.3rem,9vw,7.8rem)]

                    font-medium

                    leading-[0.89]

                    tracking-[-0.065em]
                  "
                >
                  Building real
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
                    duration: 0.85,
                    delay: 0.08,

                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    text-[clamp(3.3rem,9vw,7.8rem)]

                    font-medium

                    leading-[0.89]

                    tracking-[-0.065em]

                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  digital products.
                </motion.h1>
              </div>
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
                delay: 0.28,
                duration: 0.65,
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
                My portfolio includes
                public personal
                projects alongside
                more than 32 production
                and client projects
                involving websites,
                dashboards, business
                platforms and
                software interfaces.
              </p>

              <div
                className="
                  mt-7

                  flex
                  items-center

                  gap-3

                  border-t
                  border-zinc-200

                  pt-5

                  dark:border-white/10
                "
              >
                <FiCode
                  size={15}
                  className="
                    shrink-0

                    text-blue-600

                    dark:text-blue-400
                  "
                />

                <span
                  className="
                    text-xs

                    text-zinc-500

                    dark:text-zinc-400
                  "
                >
                  Web · Dashboards ·
                  Full-Stack · Production
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
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
              duration: 0.6,
            }}
            className="
              mt-14

              grid

              border-y
              border-zinc-200

              sm:grid-cols-3

              lg:mt-20

              dark:border-white/10
            "
          >
            <div
              className="
                border-b
                border-zinc-200

                py-5

                sm:border-b-0
                sm:border-r
                sm:py-6

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
                Production Work
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
                Client & production
                projects
              </p>
            </div>

            <div
              className="
                border-b
                border-zinc-200

                py-5

                sm:border-b-0
                sm:border-r
                sm:px-7
                sm:py-6

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
                Company
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
                Professional development
                experience
              </p>
            </div>

            <div
              className="
                py-5

                sm:py-6
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
                Public Work
              </p>

              <p
                className="
                  mt-2

                  text-3xl
                  font-medium

                  tracking-[-0.05em]
                "
              >
                Selected
              </p>

              <p
                className="
                  mt-2

                  text-xs

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                Projects I can showcase
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
        <motion.div
          {...reveal}
          className="
            mx-auto

            grid
            max-w-[1400px]

            gap-10

            py-16

            sm:py-20

            lg:grid-cols-[0.34fr_1.66fr]
            lg:gap-14
            lg:py-28
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
              Featured Work
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
              Heegan
              <span
                className="
                  block

                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                Technology.
              </span>
            </h2>
          </div>

          <div
            className="
              relative

              overflow-hidden

              border-t
              border-zinc-200

              dark:border-white/10
            "
          >
            <span
              className="
                pointer-events-none

                absolute

                -bottom-12
                right-0

                select-none

                font-mono

                text-[8rem]

                leading-none

                tracking-[-0.12em]

                text-zinc-100

                sm:text-[11rem]

                lg:text-[14rem]

                dark:text-white/[0.025]
              "
            >
              01
            </span>

            <div
              className="
                relative
                z-10

                grid

                lg:grid-cols-[0.7fr_1.3fr]
              "
            >
              <div
                className="
                  border-b
                  border-zinc-200

                  py-8

                  lg:border-b-0
                  lg:border-r
                  lg:py-12
                  lg:pr-10

                  dark:border-white/10
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    border
                    border-zinc-200

                    dark:border-white/10
                  "
                >
                  <FiGlobe
                    size={22}
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
                  Live Website
                </p>

                <p
                  className="
                    mt-3

                    text-xs

                    text-zinc-400
                  "
                >
                  Professional Work
                </p>
              </div>

              <div
                className="
                  py-8

                  lg:py-12
                  lg:pl-12
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold

                    uppercase
                    tracking-[0.18em]

                    text-zinc-400
                  "
                >
                  Heegan Technology Website
                </p>

                <h3
                  className="
                    mt-4
                    max-w-4xl

                    text-3xl
                    font-medium

                    tracking-[-0.05em]

                    sm:text-4xl

                    lg:text-5xl
                  "
                >
                  I built the{" "}
                  <span
                    className="
                      text-zinc-400

                      dark:text-zinc-600
                    "
                  >
                    Heegan Technology
                    website.
                  </span>
                </h3>

                <p
                  className="
                    mt-7
                    max-w-3xl

                    text-sm
                    leading-7

                    text-zinc-500

                    sm:text-base
                    sm:leading-8

                    dark:text-zinc-400
                  "
                >
                  As part of my work as
                  a Frontend Developer
                  at Heegan Technology,
                  I built the company's
                  public website and
                  worked on modern
                  responsive web
                  interfaces.
                </p>

                <div
                  className="
                    mt-9

                    grid

                    border-t
                    border-zinc-200

                    sm:grid-cols-2

                    dark:border-white/10
                  "
                >
                  <div
                    className="
                      border-b
                      border-zinc-200

                      py-5

                      sm:border-r
                      sm:pr-6

                      dark:border-white/10
                    "
                  >
                    <p
                      className="
                        text-[9px]

                        uppercase
                        tracking-[0.17em]

                        text-zinc-400
                      "
                    >
                      Role
                    </p>

                    <p
                      className="
                        mt-2

                        text-sm
                        font-medium
                      "
                    >
                      Frontend Developer
                    </p>
                  </div>

                  <div
                    className="
                      border-b
                      border-zinc-200

                      py-5

                      sm:pl-6

                      dark:border-white/10
                    "
                  >
                    <p
                      className="
                        text-[9px]

                        uppercase
                        tracking-[0.17em]

                        text-zinc-400
                      "
                    >
                      Organization
                    </p>

                    <p
                      className="
                        mt-2

                        text-sm
                        font-medium
                      "
                    >
                      Heegan Technology
                    </p>
                  </div>
                </div>

                <div
                  className="
                    mt-8

                    flex
                    flex-wrap

                    gap-x-5
                    gap-y-3
                  "
                >
                  {[
                    "React.js",
                    "JavaScript",
                    "Responsive UI",
                    "Web Development",
                  ].map(
                    (
                      technology
                    ) => (
                      <span
                        key={
                          technology
                        }
                        className="
                          text-sm
                          font-medium

                          text-zinc-700

                          dark:text-zinc-300
                        "
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

                <div
                  className="
                    mt-9

                    border-t
                    border-zinc-200

                    pt-7

                    dark:border-white/10
                  "
                >
                  <a
                    href={
                      HEEGAN_URL
                    }
                    target="_blank"
                    rel="noreferrer"
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
                    Visit Heegan Technology

                    <FiArrowUpRight
                      className="
                        transition-transform

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>
                </div>
              </div>
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

              lg:grid-cols-[0.34fr_1.66fr]
              lg:gap-14
            "
          >
            <div>
              <FiLock
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
                32+
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

              <p
                className="
                  mt-6
                  max-w-[290px]

                  text-sm
                  leading-7

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                A large part of my
                professional work
                cannot be publicly
                presented with client
                names, screenshots or
                internal details.
              </p>
            </div>

            <div>
              <div
                className="
                  border-y
                  border-zinc-200

                  py-6

                  dark:border-white/10
                "
              >
                <div
                  className="
                    flex
                    items-start

                    gap-4
                  "
                >
                  <FiShield
                    size={18}
                    className="
                      mt-1
                      shrink-0

                      text-blue-600

                      dark:text-blue-400
                    "
                  />

                  <div>
                    <p
                      className="
                        text-[9px]
                        font-semibold

                        uppercase
                        tracking-[0.18em]

                        text-zinc-400
                      "
                    >
                      Confidentiality
                    </p>

                    <p
                      className="
                        mt-3
                        max-w-3xl

                        text-sm
                        leading-7

                        text-zinc-500

                        sm:text-base

                        dark:text-zinc-400
                      "
                    >
                      I respect the
                      privacy of the
                      organizations and
                      clients I work
                      with. Therefore,
                      confidential
                      projects are
                      represented here
                      only by general
                      project categories.
                    </p>
                  </div>
                </div>
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
                {privateWork.map(
                  (
                    item,
                    index
                  ) => (
                    <motion.article
                      key={
                        item.number
                      }
                      initial={{
                        opacity: 0,
                        y: 22,
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
                          0.04,
                      }}
                      className={`
                        group
                        relative

                        min-h-[260px]

                        overflow-hidden

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
                      <span
                        className="
                          pointer-events-none

                          absolute

                          -bottom-6
                          right-3

                          font-mono

                          text-[5rem]

                          leading-none

                          text-zinc-100

                          dark:text-white/[0.025]
                        "
                      >
                        {item.number}
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
                            items-center
                            justify-between
                          "
                        >
                          <span
                            className="
                              font-mono

                              text-[10px]

                              text-blue-600

                              dark:text-blue-400
                            "
                          >
                            {item.number}
                          </span>

                          <FiLock
                            size={13}
                            className="
                              text-zinc-300

                              dark:text-zinc-700
                            "
                          />
                        </div>

                        <h3
                          className="
                            mt-10

                            max-w-sm

                            text-xl
                            font-medium

                            tracking-[-0.04em]

                            transition-colors

                            group-hover:text-blue-600

                            dark:group-hover:text-blue-400
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
                      </div>
                    </motion.article>
                  )
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
              flex
              flex-col

              gap-5

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
                Public Portfolio
              </p>

              <h2
                className="
                  mt-4
                  max-w-3xl

                  text-4xl
                  font-medium

                  tracking-[-0.055em]

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                Projects I can{" "}
                <span
                  className="
                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  show publicly.
                </span>
              </h2>
            </div>

            <p
              className="
                max-w-sm

                text-sm
                leading-7

                text-zinc-500

                dark:text-zinc-400
              "
            >
              Hover on desktop or tap
              a project to explore
              its overview and
              technology stack.
            </p>
          </motion.div>

          <div
            className="
              mt-12

              grid

              border-t
              border-zinc-200

              lg:mt-14
              lg:grid-cols-[0.8fr_1.2fr]

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
              {publicProjects.map(
                (
                  project,
                  index
                ) => {
                  const isActive =
                    activeProject ===
                    index;

                  const number = (
                    index + 1
                  )
                    .toString()
                    .padStart(
                      2,
                      "0"
                    );

                  return (
                    <motion.button
                      key={
                        project.title
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
                      whileHover={{
                        x: 3,
                      }}
                      className={`
                        group
                        relative

                        block
                        w-full

                        overflow-hidden

                        border-b
                        border-zinc-200

                        py-6

                        text-left

                        transition-colors

                        sm:py-7

                        dark:border-white/10

                        ${
                          isActive
                            ? `
                              bg-zinc-50

                              dark:bg-white/[0.025]
                            `
                            : `
                              bg-transparent
                            `
                        }
                      `}
                    >
                      <motion.span
                        animate={{
                          height:
                            isActive
                              ? "100%"
                              : "0%",
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="
                          absolute
                          left-0
                          top-0

                          w-[2px]

                          bg-blue-600

                          dark:bg-blue-400
                        "
                      />

                      <div
                        className="
                          relative
                          z-10

                          grid

                          grid-cols-[42px_1fr_24px]

                          gap-3

                          px-4

                          sm:grid-cols-[55px_1fr_30px]
                          sm:gap-4
                          sm:px-7
                        "
                      >
                        <span
                          className={`
                            font-mono

                            text-xs

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
                          {number}
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

                              sm:text-2xl

                              ${
                                isActive
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

                          <p
                            className="
                              mt-2

                              text-xs

                              text-zinc-400
                            "
                          >
                            {
                              project.technologies
                                .slice(
                                  0,
                                  3
                                )
                                .join(
                                  " · "
                                )
                            }
                          </p>
                        </div>

                        <FiArrowRight
                          className={`
                            mt-5

                            transition-all

                            ${
                              isActive
                                ? `
                                  translate-x-1

                                  text-blue-600

                                  dark:text-blue-400
                                `
                                : `
                                  text-zinc-300

                                  dark:text-zinc-700
                                `
                            }
                          `}
                        />
                      </div>
                    </motion.button>
                  );
                }
              )}
            </div>

            {selectedProject && (
              <motion.div
                key={
                  selectedProject.title
                }
                initial={{
                  opacity: 0,
                  y: 14,
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

                  min-h-[520px]

                  overflow-hidden

                  px-4
                  py-9

                  sm:px-7
                  sm:py-10

                  lg:min-h-[600px]
                  lg:p-12
                "
              >
                <span
                  className="
                    pointer-events-none

                    absolute

                    -right-5
                    -top-8

                    font-mono

                    text-[8rem]

                    leading-none

                    tracking-[-0.12em]

                    text-zinc-100

                    sm:text-[10rem]

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
                      flex-wrap
                      items-center

                      gap-3
                    "
                  >
                    <span
                      className="
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
                    </span>

                    <span
                      className="
                        h-px
                        w-6

                        bg-zinc-300

                        dark:bg-zinc-700
                      "
                    />

                    <span
                      className="
                        font-mono

                        text-[9px]

                        uppercase
                        tracking-[0.15em]

                        text-zinc-400
                      "
                    >
                      Public Project
                    </span>
                  </div>

                  <h3
                    className="
                      mt-5
                      max-w-3xl

                      text-3xl
                      font-medium

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
                      max-w-3xl

                      text-sm
                      leading-7

                      text-zinc-600

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
                        grid

                        sm:grid-cols-[150px_1fr]
                      "
                    >
                      <div
                        className="
                          border-b
                          border-zinc-200

                          py-5

                          sm:border-r
                          sm:pr-5

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
                          Category
                        </p>
                      </div>

                      <div
                        className="
                          border-b
                          border-zinc-200

                          py-5

                          sm:pl-6

                          dark:border-white/10
                        "
                      >
                        <p
                          className="
                            text-sm
                            font-medium
                          "
                        >
                          {
                            selectedProject.category
                          }
                        </p>
                      </div>

                      <div
                        className="
                          border-b
                          border-zinc-200

                          py-5

                          sm:border-r
                          sm:pr-5

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
                          Technology
                        </p>
                      </div>

                      <div
                        className="
                          border-b
                          border-zinc-200

                          py-5

                          sm:pl-6

                          dark:border-white/10
                        "
                      >
                        <div
                          className="
                            flex
                            flex-wrap

                            gap-x-5
                            gap-y-3
                          "
                        >
                          {selectedProject.technologies.map(
                            (
                              technology
                            ) => (
                              <span
                                key={
                                  technology
                                }
                                className="
                                  text-sm
                                  font-medium

                                  text-zinc-700

                                  dark:text-zinc-300
                                "
                              >
                                {
                                  technology
                                }
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="
                      mt-10

                      flex
                      items-start

                      gap-4

                      border-t
                      border-zinc-200

                      pt-7

                      dark:border-white/10
                    "
                  >
                    <FiLayers
                      size={18}
                      className="
                        mt-1
                        shrink-0

                        text-blue-600

                        dark:text-blue-400
                      "
                    />

                    <p
                      className="
                        max-w-xl

                        text-sm
                        leading-7

                        text-zinc-500

                        dark:text-zinc-400
                      "
                    >
                      This project is
                      part of the work
                      that I can present
                      publicly in my
                      portfolio.
                    </p>
                  </div>
                </div>
              </motion.div>
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
          {...reveal}
          className="
            mx-auto

            grid
            max-w-[1400px]

            gap-8

            py-16

            sm:py-20

            lg:grid-cols-[0.34fr_1.66fr]
            lg:gap-14
            lg:py-28
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
              Experience
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-[1000px]

                text-[clamp(2.4rem,7vw,5.5rem)]

                font-medium

                leading-[1]

                tracking-[-0.055em]
              "
            >
              From personal projects to{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                real production
                environments.
              </span>
            </h2>

            <div
              className="
                mt-10

                grid

                border-t
                border-zinc-200

                sm:grid-cols-2

                dark:border-white/10
              "
            >
              {[
                {
                  number: "01",
                  icon: FiGlobe,
                  title:
                    "Web Development",
                  description:
                    "Responsive company websites, organizational platforms and modern web interfaces.",
                },

                {
                  number: "02",
                  icon: FiGrid,
                  title:
                    "Admin Dashboards",
                  description:
                    "Administrative interfaces for managing application data and operational workflows.",
                },

                {
                  number: "03",
                  icon: FiDatabase,
                  title:
                    "Data-driven Systems",
                  description:
                    "Applications that connect interfaces with APIs, databases and backend services.",
                },

                {
                  number: "04",
                  icon: FiCode,
                  title:
                    "Full-Stack Growth",
                  description:
                    "Continuing from frontend development toward complete full-stack software engineering.",
                },
              ].map(
                (
                  item,
                  index
                ) => {
                  const Icon =
                    item.icon;

                  return (
                    <div
                      key={
                        item.number
                      }
                      className={`
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
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <Icon
                          size={19}
                          className="
                            text-blue-600

                            dark:text-blue-400
                          "
                        />

                        <span
                          className="
                            font-mono

                            text-[10px]

                            text-zinc-400
                          "
                        >
                          {item.number}
                        </span>
                      </div>

                      <h3
                        className="
                          mt-8

                          text-xl
                          font-medium

                          tracking-[-0.035em]
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
                    </div>
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
          <p
            className="
              text-[10px]
              font-semibold

              uppercase
              tracking-[0.2em]

              text-zinc-400
            "
          >
            Continue
          </p>

          <div
            className="
              mt-5

              flex
              flex-col

              gap-8

              border-t
              border-zinc-200

              pt-8

              lg:flex-row
              lg:items-end
              lg:justify-between

              dark:border-white/10
            "
          >
            <h2
              className="
                max-w-[900px]

                text-[clamp(2.7rem,8vw,6.5rem)]

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
                can be shown.
              </span>
            </h2>

            <div
              className="
                flex
                flex-wrap

                gap-6
              "
            >
              <a
                href={
                  HEEGAN_URL
                }
                target="_blank"
                rel="noreferrer"
                className="
                  group

                  inline-flex
                  items-center

                  gap-3

                  border-b
                  border-zinc-300

                  pb-2

                  text-sm
                  font-medium

                  text-zinc-500

                  transition-colors

                  hover:border-zinc-950
                  hover:text-zinc-950

                  dark:border-white/20
                  dark:text-zinc-400

                  dark:hover:border-white
                  dark:hover:text-white
                "
              >
                Heegan Technology

                <FiArrowUpRight
                  className="
                    transition-transform

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              <Link
                to="/about"
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
                About my journey

                <FiArrowRight
                  className="
                    transition-transform

                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}