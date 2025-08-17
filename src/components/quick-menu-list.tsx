import { quickMenuList } from "@/data/quick-menu-list";
import { Button } from "./ui/button";
import Link from "next/link";
import MoreMenu from "./more-menu-dropdown";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export const QuickMenuList = ({
  showBtnHide = true,
}: {
  showBtnHide?: boolean;
}) => {
  return (
    <Collapsible className="flex flex-col gap-2.5">
      <CollapsibleTrigger asChild>
        {showBtnHide && (
          <Button variant={"ghost"} className="w-max mx-auto">
            <ChevronDown />
            <span>Hide quick menu</span>
          </Button>
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-wrap justify-center gap-2.5 items-center">
        {quickMenuList.map((item) => (
          <Button variant={"box"} key={item.label} asChild>
            <Link href={item.link!}>
              <span className={item.icon + " text-xl"} />
              <span className="text-sm">{item.label}</span>
            </Link>
          </Button>
        ))}
        <MoreMenu />
      </CollapsibleContent>
    </Collapsible>
  );
};
