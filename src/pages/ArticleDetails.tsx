import {
  FiArrowLeft,
  FiArrowRight,
  FiBookOpen,
} from "react-icons/fi";

import {
  motion,
} from "motion/react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  articles,
} from "../data/articlesData";

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
    y: 24,
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

export default function ArticleDetails() {
  const {
    slug,
  } = useParams();

  const articleIndex =
    articles.findIndex(
      (
        article
      ) =>
        article.slug ===
        slug
    );

  const article =
    articleIndex >= 0
      ? articles[
          articleIndex
        ]
      : undefined;

  if (!article) {
    return (
      <main
        className="
          flex
          min-h-screen
          items-center
          justify-center

          bg-white

          px-4

          text-zinc-950

          dark:bg-[#09090b]
          dark:text-white
        "
      >
        <div
          className="
            w-full
            max-w-2xl

            border-y
            border-zinc-200

            py-16

            text-center

            dark:border-white/10
          "
        >
          <p
            className="
              font-mono

              text-[10px]

              uppercase
              tracking-[0.2em]

              text-blue-600

              dark:text-blue-400
            "
          >
            404
          </p>

          <h1
            className="
              mt-5

              text-4xl
              font-medium

              tracking-[-0.055em]

              sm:text-5xl
            "
          >
            Article not found.
          </h1>

          <Link
            to="/articles"
            className="
              group

              mt-8

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
            <FiArrowLeft
              size={15}
              className="
                transition-transform

                group-hover:-translate-x-1
              "
            />

            Back to articles
          </Link>
        </div>
      </main>
    );
  }

  const nextArticle =
    articles[
      articleIndex + 1
    ] ||
    articles[0];

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
          lg:pb-28
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
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Link
              to="/articles"
              className="
                group

                inline-flex
                items-center

                gap-3

                text-xs
                font-medium

                text-zinc-500

                transition-colors

                hover:text-zinc-950

                dark:text-zinc-400

                dark:hover:text-white
              "
            >
              <FiArrowLeft
                size={14}
                className="
                  transition-transform

                  group-hover:-translate-x-1
                "
              />

              All articles
            </Link>
          </motion.div>

          <div
            className="
              mt-12

              grid
              gap-10

              lg:grid-cols-[0.22fr_1fr]
              lg:gap-16
            "
          >
            <motion.aside
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
            >
              <span
                className="
                  font-mono

                  text-xs

                  text-blue-600

                  dark:text-blue-400
                "
              >
                {article.id}
              </span>

              <div
                className="
                  mt-5

                  border-t
                  border-zinc-200

                  dark:border-white/10
                "
              >
                <div
                  className="
                    border-b
                    border-zinc-200

                    py-4

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
                    Type
                  </p>

                  <p
                    className="
                      mt-2

                      text-sm
                      font-medium
                    "
                  >
                    Engineering Note
                  </p>
                </div>

                <div
                  className="
                    border-b
                    border-zinc-200

                    py-4

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
                    Topic
                  </p>

                  <p
                    className="
                      mt-2

                      text-sm
                      font-medium
                    "
                  >
                    {article.category}
                  </p>
                </div>

                <div
                  className="
                    border-b
                    border-zinc-200

                    py-4

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
                    Reading
                  </p>

                  <p
                    className="
                      mt-2

                      text-sm
                      font-medium
                    "
                  >
                    {article.readTime}
                  </p>
                </div>
              </div>
            </motion.aside>

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
                    ease,
                  }}
                  className="
                    max-w-[1050px]

                    text-[clamp(2.8rem,7vw,6.8rem)]

                    font-medium

                    leading-[0.95]

                    tracking-[-0.06em]
                  "
                >
                  {article.title}
                </motion.h1>
              </div>

              {article.subtitle && (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.22,
                    duration: 0.6,
                  }}
                  className="
                    mt-7
                    max-w-3xl

                    text-lg
                    font-medium

                    leading-8

                    text-zinc-700

                    sm:text-xl

                    dark:text-zinc-300
                  "
                >
                  {article.subtitle}
                </motion.p>
              )}

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
                  duration: 0.65,
                }}
                className="
                  mt-7
                  max-w-3xl

                  text-base
                  leading-8

                  text-zinc-500

                  sm:text-lg
                  sm:leading-9

                  dark:text-zinc-400
                "
              >
                {article.excerpt}
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.45,
                }}
                className="
                  mt-9

                  flex
                  flex-wrap

                  gap-x-5
                  gap-y-3
                "
              >
                {article.tags.map(
                  (
                    tag
                  ) => (
                    <span
                      key={
                        tag
                      }
                      className="
                        text-xs
                        font-medium

                        text-zinc-500

                        dark:text-zinc-400
                      "
                    >
                      {tag}
                    </span>
                  )
                )}
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

            grid
            max-w-[1400px]

            gap-12

            py-16

            sm:py-20

            lg:grid-cols-[0.22fr_1fr]
            lg:gap-16
            lg:py-28
          "
        >
          <motion.aside
            {...reveal}
            className="
              lg:sticky
              lg:top-[110px]
              lg:self-start
            "
          >
            <FiBookOpen
              size={19}
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
              Article
            </p>

            <p
              className="
                mt-4
                max-w-[230px]

                text-sm
                leading-7

                text-zinc-500

                dark:text-zinc-400
              "
            >
              Practical notes from my
              engineering, production
              and development
              experience.
            </p>
          </motion.aside>

          <article
            className="
              max-w-[900px]
            "
          >
            {article.sections.map(
              (
                section,
                index
              ) => (
                <motion.section
                  key={
                    section.title
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
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.6,
                    delay:
                      index *
                      0.04,
                  }}
                  className="
                    border-t
                    border-zinc-200

                    py-10

                    first:border-t-0
                    first:pt-0

                    sm:py-12

                    dark:border-white/10
                  "
                >
                  <div
                    className="
                      grid
                      gap-5

                      sm:grid-cols-[60px_1fr]
                      sm:gap-8
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
                      <h2
                        className="
                          text-2xl
                          font-medium

                          tracking-[-0.045em]

                          sm:text-3xl

                          lg:text-4xl
                        "
                      >
                        {
                          section.title
                        }
                      </h2>

                      <div
                        className="
                          mt-6

                          space-y-6
                        "
                      >
                        {section.paragraphs.map(
                          (
                            paragraph
                          ) => (
                            <p
                              key={
                                paragraph
                              }
                              className="
                                max-w-3xl

                                text-sm
                                leading-8

                                text-zinc-600

                                sm:text-base
                                sm:leading-9

                                dark:text-zinc-400
                              "
                            >
                              {
                                paragraph
                              }
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.section>
              )
            )}
          </article>
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
            lg:py-24
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
            Next article
          </p>

          <Link
            to={`/articles/${nextArticle.slug}`}
            className="
              group

              mt-5

              grid
              gap-8

              border-t
              border-zinc-200

              pt-8

              sm:grid-cols-[1fr_auto]
              sm:items-end

              dark:border-white/10
            "
          >
            <div>
              <span
                className="
                  font-mono

                  text-[10px]

                  text-blue-600

                  dark:text-blue-400
                "
              >
                {nextArticle.id}
              </span>

              <h2
                className="
                  mt-4
                  max-w-[900px]

                  text-[clamp(2rem,5vw,4.8rem)]

                  font-medium

                  leading-[1]

                  tracking-[-0.055em]

                  transition-colors

                  group-hover:text-blue-600

                  dark:group-hover:text-blue-400
                "
              >
                {nextArticle.title}
              </h2>
            </div>

            <span
              className="
                flex
                h-12
                w-12
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
                dark:text-zinc-400

                dark:group-hover:border-blue-400
                dark:group-hover:bg-blue-400
                dark:group-hover:text-zinc-950
              "
            >
              <FiArrowRight
                className="
                  transition-transform

                  group-hover:translate-x-1
                "
              />
            </span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}