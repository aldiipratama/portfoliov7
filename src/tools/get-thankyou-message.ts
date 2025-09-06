import { gateway } from "@ai-sdk/gateway";
import { generateText, tool } from "ai";
import z from "zod";
import { promptTemplate } from "./prompt";
import { localeSchema as locale } from "./schema";

export const getThankYouMessage = tool({
  description:
    "Generate personalized thank you message when user submits testimonial. Use this tool when user mentions: 'mengirimkan testimonial', 'memberikan testimonial', 'kirim testimonial', 'testimonial dikirim', 'submit testimonial', 'give testimonial', or 'send testimonial'. This tool provides different responses for first-ever testimonial vs additional testimonials.",
  inputSchema: z.object({
    locale,
    authorName: z.string().describe("Nama pemberi testimonial"),
    authorTestimonial: z.string().describe("Isi testimonial yang diberikan"),
    authorPosition: z
      .string()
      .optional()
      .describe("Posisi/jabatan pemberi testimonial"),
    authorCompany: z
      .string()
      .optional()
      .describe("Perusahaan pemberi testimonial"),
    authorRating: z
      .number()
      .min(1)
      .max(5)
      .describe("Rating yang diberikan (1-5)"),
    isFirstTime: z
      .boolean()
      .default(false)
      .describe(
        "Apakah ini testimonial pertama yang pernah diterima untuk portfolio ini"
      ),
  }),
  execute: async ({
    locale,
    authorName,
    authorTestimonial,
    authorPosition,
    authorCompany,
    authorRating,
    isFirstTime,
  }) => {
    try {
      // Build identity information for personalized response
      let authorIdentity = authorName;
      if (authorPosition && authorCompany) {
        authorIdentity += ` (${authorPosition} di ${authorCompany})`;
      } else if (authorPosition) {
        authorIdentity += ` (${authorPosition})`;
      } else if (authorCompany) {
        authorIdentity += ` dari ${authorCompany}`;
      }

      // Build rating display
      const starRating = "⭐".repeat(authorRating);
      const ratingText = `${authorRating}/5 ${starRating}`;

      const { text } = await generateText({
        model: gateway("openai/gpt-4o-mini"),
        system: promptTemplate("prompt-persona", { locale }),
        temperature: 0.7,
        prompt: `
        ${
          isFirstTime
            ? `🎉 MILESTONE BERSEJARAH! Ini adalah testimonial PERTAMA KALI yang diterima untuk portfolio ini!`
            : `User memberikan testimonial untuk portfolio (sudah ada testimonial sebelumnya).`
        }
        
        Data testimonial yang diterima:
        - Nama: ${authorIdentity}
        - Rating: ${ratingText}
        - Testimonial: "${authorTestimonial}"
        - Status: ${
          isFirstTime
            ? "TESTIMONIAL PERTAMA UNTUK PORTFOLIO!"
            : "Testimonial lanjutan untuk portfolio"
        }
        
        Buat pesan terima kasih yang personal dan hangat dalam bahasa ${locale}.
        
        ${
          isFirstTime
            ? `
        Karena ini adalah TESTIMONIAL PERTAMA KALI yang diterima untuk portfolio:
        1. Ekspresikan kegembiraan dan rasa terima kasih yang luar biasa
        2. Sebutkan bahwa ini adalah testimonial pertama yang sangat bersejarah untuk portfolio
        3. Gunakan emosi yang lebih tinggi dan antusiasme ekstra karena ini milestone penting
        4. Sebutkan bahwa sebagai testimonial pertama, ini sangat berharga untuk memulai credibility
        5. Tambahkan elemen celebratory dan milestone achievement untuk portfolio
        6. Ungkapkan bahwa ini adalah langkah awal yang penting untuk membangun trust
        `
            : `
        Karena sudah ada testimonial lain sebelumnya:
        1. Berterima kasih dengan tulus tapi tidak berlebihan
        2. Fokus pada appreciation untuk waktu dan effort yang diberikan
        3. Sebutkan bahwa setiap testimonial tetap berharga untuk strengthening portfolio
        4. Gunakan tone yang warm namun balanced
        5. Acknowledge bahwa ini menambah koleksi testimonial yang sudah ada
        6. Jika deskripsi testimonial sama seperti sebelumnya, tambahkan apresiasi ekstra untuk effort mengirim ulang, dan beritahu bahwa testimonial sebelumnya sedang menunggu disetujui
        `
        }
        
        Strukturnya:
        1. Opening yang sesuai dengan status (first-ever vs additional testimonial)
        2. Acknowledge data testimonial secara personal (nama, rating, highlight isi testimonial)
        3. Apresiasi spesifik sesuai context dan rating yang diberikan
        4. Closing yang memorable dan sesuai status milestone
        
        Buat 2-3 paragraf yang personal, engaging, dan sesuai dengan emotional tone untuk ${
          isFirstTime
            ? "historic first testimonial milestone"
            : "valuable additional testimonial"
        }.
        `,
      });

      console.log("Generated AI response:", text);
      return text;
    } catch (error) {
      console.error(
        "Error generating thank you message with testimonial data:",
        error
      );
    }
  },
});
