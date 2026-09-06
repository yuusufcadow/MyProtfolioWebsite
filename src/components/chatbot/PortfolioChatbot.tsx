import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  FiArrowUp,
  FiMessageCircle,
  FiRefreshCw,
  FiX,
} from "react-icons/fi";

import {
  suggestedQuestions,
} from "../../data/chatbotData";

import {
  getChatbotResponse,
} from "../../utils/chatbot";

import type {
  ChatMessage,
} from "../../types/chatbot";

const initialMessage: ChatMessage = {
  id:
    "welcome",

  role:
    "assistant",

  content:
    "Hi, I'm Yuusuf's portfolio assistant. Ask me about his Full Stack Engineering experience, Odoo maintenance, Heegan Technology, 32+ production projects, technical skills, articles or contact information.",
};

function createMessageId() {
  return `${Date.now()}-${Math.random()}`;
}

export default function PortfolioChatbot() {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  const [
    input,
    setInput,
  ] = useState("");

  const [
    messages,
    setMessages,
  ] =
    useState<ChatMessage[]>(
      [
        initialMessage,
      ]
    );

  const [
    isTyping,
    setIsTyping,
  ] = useState(false);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(
      null
    );

  useEffect(
    () => {
      messagesEndRef.current?.scrollIntoView(
        {
          behavior:
            "smooth",
        }
      );
    },
    [
      messages,
      isTyping,
    ]
  );

  const sendMessage = (
    value: string
  ) => {
    const trimmed =
      value.trim();

    if (
      !trimmed ||
      isTyping
    ) {
      return;
    }

    const userMessage: ChatMessage =
      {
        id:
          createMessageId(),

        role:
          "user",

        content:
          trimmed,
      };

    setMessages(
      (
        current
      ) => [
        ...current,
        userMessage,
      ]
    );

    setInput("");
    setIsTyping(true);

    window.setTimeout(
      () => {
        const response =
          getChatbotResponse(
            trimmed
          );

        const assistantMessage: ChatMessage =
          {
            id:
              createMessageId(),

            role:
              "assistant",

            content:
              response,
          };

        setMessages(
          (
            current
          ) => [
            ...current,
            assistantMessage,
          ]
        );

        setIsTyping(
          false
        );
      },
      450
    );
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    sendMessage(
      input
    );
  };

  const resetChat =
    () => {
      setMessages([
        initialMessage,
      ]);

      setInput("");

      setIsTyping(
        false
      );
    };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            aria-label="Open portfolio assistant"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() =>
              setIsOpen(
                true
              )
            }
            className="
              fixed
              bottom-[72px]
              right-4
              z-[90]

              flex
              h-12
              items-center
              justify-center

              gap-3

              border
              border-zinc-950

              bg-zinc-950

              px-4

              text-sm
              font-medium

              text-white

              sm:bottom-7
              sm:right-7

              dark:border-white
              dark:bg-white
              dark:text-zinc-950

              xl:bottom-7
            "
          >
            <FiMessageCircle
              size={17}
            />

            <span
              className="
                hidden
                sm:block
              "
            >
              Ask Yuusuf AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 24,
              scale: 0.98,
            }}
            transition={{
              duration: 0.3,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              fixed
              inset-x-3
              bottom-[62px]
              z-[100]

              flex
              h-[min(680px,calc(100vh-82px))]
              flex-col

              overflow-hidden

              border
              border-zinc-200

              bg-white

              sm:inset-x-auto
              sm:bottom-7
              sm:right-7
              sm:h-[650px]
              sm:w-[400px]

              dark:border-white/10
              dark:bg-[#0d0d0f]
            "
          >
            <div
              className="
                flex
                min-h-[68px]
                items-center
                justify-between

                border-b
                border-zinc-200

                px-4

                sm:px-5

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
                <div
                  className="
                    relative

                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    border
                    border-zinc-200

                    text-xs
                    font-semibold

                    dark:border-white/10
                  "
                >
                  YA

                  <span
                    className="
                      absolute
                      -bottom-[1px]
                      -right-[1px]

                      h-2.5
                      w-2.5

                      border
                      border-white

                      bg-emerald-500

                      dark:border-[#0d0d0f]
                    "
                  />
                </div>

                <div>
                  <h2
                    className="
                      text-sm
                      font-semibold

                      text-zinc-950

                      dark:text-white
                    "
                  >
                    Yuusuf AI
                  </h2>

                  <p
                    className="
                      mt-0.5

                      text-[10px]

                      uppercase
                      tracking-[0.12em]

                      text-zinc-400
                    "
                  >
                    Portfolio Assistant
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                "
              >
                <button
                  type="button"
                  onClick={
                    resetChat
                  }
                  title="Reset chat"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    border-l
                    border-zinc-200

                    text-zinc-400

                    transition-colors

                    hover:bg-zinc-50
                    hover:text-zinc-950

                    dark:border-white/10

                    dark:hover:bg-white/[0.04]
                    dark:hover:text-white
                  "
                >
                  <FiRefreshCw
                    size={15}
                  />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setIsOpen(
                      false
                    )
                  }
                  aria-label="Close assistant"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    border-l
                    border-zinc-200

                    text-zinc-400

                    transition-colors

                    hover:bg-zinc-50
                    hover:text-zinc-950

                    dark:border-white/10

                    dark:hover:bg-white/[0.04]
                    dark:hover:text-white
                  "
                >
                  <FiX
                    size={17}
                  />
                </button>
              </div>
            </div>

            <div
              className="
                flex-1

                overflow-y-auto

                px-4
                py-5
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-3
                "
              >
                {messages.map(
                  (
                    message
                  ) => (
                    <motion.div
                      key={
                        message.id
                      }
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className={`
                        flex

                        ${
                          message.role ===
                          "user"
                            ? "justify-end"
                            : "justify-start"
                        }
                      `}
                    >
                      <div
                        className={`
                          max-w-[88%]

                          whitespace-pre-line

                          border

                          px-4
                          py-3

                          text-sm
                          leading-6

                          ${
                            message.role ===
                            "user"
                              ? `
                                border-zinc-950

                                bg-zinc-950

                                text-white

                                dark:border-white
                                dark:bg-white
                                dark:text-zinc-950
                              `
                              : `
                                border-zinc-200

                                bg-zinc-50

                                text-zinc-700

                                dark:border-white/10
                                dark:bg-white/[0.035]
                                dark:text-zinc-300
                              `
                          }
                        `}
                      >
                        {
                          message.content
                        }
                      </div>
                    </motion.div>
                  )
                )}

                {isTyping && (
                  <div
                    className="
                      flex
                      justify-start
                    "
                  >
                    <div
                      className="
                        flex
                        items-center

                        gap-1.5

                        border
                        border-zinc-200

                        bg-zinc-50

                        px-4
                        py-4

                        dark:border-white/10
                        dark:bg-white/[0.035]
                      "
                    >
                      {[
                        0,
                        1,
                        2,
                      ].map(
                        (
                          item
                        ) => (
                          <motion.span
                            key={
                              item
                            }
                            animate={{
                              opacity: [
                                0.3,
                                1,
                                0.3,
                              ],

                              y: [
                                0,
                                -3,
                                0,
                              ],
                            }}
                            transition={{
                              duration:
                                0.8,

                              repeat:
                                Infinity,

                              delay:
                                item *
                                0.12,
                            }}
                            className="
                              h-1.5
                              w-1.5

                              bg-zinc-500
                            "
                          />
                        )
                      )}
                    </div>
                  </div>
                )}

                <div
                  ref={
                    messagesEndRef
                  }
                />
              </div>

              {messages.length ===
                1 && (
                <div
                  className="
                    mt-7
                  "
                >
                  <p
                    className="
                      mb-3

                      text-[9px]
                      font-semibold

                      uppercase
                      tracking-[0.18em]

                      text-zinc-400
                    "
                  >
                    Ask about
                  </p>

                  <div
                    className="
                      grid
                      grid-cols-2

                      gap-2
                    "
                  >
                    {suggestedQuestions.map(
                      (
                        suggestion
                      ) => (
                        <button
                          key={
                            suggestion.id
                          }
                          type="button"
                          onClick={() =>
                            sendMessage(
                              suggestion.question
                            )
                          }
                          className="
                            min-h-11

                            border
                            border-zinc-200

                            px-3
                            py-2

                            text-left

                            text-xs
                            font-medium

                            text-zinc-600

                            transition-colors

                            hover:border-zinc-400
                            hover:text-zinc-950

                            dark:border-white/10
                            dark:text-zinc-400

                            dark:hover:border-white/20
                            dark:hover:text-white
                          "
                        >
                          {
                            suggestion.label
                          }
                        </button>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <div
              className="
                border-t
                border-zinc-200

                p-3

                dark:border-white/10
              "
            >
              <form
                onSubmit={
                  handleSubmit
                }
                className="
                  flex
                  items-end

                  gap-2

                  border
                  border-zinc-200

                  bg-zinc-50

                  p-2

                  focus-within:border-zinc-400

                  dark:border-white/10
                  dark:bg-white/[0.03]

                  dark:focus-within:border-white/20
                "
              >
                <textarea
                  value={
                    input
                  }
                  rows={1}
                  placeholder="Ask about Yuusuf..."
                  onChange={(
                    event
                  ) =>
                    setInput(
                      event.target
                        .value
                    )
                  }
                  onKeyDown={(
                    event
                  ) => {
                    if (
                      event.key ===
                        "Enter" &&
                      !event.shiftKey
                    ) {
                      event.preventDefault();

                      sendMessage(
                        input
                      );
                    }
                  }}
                  className="
                    max-h-28
                    min-h-[42px]

                    flex-1

                    resize-none

                    bg-transparent

                    px-2
                    py-2.5

                    text-sm

                    text-zinc-950

                    outline-none

                    placeholder:text-zinc-400

                    dark:text-white
                  "
                />

                <motion.button
                  type="submit"
                  disabled={
                    !input.trim() ||
                    isTyping
                  }
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center

                    bg-zinc-950

                    text-white

                    disabled:cursor-not-allowed
                    disabled:opacity-30

                    dark:bg-white
                    dark:text-zinc-950
                  "
                >
                  <FiArrowUp
                    size={16}
                  />
                </motion.button>
              </form>

              <p
                className="
                  mt-2

                  text-center

                  text-[9px]

                  uppercase
                  tracking-[0.13em]

                  text-zinc-400
                "
              >
                Yuusuf portfolio assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}