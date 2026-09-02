import {
  FiArrowDown,
  FiArrowUpRight,
} from "react-icons/fi";

import {
  Link,
} from "react-router-dom";

import {
  motion,
} from "motion/react";

import {
  portfolioData,
} from "../data/portfolioData";
import HomeArticles from "../components/home/HomeArticles";

export default function Home() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-white

        px-5
        pt-[125px]

        sm:px-7
        sm:pt-[140px]

        lg:px-10
        lg:pt-[145px]

        dark:bg-[#09090b]
      "
    >
      {/* =================================
          BACKGROUND GRID
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.035]

          dark:opacity-[0.045]
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
            "70px 70px",
        }}
      />

      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1400px]
        "
      >
        {/* =================================
            AVAILABILITY
        ================================= */}

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
            duration: 0.6,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            inline-flex
            items-center
            gap-2

            border
            border-zinc-200

            px-3
            py-2

            text-[11px]
            font-medium
            uppercase
            tracking-[0.12em]

            text-zinc-500

            dark:border-white/10
            dark:text-zinc-400
          "
        >
          <span
            className="
              h-2
              w-2

              bg-emerald-500
            "
          />

          Available for opportunities
        </motion.div>

        {/* =================================
            HERO TITLE
        ================================= */}

        <div
          className="
            mt-8

            max-w-[1150px]
          "
        >
          <div className="overflow-hidden">
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
                text-[clamp(3.3rem,8vw,8.5rem)]

                font-medium

                leading-[0.9]

                tracking-[-0.055em]

                text-zinc-950

                dark:text-white
              "
            >
              Full-Stack
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
                text-[clamp(3.3rem,8vw,8.5rem)]

                font-medium

                leading-[0.9]

                tracking-[-0.055em]

                text-zinc-400

                dark:text-zinc-600
              "
            >
              Developer.
            </motion.h1>
          </div>
        </div>

        {/* =================================
            COMPANY ROLE
        ================================= */}

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
            delay: 0.28,
            duration: 0.6,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            mt-8

            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-2

            text-sm

            sm:text-base
          "
        >
          <span
            className="
              text-zinc-500

              dark:text-zinc-400
            "
          >
            {
              portfolioData.company
                .role
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

          <a
            href={
              portfolioData.company
                .facebook
            }
            target="_blank"
            rel="noreferrer"
            className="
              group

              inline-flex
              items-center
              gap-1.5

              font-medium

              text-zinc-950

              transition-colors

              hover:text-blue-600

              dark:text-white
              dark:hover:text-blue-400
            "
          >
            {
              portfolioData.company
                .name
            }

            <FiArrowUpRight
              size={14}
              className="
                transition-transform
                duration-300

                group-hover:-translate-y-[2px]
                group-hover:translate-x-[2px]
              "
            />
          </a>
        </motion.div>

        {/* =================================
            DESCRIPTION / ACTIONS
        ================================= */}

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
            delay: 0.4,

            duration: 0.7,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            mt-10

            flex
            flex-col

            gap-8

            border-t
            border-zinc-200

            pt-7

            lg:flex-row
            lg:items-end
            lg:justify-between

            dark:border-white/10
          "
        >
          {/* Description */}

          <div
            className="
              max-w-[620px]
            "
          >
            <p
              className="
                text-base

                leading-7

                text-zinc-600

                sm:text-lg
                sm:leading-8

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
                    .personal.name
                }
              </span>
              , a full-stack software
              developer and CEO &amp;
              Co-Founder of{" "}
              <a
                href={
                  portfolioData
                    .company
                    .facebook
                }
                target="_blank"
                rel="noreferrer"
                className="
                  font-medium

                  text-zinc-950

                  transition-colors

                  hover:text-blue-600

                  dark:text-white
                  dark:hover:text-blue-400
                "
              >
                {
                  portfolioData
                    .company.name
                }
              </a>
              , building modern,
              scalable and user-focused
              digital products.
            </p>
          </div>

          {/* Actions */}

          <div
            className="
              flex
              flex-wrap

              gap-3
            "
          >
            <Link
              to="/projects"
              className="
                group

                inline-flex
                items-center
                gap-2

                bg-zinc-950

                px-6
                py-3

                text-sm
                font-medium

                text-white

                transition-colors

                hover:bg-zinc-800

                dark:bg-white
                dark:text-black
                dark:hover:bg-zinc-200
              "
            >
              View Projects

              <FiArrowUpRight
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              />
            </Link>

            <Link
              to="/about"
              className="
                group

                inline-flex
                items-center
                gap-2

                border
                border-zinc-200

                px-6
                py-3

                text-sm
                font-medium

                text-zinc-800

                transition-colors

                hover:border-zinc-400
                hover:bg-zinc-50

                dark:border-white/10
                dark:text-zinc-200
                dark:hover:border-white/20
                dark:hover:bg-white/[0.04]
              "
            >
              About Me

              <FiArrowUpRight
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-[2px]
                  group-hover:translate-x-[2px]
                "
              />
            </Link>
          </div>
        </motion.div>

        {/* =================================
            BOTTOM DETAILS
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="
            mt-14

            flex
            flex-col

            gap-4

            pb-8

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Scroll */}

          <div
            className="
              flex
              items-center
              gap-2

              text-[10px]
              font-medium

              uppercase

              tracking-[0.18em]

              text-zinc-400
            "
          >
            <FiArrowDown />

            Scroll to explore
          </div>

          {/* TechPoint */}

          <a
            href={
              portfolioData.company
                .facebook
            }
            target="_blank"
            rel="noreferrer"
            className="
              group

              inline-flex
              items-center
              gap-2

              text-xs
              font-medium

              text-zinc-500

              transition-colors

              hover:text-blue-600

              dark:text-zinc-500
              dark:hover:text-blue-400
            "
          >
            Visit TechPoint

            <FiArrowUpRight
              className="
                transition-transform
                duration-300

                group-hover:-translate-y-[2px]
                group-hover:translate-x-[2px]
              "
            />
          </a>
        </motion.div>
      </div>
      <HomeArticles />
    </section>
  );
}