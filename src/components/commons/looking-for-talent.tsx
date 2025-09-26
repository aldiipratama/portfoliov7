import { Book, Calendar, MapPin, School } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Status, StatusIndicator, StatusLabel } from "./status";
import { DiagonalPattern } from "./diagonal-pattern";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";

const talent = [
  {
    icon: Calendar,
    label: "Durasi",
    description: "2022 oktober - sekarang",
  },
  {
    icon: School,
    label: "Institusi",
    description: "Universitas Pasundan",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    description: "Bandung, Indonesia",
  },
  {
    icon: Book,
    label: "Program Studi",
    description: "Teknik Informatika",
  },
];

export const LookingForTalent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Status status="online" className="bg-transparent">
            <StatusIndicator />
            <StatusLabel>Looking for talent?</StatusLabel>
          </Status>
        </Button>
      </DialogTrigger>
      <DialogContent className="grid-cols-[20px_1fr_20px] p-0 gap-0">
        <div className="row-start-1 row-span-9 col-start-1">
          <DiagonalPattern className="border-r" />
        </div>
        <div className="row-start-1 row-span-9 col-start-3">
          <DiagonalPattern className="border-l" />
        </div>

        <div className="row-start-2 col-start-1 col-span-3">
          <Separator />
        </div>
        <div className="row-start-4 col-start-1 col-span-3">
          <Separator />
        </div>
        <div className="row-start-6 col-start-1 col-span-3">
          <Separator />
        </div>
        <div className="row-start-8 col-start-1 col-span-3">
          <Separator />
        </div>

        <DialogHeader className="py-4 row-start-1 col-start-2">
          <DialogTitle asChild>
            <Status status="online" className="bg-transparent">
              <StatusIndicator />
              <StatusLabel>Looking for talent?</StatusLabel>
            </Status>
          </DialogTitle>
        </DialogHeader>

        <div className="row-start-3 col-start-2 py-2">
          <div className="flex items-center">
            <Avatar className="size-20">
              <AvatarImage src={"/img/avatar.png"} alt="avatar" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium text-base">
                Muhamad Rinaldi Agus Pratama
              </span>
              <span className="text-xs">
                Mahasiswa Sarjana Teknik Informatika
              </span>
            </div>
          </div>
        </div>

        <div className="row-start-5 col-start-2 px-2">
          <div className="grid grid-cols-[auto_20px_auto] gap-4">
            <div className="col-start-2 row-start-1 row-span-2">
              <DiagonalPattern className="border-x" />
            </div>

            {talent.map(({ icon: Icon, label, description }, i) => (
              <div
                key={i}
                className={cn(
                  "nth-[-n+3]:pt-2 nth-[n+3]:pb-2 cursor-default",
                  i % 2 === 0 ? "col-start-1 flex justify-end" : "col-start-3"
                )}
              >
                <div className="flex gap-2 bg-accent rounded-md px-4 py-2 w-max">
                  <Icon className={i % 2 === 0 ? "order-2" : "order-1"} />
                  <div
                    className={cn(
                      "flex flex-col",
                      i % 2 === 0 ? "order-1 items-end" : "order-2"
                    )}
                  >
                    <span className="text-sm">{label}</span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row-start-7 col-start-2 pl-4">
          <ScrollArea>
            <DialogDescription className="flex flex-col gap-5 max-h-40 py-4">
              <span className="flex flex-col">
                <span className="text-foreground">
                  Kenapa memilih jurusan ini?
                </span>
                <span className="text-sm font-medium">
                  Awalnya saya hanya suka utak-atik komputer, tapi akhirnya
                  benar-benar menikmati dunia pemrograman. Saya memilih Teknik
                  Informatika agar bisa ngoding sambil santai, eksplorasi
                  teknologi terbaru, dan mungkin membangun startup sendiri suatu
                  hari nanti. Saya ingin menjadi bagian dari transformasi
                  digital yang relevan dengan kehidupan sehari-hari.
                </span>
              </span>
              <span className="flex flex-col">
                <span className="text-foreground">Tujuan</span>
                <span className="text-sm font-medium">
                  Tujuan saya adalah menjadi insinyur perangkat lunak yang
                  terampil dan berkontribusi pada proyek inovatif yang berdampak
                  bagi kehidupan banyak orang. Saya ingin terus belajar dan
                  berkembang di bidang ini, serta nantinya mengambil peran
                  kepemimpinan untuk membimbing orang lain dan mendorong
                  perubahan positif.
                </span>
              </span>
            </DialogDescription>
          </ScrollArea>
        </div>

        <div className="row-start-9 col-start-2 p-4">
          <DialogFooter>
            <Link href={"mailto:paldi0013@gmail.com"} target="_blank">
              <Button>Hubungi Saya</Button>
            </Link>
            <Link href={"./cv.pdf"} target="_blank" download>
              <Button>Download CV</Button>
            </Link>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
