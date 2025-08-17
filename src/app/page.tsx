import { QuickMenuList } from "@/components/quick-menu-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { RepoStarCount } from "@/components/repo-star-count";

export default function Home() {
  return (
    <main className="container px-5 sm:px-0 mx-auto">
      <header className="flex justify-between items-center pt-2">
        <Button
          variant={"outline"}
          className="shadow py-2 px-4 rounded-full"
          asChild
        >
          <Link href={""}>
            <div className="relative w-2 h-2">
              <span className="rounded-full bg-green-500/50 w-2 h-2 animate-ping absolute top-0 left-0" />
              <span className="rounded-full bg-green-500 w-2 h-2 absolute top-0 left-0" />
            </div>
            Looking for a talent?
          </Link>
        </Button>
        <Button size={"sm"} className="font-bold" asChild>
          <Link
            href="https://github.com/aldiipratama/portfolio-ai-chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-[mdi--github] text-xl" />
            Star
            <span className="icon-[mdi--star] text-lg text-yellow-300" />
            <RepoStarCount owner="aldiipratama" repo="portfolio-ai-chat" />
          </Link>
        </Button>
      </header>

      <div className="flex flex-col sm:w-2xl mx-auto min-h-[calc(100vh-100px)] mt-5 justify-between">
        <div className="text-center">
          <h2>Hi i&apos;m Rinaldi</h2>
          <h1 className="text-4xl uppercase">Frontend Developer</h1>
        </div>

        <Image
          src={"/img/avatar.png"}
          alt="avatar"
          width={256}
          height={256}
          className="mx-auto"
        />

        <div className="flex flex-col gap-5 items-center">
          <form className="relative w-full">
            <Input label="Ask me anything" value="" className="w-full" />
            <Button
              size={"icon"}
              variant={"outline"}
              className="absolute top-1/2 -translate-y-1/2 right-2 scale-75"
            >
              <span className="icon-[mdi--send-outline] text-xl" />
            </Button>
          </form>

          <QuickMenuList showBtnHide={false} />
        </div>
      </div>
    </main>
  );
}
