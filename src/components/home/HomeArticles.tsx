import {
  FiArrowRight,
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
} from "../../data/articlesData";

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

export default function HomeArticles() {
  const latestArticles =
    articles.slice(
      0,
      3
    );

  return (
    <section
      className="
        border-t
        border-zinc-200

        bg-white

        px-4

        sm:px-6
        md:px-8
        lg:px-10

        dark:border-white/10
        dark:bg-[#09090b]
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

            gap-7

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            

            <h2
              className="
                mt-5

                max-w-[800px]

                text-[clamp(2.4rem,6vw,5rem)]

                font-medium

                leading-[1]

                tracking-[-0.055em]

                text-zinc-950

                dark:text-white
              "
            >
              Latest{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                Articles
              </span>
            </h2>
          </div>

          <Link
            to="/articles"
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

              text-zinc-950

              dark:border-white
              dark:text-white
            "
          >
            View all articles

            <FiArrowRight
              size={15}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </Link>
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
          {latestArticles.map(
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
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,

                  delay:
                    index *
                    0.07,
                }}
                className="
                  group
                  relative

                  min-h-[360px]

                  overflow-hidden

                  border
                  border-zinc-200

                  bg-white

                  transition-colors
                  duration-300

                  hover:border-zinc-300
                  hover:bg-zinc-50

                  sm:min-h-[390px]

                  dark:border-white/10
                  dark:bg-[#09090b]

                  dark:hover:border-white/20
                  dark:hover:bg-white/[0.025]
                "
              >
                <Link
                  to={`/articles/${article.slug}`}
                  className="
                    relative
                    z-10

                    flex
                    h-full
                    min-h-[360px]
                    flex-col

                    p-6

                    sm:min-h-[390px]
                    sm:p-7

                    lg:p-8
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
                      duration-500

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

                        leading-[1.18]

                        tracking-[-0.04em]

                        text-zinc-950

                        transition-colors
                        duration-300

                        group-hover:text-blue-600

                        sm:text-2xl

                        dark:text-white

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

                        gap-5

                        border-t
                        border-zinc-200

                        pt-5

                        dark:border-white/10
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
                            font-mono

                            text-[9px]

                            uppercase
                            tracking-[0.14em]

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

                      <span
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
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          )}
        </div>

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            mt-14
            h-px
            w-full

            origin-left

            bg-zinc-200

            sm:mt-16

            dark:bg-white/10
          "
        />
      </div>
    </section>
  );
}