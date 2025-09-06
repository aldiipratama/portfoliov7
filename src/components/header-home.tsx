import { motion } from "framer-motion";
import { LookingForTalent } from "./looking-for-talent";
import { LanguageSwitcher } from "./menu";
import { Button } from "./ui/button";
import Link from "next/link";
import { RepoStarCount } from "./repo-star-count";
import { useTranslations } from "next-intl";

const HeaderHome = () => {
  const t = useTranslations("page.homePage");

  return (
    <header className="flex justify-between items-center pt-2 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0, scaleY: 1.2 }}
        animate={{ y: 0, opacity: 1, scaleY: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
          mass: 0.7,
        }}
      >
        <LookingForTalent />
      </motion.div>
      <div className="flex gap-2 items-center">
        <motion.div
          initial={{ y: -100, opacity: 0, scaleY: 1.2 }}
          animate={{ y: 0, opacity: 1, scaleY: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            mass: 0.7,
            delay: 0.1,
          }}
        >
          <LanguageSwitcher />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0, scaleY: 1.2 }}
          animate={{ y: 0, opacity: 1, scaleY: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            mass: 0.7,
            delay: 0.2,
          }}
        >
          <Button size={"sm"} className="font-bold" asChild>
            <Link
              href="https://github.com/aldiipratama/portfoliov7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-[mdi--github] text-xl" />
              {t("starButton")}
              <span className="icon-[mdi--star] text-lg text-yellow-300" />
              <RepoStarCount owner="aldiipratama" repo="portfoliov7" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default HeaderHome;
