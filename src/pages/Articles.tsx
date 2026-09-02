import {
  FiArrowUpRight,
} from "react-icons/fi";

import {
  motion,
} from "motion/react";

import {
  Link,
} from "react-router-dom";

import {
  articles,
} from "../data/articlesData";

const reveal = {
  initial: {
    opacity: 0,
    y: 24,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.1,
  },

  transition: {
    duration: 0.6,

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

export default function Articles() {
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
          pt-[100px]
          sm:px-6
          sm:pb-24
          sm:pt-[115px]
          md:px-8
          lg:px-10
          lg:pb-32
          lg:pt-[130px]
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
                    text-[clamp(3.2rem,9vw,7.6rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.065em]
                  "
                >
                  Things I'm
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
                    text-[clamp(3.2rem,9vw,7.6rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.065em]
                    text-zinc-400
                    dark:text-zinc-600
                  "
                >
                  learning.
                </motion.h1>
              </div>
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
                delay: 0.28,
                duration: 0.65,
              }}
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
              Notes, ideas and lessons
              from my software
              development and
              engineering journey.
            </motion.p>
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
              Latest writing
            </p>

            <div
              className="
                mt-4
                flex
                items-end
                justify-between
                gap-6
              "
            >
              <h2
                className="
                  text-3xl
                  font-medium
                  tracking-[-0.05em]
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                Articles{" "}
                <span
                  className="
                    text-zinc-400
                    dark:text-zinc-600
                  "
                >
                  & notes.
                </span>
              </h2>

              <span
                className="
                  hidden
                  font-mono
                  text-xs
                  text-zinc-400
                  sm:block
                "
              >
                {articles.length
                  .toString()
                  .padStart(
                    2,
                    "0"
                  )}
              </span>
            </div>
          </motion.div>

          <div
            className="
              mt-12
              grid
              gap-5
              sm:mt-14
              sm:gap-6
              md:grid-cols-2
              xl:grid-cols-3
              xl:gap-7
            "
          >
            {articles.map(
              (
                article,
                index
              ) => (
                <motion.article
                  key={
                    article.id
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
                    min-h-[360px]
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
                    sm:min-h-[390px]
                    sm:p-7
                    lg:min-h-[420px]
                    lg:p-8
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
                      -bottom-8
                      right-2
                      select-none
                      font-mono
                      text-[6rem]
                      leading-none
                      tracking-[-0.1em]
                      text-zinc-100
                      transition-colors
                      duration-300
                      group-hover:text-blue-50
                      sm:text-[7rem]
                      dark:text-white/[0.02]
                      dark:group-hover:text-blue-400/[0.035]
                    "
                  >
                    {article.id}
                  </span>

                  <div
                    className="
                      relative
                      z-10
                      flex
                      items-center
                      justify-between
                      gap-4
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
                      {article.id}
                    </span>

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        text-zinc-400
                      "
                    >
                      {article.status}
                    </span>
                  </div>

                  <div
                    className="
                      relative
                      z-10
                      mt-12
                      sm:mt-14
                    "
                  >
                    <h3
                      className="
                        max-w-md
                        text-xl
                        font-medium
                        leading-[1.2]
                        tracking-[-0.04em]
                        transition-colors
                        duration-300
                        group-hover:text-blue-600
                        sm:text-2xl
                        dark:group-hover:text-blue-400
                      "
                    >
                      {article.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-md
                        text-sm
                        leading-7
                        text-zinc-500
                        dark:text-zinc-400
                      "
                    >
                      {article.excerpt}
                    </p>
                  </div>

                  <div
                    className="
                      relative
                      z-10
                      mt-auto
                      pt-10
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        border-t
                        border-zinc-200
                        pt-5
                        dark:border-white/10
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <span
                          className="
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.15em]
                            text-zinc-400
                          "
                        >
                          {article.date}
                        </span>

                        <span
                          className="
                            h-1
                            w-1
                            bg-zinc-300
                            dark:bg-zinc-700
                          "
                        />

                        <span
                          className="
                            text-[9px]
                            text-zinc-400
                          "
                        >
                          {article.readTime}
                        </span>
                      </div>

                      <Link
                        to={`/articles/${article.slug}`}
                        aria-label={`Read ${article.title}`}
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          border
                          border-zinc-200
                          text-zinc-500
                          transition-all
                          duration-300
                          group-hover:border-blue-600
                          group-hover:bg-blue-600
                          group-hover:text-white
                          dark:border-white/10
                          dark:text-zinc-400
                          dark:group-hover:border-blue-400
                          dark:group-hover:bg-blue-400
                          dark:group-hover:text-zinc-950
                        "
                      >
                        <FiArrowUpRight
                          size={15}
                          className="
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}