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
            duration: 0.6,
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
              Latest writing
            </p>

            <h2
              className="
                mt-5

                max-w-[820px]

                text-[clamp(2.4rem,6vw,5rem)]

                font-medium

                leading-[1]

                tracking-[-0.055em]
              "
            >
              Notes from{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                production work.
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

              dark:border-white
            "
          >
            View all articles

            <FiArrowRight
              size={15}
              className="
                transition-transform

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
                }}
                transition={{
                  duration: 0.55,

                  delay:
                    index *
                    0.07,
                }}
                className="
                  group

                  min-h-[360px]

                  border
                  border-zinc-200

                  transition-colors

                  hover:bg-zinc-50

                  dark:border-white/10

                  dark:hover:bg-white/[0.025]
                "
              >
                <Link
                  to={`/articles/${article.slug}`}
                  className="
                    flex
                    min-h-[360px]
                    flex-col

                    p-6

                    sm:p-7
                    lg:p-8
                  "
                >
                  <div
                    className="
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
                      {article.category}
                    </span>
                  </div>

                  <div
                    className="
                      mt-12
                    "
                  >
                    <h3
                      className="
                        text-xl
                        font-medium

                        leading-[1.2]

                        tracking-[-0.04em]

                        transition-colors

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
                      mt-auto

                      pt-10
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between

                        border-t
                        border-zinc-200

                        pt-5

                        dark:border-white/10
                      "
                    >
                      <span
                        className="
                          text-[10px]

                          text-zinc-400
                        "
                      >
                        {article.readTime}
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

                          group-hover:border-blue-600
                          group-hover:bg-blue-600
                          group-hover:text-white

                          dark:border-white/10

                          dark:group-hover:border-blue-400
                          dark:group-hover:bg-blue-400
                          dark:group-hover:text-zinc-950
                        "
                      >
                        <FiArrowUpRight
                          size={15}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
}