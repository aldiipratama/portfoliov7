import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroHome = () => {
  const t = useTranslations("page.homePage");

  return (
    <div className="flex flex-col sm:w-2xl mx-auto mt-5 content-between flex-1">
      <AnimatePresence>
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {t("greeting")}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-4xl uppercase"
          >
            {t("title")}
          </motion.h1>
        </div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-1 justify-center items-center"
      >
        <Image
          src={"/img/avatar.png"}
          alt="avatar"
          width={256}
          height={256}
          className="size-80"
          placeholder="blur"
          blurDataURL="/img/avatar.png"
        />
      </motion.div>
    </div>
  );
};

export default HeroHome;
