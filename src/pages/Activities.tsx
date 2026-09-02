import {
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";

import {
  motion,
} from "motion/react";

import {
  Link,
} from "react-router-dom";

import aisomaliaorganizers from "../assets/aisomaliaOrganizers.jpg";
import aisomaliteam from "../assets/aisomaliateam.jpg";
import aisomaliamembers from "../assets/aisomaliMember.jpg";

import pyconsomalia from "../assets/pyconsomalia.jpg";
import pyconsomaliateam from "../assets/pyconsomaliateam.jpg";

import fniyoFikir from "../assets/fan.jpg";

import SocialAside from "../components/SocialAside";

interface Activity {
  id: string;
  year: string;
  date: string;
  organization: string;
  role: string;
  type: string;
  description: string;
  link?: string;
  images?: string[];
}

const activities: Activity[] = [
  {
    id: "01",

    year: "2026",

    date: "2026",

    organization:
      "AI Somalia",

    role:
      "Organizer & Protocol Team Member",

    type:
      "Community & Technology",

    description:
      "Member of the AI Somalia organizers and protocol team, supporting organization and protocol work for the artificial intelligence and technology community in Somalia.",

    link:
      "https://www.facebook.com/yuusuf.adow.mohamuud",

    images: [
      aisomaliaorganizers,
      aisomaliteam,
      aisomaliamembers,
    ],
  },

  {
    id: "02",

    year: "2025",

    date:
      "03 September 2025",

    organization:
      "PyCon Somalia",

    role:
      "Community Activity",

    type:
      "Technology Community",

    description:
      "Took part in PyCon Somalia on 3 September 2025 as part of my technology community activities.",

    link:
      "https://www.facebook.com/PyConSomalia",

    images: [
      pyconsomalia,
      pyconsomaliateam,
    ],
  },

  {
    id: "03",

    year: "2025",

    date:
      "04 June 2025",

    organization:
      "Zamzam University",

    role:
      "Volunteer",

    type:
      "Volunteer Experience",

    description:
      "Worked as a volunteer with Zamzam University on 4 June 2025, contributing my time and support as part of the university activity.",

    link:
      "https://www.facebook.com/ZUSTUniversity/posts/pfbid02G9stFd4YMjEbAjJsHUUXaxZeNPQXTfh4CpQ5fWp6wYv3CkZkVd6XqJT7K8M5pDAdl",

    images: [
      fniyoFikir,
    ],
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

interface ActivityGalleryProps {
  activity: Activity;
}

function ActivityGallery({
  activity,
}: ActivityGalleryProps) {
  if (
    !activity.images ||
    activity.images.length ===
      0
  ) {
    return null;
  }

  if (
    activity.images.length ===
    1
  ) {
    return (
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
        }}
        className="
          mt-8

          border-t
          border-zinc-200

          pt-7

          sm:mt-10
          sm:pt-8

          dark:border-white/10
        "
      >
        <div
          className="
            group/image
            relative

            overflow-hidden

            bg-zinc-100

            dark:bg-[#08080a]
          "
        >
          <div
            className="
              relative

              aspect-[16/10]

              overflow-hidden

              sm:aspect-[16/9]
            "
          >
            <img
              src={
                activity.images[0]
              }
              alt={`${activity.organization} ${activity.role}`}
              className="
                h-full
                w-full

                object-cover
                object-center

                transition-transform
                duration-700

                group-hover/image:scale-[1.025]
              "
            />

            <div
              className="
                pointer-events-none

                absolute
                inset-0

                bg-gradient-to-t

                from-black/45
                via-transparent
                to-transparent
              "
            />

            <div
              className="
                absolute
                bottom-4
                left-4
                right-4

                flex
                items-end
                justify-between

                gap-4

                sm:bottom-5
                sm:left-5
                sm:right-5
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-medium

                    text-white

                    sm:text-sm
                  "
                >
                  {
                    activity.organization
                  }
                </p>

                <p
                  className="
                    mt-1

                    text-[8px]

                    uppercase
                    tracking-[0.15em]

                    text-white/60

                    sm:text-[9px]
                  "
                >
                  {
                    activity.role
                  }
                </p>
              </div>

              <span
                className="
                  font-mono

                  text-[9px]

                  text-white/60
                "
              >
                {
                  activity.year
                }
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (
    activity.images.length ===
    2
  ) {
    return (
      <div
        className="
          mt-8

          grid
          gap-px

          overflow-hidden

          border-t
          border-zinc-200

          bg-zinc-200

          pt-px

          sm:mt-10
          sm:grid-cols-2

          dark:border-white/10
          dark:bg-white/10
        "
      >
        {activity.images.map(
          (
            image,
            imageIndex
          ) => (
            <motion.div
              key={`${activity.id}-${imageIndex}`}
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
                duration: 0.55,

                delay:
                  imageIndex *
                  0.06,
              }}
              className="
                group/image

                overflow-hidden

                bg-white

                dark:bg-[#08080a]
              "
            >
              <div
                className="
                  aspect-[4/3]

                  overflow-hidden
                "
              >
                <img
                  src={image}
                  alt={`${activity.organization} activity ${imageIndex + 1}`}
                  className="
                    h-full
                    w-full

                    object-cover

                    transition-transform
                    duration-700

                    group-hover/image:scale-[1.025]
                  "
                />
              </div>
            </motion.div>
          )
        )}
      </div>
    );
  }

  return (
    <div
      className="
        mt-8

        grid
        gap-px

        overflow-hidden

        border-t
        border-zinc-200

        bg-zinc-200

        pt-px

        sm:mt-10
        sm:grid-cols-2

        lg:grid-cols-[1.2fr_0.8fr]

        dark:border-white/10
        dark:bg-white/10
      "
    >
      <motion.div
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
          duration: 0.55,
        }}
        className="
          group/image

          overflow-hidden

          bg-white

          sm:row-span-2

          dark:bg-[#08080a]
        "
      >
        <img
          src={
            activity.images[0]
          }
          alt={`${activity.organization} activity 1`}
          className="
            aspect-[4/3]

            h-full
            w-full

            object-cover

            transition-transform
            duration-700

            group-hover/image:scale-[1.025]

            sm:aspect-auto
          "
        />
      </motion.div>

      {activity.images
        .slice(
          1,
          3
        )
        .map(
          (
            image,
            index
          ) => (
            <motion.div
              key={image}
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
                duration: 0.55,

                delay:
                  (index + 1) *
                  0.05,
              }}
              className="
                group/image

                overflow-hidden

                bg-white

                dark:bg-[#08080a]
              "
            >
              <img
                src={image}
                alt={`${activity.organization} activity ${index + 2}`}
                className="
                  aspect-[4/3]

                  h-full
                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover/image:scale-[1.025]
                "
              />
            </motion.div>
          )
        )}
    </div>
  );
}

export default function Activities() {
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
                  Beyond
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
                  the code.
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
                My activities extend
                beyond software
                development into
                volunteering,
                technology communities
                and organizing
                initiatives that
                connect me with people,
                ideas and opportunities
                across Somalia.
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
                <FiUsers
                  size={15}
                  className="
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
                  Community · Technology ·
                  Volunteering
                </span>
              </div>
            </motion.div>
          </div>

          <SocialAside />

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
              delay: 0.5,
              duration: 0.6,
            }}
            className="
              mt-12

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
                Beginning
              </p>

              <p
                className="
                  mt-2

                  text-2xl
                  font-medium

                  tracking-[-0.04em]
                "
              >
                2025
              </p>

              <p
                className="
                  mt-2

                  text-xs

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                Volunteer & community
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
                Current
              </p>

              <p
                className="
                  mt-2

                  text-2xl
                  font-medium

                  tracking-[-0.04em]
                "
              >
                2026
              </p>

              <p
                className="
                  mt-2

                  text-xs

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                AI Somalia
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
                Direction
              </p>

              <p
                className="
                  mt-2

                  text-2xl
                  font-medium

                  tracking-[-0.04em]
                "
              >
                Community
              </p>

              <p
                className="
                  mt-2

                  text-xs

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                Learn · Connect · Contribute
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
            {...reveal}
            className="
              grid
              gap-10

              lg:grid-cols-[0.32fr_1.68fr]
              lg:gap-14
            "
          >
            <div
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
                Timeline
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
                Activity

                <span
                  className="
                    block

                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  journey.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-[270px]

                  text-sm
                  leading-7

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                A growing record of
                volunteering, technology
                participation and community
                contribution.
              </p>
            </div>

            <div
              className="
                border-t
                border-zinc-200

                dark:border-white/10
              "
            >
              {activities.map(
                (
                  activity,
                  index
                ) => (
                  <motion.article
                    key={
                      activity.id
                    }
                    initial={{
                      opacity: 0,
                      y: 30,
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
                      duration: 0.6,

                      delay:
                        index *
                        0.05,
                    }}
                    className="
                      group
                      relative

                      overflow-hidden

                      border-b
                      border-zinc-200

                      py-10

                      sm:py-12

                      dark:border-white/10
                    "
                  >
                    <span
                      className="
                        pointer-events-none

                        absolute

                        -bottom-10
                        right-0

                        select-none

                        font-mono

                        text-[6rem]

                        leading-none

                        tracking-[-0.1em]

                        text-zinc-100

                        sm:text-[8rem]

                        lg:text-[10rem]

                        dark:text-white/[0.025]
                      "
                    >
                      {activity.id}
                    </span>

                    <div
                      className="
                        relative
                        z-10

                        grid
                        gap-6

                        md:grid-cols-[120px_1fr]

                        lg:grid-cols-[150px_1fr]
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
                          {activity.id}
                        </span>

                        <p
                          className="
                            font-mono

                            text-xs

                            text-blue-600

                            md:mt-4

                            dark:text-blue-400
                          "
                        >
                          {activity.year}
                        </p>
                      </div>

                      <div
                        className="
                          min-w-0
                        "
                      >
                        <p
                          className="
                            text-[9px]
                            font-semibold

                            uppercase
                            tracking-[0.18em]

                            text-blue-600

                            dark:text-blue-400
                          "
                        >
                          {activity.type}
                        </p>

                        <h3
                          className="
                            mt-3
                            max-w-4xl

                            text-2xl
                            font-medium

                            tracking-[-0.045em]

                            transition-colors

                            group-hover:text-blue-600

                            sm:text-3xl
                            lg:text-4xl

                            dark:group-hover:text-blue-400
                          "
                        >
                          {activity.role}
                        </h3>

                        <div
                          className="
                            mt-4

                            flex
                            flex-wrap
                            items-center

                            gap-x-4
                            gap-y-2
                          "
                        >
                          {activity.link ? (
                            <a
                              href={
                                activity.link
                              }
                              target="_blank"
                              rel="noreferrer"
                              className="
                                group/link

                                inline-flex
                                items-center

                                gap-2

                                text-sm
                                font-medium

                                text-zinc-800

                                transition-colors

                                hover:text-blue-600

                                dark:text-zinc-200
                                dark:hover:text-blue-400
                              "
                            >
                              {
                                activity.organization
                              }

                              <FiArrowUpRight
                                size={14}
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
                                text-sm
                                font-medium
                              "
                            >
                              {
                                activity.organization
                              }
                            </span>
                          )}

                          <span
                            className="
                              hidden

                              h-1
                              w-1

                              bg-zinc-300

                              sm:block

                              dark:bg-zinc-700
                            "
                          />

                          <span
                            className="
                              inline-flex
                              items-center

                              gap-2

                              text-xs

                              text-zinc-400
                            "
                          >
                            <FiCalendar
                              size={13}
                            />

                            {
                              activity.date
                            }
                          </span>
                        </div>

                        <p
                          className="
                            mt-6
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
                            activity.description
                          }
                        </p>

                        <ActivityGallery
                          activity={
                            activity
                          }
                        />

                        {activity.link && (
                          <div
                            className="
                              mt-7

                              flex

                              sm:justify-end
                            "
                          >
                            <a
                              href={
                                activity.link
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
                              View activity

                              <FiArrowUpRight
                                className="
                                  transition-transform

                                  group-hover/link:-translate-y-0.5
                                  group-hover/link:translate-x-0.5
                                "
                              />
                            </a>
                          </div>
                        )}
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
        <motion.div
          {...reveal}
          className="
            mx-auto

            grid
            max-w-[1400px]

            gap-8

            py-16

            sm:py-20

            lg:grid-cols-[0.32fr_1.68fr]
            lg:gap-14
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
              Community
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
              Technology becomes more
              meaningful when{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                knowledge, people and
                opportunities connect.
              </span>
            </h2>

            <div
              className="
                mt-9

                grid

                border-t
                border-zinc-200

                md:grid-cols-[1fr_auto]

                dark:border-white/10
              "
            >
              <p
                className="
                  max-w-2xl

                  py-7

                  text-sm
                  leading-7

                  text-zinc-500

                  sm:text-base
                  sm:leading-8

                  md:pr-10

                  dark:text-zinc-400
                "
              >
                I value being part of
                initiatives where I can
                learn, contribute my time,
                meet people working in
                technology and continue
                growing through real
                community experiences.
              </p>

              <div
                className="
                  flex
                  items-end

                  border-t
                  border-zinc-200

                  py-7

                  md:border-l
                  md:border-t-0
                  md:pl-8

                  dark:border-white/10
                "
              >
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
                  About me

                  <FiArrowRight
                    className="
                      transition-transform

                      group-hover:translate-x-1
                    "
                  />
                </Link>
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
              See what I'm{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                building.
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
              Explore projects

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