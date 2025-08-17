import { moreMenuList } from "@/data/menu-list";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const MoreMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <span className="icon-[solar--menu-dots-bold]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top">
        {moreMenuList.map((menuList, idx) => {
          return (
            <DropdownMenuSub key={idx}>
              <DropdownMenuSubTrigger className="font-bold">
                <span className={`${menuList.icon} text-xl`} />
                <span className="pt-1.5 ml-1">{menuList.label}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="flex flex-col">
                  {menuList.subMenu.map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <Button
                        variant={item.active ? "default" : "ghost"}
                        className="justify-start"
                        asChild
                      >
                        <Link href={item.link}>
                          {item.active && (
                            <span className="icon-[mdi--sparkles-outline]" />
                          )}
                          {item.label}
                        </Link>
                      </Button>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MoreMenu;
