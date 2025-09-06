import { IContactData } from "@/types/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TextEffect } from "../ui/text-effect";
import { Button } from "../ui/button";
import Link from "next/link";

const ContactCard = ({ data }: { data: IContactData }) => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showClosing, setShowClosing] = useState<boolean>(false);
  const [visibleContactIndex, setVisibleContactIndex] = useState<number>(0);

  return (
    <>
      <TextEffect
        className="text-sm"
        per="word"
        preset="fade"
        as="p"
        onAnimationComplete={() => {
          setShowCard(true);
        }}
      >
        {data.opening}
      </TextEffect>

      <AnimatePresence mode="wait">
        {showCard && (
          <div className="w-full space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border-y-2 [.border-y-2]:py-4 [.border-y-2]:my-2"
            >
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <span className="text-2xl">📬</span>
                  <h3 className="font-semibold text-lg">Get In Touch</h3>
                </motion.div>

                <div className="grid gap-3">
                  {data.contact.map((contact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: index <= visibleContactIndex ? 1 : 0,
                        x: index <= visibleContactIndex ? 0 : -20,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1,
                      }}
                    >
                      {index <= visibleContactIndex && (
                        <Button
                          variant="outline"
                          className="w-full justify-start h-auto p-3 hover:bg-accent/50"
                          asChild
                        >
                          <Link
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 w-full group/link`}
                          >
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.2,
                                type: "spring",
                                stiffness: 200,
                              }}
                              className={`text-lg group-hover/link:scale-110 transition-transform ${contact.icon}`}
                            />

                            <div className="flex-1 text-left">
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.4,
                                }}
                                className="text-sm leading-relaxed"
                              >
                                <TextEffect
                                  per="word"
                                  preset="fade"
                                  as="span"
                                  onAnimationComplete={() => {
                                    // Setelah typing selesai, lanjut ke contact berikutnya
                                    if (
                                      index === visibleContactIndex &&
                                      index < data.contact.length - 1
                                    ) {
                                      setVisibleContactIndex(index + 1);
                                    } else if (
                                      index === visibleContactIndex &&
                                      index === data.contact.length - 1
                                    ) {
                                      setShowClosing(true);
                                    }
                                  }}
                                >
                                  {contact.title}
                                </TextEffect>
                              </motion.div>
                            </div>

                            <motion.span
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.5,
                              }}
                              className={`text-xs opacity-60 group-hover/link:opacity-100 transition-opacity`}
                            >
                              ↗
                            </motion.span>
                          </Link>
                        </Button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {showClosing && (
        <TextEffect className="text-sm" per="word" preset="fade" as="p">
          {data.closing}
        </TextEffect>
      )}
    </>
  );
};

export default ContactCard;
