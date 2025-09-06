import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { IProjectsData } from "@/types/data";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { TextEffect } from "../ui/text-effect";
import { motion } from "framer-motion";

const ProjectsCard = ({ data }: { data: IProjectsData }) => {
  const t = useTranslations("etc.projects-card");
  const [visibleProjectIdx, setVisibleProjectIdx] = useState(-1);
  const [projectStep, setProjectStep] = useState(0);
  const [showClosing, setShowClosing] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <TextEffect
        per="word"
        preset="fade"
        onAnimationComplete={() => {
          setVisibleProjectIdx(0);
          setProjectStep(0);
        }}
      >
        {data.opening}
      </TextEffect>
      <ol className="list-none pl-5 list-inside">
        {visibleProjectIdx >= 0 &&
          data.projects.map((project, idx) => {
            if (idx > visibleProjectIdx) return null;

            const baseDelay = 0;
            const isActiveProject = idx === visibleProjectIdx;
            const currentStep = isActiveProject ? projectStep : 6;

            const links: { type: "github" | "live"; url: string }[] = [];
            if (project.githubLink)
              links.push({ type: "github", url: project.githubLink });
            if (project.liveLink)
              links.push({ type: "live", url: project.liveLink });

            return (
              <li
                className="mb-5 last:mb-0 border-b-2 [.border-b-2]:pb-4 first:border-t-2 first:pt-4"
                key={idx}
              >
                <div className="flex gap-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: baseDelay }}
                  >
                    {idx + 1}.
                  </motion.span>
                  <div className="flow-root">
                    {currentStep === 0 && isActiveProject && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + baseDelay }}
                        onAnimationComplete={() => setProjectStep(1)}
                      >
                        <Image
                          src={
                            project.image
                              ? `/img/${project.image}`
                              : "https://placehold.co/240x160/png?text=No+Image"
                          }
                          alt={project.image || ""}
                          width={240}
                          height={160}
                          className="float-left mr-5"
                        />
                      </motion.div>
                    )}
                    {(currentStep > 0 || !isActiveProject) && (
                      <Image
                        src={
                          project.image
                            ? `/img/${project.image}`
                            : "https://placehold.co/240x160/png?text=No+Image"
                        }
                        alt={project.image || ""}
                        width={240}
                        height={160}
                        className="float-left mr-5"
                      />
                    )}
                    <div className="space-y-4">
                      <div className="space-y-1">
                        {currentStep >= 1 &&
                          (currentStep === 1 && isActiveProject ? (
                            <TextEffect
                              per="word"
                              preset="fade"
                              className="font-bold text-xl"
                              onAnimationComplete={() => setProjectStep(2)}
                            >
                              {project.title}
                            </TextEffect>
                          ) : (
                            <span className="font-bold text-xl">
                              {project.title}
                            </span>
                          ))}
                        {currentStep >= 2 &&
                          (currentStep === 2 && isActiveProject ? (
                            <TextEffect
                              per="word"
                              preset="fade"
                              className="text-sm text-muted-foreground block"
                              onAnimationComplete={() => setProjectStep(3)}
                            >
                              {project.description!}
                            </TextEffect>
                          ) : (
                            <span className="text-sm text-muted-foreground block">
                              {project.description!}
                            </span>
                          ))}
                        {currentStep >= 3 &&
                          (currentStep === 3 && isActiveProject ? (
                            <TextEffect
                              per="word"
                              preset="fade"
                              className="text-sm text-muted-foreground block"
                              onAnimationComplete={() => setProjectStep(4)}
                            >
                              {project.longDescription!}
                            </TextEffect>
                          ) : (
                            <span className="text-sm text-muted-foreground block">
                              {project.longDescription!}
                            </span>
                          ))}
                      </div>
                      {currentStep >= 4 &&
                        (currentStep === 4 && isActiveProject ? (
                          <div className="space-y-2 flex gap-2 flex-wrap">
                            <motion.span
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: baseDelay }}
                              className="text-sm text-muted-foreground"
                            >
                              Technologies:
                            </motion.span>
                            <div className="flex gap-2 items-center">
                              {project.technologies.map((tech, index) =>
                                tech.icon.trim() ? (
                                  <motion.span
                                    key={index}
                                    className={`text-xl ${tech.icon}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: baseDelay + 0.3 + index * 0.1,
                                    }}
                                    onAnimationComplete={() => {
                                      if (
                                        index ===
                                        project.technologies.length - 1
                                      ) {
                                        setProjectStep(5);
                                      }
                                    }}
                                  ></motion.span>
                                ) : (
                                  <motion.span
                                    className="text-sm text-muted-foreground"
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: baseDelay + 0.3 + index * 0.1,
                                    }}
                                    onAnimationComplete={() => {
                                      if (
                                        index ===
                                        project.technologies.length - 1
                                      ) {
                                        setProjectStep(5);
                                      }
                                    }}
                                  >
                                    {tech.name}
                                  </motion.span>
                                )
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-2 flex gap-2 flex-wrap">
                            <span className="text-sm text-muted-foreground">
                              Technologies:
                            </span>
                            <div className="flex gap-2 items-center">
                              {project.technologies.map((tech, index) =>
                                tech.icon.trim() ? (
                                  <span
                                    key={index}
                                    className={`text-xl ${tech.icon}`}
                                  ></span>
                                ) : (
                                  <span
                                    className="text-sm text-muted-foreground"
                                    key={index}
                                  >
                                    {tech.name}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                    {currentStep >= 5 &&
                      (currentStep === 5 && isActiveProject ? (
                        <div className="flex gap-4 mt-5">
                          {links.map((link, index) => (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: baseDelay + index * 0.2,
                              }}
                              key={link.type}
                              onAnimationComplete={() => {
                                if (index === links.length - 1) {
                                  if (
                                    visibleProjectIdx <
                                    data.projects.length - 1
                                  ) {
                                    setVisibleProjectIdx(visibleProjectIdx + 1);
                                    setProjectStep(0);
                                  } else {
                                    setShowClosing(true);
                                  }
                                }
                              }}
                            >
                              <Button variant="outline" asChild>
                                <Link
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {t(
                                    link.type === "github"
                                      ? "viewCode"
                                      : "viewProject"
                                  )}
                                </Link>
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex gap-4 mt-5">
                          {links.map((link) => (
                            <span key={link.type}>
                              <Button variant="outline" asChild>
                                <Link
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {t(
                                    link.type === "github"
                                      ? "viewCode"
                                      : "viewProject"
                                  )}
                                </Link>
                              </Button>
                            </span>
                          ))}
                        </div>
                      ))}
                  </div>
                </div>
              </li>
            );
          })}
      </ol>
      {showClosing && (
        <TextEffect per="word" preset="fade">
          {data.closing}
        </TextEffect>
      )}
    </div>
  );
};

export default ProjectsCard;
