# Portfolio AI Chat

Selamat datang di repositori Portfolio AI Chat saya\! Ini bukan sekadar halaman "tentang saya" yang statis. Ini adalah sebuah **chatbot interaktif** yang didukung oleh AI, dirancang untuk menjawab pertanyaan-pertanyaan tentang latar belakang, skill, dan pengalaman saya secara dinamis dan personal.

Proyek ini dibangun sebagai demonstrasi keahlian saya dalam pengembangan web modern, _prompt engineering_, dan integrasi dengan layanan AI.

> _Live demo bisa diakses di [aldipratama.vercel.app](https://aldipratama.vercel.app/)_

---

## ✨ Fitur Utama

- **Persona AI Interaktif**: Chatbot ini memiliki persona sebagai saya (Aldi Pratama) dan akan menjawab pertanyaan dari sudut pandang orang pertama. Semua respons diatur oleh arsitektur _prompt_ yang detail untuk memastikan konsistensi.
- **Prompt Dinamis**: Informasi personal seperti umur dan status akademik dihitung secara _real-time_ di sisi server agar selalu akurat.
- **_Rate Limiting_ Canggih**: Untuk melindungi API token dan mencegah penyalahgunaan, proyek ini mengimplementasikan sistem keamanan berlapis:
  - **Kuota Sesi**: Setiap sesi percakapan dibatasi untuk memastikan interaksi yang wajar.
  - **Kuota Harian**: Mencegah satu pengguna (atau jaringan) menghabiskan sumber daya secara berlebihan dalam satu hari.
  - **Identifikasi Unik**: Menggunakan _Browser Fingerprinting_ untuk mengenali pengguna unik secara lebih akurat daripada hanya berdasarkan alamat IP.
- **UI Modern & Responsif**: Dibangun dengan Shadcn UI dan Tailwind CSS, dengan tata letak unik yang memberikan pengalaman visual yang menarik.
- **Mode Terang & Gelap**: Dilengkapi dengan _toggle_ tema yang terintegrasi dengan `next-themes`.

---

## 🚀 Teknologi yang Digunakan

Proyek ini dibangun dengan _stack_ teknologi modern yang berfokus pada ekosistem React dan Vercel.

- **Framework**: Next.js 15 (App Router)
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS & Shadcn UI
- **AI & Chat**: Vercel AI SDK [@ai-sdk/react](https://ai-sdk.dev) dengan model [Groq](https://groq.com/)
- **Database (untuk Rate Limiting)**: [Supabase](https://supabase.com) (PostgreSQL)
- **Identifikasi User**: [FingerprintJS](https://fingerprint.com)
- **Linting & Formatting**: [Biome](https://biomejs.dev)
- **Package Manager**: [Bun](https://bun.com)

---

## 🛠️ Menjalankan Proyek Secara Lokal

Untuk menjalankan proyek ini di lingkungan lokal, ikuti langkah-langkah berikut:

### 1\. Prasyarat

- Pastikan kamu sudah menginstal [Bun](https://bun.com/).
- Memiliki akun [Supabase](https://supabase.com/) untuk database.
- Memiliki API key dari [Groq](https://groq.com/).

### 2\. Instalasi

Salin repositori ini ke komputermu dan instal semua dependensi.

```bash
git clone https://github.com/aldiipratama/portfoliov7.git portfolio-ai
cd portfolio-ai
bun install
```

### 3\. Konfigurasi Environment Variables

Buat file `.env.local` di direktori root proyek dan isi dengan variabel berikut:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL="URL_PROYEK_SUPABASE_ANDA"
NEXT_PUBLIC_SUPABASE_ANON_KEY="ANON_KEY_SUPABASE_ANDA"

# AI Provider (Groq)
GROQ_API_KEY="API_KEY_GROQ_ANDA"

# Opsional: Maintenance Mode
# NEXT_PUBLIC_MAINTENANCE_MODE="false"
```

### 4\. Setup Database Supabase

Masuk ke Supabase Dashboard-mu, buka **SQL Editor**, dan jalankan skrip SQL di bawah ini untuk membuat tabel yang dibutuhkan oleh sistem _rate limiting_.

```sql
-- Membuat tabel untuk mencatat request
CREATE TABLE public.rate_limit_logs (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    ip_address TEXT NOT NULL,
    session_id UUID,
    visitor_id TEXT, -- Untuk FingerprintJS
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Membuat index untuk performa query
CREATE INDEX rate_limit_visitor_id_idx ON public.rate_limit_logs (visitor_id);

-- (Opsional) Policy untuk mengizinkan insert jika RLS aktif
CREATE POLICY "Allow public insert for rate limiting"
ON public.rate_limit_logs
FOR INSERT
WITH CHECK (true);
```

### 5\. Jalankan Server Development

Setelah semua siap, jalankan server development dengan Turbopack.

```bash
bun run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser-mu.
