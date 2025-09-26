import { Info } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";

export const Maintenance = ({
  open,
  onOpenChange,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div className="flex gap-2 items-center">
              <Info />
              <span className="font-medium">Informasi</span>
            </div>
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-4">
            <span>
              Portfolio AI sedang dalam tahap pemeliharaan rutin. Saya berusaha
              untuk meningkatkan pengalaman Anda. Untuk saat ini, silakan
              nikmati fitur saat ini yang sudah tersedia. Terima kasih atas
              pengertian Anda!
            </span>
            <span>
              Jika Anda memiliki masukan atau saran, jangan ragu untuk
              menghubungi saya.
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row">
          <DialogClose onClick={() => onOpenChange!(false)} className="sr-only">
            Close
          </DialogClose>
          <Link
            href={"mailto:paldi0013@gmail.com"}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="outline">Hubungi saya</Button>
          </Link>
          <Link
            href={"/CV Muhamad Rinaldi Agus Pratama.pdf"}
            target="_blank"
            rel="noreferrer"
            download="CV - Muhamad Rinaldi Agus Pratama"
          >
            <Button>Download CV</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
