import Image from "next/image";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const LookingForTalent = () => {
  const t = useTranslations("etc.lookingForTalent");

  return (
    <Dialog>
      <HoverCard>
        <DialogTrigger asChild>
          <HoverCardTrigger asChild>
            <Button
              variant={"outline"}
              className="shadow py-2 px-4 rounded-full"
            >
              <div className="relative w-2 h-2">
                <span className="rounded-full bg-green-500/50 w-2 h-2 animate-ping absolute top-0 left-0" />
                <span className="rounded-full bg-green-500 w-2 h-2 absolute top-0 left-0" />
              </div>
              {t("title")}
            </Button>
          </HoverCardTrigger>
        </DialogTrigger>
        <HoverCardContent className="w-96 ml-4">
          <div className="flex gap-5 items-center justify-between">
            <div className="flex items-center">
              <Image
                src={"/img/avatar.png"}
                alt="avatar"
                width={64}
                height={64}
              />
              <div>
                <h3 className="font-bold text-sm">{t("name")}</h3>
                <p className="text-xs text-muted-foreground">{t("role")}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center border rounded-full px-4 py-2">
              <div className="relative w-2 h-2">
                <span className="rounded-full bg-green-500/50 w-2 h-2 animate-ping absolute top-0 left-0" />
                <span className="rounded-full bg-green-500 w-2 h-2 absolute top-0 left-0" />
              </div>
              <span className="text-xs text-nowrap">{t("status")}</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>

      <DialogContent>
        <DialogHeader>
          <div className="flex gap-5 items-center justify-between">
            <div className="flex items-center">
              <Image
                src={"/img/avatar.png"}
                alt="avatar"
                width={64}
                height={64}
              />
              <div>
                <DialogTitle className="font-bold text-start">
                  {t("name")}
                </DialogTitle>
                <p className="text-sm font-medium text-muted-foreground">
                  {t("studentDegree")}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center border rounded-full px-4 py-2">
              <div className="relative w-2 h-2">
                <span className="rounded-full bg-green-500/50 w-2 h-2 animate-ping absolute top-0 left-0" />
                <span className="rounded-full bg-green-500 w-2 h-2 absolute top-0 left-0" />
              </div>
              <span className="text-xs text-nowrap">{t("status")}</span>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="flex gap-2">
              <span className="icon-[mdi--calendar]" />
              <div className="flex flex-col">
                <span className="text-sm">{t("duration")}</span>
                <p className="text-xs text-muted-foreground font-medium">
                  {t("durationValue")}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="icon-[mdi--school]" />
              <div className="flex flex-col">
                <span className="text-sm">{t("institute")}</span>
                <p className="text-xs text-muted-foreground font-medium">
                  {t("instituteValue")}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex gap-2">
              <span className="icon-[mdi--map-marker]" />
              <div className="flex flex-col">
                <span className="text-sm">{t("location")}</span>
                <p className="text-xs text-muted-foreground font-medium">
                  {t("locationValue")}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="icon-[mingcute--book-line]" />
              <div className="flex flex-col">
                <span className="text-sm">{t("major")}</span>
                <p className="text-xs text-muted-foreground font-medium">
                  {t("majorValue")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <DialogDescription className="flex flex-col gap-5">
          <span className="flex flex-col">
            <span className="text-foreground">{t("whyMajorTitle")}</span>
            <span className="text-sm font-medium">{t("whyMajorDesc")}</span>
          </span>

          <span className="flex flex-col">
            <span className="text-foreground">{t("goalTitle")}</span>
            <span className="text-sm font-medium">{t("goalDesc")}</span>
          </span>
        </DialogDescription>

        <DialogFooter className="!justify-center">
          <Button asChild>
            <Link href="mailto:paldi0013@gmail.com">{t("contactButton")}</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
