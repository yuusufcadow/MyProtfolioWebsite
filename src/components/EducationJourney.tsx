import {
  useState,
} from "react";

import {
  motion,
} from "motion/react";

import {
  FiArrowDown,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiMonitor,
} from "react-icons/fi";

import type {
  IconType,
} from "react-icons";

interface EducationStep {
  id: string;
  year: string;
  type: string;
  title: string;
  institution: string;
  description: string;
  details: string[];
  icon: IconType;
}

const educationSteps: EducationStep[] = [
  {
    id: "01",
    year: "2021",
    type: "Secondary Education",
    title: "Secondary School",
    institution:
      "Alabraar Private Secondary School",
    description:
      "Completed my secondary education and built the academic foundation that prepared me for university studies in technology.",
    details: [
      "Completed secondary education in 2021",
      "Developed foundational academic and problem-solving skills",
      "Prepared for higher education in Information Technology",
    ],
    icon: FiBookOpen,
  },

  {
    id: "02",
    year: "University",
    type: "Bachelor's Degree",
    title: "Information Technology",
    institution:
      "Zamzam University of Science and Technology",
    description:
      "Pursued a Bachelor's Degree in Information Technology, building a strong foundation in software development, databases, web technologies and systems.",
    details: [
      "Software development fundamentals",
      "Database systems",
      "Web technologies",
      "Systems analysis",
      "Information technology concepts",
      "Problem solving and application development",
    ],
    icon: FiMonitor,
  },

  {
    id: "03",
    year: "Final Year",
    type: "Academic Milestone",
    title: "Final-Year Project",
    institution:
      "Zamzam University of Science and Technology",
    description:
      "Completed and defended my final-year project as part of my university journey, applying technical knowledge to a practical software project.",
    details: [
      "Project planning",
      "System analysis",
      "Software implementation",
      "Technical presentation",
      "Final project defense",
    ],
    icon: FiLayers,
  },

  {
    id: "04",
    year: "Career Start",
    type: "Software Development",
    title: "Web Development",
    institution:
      "Professional Development",
    description:
      "After building my academic foundation, I moved deeper into practical web and software development.",
    details: [
      "HTML and CSS",
      "JavaScript",
      "React.js",
      "Responsive interfaces",
      "Dashboard development",
      "API integration",
    ],
    icon: FiCode,
  },

  {
    id: "05",
    year: "Growth",
    type: "Engineering Progression",
    title:
      "Frontend → Full-Stack Development",
    institution:
      "Software Engineering Journey",
    description:
      "My development journey expanded from frontend interfaces into APIs, backend systems, databases and complete full-stack applications.",
    details: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Odoo",
    ],
    icon: FiCode,
  },

  {
    id: "06",
    year: "Present",
    type: "Leadership",
    title: "CEO & Co-Founder",
    institution: "TechPoint",
    description:
      "My education and software development journey now continues through technology entrepreneurship and product development at TechPoint.",
    details: [
      "Technology entrepreneurship",
      "Digital products",
      "Software solutions",
      "Product thinking",
      "Team collaboration",
      "Technology leadership",
    ],
    icon: FiBriefcase,
  },
];

export default function EducationJourney() {
  const [activeStep, setActiveStep] =
    useState<number>(0);

  return (
    <section
      className="
        border-t
        border-zinc-200

        px-5
        py-20

        sm:px-7

        lg:px-10
        lg:py-28

        dark:border-white/10
      "
    >
      <div
        className="
          mx-auto
          max-w-[1400px]
        "
      >
        <div
          className="
            grid
            gap-14

            lg:grid-cols-[0.38fr_1.62fr]
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
            className="
              lg:sticky
              lg:top-[110px]
              lg:self-start
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
              Education & Progress
            </p>

            <h2
              className="
                mt-4

                max-w-sm

                text-4xl
                font-medium

                tracking-[-0.05em]

                sm:text-5xl
              "
            >
              From education to{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                engineering.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-sm

                text-sm
                leading-7

                text-zinc-500

                dark:text-zinc-400
              "
            >
              My journey from secondary
              education to Information
              Technology, software
              engineering and technology
              entrepreneurship.
            </p>

            <div
              className="
                mt-8

                hidden
                items-center
                gap-2

                text-[10px]
                font-medium
                uppercase
                tracking-[0.16em]

                text-zinc-400

                lg:flex
              "
            >
              <FiArrowDown />

              Scroll through journey
            </div>
          </motion.div>

          <div
            className="
              relative
            "
          >
            <div
              className="
                absolute
                bottom-0
                left-[20px]
                top-0

                w-px

                bg-zinc-200

                md:left-[31px]

                dark:bg-white/10
              "
            />

            <motion.div
              className="
                absolute
                left-[20px]
                top-0

                w-px

                bg-blue-600

                md:left-[31px]

                dark:bg-blue-400
              "
              animate={{
                height:
                  `${
                    ((activeStep + 1) /
                      educationSteps.length) *
                    100
                  }%`,
              }}
              transition={{
                duration: 0.5,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            />

            <div>
              {educationSteps.map(
                (
                  item,
                  index
                ) => {
                  const Icon =
                    item.icon;

                  const isActive =
                    index ===
                    activeStep;

                  const isCompleted =
                    index <
                    activeStep;

                  return (
                    <motion.article
                      key={
                        item.id
                      }
                      onViewportEnter={() =>
                        setActiveStep(
                          index
                        )
                      }
                      viewport={{
                        amount:
                          0.55,
                      }}
                      initial={{
                        opacity: 0,
                        y: 35,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration:
                          0.55,
                      }}
                      className="
                        relative

                        grid
                        gap-6

                        pb-14
                        pl-16

                        md:pl-24

                        lg:grid-cols-[1fr_170px]

                        last:pb-0
                      "
                    >
                      <motion.div
                        animate={{
                          scale:
                            isActive
                              ? 1.12
                              : 1,

                          backgroundColor:
                            isActive ||
                            isCompleted
                              ? "#2563eb"
                              : "#ffffff",
                        }}
                        transition={{
                          duration:
                            0.3,
                        }}
                        className={`
                          absolute
                          left-[8px]
                          top-1

                          z-10

                          flex
                          h-6
                          w-6
                          items-center
                          justify-center

                          border

                          md:left-[18px]
                          md:h-7
                          md:w-7

                          ${
                            isActive ||
                            isCompleted
                              ? `
                                border-blue-600
                                text-white

                                dark:border-blue-400
                              `
                              : `
                                border-zinc-300
                                text-zinc-400

                                dark:border-zinc-700
                                dark:bg-[#09090b]
                              `
                          }
                        `}
                      >
                        <span
                          className="
                            font-mono
                            text-[8px]
                          "
                        >
                          {
                            item.id
                          }
                        </span>
                      </motion.div>

                      <motion.div
                        animate={{
                          opacity:
                            isActive
                              ? 1
                              : 0.55,
                        }}
                        transition={{
                          duration:
                            0.3,
                        }}
                        className="
                          relative
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
                            className={`
                              text-[9px]
                              font-semibold
                              uppercase
                              tracking-[0.18em]

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
                            {
                              item.type
                            }
                          </span>

                          <span
                            className="
                              h-px
                              w-5

                              bg-zinc-300

                              dark:bg-zinc-700
                            "
                          />

                          <span
                            className="
                              font-mono
                              text-[10px]

                              text-zinc-400
                            "
                          >
                            {
                              item.year
                            }
                          </span>
                        </div>

                        <div
                          className="
                            mt-4

                            flex
                            items-start
                            gap-4
                          "
                        >
                          <Icon
                            size={
                              19
                            }
                            className={`
                              mt-1
                              shrink-0

                              transition-colors

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
                          />

                          <div>
                            <h3
                              className={`
                                text-2xl
                                font-medium

                                tracking-[-0.04em]

                                transition-colors

                                sm:text-3xl

                                ${
                                  isActive
                                    ? `
                                      text-zinc-950

                                      dark:text-white
                                    `
                                    : `
                                      text-zinc-500

                                      dark:text-zinc-500
                                    `
                                }
                              `}
                            >
                              {
                                item.title
                              }
                            </h3>

                            <p
                              className="
                                mt-2

                                text-sm
                                font-medium

                                text-zinc-500

                                dark:text-zinc-400
                              "
                            >
                              {
                                item.institution
                              }
                            </p>
                          </div>
                        </div>

                        <motion.div
                          animate={{
                            height:
                              isActive
                                ? "auto"
                                : "0px",

                            opacity:
                              isActive
                                ? 1
                                : 0,

                            marginTop:
                              isActive
                                ? 24
                                : 0,
                          }}
                          transition={{
                            duration:
                              0.4,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }}
                          className="
                            overflow-hidden
                          "
                        >
                          <p
                            className="
                              max-w-3xl

                              text-sm
                              leading-7

                              text-zinc-500

                              sm:text-base
                              sm:leading-8

                              dark:text-zinc-400
                            "
                          >
                            {
                              item.description
                            }
                          </p>

                          <div
                            className="
                              mt-6

                              grid
                              gap-px

                              border-y
                              border-zinc-200

                              sm:grid-cols-2

                              dark:border-white/10
                            "
                          >
                            {item.details.map(
                              (
                                detail,
                                detailIndex
                              ) => (
                                <motion.div
                                  key={
                                    detail
                                  }
                                  initial={{
                                    opacity:
                                      0,
                                    x: -8,
                                  }}
                                  animate={
                                    isActive
                                      ? {
                                          opacity:
                                            1,
                                          x: 0,
                                        }
                                      : {
                                          opacity:
                                            0,
                                          x: -8,
                                        }
                                  }
                                  transition={{
                                    delay:
                                      detailIndex *
                                      0.04,
                                  }}
                                  className="
                                    flex
                                    items-center
                                    gap-3

                                    border-b
                                    border-zinc-200

                                    py-3

                                    text-xs

                                    text-zinc-600

                                    sm:px-4

                                    dark:border-white/10
                                    dark:text-zinc-400
                                  "
                                >
                                  <span
                                    className="
                                      h-1
                                      w-1
                                      shrink-0

                                      bg-blue-600

                                      dark:bg-blue-400
                                    "
                                  />

                                  {
                                    detail
                                  }
                                </motion.div>
                              )
                            )}
                          </div>
                        </motion.div>
                      </motion.div>

                      <div
                        className="
                          hidden

                          lg:block
                          lg:text-right
                        "
                      >
                        <motion.span
                          animate={{
                            color:
                              isActive
                                ? "#2563eb"
                                : "#a1a1aa",
                          }}
                          className="
                            font-mono

                            text-[4rem]
                            font-medium

                            leading-none

                            tracking-[-0.08em]
                          "
                        >
                          {
                            item.id
                          }
                        </motion.span>
                      </div>
                    </motion.article>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}