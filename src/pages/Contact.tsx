import {
  useState,
} from "react";

import type {
  FormEvent,
} from "react";

import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiMail,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa6";

import {
  motion,
} from "motion/react";

import {
  portfolioData,
} from "../data/portfolioData";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const PHONE_NUMBER =
  "+252 614875072";

const initialForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const socialLinks = [
  {
    label: "GitHub",
    username: "@yuusufcadow",
    href:
      portfolioData.social.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    username: "Yuusuf Adow",
    href:
      portfolioData.social.linkedin,
    icon: FaLinkedinIn,
  },
  {
    label: "TikTok",
    username: "@yuusuf.js",
    href:
      portfolioData.social.tiktok,
    icon: FaTiktok,
  },
  {
    label: "Instagram",
    username: "@ina_adoww",
    href:
      portfolioData.social.instagram,
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    username: "Yuusuf Adow",
    href:
      portfolioData.social.facebook,
    icon: FaFacebookF,
  },
];

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
    ease,
  },
};

export default function Contact() {
  const [
    form,
    setForm,
  ] = useState<ContactForm>(
    initialForm
  );

  const [
    copiedEmail,
    setCopiedEmail,
  ] = useState(false);

  const [
    copiedPhone,
    setCopiedPhone,
  ] = useState(false);

  const updateField = (
    field: keyof ContactForm,
    value: string
  ) => {
    setForm(
      (
        current
      ) => ({
        ...current,
        [field]:
          value,
      })
    );
  };

  const copyEmail =
    async () => {
      try {
        await navigator.clipboard.writeText(
          portfolioData
            .contact
            .email
        );

        setCopiedEmail(
          true
        );

        window.setTimeout(
          () =>
            setCopiedEmail(
              false
            ),
          1800
        );
      } catch {
        setCopiedEmail(
          false
        );
      }
    };

  const copyPhone =
    async () => {
      try {
        await navigator.clipboard.writeText(
          PHONE_NUMBER
        );

        setCopiedPhone(
          true
        );

        window.setTimeout(
          () =>
            setCopiedPhone(
              false
            ),
          1800
        );
      } catch {
        setCopiedPhone(
          false
        );
      }
    };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const subject =
      form.subject.trim() ||
      `Portfolio enquiry from ${form.name}`;

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone
        ? `Phone: ${form.phone}`
        : "",
      "",
      form.message,
    ]
      .filter(
        Boolean
      )
      .join(
        "\n"
      );

    const mailto = `mailto:${
      portfolioData
        .contact
        .email
    }?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      body
    )}`;

    window.location.href =
      mailto;
  };

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
          pt-[110px]

          sm:px-6
          sm:pb-24
          sm:pt-[125px]

          md:px-8

          lg:px-10
          lg:pb-32
          lg:pt-[145px]
        "
      >
        <div
          className="
            pointer-events-none

            absolute
            inset-0

            opacity-[0.022]

            dark:opacity-[0.03]
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
              grid
              gap-12

              lg:grid-cols-[1.15fr_0.85fr]
              lg:items-end
              lg:gap-20
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
                    duration: 0.9,
                    ease,
                  }}
                  className="
                    text-[clamp(3.5rem,9vw,8rem)]

                    font-medium

                    leading-[0.88]

                    tracking-[-0.07em]
                  "
                >
                  Let's create
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
                    duration: 0.9,
                    delay: 0.08,
                    ease,
                  }}
                  className="
                    text-[clamp(3.5rem,9vw,8rem)]

                    font-medium

                    leading-[0.88]

                    tracking-[-0.07em]

                    text-zinc-400

                    dark:text-zinc-600
                  "
                >
                  something meaningful.
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
                ease,
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
                Have an idea, software
                project or opportunity
                you would like to
                discuss? Send me a
                message and tell me what
                you are working on.
              </p>

              <div
                className="
                  mt-8

                  border-t
                  border-zinc-200

                  pt-6

                  dark:border-white/10
                "
              >
                <p
                  className="
                    text-xs
                    leading-6

                    text-zinc-400
                  "
                >
                  Available for software
                  development,
                  collaboration and
                  technology
                  opportunities.
                </p>
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
        <div
          className="
            mx-auto

            grid
            max-w-[1400px]

            gap-14

            py-16

            sm:py-20

            lg:grid-cols-[0.7fr_1.3fr]
            lg:gap-20
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
            <p
              className="
                text-[10px]
                font-semibold

                uppercase
                tracking-[0.2em]

                text-zinc-400
              "
            >
              Get in touch
            </p>

            <h2
              className="
                mt-5
                max-w-md

                text-[clamp(2.4rem,5vw,4.5rem)]

                font-medium

                leading-[0.98]

                tracking-[-0.055em]
              "
            >
              A conversation can{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                start here.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-md

                text-sm
                leading-7

                text-zinc-500

                dark:text-zinc-400
              "
            >
              Reach me directly by
              email or phone, or use the
              form to send a more
              detailed message.
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
                  flex
                  items-center

                  gap-4

                  border-b
                  border-zinc-200

                  py-6

                  dark:border-white/10
                "
              >
                <div
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

                    dark:border-white/10
                    dark:text-zinc-400
                  "
                >
                  <FiMail
                    size={16}
                  />
                </div>

                <div
                  className="
                    min-w-0
                    flex-1
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
                    Email
                  </p>

                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="
                      mt-2
                      block

                      break-all

                      text-sm
                      font-medium

                      transition-colors

                      hover:text-blue-600

                      sm:text-base

                      dark:hover:text-blue-400
                    "
                  >
                    {
                      portfolioData
                        .contact
                        .email
                    }
                  </a>
                </div>

                <button
                  type="button"
                  onClick={
                    copyEmail
                  }
                  aria-label="Copy email"
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center

                    border
                    border-zinc-200

                    text-zinc-400

                    transition-colors

                    hover:border-zinc-950
                    hover:text-zinc-950

                    dark:border-white/10

                    dark:hover:border-white
                    dark:hover:text-white
                  "
                >
                  {copiedEmail ? (
                    <FiCheck
                      size={14}
                    />
                  ) : (
                    <FiCopy
                      size={14}
                    />
                  )}
                </button>
              </div>

              <div
                className="
                  flex
                  items-center

                  gap-4

                  border-b
                  border-zinc-200

                  py-6

                  dark:border-white/10
                "
              >
                <div
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

                    dark:border-white/10
                    dark:text-zinc-400
                  "
                >
                  <FiPhone
                    size={16}
                  />
                </div>

                <div
                  className="
                    min-w-0
                    flex-1
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
                    Phone
                  </p>

                  <a
                    href={`tel:${PHONE_NUMBER.replace(
                      /\s+/g,
                      ""
                    )}`}
                    className="
                      mt-2
                      block

                      text-sm
                      font-medium

                      transition-colors

                      hover:text-blue-600

                      sm:text-base

                      dark:hover:text-blue-400
                    "
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={
                    copyPhone
                  }
                  aria-label="Copy phone number"
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center

                    border
                    border-zinc-200

                    text-zinc-400

                    transition-colors

                    hover:border-zinc-950
                    hover:text-zinc-950

                    dark:border-white/10

                    dark:hover:border-white
                    dark:hover:text-white
                  "
                >
                  {copiedPhone ? (
                    <FiCheck
                      size={14}
                    />
                  ) : (
                    <FiCopy
                      size={14}
                    />
                  )}
                </button>
              </div>
            </div>
          </motion.aside>

          <motion.div
            {...reveal}
          >
            <div
              className="
                mb-9
              "
            >
              <h3
                className="
                  text-2xl
                  font-medium

                  tracking-[-0.045em]

                  sm:text-3xl
                "
              >
                Send a message
              </h3>

              <p
                className="
                  mt-3
                  max-w-xl

                  text-sm
                  leading-7

                  text-zinc-500

                  dark:text-zinc-400
                "
              >
                Share a few details
                about your idea,
                project or opportunity.
              </p>
            </div>

            <form
              onSubmit={
                handleSubmit
              }
              className="
                border-t
                border-zinc-200

                dark:border-white/10
              "
            >
              <div
                className="
                  grid

                  sm:grid-cols-2
                "
              >
                <label
                  className="
                    block

                    border-b
                    border-zinc-200

                    py-6

                    sm:border-r
                    sm:pr-7

                    dark:border-white/10
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold

                      uppercase
                      tracking-[0.18em]

                      text-zinc-400
                    "
                  >
                    Name
                  </span>

                  <input
                    type="text"
                    required
                    value={
                      form.name
                    }
                    onChange={(
                      event
                    ) =>
                      updateField(
                        "name",
                        event.target
                          .value
                      )
                    }
                    placeholder="Your name"
                    className="
                      mt-4
                      w-full

                      bg-transparent

                      text-lg
                      font-medium

                      tracking-[-0.025em]

                      outline-none

                      placeholder:text-zinc-300

                      sm:text-xl

                      dark:placeholder:text-zinc-700
                    "
                  />
                </label>

                <label
                  className="
                    block

                    border-b
                    border-zinc-200

                    py-6

                    sm:pl-7

                    dark:border-white/10
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold

                      uppercase
                      tracking-[0.18em]

                      text-zinc-400
                    "
                  >
                    Email
                  </span>

                  <input
                    type="email"
                    required
                    value={
                      form.email
                    }
                    onChange={(
                      event
                    ) =>
                      updateField(
                        "email",
                        event.target
                          .value
                      )
                    }
                    placeholder="you@example.com"
                    className="
                      mt-4
                      w-full

                      bg-transparent

                      text-lg
                      font-medium

                      tracking-[-0.025em]

                      outline-none

                      placeholder:text-zinc-300

                      sm:text-xl

                      dark:placeholder:text-zinc-700
                    "
                  />
                </label>
              </div>

              <div
                className="
                  grid

                  sm:grid-cols-2
                "
              >
                <label
                  className="
                    block

                    border-b
                    border-zinc-200

                    py-6

                    sm:border-r
                    sm:pr-7

                    dark:border-white/10
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold

                      uppercase
                      tracking-[0.18em]

                      text-zinc-400
                    "
                  >
                    Phone
                  </span>

                  <input
                    type="tel"
                    value={
                      form.phone
                    }
                    onChange={(
                      event
                    ) =>
                      updateField(
                        "phone",
                        event.target
                          .value
                      )
                    }
                    placeholder="Your phone number"
                    className="
                      mt-4
                      w-full

                      bg-transparent

                      text-lg
                      font-medium

                      tracking-[-0.025em]

                      outline-none

                      placeholder:text-zinc-300

                      sm:text-xl

                      dark:placeholder:text-zinc-700
                    "
                  />
                </label>

                <label
                  className="
                    block

                    border-b
                    border-zinc-200

                    py-6

                    sm:pl-7

                    dark:border-white/10
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-semibold

                      uppercase
                      tracking-[0.18em]

                      text-zinc-400
                    "
                  >
                    Subject
                  </span>

                  <input
                    type="text"
                    value={
                      form.subject
                    }
                    onChange={(
                      event
                    ) =>
                      updateField(
                        "subject",
                        event.target
                          .value
                      )
                    }
                    placeholder="What would you like to discuss?"
                    className="
                      mt-4
                      w-full

                      bg-transparent

                      text-lg
                      font-medium

                      tracking-[-0.025em]

                      outline-none

                      placeholder:text-zinc-300

                      sm:text-xl

                      dark:placeholder:text-zinc-700
                    "
                  />
                </label>
              </div>

              <label
                className="
                  block

                  border-b
                  border-zinc-200

                  py-6

                  dark:border-white/10
                "
              >
                <span
                  className="
                    text-[9px]
                    font-semibold

                    uppercase
                    tracking-[0.18em]

                    text-zinc-400
                  "
                >
                  Message
                </span>

                <textarea
                  required
                  rows={7}
                  value={
                    form.message
                  }
                  onChange={(
                    event
                  ) =>
                    updateField(
                      "message",
                      event.target
                        .value
                    )
                  }
                  placeholder="Tell me about your project, idea or opportunity..."
                  className="
                    mt-4
                    w-full

                    resize-none

                    bg-transparent

                    text-base
                    leading-8

                    outline-none

                    placeholder:text-zinc-300

                    sm:text-lg

                    dark:placeholder:text-zinc-700
                  "
                />
              </label>

              <div
                className="
                  flex
                  flex-col

                  gap-5

                  pt-7

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p
                  className="
                    max-w-md

                    text-xs
                    leading-6

                    text-zinc-400
                  "
                >
                  Your message will open
                  in your email
                  application ready to
                  send.
                </p>

                <motion.button
                  type="submit"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group

                    flex
                    w-full

                    items-center
                    justify-between

                    gap-6

                    border
                    border-zinc-950

                    bg-zinc-950

                    px-5
                    py-4

                    text-sm
                    font-medium

                    text-white

                    transition-colors

                    hover:bg-transparent
                    hover:text-zinc-950

                    sm:w-auto
                    sm:min-w-[200px]

                    dark:border-white
                    dark:bg-white
                    dark:text-zinc-950

                    dark:hover:bg-transparent
                    dark:hover:text-white
                  "
                >
                  Send message

                  <FiSend
                    size={15}
                    className="
                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </motion.button>
              </div>
            </form>
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
            max-w-[1400px]

            py-16

            sm:py-20
            lg:py-28
          "
        >
          <div
            className="
              grid
              gap-8

              lg:grid-cols-[1fr_0.65fr]
              lg:items-end
              lg:gap-16
            "
          >
            <h2
              className="
                max-w-[850px]

                text-[clamp(2.5rem,6vw,5.5rem)]

                font-medium

                leading-[1]

                tracking-[-0.055em]
              "
            >
              Connect beyond{" "}
              <span
                className="
                  text-zinc-400

                  dark:text-zinc-600
                "
              >
                this website.
              </span>
            </h2>

            <p
              className="
                max-w-md

                text-sm
                leading-7

                text-zinc-500

                dark:text-zinc-400
              "
            >
              Follow my software
              development, learning and
              technology journey across
              the platforms where I am
              active.
            </p>
          </div>

          <div
            className="
              mt-12

              grid
              gap-px

              border
              border-zinc-200

              bg-zinc-200

              sm:grid-cols-2
              lg:grid-cols-5

              dark:border-white/10
              dark:bg-white/10
            "
          >
            {socialLinks.map(
              (
                social,
                index
              ) => {
                const Icon =
                  social.icon;

                return (
                  <motion.a
                    key={
                      social.label
                    }
                    href={
                      social.href
                    }
                    target="_blank"
                    rel="noopener noreferrer"
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
                      duration: 0.5,
                      delay:
                        index *
                        0.05,
                    }}
                    className="
                      group

                      flex
                      min-h-[160px]
                      flex-col
                      justify-between

                      bg-white

                      p-5

                      transition-colors

                      hover:bg-zinc-50

                      dark:bg-[#09090b]

                      dark:hover:bg-white/[0.025]
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <Icon
                        size={17}
                        className="
                          text-zinc-400

                          transition-colors

                          group-hover:text-blue-600

                          dark:group-hover:text-blue-400
                        "
                      />

                      <FiArrowUpRight
                        size={14}
                        className="
                          text-zinc-300

                          transition-all
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                          group-hover:text-blue-600

                          dark:text-zinc-700

                          dark:group-hover:text-blue-400
                        "
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-sm
                          font-medium
                        "
                      >
                        {social.label}
                      </p>

                      <p
                        className="
                          mt-1

                          text-[10px]

                          text-zinc-400
                        "
                      >
                        {
                          social.username
                        }
                      </p>
                    </div>
                  </motion.a>
                );
              }
            )}
          </div>
        </motion.div>
      </section>
    </main>
  );
}