import { ISkillsData } from "@/types/data";
import { TextEffect } from "../ui/text-effect";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SkillsCard = ({ data }: { data: ISkillsData }) => {
  const [showTechSkill, setShowTechSkill] = useState(false);
  const [showSoftSkill, setShowSoftSkill] = useState(false);
  const [showClosing, setShowClosing] = useState(false);

  return (
    <>
      <TextEffect
        per="word"
        preset="fade"
        onAnimationComplete={() => setShowTechSkill(true)}
      >
        {data.opening}
      </TextEffect>
      <div
        className={cn(
          "flex flex-col gap-10",
          showTechSkill && "border-y-2 [.border-y-2]:py-4 [.border-y-2]:my-4"
        )}
      >
        {showTechSkill && (
          <div className="space-y-4">
            <motion.h3
              className="text-lg font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
            >
              Technical Skills
            </motion.h3>
            <div className="flex flex-wrap gap-2">
              {data.technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-1">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
                    className={`text-xl ${skill.icon}`}
                  />
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.1 }}
                    className="text-sm text-muted-foreground"
                    onAnimationComplete={() => {
                      if (index === data.technicalSkills.length - 1) {
                        setShowSoftSkill(true);
                      }
                    }}
                  >
                    {skill.title}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        )}
        {showSoftSkill && (
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className="text-lg font-semibold"
            >
              Soft Skills
            </motion.h3>
            <div className="flex flex-wrap gap-4 items-center">
              {data.softSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
                    className={`text-xl ${skill.icon}`}
                  />
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.1 }}
                    className="text-sm text-muted-foreground"
                    onAnimationComplete={() => {
                      if (index === data.softSkills.length - 1) {
                        setShowClosing(true);
                      }
                    }}
                  >
                    {skill.title}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {showClosing && (
        <TextEffect per="word" preset="fade">
          {data.closing}
        </TextEffect>
      )}
    </>
  );
};

export default SkillsCard;
