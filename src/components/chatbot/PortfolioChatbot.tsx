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
  FiMinus,
  FiRefreshCw,
  FiX,
} from "react-icons/fi";

import {
  suggestedQuestions,
} from "../../data/chatbotData";

import {
  generateChatbotResponse,
} from "../../utils/chatbot";

import type {
  ChatMessage,
} from "../../types/chatbot";

const initialMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi 👋 I'm Yuusuf's portfolio assistant. Ask me about his skills, projects, experience, learning journey or how to contact him.",
};

function createMessageId(): string {
  return `${Date.now()}-${Math.random()}`;
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] =
    useState<boolean>(false);

  const [input, setInput] =
    useState<string>("");

  const [messages, setMessages] =
    useState<ChatMessage[]>([
      initialMessage,
    ]);

  const [isTyping, setIsTyping] =
    useState<boolean>(false);

  const messagesEndRef =
    useRef<HTMLDivElement | null>(
      null
    );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = (
    value: string
  ): void => {
    const trimmed =
      value.trim();

    if (!trimmed || isTyping) {
      return;
    }

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: trimmed,
    };

    setMessages((current) => [
      ...current,
      userMessage,
    ]);

    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const response =
        generateChatbotResponse(
          trimmed
        );

      const assistantMessage: ChatMessage =
        {
          id: createMessageId(),
          role: "assistant",
          content: response,
        };

      setMessages((current) => [
        ...current,
        assistantMessage,
      ]);

      setIsTyping(false);
    }, 550);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    sendMessage(input);
  };

  const resetChat = (): void => {
    setMessages([
      initialMessage,
    ]);

    setInput("");
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating button */}

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.94,
            }}
            onClick={() =>
              setIsOpen(true)
            }
            className="
              fixed
              bottom-5
              right-5
              z-[90]

              flex
              items-center
              gap-3

              rounded-full

              border
              border-zinc-200

              bg-zinc-950

              px-4
              py-3

              text-sm
              font-medium
              text-white

              shadow-xl

              sm:bottom-7
              sm:right-7

              dark:border-white/10
              dark:bg-white
              dark:text-black
            "
          >
            <span
              className="
                flex
                h-8
                w-8
                items-center
                justify-center

                rounded-full

                bg-white/10

                dark:bg-black/10
              "
            >
              <FiMessageCircle
                size={17}
              />
            </span>

            <span className="hidden sm:block">
              Ask Yuusuf AI
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 25,
            }}
            transition={{
              duration: 0.25,
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
              bottom-3
              z-[100]

              flex
              h-[min(680px,calc(100vh-24px))]
              flex-col

              overflow-hidden

              rounded-[26px]

              border
              border-zinc-200

              bg-white

              shadow-2xl

              sm:inset-x-auto
              sm:bottom-7
              sm:right-7
              sm:h-[650px]
              sm:w-[390px]

              dark:border-white/10
              dark:bg-[#111113]
            "
          >
            {/* Header */}

            <div
              className="
                flex
                items-center
                justify-between

                border-b
                border-zinc-200

                px-5
                py-4

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

                    rounded-full

                    bg-zinc-950

                    text-xs
                    font-bold
                    text-white

                    dark:bg-white
                    dark:text-black
                  "
                >
                  YA

                  <span
                    className="
                      absolute
                      bottom-0
                      right-0

                      h-3
                      w-3

                      rounded-full

                      border-2
                      border-white

                      bg-emerald-500

                      dark:border-[#111113]
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
                      text-xs

                      text-zinc-500

                      dark:text-zinc-400
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
                  gap-1
                "
              >
                <button
                  type="button"
                  onClick={resetChat}
                  title="Reset chat"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full

                    text-zinc-500

                    transition

                    hover:bg-zinc-100
                    hover:text-zinc-950

                    dark:text-zinc-400
                    dark:hover:bg-white/5
                    dark:hover:text-white
                  "
                >
                  <FiRefreshCw
                    size={16}
                  />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setIsOpen(false)
                  }
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full

                    text-zinc-500

                    transition

                    hover:bg-zinc-100
                    hover:text-zinc-950

                    dark:text-zinc-400
                    dark:hover:bg-white/5
                    dark:hover:text-white
                  "
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}

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
                  gap-4
                "
              >
                {messages.map(
                  (message) => (
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

                          rounded-2xl

                          px-4
                          py-3

                          text-sm
                          leading-6

                          ${
                            message.role ===
                            "user"
                              ? `
                                rounded-br-md
                                bg-zinc-950
                                text-white

                                dark:bg-white
                                dark:text-black
                              `
                              : `
                                rounded-bl-md

                                border
                                border-zinc-200

                                bg-zinc-100

                                text-zinc-700

                                dark:border-white/10
                                dark:bg-white/5
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

                {/* Typing */}

                {isTyping && (
                  <div className="flex justify-start">
                    <div
                      className="
                        flex
                        items-center
                        gap-1

                        rounded-2xl
                        rounded-bl-md

                        border
                        border-zinc-200

                        bg-zinc-100

                        px-4
                        py-4

                        dark:border-white/10
                        dark:bg-white/5
                      "
                    >
                      {[0, 1, 2].map(
                        (item) => (
                          <motion.span
                            key={item}
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

                              rounded-full

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

              {/* Suggestions */}

              {messages.length === 1 && (
                <div className="mt-6">
                  <p
                    className="
                      mb-3
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.14em]

                      text-zinc-400
                    "
                  >
                    Try asking
                  </p>

                  <div
                    className="
                      flex
                      flex-wrap
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
                            rounded-full

                            border
                            border-zinc-200

                            px-3
                            py-2

                            text-xs
                            font-medium

                            text-zinc-600

                            transition

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

            {/* Input */}

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

                  rounded-[18px]

                  border
                  border-zinc-200

                  bg-zinc-50

                  p-2

                  focus-within:border-zinc-400

                  dark:border-white/10
                  dark:bg-white/5
                  dark:focus-within:border-white/20
                "
              >
                <textarea
                  value={input}
                  rows={1}
                  placeholder="Ask about Yuusuf..."
                  onChange={(event) =>
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
                    scale: 0.9,
                  }}
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    bg-zinc-950

                    text-white

                    transition

                    disabled:cursor-not-allowed
                    disabled:opacity-30

                    dark:bg-white
                    dark:text-black
                  "
                >
                  <FiArrowUp
                    size={17}
                  />
                </motion.button>
              </form>

              <div
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-1

                  text-[10px]

                  text-zinc-400
                "
              >
                <FiMinus />

                Portfolio assistant
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}