import { IFunFactData } from "@/types/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TextEffect } from "../ui/text-effect";

const FunFactCard = ({ data }: { data: IFunFactData }) => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showClosing, setShowClosing] = useState<boolean>(false);
  const [visibleFactIndex, setVisibleFactIndex] = useState<number>(0);

  console.log({ data });

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
                  <span className="text-2xl">🎯</span>
                  <h3 className="font-semibold text-lg">Fun Facts & Hobbies</h3>
                </motion.div>

                <div className="grid gap-3">
                  {data.funFact.map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{
                        opacity: index <= visibleFactIndex ? 1 : 0,
                        x: index <= visibleFactIndex ? 0 : -20,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1,
                      }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border"
                    >
                      {index <= visibleFactIndex && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2,
                            type: "spring",
                            stiffness: 200,
                          }}
                          className="text-lg mt-0.5"
                        >
                          {index === 0 && "🏊‍♂️"}
                          {index === 1 && "📸"}
                          {index === 2 && "🎮"}
                          {index === 3 && "🏆"}
                          {index === 4 && "📺"}
                          {index > 4 && "✨"}
                        </motion.span>
                      )}
                      <div className="flex-1">
                        {index <= visibleFactIndex && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.4,
                            }}
                            className="text-sm text-muted-foreground leading-relaxed"
                          >
                            <TextEffect
                              per="word"
                              preset="fade"
                              as="p"
                              onAnimationComplete={() => {
                                // Setelah typing selesai, lanjut ke fact berikutnya
                                if (
                                  index === visibleFactIndex &&
                                  index < data.funFact.length - 1
                                ) {
                                  setVisibleFactIndex(index + 1);
                                } else if (
                                  index === visibleFactIndex &&
                                  index === data.funFact.length - 1
                                ) {
                                  setShowClosing(true);
                                }
                              }}
                            >
                              {fact}
                            </TextEffect>
                          </motion.div>
                        )}
                      </div>
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

export default FunFactCard;
