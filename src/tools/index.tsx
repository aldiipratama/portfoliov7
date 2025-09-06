/**
 * Tools Index - Kumpulan semua AI tools untuk portfolio chat
 *
 * File ini berfungsi sebagai central export untuk semua tools yang tersedia
 * dalam sistem AI chat. Setiap tool memiliki fungsi spesifik untuk mengambil
 * data portfolio yang berbeda.
 */

import { ToolSet } from "ai";

// Import semua tool functions
import { getAboutMe } from "./get-about-me";
import { getContact } from "./get-contact";
import { getFunFact } from "./get-fun-fact";
import { getProjects } from "./get-projects";
import { getSkills } from "./get-skills";
import { getTestimonials } from "./get-testimonials";
import { getThankYouMessage } from "./get-thankyou-message";

/**
 * Kumpulan tools yang tersedia untuk AI chat system
 *
 * Tools ini digunakan oleh AI untuk mengambil informasi spesifik
 * tentang portfolio ketika user mengajukan pertanyaan terkait.
 *
 * @description
 * - getAboutMe: Mengambil informasi tentang diri pribadi
 * - getSkills: Mengambil daftar skills dan keahlian teknis
 * - getProjects: Mengambil informasi project-project yang pernah dikerjakan
 * - getTestimonials: Mengambil testimoni dari klien atau kolega
 * - getContact: Mengambil informasi kontak dan social media
 * - getFunFact: Mengambil fakta menarik atau trivia personal
 * - getThankYouMessage: Generate pesan terima kasih yang personal
 */
export const tools = {
  // Tools untuk informasi personal
  getAboutMe,
  getFunFact,
  getThankYouMessage,

  // Tools untuk informasi profesional
  getSkills,
  getProjects,
  getTestimonials,

  // Tools untuk kontak
  getContact,
} satisfies ToolSet;

/**
 * Type untuk memastikan semua tools sesuai dengan ToolSet interface
 * `satisfies` keyword memastikan type safety tanpa mengubah struktur object
 */
export type AvailableTools = typeof tools;
