import {
  useState,
} from "react";

import {
  FiArrowRight,
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiDatabase,
  FiLayers,
  FiMapPin,
  FiPenTool,
  FiServer,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import type {
  IconType,
} from "react-icons";

import {
  motion,
} from "motion/react";

import {
  Link,
} from "react-router-dom";

import about from "../assets/about.jpg";

import AsciiArt from "../components/AsciiArt";

import {
  portfolioData,
} from "../data/portfolioData";

interface ProfessionalJourneyItem {
  number: string;
  role: string;
  organization: string;
  type: string;
  status: string;
  description: string;
  details: string[];
  technologies?: string[];
  link?: string;
}

interface EducationItem {
  number: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  details: string[];
}

interface CertificateItem {
  number: string;
  title: string;
  provider: string;

  status:
    | "Completed"
    | "In Progress"
    | "Future Goal";

  description: string;
  link?: string;
}

interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  icon: IconType;
}

const education: EducationItem[] = [
  {
    number: "01",

    year: "2021",

    title:
      "Secondary Education",

    institution:
      "Alabraar Private Secondary School",

    description:
      "Completed my secondary education following the Somali secondary-school curriculum and built the academic foundation that prepared me for higher education in technology.",

    details: [
      "Completed secondary education in 2021",
      "Studied a 12-subject secondary-school curriculum",
      "Developed academic discipline and problem-solving skills",
      "Built the foundation for university-level Information Technology",
    ],
  },

  {
    number: "02",

    year: "University",

    title:
      "Bachelor's Degree in Information Technology",

    institution:
      "Zamzam University of Science and Technology",

    description:
      "Studied Information Technology with a focus on software, databases, web technologies, systems analysis and practical technology problem solving.",

    details: [
      "Software development fundamentals",
      "Database systems",
      "Web technologies",
      "Systems analysis",
      "Information technology concepts",
      "Final-year project development and defense",
    ],
  },
];

const professionalJourney: ProfessionalJourneyItem[] =
  [
    {
      number: "01",

      role:
        "Visual Graphic Designer",

      organization:
        "Creative & Digital Design",

      type: "Design",

      status:
        "Creative Foundation",

      description:
        "My visual design background developed the way I think about digital products. It taught me to care about hierarchy, typography, composition, branding and visual consistency.",

      details: [
        "Created promotional and digital graphics",
        "Worked with typography and layout systems",
        "Developed branding-focused visual materials",
        "Built a strong understanding of visual hierarchy",
        "Applied design thinking to modern web interfaces",
      ],
    },

    {
      number: "02",

      role:
        "Frontend Developer",

      organization:
        "Heegan Technology",

      type:
        "Professional Experience",

      status: "Professional",

      description:
        "Worked on real websites, dashboards and software interfaces while integrating APIs and application data into responsive frontend systems.",

      details: [
        "Built responsive React interfaces",
        "Developed administrative dashboards",
        "Integrated backend REST APIs",
        "Worked with real application data",
        "Created reusable frontend components",
        "Focused on responsive and consistent user experiences",
      ],

      technologies: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
      ],

      link:
        "https://heegantechnology.com/",
    },

    {
      number: "03",

      role:
        "Full-Stack Software Developer",

      organization:
        "Software Engineering Journey",

      type: "Engineering",

      status:
        "Current Growth",

      description:
        "My development path has expanded from frontend engineering into backend services, authentication, APIs, databases and complete full-stack architecture.",

      details: [
        "Building REST APIs with Node.js and Express",
        "Working with MongoDB and PostgreSQL",
        "Learning backend architecture and security",
        "Developing full-stack MERN applications",
        "Working with Python and FastAPI",
        "Improving database and API design skills",
      ],

      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Python",
        "FastAPI",
      ],
    },

    {
      number: "04",

      role:
        "CEO & Co-Founder",

      organization:
        "TechPoint",

      type:
        "Entrepreneurship",

      status: "Leadership",

      description:
        "Through TechPoint, I combine software development, product thinking, visual communication and entrepreneurship to explore practical technology solutions.",

      details: [
        "Technology entrepreneurship",
        "Product and software ideas",
        "Digital solution development",
        "Team collaboration",
        "Technology leadership",
        "Product thinking and planning",
      ],

      link:
        portfolioData.company.facebook,
    },
  ];

const certificates: CertificateItem[] = [
  {
    number: "01",

    title:
      "Full-Stack Development",

    provider:
      "Rise Academy",

    status: "Completed",

    description:
      "Completed full-stack development training covering modern web development and the process of building complete web applications.",
  },

  {
    number: "02",

    title:
      "IBM JavaScript Backend Developer Professional Certificate",

    provider:
      "IBM · Coursera",

    status: "In Progress",

    description:
      "Currently strengthening my JavaScript backend engineering skills through IBM's professional certificate learning path.",

    link:
      "https://www.coursera.org/programs/kiron-open-higher-education-learning-program-55mz5/specializations/backend-javascript-developer",
  },

  {
    number: "03",

    title:
      "The Complete Node.js Backend Developer Bootcamp",

    provider:
      "Backend Engineering · 2026",

    status: "In Progress",

    description:
      "Currently studying Node.js backend development in 2026 to deepen my understanding of APIs, architecture, authentication and server-side application development.",
  },

  {
    number: "04",

    title:
      "Information Security Engineering",

    provider:
      "Future Professional Certification",

    status: "Future Goal",

    description:
      "Planning to develop professional-level knowledge in information security, secure systems, application security and cybersecurity engineering.",
  },

  {
    number: "05",

    title:
      "Data Science & Artificial Intelligence",

    provider:
      "Future Professional Certification",

    status: "Future Goal",

    description:
      "Planning to strengthen my engineering background with data science, machine learning and artificial intelligence skills.",
  },
];

const expertise: ExpertiseItem[] = [
  {
    number: "01",

    icon: FiCode,

    title:
      "Frontend Development",

    description:
      "React, TypeScript, JavaScript and Tailwind CSS for modern responsive web applications.",
  },

  {
    number: "02",

    icon: FiServer,

    title:
      "Backend Engineering",

    description:
      "Node.js, Express.js, Python and FastAPI for APIs, services and backend systems.",
  },

  {
    number: "03",

    icon: FiDatabase,

    title:
      "Database Systems",

    description:
      "MongoDB and PostgreSQL for reliable data-driven software applications.",
  },

  {
    number: "04",

    icon: FiLayers,

    title:
      "Full-Stack Development",

    description:
      "Connecting frontend interfaces, backend services, APIs and databases into complete products.",
  },

  {
    number: "05",

    icon: FiPenTool,

    title:
      "Visual Graphic Design",

    description:
      "Visual identity, promotional graphics, typography, layouts and digital creative communication.",
  },

  {
    number: "06",

    icon: FiBriefcase,

    title:
      "Product & Leadership",

    description:
      "Technology entrepreneurship, product thinking, collaboration and leadership through TechPoint.",
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

export default function About() {
  const [
    activeJourney,
    setActiveJourney,
  ] = useState<number>(1);

  const activeProfessionalItem =
    professionalJourney[
      activeJourney
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
          pt-[90px]

          sm:px-6
          sm:pb-20
          sm:pt-[105px]

          md:px-8

          lg:px-10
          lg:pb-28
          lg:pt-[80px]
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
            w-full
            max-w-[1400px]
          "
        >
          <div
            className="
              grid
              gap-12

              sm:gap-14

              lg:grid-cols-[1.05fr_0.95fr]
              lg:items-end
              lg:gap-16
            "
          >
            <div
              className="
                order-2

                lg:order-1
              "
            >
             

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
                    text-[clamp(3rem,10vw,7.8rem)]

                    font-medium

                    leading-[0.9]

                    tracking-[-0.065em]
                  "
                >
                  Developer,
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
                    text-[clamp(3rem,10vw,7.8rem)]

                    font-medium

                    leading-[0.9]

                    tracking-[-0.065em]

                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  designer & founder.
                </motion.h1>
              </div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                }}
                className="
                  mt-7
                  max-w-[690px]

                  text-sm
                  leading-7

                  text-zinc-600

                  sm:mt-9
                  sm:text-base
                  sm:leading-8

                  lg:mt-10
                  lg:text-lg

                  dark:text-zinc-400
                "
              >
                I'm{" "}
                <span
                  className="
                    font-medium

                    text-zinc-950

                    dark:text-white
                  "
                >
                  {
                    portfolioData
                      .personal
                      .name
                  }
                </span>
                , an Information
                Technology graduate,
                Full-Stack Software
                Developer, Visual
                Graphic Designer and
                technology entrepreneur
                based in Somalia.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
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
                  mt-8

                  grid

                  border-y
                  border-zinc-200

                  sm:grid-cols-3

                  dark:border-white/10
                "
              >
                <div
                  className="
                    border-b
                    border-zinc-200

                    py-4

                    sm:border-b-0
                    sm:border-r
                    sm:py-5

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
                    Engineering
                  </p>

                  <p
                    className="
                      mt-2

                      text-sm
                      font-medium
                    "
                  >
                    Full-Stack
                  </p>
                </div>

                <div
                  className="
                    border-b
                    border-zinc-200

                    py-4

                    sm:border-b-0
                    sm:border-r
                    sm:px-6
                    sm:py-5

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
                    Creative
                  </p>

                  <p
                    className="
                      mt-2

                      text-sm
                      font-medium
                    "
                  >
                    Visual Design
                  </p>
                </div>

                <div
                  className="
                    py-4

                    sm:py-5
                    sm:pl-6
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
                    Leadership
                  </p>

                  <p
                    className="
                      mt-2

                      text-sm
                      font-medium
                    "
                  >
                    TechPoint
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                order-1

                relative

                mx-auto
                w-full
                max-w-[430px]

                pt-8

                sm:max-w-[520px]
                sm:pt-12

                lg:order-2
                lg:mx-0
                lg:ml-auto
                lg:max-w-[560px]
                lg:pt-20
              "
            >
              <motion.span
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.7,
                }}
                className="
                  pointer-events-none

                  absolute

                  -left-3
                  top-0

                  select-none

                  text-[8rem]
                  font-medium

                  leading-none

                  tracking-[-0.12em]

                  text-zinc-100

                  sm:-left-8
                  sm:text-[11rem]

                  lg:-left-14
                  lg:text-[17rem]

                  dark:text-white/[0.025]
                "
              >
                01
              </motion.span>

              <div
                className="
                  relative
                  z-10
                "
              >
                <div
                  className="
                    group

                    relative

                    aspect-[4/5]

                    overflow-hidden

                    border
                    border-zinc-200

                    bg-zinc-100

                    dark:border-white/10
                    dark:bg-[#050507]
                  "
                >
                  <img
                    src={about}
                    alt="Yuusuf Adow Mohamoud"
                    className="
                      absolute
                      inset-0

                      h-full
                      w-full

                      object-cover
                      object-center

                      transition-transform
                      duration-[1400ms]

                      group-hover:scale-[1.025]
                    "
                  />

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      bg-gradient-to-t

                      from-black/45
                      via-black/[0.02]
                      to-transparent
                    "
                  />

                  <div
                    className="
                      pointer-events-none

                      absolute
                      inset-0

                      opacity-30

                      mix-blend-screen

                      sm:opacity-35

                      dark:opacity-45
                    "
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(circle at 50% 34%, transparent 0%, transparent 25%, rgba(0,0,0,.12) 43%, black 80%)",

                      maskImage:
                        "radial-gradient(circle at 50% 34%, transparent 0%, transparent 25%, rgba(0,0,0,.12) 43%, black 80%)",
                    }}
                  >
                    <AsciiArt
                      src={about}
                      resolution={92}
                      charset=" 01"
                      color="#60a5fa"
                      backgroundColor="transparent"
                      animated
                      className="
                        h-full
                        w-full
                      "
                    />
                  </div>

                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      z-20

                      flex
                      items-center
                      gap-2

                      sm:left-5
                      sm:top-5
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5

                        bg-blue-400
                      "
                    />

                    <span
                      className="
                        font-mono

                        text-[8px]

                        uppercase
                        tracking-[0.18em]

                        text-white/70

                        sm:text-[9px]
                        sm:tracking-[0.2em]
                      "
                    >
                      Profile / 01
                    </span>
                  </div>

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      z-20

                      border-t
                      border-white/15

                      bg-black/20

                      px-4
                      py-4

                      backdrop-blur-[2px]

                      sm:px-5
                      sm:py-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-end
                        justify-between

                        gap-4
                      "
                    >
                      <div
                        className="
                          min-w-0
                        "
                      >
                        <p
                          className="
                            truncate

                            text-xs
                            font-medium

                            text-white

                            sm:text-sm
                          "
                        >
                          Yuusuf Adow Mohamoud
                        </p>

                        <p
                          className="
                            mt-1

                            text-[8px]

                            uppercase
                            tracking-[0.13em]

                            text-white/55

                            sm:text-[9px]
                            sm:tracking-[0.16em]
                          "
                        >
                          Software · Design · Product
                        </p>
                      </div>

                      <span
                        className="
                          flex
                          shrink-0
                          items-center

                          gap-1.5

                          text-[10px]

                          text-white/65

                          sm:gap-2
                          sm:text-xs
                        "
                      >
                        <FiMapPin
                          size={12}
                        />

                        Somalia
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="
                    mt-3

                    flex
                    items-center
                    justify-between

                    font-mono

                    text-[8px]

                    uppercase
                    tracking-[0.14em]

                    text-zinc-400

                    sm:text-[9px]
                    sm:tracking-[0.18em]
                  "
                >
                  <span>
                    Full-Stack / Visual
                  </span>

                  <span>
                    2026
                  </span>
                </div>
              </div>
            </motion.div>
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

            lg:grid-cols-[0.42fr_1.58fr]
          "
        >
          <div
            className="
              py-10

              sm:py-12

              lg:border-r
              lg:border-zinc-200
              lg:py-14
              lg:pr-10

              dark:lg:border-white/10
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
              Background
            </p>
          </div>

          <div
            className="
              border-t
              border-zinc-200

              py-10

              sm:py-12

              lg:border-t-0
              lg:py-14
              lg:pl-12

              dark:border-white/10
            "
          >
            <h2
              className="
                max-w-[1050px]

                text-[clamp(2rem,7vw,5rem)]

                font-medium

                leading-[1.03]

                tracking-[-0.055em]
              "
            >
              I combine{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                engineering, visual
                thinking and continuous
                learning
              </span>{" "}
              to build better digital
              products.
            </h2>

            <div
              className="
                mt-10

                grid

                border-t
                border-zinc-200

                md:grid-cols-2

                dark:border-white/10
              "
            >
              {[
                {
                  number: "01",

                  text:
                    "My visual design background gives me an eye for typography, balance, branding and interface consistency.",
                },

                {
                  number: "02",

                  text:
                    "Frontend development taught me how to turn ideas into real, responsive and reusable web interfaces.",
                },

                {
                  number: "03",

                  text:
                    "Backend engineering is helping me understand the systems, APIs and databases behind complete products.",
                },

                {
                  number: "04",

                  text:
                    "My long-term path is expanding toward security engineering, data science and artificial intelligence.",
                },
              ].map(
                (
                  item,
                  index
                ) => (
                  <motion.div
                    key={
                      item.number
                    }
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay:
                        index *
                        0.05,
                    }}
                    className={`
                      border-b
                      border-zinc-200

                      py-7

                      sm:py-8

                      dark:border-white/10

                      ${
                        index %
                          2 ===
                        0
                          ? `
                            md:border-r
                            md:pr-8
                          `
                          : `
                            md:pl-8
                          `
                      }
                    `}
                  >
                    <span
                      className="
                        font-mono

                        text-[10px]

                        text-blue-600

                        dark:text-blue-400
                      "
                    >
                      {
                        item.number
                      }
                    </span>

                    <p
                      className="
                        mt-5

                        text-sm
                        leading-7

                        text-zinc-600

                        sm:text-base
                        sm:leading-8

                        dark:text-zinc-400
                      "
                    >
                      {item.text}
                    </p>
                  </motion.div>
                )
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

              lg:grid-cols-[0.38fr_1.62fr]
              lg:gap-12
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <FiBookOpen
                  className="
                    text-blue-600

                    dark:text-blue-400
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-semibold

                    uppercase
                    tracking-[0.2em]

                    text-zinc-400
                  "
                >
                  Education
                </p>
              </div>

              <h2
                className="
                  mt-4

                  text-4xl
                  font-medium

                  tracking-[-0.05em]

                  sm:text-5xl
                "
              >
                Academic{" "}
                <span
                  className="
                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  foundation.
                </span>
              </h2>
            </div>

            <div
              className="
                border-t
                border-zinc-200

                dark:border-white/10
              "
            >
              {education.map(
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
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.55,
                      delay:
                        index *
                        0.06,
                    }}
                    className="
                      group
                      relative

                      overflow-hidden

                      border-b
                      border-zinc-200

                      py-8

                      sm:py-10

                      dark:border-white/10
                    "
                  >
                    <span
                      className="
                        pointer-events-none

                        absolute

                        -bottom-8
                        right-0

                        select-none

                        font-mono

                        text-[6rem]

                        leading-none

                        tracking-[-0.1em]

                        text-zinc-100

                        sm:text-[8rem]

                        dark:text-white/[0.025]
                      "
                    >
                      {item.number}
                    </span>

                    <div
                      className="
                        relative
                        z-10

                        grid
                        gap-5

                        sm:gap-7

                        md:grid-cols-[100px_1fr]
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          justify-between

                          md:block
                        "
                      >
                        <span
                          className="
                            font-mono

                            text-xs

                            text-zinc-400
                          "
                        >
                          {item.number}
                        </span>

                        <p
                          className="
                            text-xs

                            text-blue-600

                            md:mt-3

                            dark:text-blue-400
                          "
                        >
                          {item.year}
                        </p>
                      </div>

                      <div>
                        <h3
                          className="
                            text-2xl
                            font-medium

                            tracking-[-0.04em]

                            sm:text-3xl
                          "
                        >
                          {item.title}
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

                        <p
                          className="
                            mt-5
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
                            mt-7

                            grid

                            border-t
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
                              <div
                                key={
                                  detail
                                }
                                className={`
                                  flex
                                  items-start

                                  gap-3

                                  border-b
                                  border-zinc-200

                                  py-3

                                  text-xs
                                  leading-6

                                  text-zinc-500

                                  dark:border-white/10
                                  dark:text-zinc-400

                                  ${
                                    detailIndex %
                                      2 ===
                                    0
                                      ? `
                                        sm:border-r
                                        sm:pr-5
                                      `
                                      : `
                                        sm:pl-5
                                      `
                                  }
                                `}
                              >
                                <span
                                  className="
                                    mt-2

                                    h-1
                                    w-1

                                    shrink-0

                                    bg-blue-600

                                    dark:bg-blue-400
                                  "
                                />

                                {detail}
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              )}
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
              Professional Journey
            </p>

            <div
              className="
                mt-4

                flex
                flex-col

                gap-5

                lg:flex-row
                lg:items-end
                lg:justify-between
                lg:gap-10
              "
            >
              <h2
                className="
                  max-w-3xl

                  text-4xl
                  font-medium

                  tracking-[-0.055em]

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                Experience that{" "}
                <span
                  className="
                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  shaped my work.
                </span>
              </h2>

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
                a role on mobile to see
                its full details.
              </p>
            </div>
          </motion.div>

          <div
            className="
              mt-12

              grid

              border-t
              border-zinc-200

              lg:mt-14
              lg:grid-cols-[0.85fr_1.15fr]

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
              {professionalJourney.map(
                (
                  item,
                  index
                ) => {
                  const isActive =
                    activeJourney ===
                    index;

                  return (
                    <motion.button
                      key={
                        item.number
                      }
                      type="button"
                      onMouseEnter={() =>
                        setActiveJourney(
                          index
                        )
                      }
                      onFocus={() =>
                        setActiveJourney(
                          index
                        )
                      }
                      onClick={() =>
                        setActiveJourney(
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

                      <span
                        className="
                          pointer-events-none

                          absolute

                          -bottom-7
                          right-4

                          font-mono

                          text-[4rem]

                          leading-none

                          tracking-[-0.1em]

                          text-zinc-100

                          sm:text-[5rem]

                          dark:text-white/[0.02]
                        "
                      >
                        {item.number}
                      </span>

                      <div
                        className="
                          relative
                          z-10

                          grid

                          grid-cols-[40px_1fr_24px]

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
                        >
                          {item.number}
                        </span>

                        <div
                          className="
                            min-w-0
                          "
                        >
                          <p
                            className={`
                              text-[8px]
                              font-semibold

                              uppercase
                              tracking-[0.14em]

                              transition-colors

                              sm:text-[9px]
                              sm:tracking-[0.17em]

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
                            {item.type}
                          </p>

                          <h3
                            className={`
                              mt-2

                              text-lg
                              font-medium

                              tracking-[-0.035em]

                              transition-colors

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
                            {item.role}
                          </h3>

                          <p
                            className="
                              mt-1

                              text-xs

                              text-zinc-400
                            "
                          >
                            {
                              item.organization
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

            <div
              className="
                min-h-[500px]

                lg:min-h-[540px]
              "
            >
              <motion.div
                key={
                  activeProfessionalItem.number
                }
                initial={{
                  opacity: 0,
                  y: 15,
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

                  overflow-hidden

                  px-4
                  py-8

                  sm:px-7
                  sm:py-10

                  lg:p-12
                "
              >
                <span
                  className="
                    pointer-events-none

                    absolute

                    -right-3
                    -top-5

                    select-none

                    font-mono

                    text-[7rem]

                    leading-none

                    tracking-[-0.12em]

                    text-zinc-100

                    sm:text-[9rem]

                    lg:-top-10
                    lg:text-[11rem]

                    dark:text-white/[0.025]
                  "
                >
                  {
                    activeProfessionalItem.number
                  }
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
                        text-[8px]
                        font-semibold

                        uppercase
                        tracking-[0.16em]

                        text-blue-600

                        sm:text-[9px]
                        sm:tracking-[0.18em]

                        dark:text-blue-400
                      "
                    >
                      {
                        activeProfessionalItem.type
                      }
                    </span>

                    <span
                      className="
                        h-px
                        w-5

                        bg-zinc-300

                        sm:w-6

                        dark:bg-zinc-700
                      "
                    />

                    <span
                      className="
                        text-[9px]

                        uppercase
                        tracking-[0.13em]

                        text-zinc-400

                        sm:text-[10px]
                        sm:tracking-[0.15em]
                      "
                    >
                      {
                        activeProfessionalItem.status
                      }
                    </span>
                  </div>

                  <h3
                    className="
                      mt-5
                      max-w-2xl

                      text-3xl
                      font-medium

                      tracking-[-0.05em]

                      sm:text-4xl

                      lg:text-5xl
                    "
                  >
                    {
                      activeProfessionalItem.role
                    }
                  </h3>

                  {activeProfessionalItem.link ? (
                    <a
                      href={
                        activeProfessionalItem.link
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group

                        mt-3

                        inline-flex
                        items-center

                        gap-2

                        text-sm
                        font-medium

                        text-zinc-500

                        transition-colors

                        hover:text-blue-600

                        dark:text-zinc-400
                        dark:hover:text-blue-400
                      "
                    >
                      {
                        activeProfessionalItem.organization
                      }

                      <FiArrowUpRight
                        size={14}
                        className="
                          transition-transform

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </a>
                  ) : (
                    <p
                      className="
                        mt-3

                        text-sm
                        font-medium

                        text-zinc-500

                        dark:text-zinc-400
                      "
                    >
                      {
                        activeProfessionalItem.organization
                      }
                    </p>
                  )}

                  <p
                    className="
                      mt-7
                      max-w-3xl

                      text-sm
                      leading-7

                      text-zinc-600

                      sm:mt-8
                      sm:text-base
                      sm:leading-8

                      dark:text-zinc-400
                    "
                  >
                    {
                      activeProfessionalItem.description
                    }
                  </p>

                  <div
                    className="
                      mt-8

                      border-t
                      border-zinc-200

                      sm:mt-9

                      dark:border-white/10
                    "
                  >
                    {activeProfessionalItem.details.map(
                      (
                        detail,
                        index
                      ) => (
                        <motion.div
                          key={
                            detail
                          }
                          initial={{
                            opacity: 0,
                            x: -12,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              index *
                              0.05,
                          }}
                          className="
                            flex
                            items-start

                            gap-4

                            border-b
                            border-zinc-200

                            py-3.5

                            sm:py-4

                            dark:border-white/10
                          "
                        >
                          <span
                            className="
                              mt-[9px]

                              h-1
                              w-1

                              shrink-0

                              bg-blue-600

                              dark:bg-blue-400
                            "
                          />

                          <span
                            className="
                              text-sm
                              leading-6

                              text-zinc-600

                              dark:text-zinc-400
                            "
                          >
                            {detail}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>

                  {activeProfessionalItem.technologies &&
                    activeProfessionalItem
                      .technologies
                      .length >
                      0 && (
                      <div
                        className="
                          mt-8
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
                          Technologies
                        </p>

                        <div
                          className="
                            mt-4

                            flex
                            flex-wrap

                            gap-x-5
                            gap-y-3
                          "
                        >
                          {activeProfessionalItem.technologies.map(
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
                    )}

                  {activeProfessionalItem.link && (
                    <div
                      className="
                        mt-8

                        border-t
                        border-zinc-200

                        pt-6

                        dark:border-white/10
                      "
                    >
                      <a
                        href={
                          activeProfessionalItem.link
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="
                          group

                          inline-flex
                          items-center

                          gap-2

                          border-b
                          border-zinc-950

                          pb-2

                          text-sm
                          font-medium

                          dark:border-white
                        "
                      >
                        Visit{" "}
                        {
                          activeProfessionalItem.organization
                        }

                        <FiArrowUpRight
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
            </div>
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

              lg:grid-cols-[0.38fr_1.62fr]
              lg:gap-12
            "
          >
            <div>
              <FiAward
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
                Certificates
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
                Learning is part of{" "}
                <span
                  className="
                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  the career.
                </span>
              </h2>
            </div>

            <div
              className="
                border-t
                border-zinc-200

                dark:border-white/10
              "
            >
              {certificates.map(
                (
                  certificate,
                  index
                ) => {
                  const completed =
                    certificate.status ===
                    "Completed";

                  const progress =
                    certificate.status ===
                    "In Progress";

                  return (
                    <motion.article
                      key={
                        certificate.number
                      }
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
                        duration: 0.5,

                        delay:
                          index *
                          0.05,
                      }}
                      className="
                        group
                        relative

                        grid

                        overflow-hidden

                        border-b
                        border-zinc-200

                        py-7

                        md:grid-cols-[70px_1fr_150px]
                        md:gap-6
                        md:py-8

                        dark:border-white/10
                      "
                    >
                      <span
                        className="
                          pointer-events-none

                          absolute

                          -bottom-8
                          right-0

                          font-mono

                          text-[5rem]

                          leading-none

                          text-zinc-100

                          sm:text-[6rem]

                          dark:text-white/[0.02]
                        "
                      >
                        {
                          certificate.number
                        }
                      </span>

                      <span
                        className="
                          relative
                          z-10

                          font-mono

                          text-xs

                          text-zinc-400
                        "
                      >
                        {
                          certificate.number
                        }
                      </span>

                      <div
                        className="
                          relative
                          z-10

                          mt-4

                          md:mt-0
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
                              tracking-[0.17em]

                              ${
                                completed
                                  ? `
                                    text-emerald-600

                                    dark:text-emerald-400
                                  `
                                  : progress
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
                              certificate.status
                            }
                          </span>

                          {progress && (
                            <motion.span
                              animate={{
                                opacity: [
                                  0.35,
                                  1,
                                  0.35,
                                ],
                              }}
                              transition={{
                                duration:
                                  1.8,

                                repeat:
                                  Infinity,
                              }}
                              className="
                                h-1.5
                                w-1.5

                                bg-blue-600

                                dark:bg-blue-400
                              "
                            />
                          )}
                        </div>

                        <h3
                          className="
                            mt-3
                            max-w-3xl

                            text-xl
                            font-medium

                            tracking-[-0.035em]

                            transition-colors

                            group-hover:text-blue-600

                            sm:text-2xl

                            dark:group-hover:text-blue-400
                          "
                        >
                          {
                            certificate.title
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
                            certificate.provider
                          }
                        </p>

                        <p
                          className="
                            mt-4
                            max-w-3xl

                            text-sm
                            leading-7

                            text-zinc-500

                            dark:text-zinc-400
                          "
                        >
                          {
                            certificate.description
                          }
                        </p>
                      </div>

                      <div
                        className="
                          relative
                          z-10

                          mt-5

                          flex
                          items-start

                          md:mt-0
                          md:justify-end
                        "
                      >
                        {certificate.link ? (
                          <a
                            href={
                              certificate.link
                            }
                            target="_blank"
                            rel="noreferrer"
                            className="
                              group/link

                              inline-flex
                              items-center

                              gap-2

                              border-b
                              border-zinc-300

                              pb-2

                              text-xs
                              font-medium

                              text-zinc-500

                              transition-colors

                              hover:border-blue-600
                              hover:text-blue-600

                              dark:border-white/20
                              dark:text-zinc-400

                              dark:hover:border-blue-400
                              dark:hover:text-blue-400
                            "
                          >
                            View program

                            <FiArrowUpRight
                              className="
                                transition-transform

                                group-hover/link:-translate-y-0.5
                                group-hover/link:translate-x-0.5
                              "
                            />
                          </a>
                        ) : (
                          <span
                            className="
                              text-xs

                              text-zinc-400
                            "
                          >
                            {
                              certificate.status
                            }
                          </span>
                        )}
                      </div>
                    </motion.article>
                  );
                }
              )}
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

              lg:grid-cols-[0.38fr_1.62fr]
              lg:gap-12
            "
          >
            <div>
              <FiTrendingUp
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
                Future Direction
              </p>

              <h2
                className="
                  mt-4

                  text-4xl
                  font-medium

                  tracking-[-0.05em]

                  sm:text-5xl
                "
              >
                Building a broader{" "}
                <span
                  className="
                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  engineering profile.
                </span>
              </h2>
            </div>

            <div
              className="
                grid

                border-t
                border-zinc-200

                md:grid-cols-2

                dark:border-white/10
              "
            >
              <motion.article
                whileHover={{
                  x: 4,
                }}
                className="
                  group
                  relative

                  overflow-hidden

                  border-b
                  border-zinc-200

                  py-8

                  md:border-r
                  md:py-10
                  md:pr-8

                  dark:border-white/10
                "
              >
                <span
                  className="
                    absolute

                    -bottom-5
                    right-4

                    font-mono

                    text-[5rem]

                    text-zinc-100

                    sm:text-[6rem]

                    dark:text-white/[0.025]
                  "
                >
                  01
                </span>

                <div
                  className="
                    relative
                    z-10
                  "
                >
                  <FiShield
                    size={22}
                    className="
                      text-blue-600

                      dark:text-blue-400
                    "
                  />

                  <p
                    className="
                      mt-8

                      text-[9px]
                      font-semibold

                      uppercase
                      tracking-[0.17em]

                      text-zinc-400
                    "
                  >
                    Future Certification
                  </p>

                  <h3
                    className="
                      mt-3

                      text-2xl
                      font-medium

                      tracking-[-0.04em]
                    "
                  >
                    Information Security
                    Engineering
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-lg

                      text-sm
                      leading-7

                      text-zinc-500

                      dark:text-zinc-400
                    "
                  >
                    My goal is to
                    strengthen my
                    software engineering
                    foundation with
                    security engineering,
                    secure application
                    development and
                    cybersecurity
                    knowledge.
                  </p>
                </div>
              </motion.article>

              <motion.article
                whileHover={{
                  x: 4,
                }}
                className="
                  group
                  relative

                  overflow-hidden

                  border-b
                  border-zinc-200

                  py-8

                  md:py-10
                  md:pl-8

                  dark:border-white/10
                "
              >
                <span
                  className="
                    absolute

                    -bottom-5
                    right-4

                    font-mono

                    text-[5rem]

                    text-zinc-100

                    sm:text-[6rem]

                    dark:text-white/[0.025]
                  "
                >
                  02
                </span>

                <div
                  className="
                    relative
                    z-10
                  "
                >
                  <FiDatabase
                    size={22}
                    className="
                      text-blue-600

                      dark:text-blue-400
                    "
                  />

                  <p
                    className="
                      mt-8

                      text-[9px]
                      font-semibold

                      uppercase
                      tracking-[0.17em]

                      text-zinc-400
                    "
                  >
                    Future Certification
                  </p>

                  <h3
                    className="
                      mt-3

                      text-2xl
                      font-medium

                      tracking-[-0.04em]
                    "
                  >
                    Data Science &
                    Artificial
                    Intelligence
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-lg

                      text-sm
                      leading-7

                      text-zinc-500

                      dark:text-zinc-400
                    "
                  >
                    I also plan to study
                    data science,
                    machine learning and
                    artificial
                    intelligence so I
                    can build smarter
                    software and
                    data-driven
                    products.
                  </p>
                </div>
              </motion.article>
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
              Expertise
            </p>

            <h2
              className="
                mt-4
                max-w-4xl

                text-4xl
                font-medium

                tracking-[-0.055em]

                sm:text-5xl

                lg:text-6xl
              "
            >
              Technology meets{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                creativity.
              </span>
            </h2>
          </motion.div>

          <div
            className="
              mt-12

              grid

              border-t
              border-zinc-200

              sm:mt-14

              md:grid-cols-2

              lg:grid-cols-3

              dark:border-white/10
            "
          >
            {expertise.map(
              (
                item,
                index
              ) => {
                const Icon =
                  item.icon;

                return (
                  <motion.article
                    key={
                      item.number
                    }
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    whileHover={{
                      y: -4,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,

                      delay:
                        index *
                        0.03,
                    }}
                    className="
                      group
                      relative

                      min-h-[230px]

                      overflow-hidden

                      border-b
                      border-zinc-200

                      py-7

                      md:min-h-[270px]
                      md:px-7
                      md:py-8

                      dark:border-white/10
                    "
                  >
                    <span
                      className="
                        pointer-events-none

                        absolute

                        -bottom-5
                        right-3

                        font-mono

                        text-[4rem]

                        leading-none

                        text-zinc-100

                        transition-colors

                        group-hover:text-blue-50

                        sm:text-[5rem]

                        dark:text-white/[0.025]

                        dark:group-hover:text-blue-400/[0.04]
                      "
                    >
                      {item.number}
                    </span>

                    <div
                      className="
                        relative
                        z-10

                        flex
                        items-start
                        justify-between
                      "
                    >
                      <Icon
                        size={21}
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

                    <div
                      className="
                        relative
                        z-10

                        mt-10

                        sm:mt-12
                      "
                    >
                      <h3
                        className="
                          text-xl
                          font-medium

                          tracking-[-0.035em]

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
                          max-w-sm

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
        <div
          className="
            mx-auto
            max-w-[1400px]

            py-16

            sm:py-20
          "
        >
          <motion.div
            {...reveal}
            className="
              grid
              gap-10

              lg:grid-cols-[0.38fr_1.62fr]
              lg:gap-12
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
                Technology Stack
              </p>

              <h2
                className="
                  mt-4

                  text-4xl
                  font-medium

                  tracking-[-0.05em]

                  sm:text-5xl
                "
              >
                Tools I use.
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
              {[
                {
                  title:
                    "Frontend",

                  data:
                    portfolioData.skills.frontend,
                },

                {
                  title:
                    "Backend",

                  data:
                    portfolioData.skills.backend,
                },

                {
                  title:
                    "Databases",

                  data:
                    portfolioData.skills.databases,
                },

                {
                  title:
                    "Tools & APIs",

                  data:
                    portfolioData.skills.tools,
                },
              ].map(
                (
                  group,
                  index
                ) => (
                  <div
                    key={
                      group.title
                    }
                    className={`
                      border-b
                      border-zinc-200

                      py-7

                      sm:py-8

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
                    <p
                      className="
                        text-[10px]

                        uppercase
                        tracking-[0.16em]

                        text-zinc-400
                      "
                    >
                      {group.title}
                    </p>

                    <div
                      className="
                        mt-6

                        flex
                        flex-wrap

                        gap-x-5
                        gap-y-3
                      "
                    >
                      {group.data.map(
                        (
                          skill
                        ) => (
                          <motion.span
                            key={
                              skill
                            }
                            whileHover={{
                              x: 3,
                            }}
                            className="
                              text-sm
                              font-medium

                              text-zinc-700

                              dark:text-zinc-300
                            "
                          >
                            {skill}
                          </motion.span>
                        )
                      )}
                    </div>
                  </div>
                )
              )}
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

            gap-8

            py-16

            sm:py-20

            lg:grid-cols-[0.38fr_1.62fr]
            lg:gap-10
            lg:py-28
          "
        >
          <div>
            <FiUsers
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
              Beyond Work
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-[950px]

                text-[clamp(2.3rem,7vw,5.5rem)]

                font-medium

                leading-[1]

                tracking-[-0.055em]
              "
            >
              Learning also happens{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                through community.
              </span>
            </h2>

            <div
              className="
                mt-8

                flex
                flex-col

                gap-7

                border-t
                border-zinc-200

                pt-7

                sm:mt-9
                sm:flex-row
                sm:items-end
                sm:justify-between

                dark:border-white/10
              "
            >
              <p
                className="
                  max-w-2xl

                  text-sm
                  leading-7

                  text-zinc-500

                  sm:text-base
                  sm:leading-8

                  dark:text-zinc-400
                "
              >
                My activities include
                volunteering with Zamzam
                University,
                participating in PyCon
                Somalia and serving on
                the AI Somalia
                organizing and protocol
                team.
              </p>

              <Link
                to="/activities"
                className="
                  group

                  inline-flex
                  w-fit
                  shrink-0
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
                View activities

                <FiArrowUpRight
                  className="
                    transition-transform

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        className="
          border-y
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

            lg:grid-cols-[0.38fr_1.62fr]
            lg:gap-10
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
              TechPoint
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-[1000px]

                text-[clamp(2.3rem,7vw,5.7rem)]

                font-medium

                leading-[0.98]

                tracking-[-0.06em]
              "
            >
              Building technology
              with an{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                entrepreneurial
                mindset.
              </span>
            </h2>

            <div
              className="
                mt-8

                flex
                flex-col

                gap-7

                border-t
                border-zinc-200

                pt-7

                sm:mt-10
                sm:flex-row
                sm:items-end
                sm:justify-between
                sm:gap-8
                sm:pt-8

                dark:border-white/10
              "
            >
              <p
                className="
                  max-w-2xl

                  text-sm
                  leading-7

                  text-zinc-500

                  sm:text-base
                  sm:leading-8

                  dark:text-zinc-400
                "
              >
                As CEO &amp;
                Co-Founder of
                TechPoint, I focus on
                combining engineering,
                visual communication
                and product thinking to
                create useful digital
                solutions.
              </p>

              <a
                href={
                  portfolioData
                    .company
                    .facebook
                }
                target="_blank"
                rel="noreferrer"
                className="
                  group

                  inline-flex
                  w-fit
                  shrink-0
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
                Visit TechPoint

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
        </motion.div>
      </section>

      <section
        className="
          px-4

          sm:px-6

          md:px-8

          lg:px-10
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
              lg:gap-12

              dark:border-white/10
            "
          >
            <h2
              className="
                max-w-[900px]

                text-[clamp(2.6rem,8vw,6.6rem)]

                font-medium

                leading-[0.95]

                tracking-[-0.06em]
              "
            >
              Explore what I've{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                been building.
              </span>
            </h2>

            <Link
              to="/projects"
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
              View projects

              <FiArrowRight
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