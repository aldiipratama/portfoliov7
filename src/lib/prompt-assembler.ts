import { readFileSync } from "fs";
import path from "path";
import * as cheerio from "cheerio";

export const assemblePrompt = (): string => {
  let promptXml = readFileSync(
    path.join(process.cwd(), "src/prompts/prompt-persona.xml"),
    "utf-8"
  );

  const $ = cheerio.load(promptXml, { xmlMode: true });
  $("age").text(calculateAge("2002-08-01").toString());
  $("academic_status").text(getAcademicStatus(new Date()));

  return $.xml();
};

function calculateAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function getAcademicStatus(currentDate: Date): string {
  const semesterStartDate = new Date("2022-10-01");

  // Hitung total bulan sejak kuliah dimulai
  let monthsPassed =
    (currentDate.getFullYear() - semesterStartDate.getFullYear()) * 12;
  monthsPassed -= semesterStartDate.getMonth();
  monthsPassed += currentDate.getMonth();

  const currentSemester = Math.floor(monthsPassed / 6) + 1;
  const monthInSemester = monthsPassed % 6; // Bulan ke-0 sampai ke-5 dalam semester

  // Asumsi:
  // - Bulan ke-0 (Oktober/April): Awal semester
  // - Bulan ke-4 (Februari/Agustus): Akhir masa kuliah
  // - Bulan ke-5 (Maret/September): Liburan / Masa peralihan

  if (monthInSemester === 5) {
    // Jika bulan ke-5 (Maret atau September)
    return `Saat ini lagi liburan semester nih, sebentar lagi mau masuk semester ${
      currentSemester + 1
    }.`;
  } else if (monthInSemester === 4) {
    // Jika bulan ke-4 (Februari atau Agustus)
    return `Lagi di akhir semester ${currentSemester} bro, bentar lagi masuk semester ${
      currentSemester + 1
    }. Udah deket-deket final project nih, hehe.`;
  } else {
    // Jika di tengah semester
    return `Sekarang lagi sibuk-sibuknya di semester ${currentSemester}.`;
  }
}
