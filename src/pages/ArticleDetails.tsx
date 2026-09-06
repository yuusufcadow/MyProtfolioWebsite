import {
  useEffect,
  useState,
} from "react";

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

export default function ArticleDetails() {
  const {
    slug,
  } = useParams();

  const [
    progress,
    setProgress,
  ] = useState(0);

  const articleIndex =
    articles.findIndex(
      (
        item
      ) =>
        item.slug ===
        slug
    );

  const article =
    articleIndex >= 0
      ? articles[
          articleIndex
        ]
      : undefined;

  useEffect(
    () => {
      window.scrollTo({
        top: 0,
        behavior:
          "auto",
      });
    },
    [
      slug,
    ]
  );

  useEffect(
    () => {
      const updateProgress =
        () => {
          const scrollTop =
            window.scrollY;

          const scrollableHeight =
            document.documentElement
              .scrollHeight -
            window.innerHeight;

          if (
            scrollableHeight <=
            0
          ) {
            setProgress(
              0
            );

            return;
          }

          const percentage =
            Math.min(
              Math.max(
                (scrollTop /
                  scrollableHeight) *
                  100,
                0
              ),
              100
            );

          setProgress(
            percentage
          );
        };

      updateProgress();

      window.addEventListener(
        "scroll",
        updateProgress,
        {
          passive: true,
        }
      );

      return () => {
        window.removeEventListener(
          "scroll",
          updateProgress
        );
      };
    },
    []
  );

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

          <p
            className="
              mx-auto
              mt-5
              max-w-lg

              text-sm
              leading-7

              text-zinc-500

              dark:text-zinc-400
            "
          >
            The article you are looking
            for does not exist or may
            have been moved.
          </p>

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

  const previousArticle =
    articleIndex >
    0
      ? articles[
          articleIndex - 1
        ]
      : articles[
          articles.length -
            1
        ];

  const nextArticle =
    articleIndex <
    articles.length - 1
      ? articles[
          articleIndex + 1
        ]
      : articles[0];

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
      <div
        className="
          fixed
          left-0
          top-[68px]
          z-40

          h-[2px]
          w-full

          bg-transparent
        "
      >
        <motion.div
          className="
            h-full

            origin-left

            bg-blue-600

            dark:bg-blue-400
          "
          animate={{
            width:
              `${progress}%`,
          }}
          transition={{
            duration: 0.1,
          }}
        />
      </div>

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
              y: 10,
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
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.12,
                duration: 0.6,
                ease,
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
                    {
                      article.category
                    }
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
                    {
                      article.readTime
                    }
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
                    Sections
                  </p>

                  <p
                    className="
                      mt-2

                      text-sm
                      font-medium
                    "
                  >
                    {
                      article.sections.length
                    }
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
                    max-w-[1080px]

                    text-[clamp(2.8rem,7vw,6.8rem)]

                    font-medium

                    leading-[0.94]

                    tracking-[-0.065em]
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
                    delay: 0.2,
                    duration: 0.6,
                  }}
                  className="
                    mt-7
                    max-w-3xl

                    text-lg
                    font-medium

                    leading-8

                    tracking-[-0.02em]

                    text-zinc-700

                    sm:text-xl
                    sm:leading-9

                    dark:text-zinc-300
                  "
                >
                  {
                    article.subtitle
                  }
                </motion.p>
              )}

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
                  delay: 0.28,
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
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.55,
                }}
                className="
                  mt-9

                  flex
                  flex-wrap

                  gap-x-5
                  gap-y-3

                  border-t
                  border-zinc-200

                  pt-6

                  dark:border-white/10
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
                        text-[10px]
                        font-medium

                        uppercase
                        tracking-[0.12em]

                        text-zinc-400
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
              duration: 0.6,
              ease,
            }}
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
                max-w-[235px]

                text-sm
                leading-7

                text-zinc-500

                dark:text-zinc-400
              "
            >
              Practical notes from my
              engineering, production,
              Odoo and full-stack
              development experience.
            </p>

            <div
              className="
                mt-8

                border-t
                border-zinc-200

                pt-5

                dark:border-white/10
              "
            >
              <p
                className="
                  text-[9px]

                  uppercase
                  tracking-[0.16em]

                  text-zinc-400
                "
              >
                Reading progress
              </p>

              <p
                className="
                  mt-2

                  font-mono

                  text-sm
                  font-medium
                "
              >
                {Math.round(
                  progress
                )}
                %
              </p>
            </div>
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

                    py-11

                    first:border-t-0
                    first:pt-0

                    sm:py-14

                    dark:border-white/10
                  "
                >
                  <div
                    className="
                      grid
                      gap-5

                      sm:grid-cols-[64px_1fr]
                      sm:gap-9
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
                          max-w-2xl

                          text-2xl
                          font-medium

                          leading-[1.08]

                          tracking-[-0.05em]

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
                          mt-7

                          space-y-6
                        "
                      >
                        {section.paragraphs.map(
                          (
                            paragraph,
                            paragraphIndex
                          ) => (
                            <p
                              key={
                                paragraphIndex
                              }
                              className="
                                max-w-3xl

                                text-[15px]
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

            <div
              className="
                mt-8

                border-y
                border-zinc-200

                py-8

                dark:border-white/10
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
                Closing note
              </p>

              <p
                className="
                  mt-4
                  max-w-3xl

                  text-lg
                  font-medium

                  leading-8

                  tracking-[-0.025em]

                  text-zinc-700

                  sm:text-xl
                  sm:leading-9

                  dark:text-zinc-300
                "
              >
                I use these articles to
                document practical lessons
                from building, maintaining,
                debugging and delivering
                real software.
              </p>
            </div>
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
        <div
          className="
            mx-auto
            max-w-[1400px]

            py-16

            sm:py-20
            lg:py-24
          "
        >
          <div
            className="
              grid
              gap-8

              lg:grid-cols-2
            "
          >
            <Link
              to={`/articles/${previousArticle.slug}`}
              className="
                group

                border
                border-zinc-200

                p-6

                transition-colors

                hover:bg-zinc-50

                sm:p-7

                dark:border-white/10

                dark:hover:bg-white/[0.025]
              "
            >
              <div
                className="
                  flex
                  items-center

                  gap-3
                "
              >
                <FiArrowLeft
                  size={14}
                  className="
                    transition-transform

                    group-hover:-translate-x-1
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-semibold

                    uppercase
                    tracking-[0.17em]

                    text-zinc-400
                  "
                >
                  Previous article
                </span>
              </div>

              <h3
                className="
                  mt-8
                  max-w-xl

                  text-2xl
                  font-medium

                  leading-[1.1]

                  tracking-[-0.045em]

                  transition-colors

                  group-hover:text-blue-600

                  sm:text-3xl

                  dark:group-hover:text-blue-400
                "
              >
                {
                  previousArticle.title
                }
              </h3>

              <p
                className="
                  mt-4

                  text-xs

                  text-zinc-400
                "
              >
                {
                  previousArticle.category
                }{" "}
                ·{" "}
                {
                  previousArticle.readTime
                }
              </p>
            </Link>

            <Link
              to={`/articles/${nextArticle.slug}`}
              className="
                group

                border
                border-zinc-200

                p-6

                transition-colors

                hover:bg-zinc-50

                sm:p-7

                dark:border-white/10

                dark:hover:bg-white/[0.025]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-end

                  gap-3
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold

                    uppercase
                    tracking-[0.17em]

                    text-zinc-400
                  "
                >
                  Next article
                </span>

                <FiArrowRight
                  size={14}
                  className="
                    transition-transform

                    group-hover:translate-x-1
                  "
                />
              </div>

              <h3
                className="
                  ml-auto
                  mt-8
                  max-w-xl

                  text-right

                  text-2xl
                  font-medium

                  leading-[1.1]

                  tracking-[-0.045em]

                  transition-colors

                  group-hover:text-blue-600

                  sm:text-3xl

                  dark:group-hover:text-blue-400
                "
              >
                {
                  nextArticle.title
                }
              </h3>

              <p
                className="
                  mt-4

                  text-right

                  text-xs

                  text-zinc-400
                "
              >
                {
                  nextArticle.category
                }{" "}
                ·{" "}
                {
                  nextArticle.readTime
                }
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}