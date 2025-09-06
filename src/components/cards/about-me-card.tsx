import { IAboutMeData } from "@/types/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { TextEffect } from "../ui/text-effect";

export default function AboutMeCard({ data }: { data: IAboutMeData }) {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showBadge, setShowBadge] = useState<boolean>(false);
  const [showClosing, setShowClosing] = useState<boolean>(false);

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
          <div className="w-full md:max-w-full space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 max-sm:items-center border-y-2 [.border-y-2]:py-4 [.border-y-2]:my-2"
            >
              <Image
                src={"/img/aldi.png"}
                alt="Rinaldi"
                width={200}
                height={300}
                className="rounded-lg"
              />
              <div className="flex flex-col gap-5 sm:gap-2 justify-between">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <TextEffect
                        as="span"
                        preset="fade"
                        per="word"
                        className="text-xl"
                      >
                        {data.profile.fullName}
                      </TextEffect>
                    </motion.div>
                    <div className="flex gap-2 items-center text-sm font-semibold">
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1 }}
                      >
                        {data.profile.age}
                      </motion.span>
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.3 }}
                        className="rounded-full size-2 bg-primary"
                      />
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.6 }}
                      >
                        {data.profile.location}
                      </motion.span>
                    </div>
                  </div>
                  <div className="font-semibold text-muted-foreground text-sm">
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 1.9 }}
                      className="block"
                    >
                      Hey👋
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 2.2 }}
                    >
                      <TextEffect
                        as="span"
                        preset="fade"
                        per="word"
                        onAnimationComplete={() => setShowBadge(true)}
                      >
                        {data.bio}
                      </TextEffect>
                    </motion.div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  {showBadge &&
                    data?.profile.badges.map((badge, idx) => (
                      <motion.div
                        key={badge}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: idx >= 1 ? 0.3 : 0,
                        }}
                        onAnimationComplete={() => {
                          if (idx === data.profile.badges.length - 1) {
                            setShowClosing(true);
                          }
                        }}
                      >
                        <Badge className="px-4 py-2 rounded-lg">{badge}</Badge>
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
}
