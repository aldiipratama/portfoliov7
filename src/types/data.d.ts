/**
 * Data Types Definition - Definisi tipe data untuk portfolio
 *
 * File ini berisi definisi interface TypeScript yang digunakan untuk
 * memastikan type safety pada data portfolio. Semua interface ini
 * diturunkan dari Zod schemas untuk validasi data yang konsisten.
 */

import type { z } from "zod";
import {
  aboutMeSchema,
  contactSchema,
  funFactSchema,
  projectsSchema,
  skillsSchema,
  testimonialsSchema,
} from "@/tools/schema";

// ===============================
// PORTFOLIO DATA INTERFACES
// ===============================

/**
 * Interface untuk data informasi pribadi
 *
 * Berisi informasi tentang latar belakang, pengalaman,
 * dan deskripsi personal dari portfolio.
 */
export type IAboutMeData = z.infer<typeof aboutMeSchema>;

/**
 * Interface untuk data skills dan keahlian teknis
 *
 * Mencakup programming languages, frameworks, tools,
 * dan teknologi yang dikuasai.
 */
export type ISkillsData = z.infer<typeof skillsSchema>;

/**
 * Interface untuk data project/portfolio works
 *
 * Berisi informasi detail tentang project-project yang
 * pernah dikerjakan, termasuk teknologi dan deskripsi.
 */
export type IProjectsData = z.infer<typeof projectsSchema>;

/**
 * Interface untuk data testimoni dari klien/kolega
 *
 * Mencakup review, feedback, dan rekomendasi dari
 * orang-orang yang pernah bekerja sama.
 */
export type ITestimonialsData = z.infer<typeof testimonialsSchema>;

/**
 * Interface untuk data kontak dan social media
 *
 * Berisi informasi cara menghubungi dan link
 * ke berbagai platform social media.
 */
export type IContactData = z.infer<typeof contactSchema>;

/**
 * Interface untuk data fun facts dan trivia personal
 *
 * Mencakup informasi menarik, hobi, dan fakta
 * unik tentang pemilik portfolio.
 */
export type IFunFactData = z.infer<typeof funFactSchema>;

// ===============================
// UTILITY TYPES
// ===============================

/**
 * Union type untuk semua jenis data portfolio
 *
 * Berguna untuk function parameters yang bisa menerima
 * berbagai jenis data portfolio.
 */
export type PortfolioDataTypes =
  | IAboutMeData
  | ISkillsData
  | IProjectsData
  | ITestimonialsData
  | IContactData
  | IFunFactData;

/**
 * Mapping object untuk semua data types
 *
 * Berguna untuk type checking dan validation
 * dalam runtime operations.
 */
export interface IPortfolioDataMap {
  aboutMe: IAboutMeData;
  skills: ISkillsData;
  projects: IProjectsData;
  testimonials: ITestimonialsData;
  contact: IContactData;
  funFact: IFunFactData;
}

/**
 * Keys dari portfolio data untuk type-safe operations
 */
export type PortfolioDataKeys = keyof IPortfolioDataMap;
