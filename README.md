# 🤖 My Interactive AI Portfolio

Halo! Saya Aldi, dan ini adalah portfolio interaktif saya yang dibangun dengan AI chatbot.

Kenapa saya buat portfolio seperti ini? Karena saya ingin memudahkan HR dan recruiter untuk mengenal saya lebih dalam tanpa perlu membaca CV yang panjang. Cukup chat dengan AI ini, dan dia akan menjawab semua pertanyaan tentang skill, pengalaman, dan proyek-proyek yang pernah saya kerjakan.

Proyek ini juga sekaligus menunjukkan kemampuan teknis saya dalam mengintegrasikan AI dengan web development modern.

## ✨ Apa yang Bisa AI Ini Lakukan?

- 💬 **Jawab Pertanyaan Apapun** - Tentang skill, pengalaman, atau proyek saya
- 🌐 **Dua Bahasa** - Bisa chat dalam Bahasa Indonesia atau English
- 📱 **Akses Dimana Saja** - Responsif di HP, tablet, atau desktop
- 🎨 **UI yang Clean** - Pakai Shadcn UI dan Tailwind CSS
- ⚡ **Cepat dan Smooth** - Dibangun dengan Next.js 15 yang terbaru
- 🌙 **Dark/Light Mode** - Sesuai preferensi mata Anda

## 🛠️ Tech Stack yang Saya Pakai

### Frontend

- **Next.js 15** - Framework React terbaru dengan App Router
- **TypeScript** - Biar code lebih aman dan maintainable
- **Tailwind CSS** - CSS utility yang bikin styling jadi cepet
- **Shadcn UI** - Component library yang bagus banget
- **Framer Motion** - Animasi yang smooth
- **Next-intl** - Buat fitur multilingual

### AI & Backend

- **AI SDK (Vercel)** - Integrasi AI yang powerful
- **Prisma** - ORM untuk database
- **PostgreSQL** - Database untuk data testimonial
- **Custom AI Tools** - AI bisa akses data portfolio real-time
- **Rate Limiting** - Security buat API

### Development Tools

- **ESLint** - Code linting biar code tetep clean
- **PNPM** - Package manager yang lebih cepet dari npm
- **Git** - Version control tentunya

## 🚀 Mau Coba Jalanin di Local?

### Yang Perlu Disiapkan

- Node.js 18+ (saya pakai yang terbaru)
- PNPM (lebih cepet dari npm/yarn)
- Git

### Cara Install

1. **Clone repo ini**

```bash
git clone https://github.com/aldiipratama/portfoliov7.git
cd portfolio-ai-chat
```

2. **Install semua dependencies**

```bash
pnpm install
```

3. **Setup environment variables**

Bikin file `.env.local` dan isi kayak gini:

```env
# Database
DATABASE_URL="your_postgresql_url"
DIRECT_URL="your_postgresql_direct_url"

# AI Provider (pilih salah satu aja)
OPENAI_API_KEY=your_openai_api_key
# atau
ANTHROPIC_API_KEY=your_anthropic_api_key
# atau
GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key
# atau
GATEWAY_AI_API_KEY=your_gateway_api_key

# Supabase (untuk storage kalau perlu)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

4. **Setup database**

```bash
pnpm db:push
```

5. **Jalanin development server**

```bash
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000) dan voila! 🎉

## 📁 Gimana Struktur Projektnya?

```
portfolio-ai-chat/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Multi-bahasa routes
│   │   │   ├── chat/          # Halaman chat
│   │   │   └── page.tsx       # Homepage
│   │   └── api/               # API endpoints
│   │       ├── chat/          # Chat API
│   │       ├── testimonials/  # Testimonial API
│   │       └── analytics/     # Analytics API
│   ├── components/            # Komponen React
│   │   ├── ai-elements/       # Komponen khusus AI
│   │   ├── cards/             # Card portfolio
│   │   ├── chat/              # Interface chat
│   │   ├── ui/                # Shadcn UI components
│   │   └── ...
│   ├── data/                  # Data statis
│   │   ├── projects.json      # Data proyek-proyek
│   │   ├── skills.json        # Data skill
│   │   ├── contact.json       # Info kontak
│   │   └── ...
│   ├── tools/                 # AI tools/functions
│   │   ├── get-about-me.ts    # Tool info pribadi
│   │   ├── get-projects.ts    # Tool portfolio proyek
│   │   ├── get-skills.ts      # Tool skill & keahlian
│   │   ├── get-testimonials.ts # Tool testimonial
│   │   └── ...
│   ├── i18n/                  # File multilingual
│   ├── lib/                   # Utility functions
│   ├── store/                 # State management (Zustand)
│   └── types/                 # TypeScript types
├── prisma/                    # Database schema
├── public/                    # Asset statis
└── ...
```

## 🤖 Fitur AI yang Saya Buat

### Tools yang Bisa Diakses AI

AI chatbot ini punya akses ke beberapa "tools" yang saya buat sendiri untuk ngambil data portfolio:

- `getAboutMe` - Info pribadi dan background pendidikan/kerja
- `getSkills` - Semua skill teknis yang saya kuasai
- `getProjects` - Portfolio proyek-proyek yang pernah dikerjain
- `getTestimonials` - Testimoni dari klien atau rekan kerja
- `getContact` - Info kontak dan sosial media
- `getFunFact` - Hobi dan kegiatan di luar coding
- `generateThankYouMessage` - Generate pesan terima kasih yang personal

### Personality AI

Saya program AI ini dengan personality saya sendiri:

- Ramah dan humble, tapi tetep confident sama skill
- Gaya bahasa yang santai tapi profesional
- Bisa explain teknikal dengan bahasa yang mudah dipahami
- Passionate banget sama web development, terutama React dan Next.js
- Orang Bandung yang suka ngoding sambil dengerin musik

## 🌐 Deploy ke Production

### Pakai Vercel (yang paling gampang)

1. Push semua code ke GitHub
2. Connect repo di [Vercel](https://vercel.com)
3. Masukin environment variables
4. Klik deploy dan tunggu magic happen! ✨

### Manual Build

```bash
# Build untuk production
pnpm build

# Jalanin production server
pnpm start
```

## 🎯 Kenapa Saya Buat Portfolio Kayak Gini?

Jujur, sebagai developer yang sering apply kerja, saya tau betapa bosannya HR harus baca CV yang itu-itu aja. Makanya saya coba bikin something different:

- **Untuk HR/Recruiter** - Tinggal chat aja, mau tau skill apa, pengalaman gimana, atau proyek apa yang pernah dikerjain. Lebih engaging dan interaktif!
- **Showcase Skill** - Sekalian nunjukin kemampuan AI integration, modern web development, dan problem-solving
- **Stand Out** - Dari sekian banyak kandidat, yang punya portfolio kayak gini pasti memorable
- **Time Saver** - Daripada HR harus baca-baca CV panjang, mending chat langsung ke point yang mereka pengen tau

Intinya, ini bukan cuma portfolio biasa. Ini adalah cara saya membuktikan bahwa saya bisa bikin solusi yang user-friendly dan inovatif.

## 🤝 Mau Kontribusi?

Wah, seneng banget kalau ada yang mau kontribusi! Silakan:

1. Fork repo ini
2. Bikin branch baru untuk fitur/fix yang mau ditambahin
3. Commit dengan pesan yang jelas
4. Submit pull request

### Development Guidelines yang Saya Pakai

- Selalu pakai TypeScript strict mode
- Follow ESLint configuration yang udah ada
- Commit message yang descriptive
- Kalau nambah fitur baru, tolong update dokumentasi juga
- Test dulu sebelum push (meskipun belum ada automated test 😅)

## 📝 License

MIT License - bebas dipake, dimodif, atau dijadiin inspirasi.

## �‍💻 Tentang Saya

**Muhamad Rinaldi Agus Pratama (Aldi)**

Saya mahasiswa S1 Ilmu Komputer di Universitas Pasundan, tapi passion saya bener-bener di web development. Udah 3+ tahun berkutat dengan JavaScript ecosystem, dari vanilla JS sampai framework modern kayak React dan Next.js.

Achievements yang saya bangga:

- 🏆 **Juara 1 Lomba Website Portfolio HMTIF UNPAS** (2023/2024)
- 💼 **Frontend Developer** dengan pengalaman real-world projects
- 🌟 **Open Source Contributor** di beberapa project
- 📚 **Self-taught** tapi tetep rajin belajar hal baru

### Connect with Me

- 💼 [LinkedIn](https://linkedin.com/in/muhamad-rinaldi-agus-pratama-a21b61295) - Professional network
- 💻 [GitHub](https://github.com/aldiipratama) - Code repositories
- 📷 [Instagram](https://instagram.com/alx.dyy) - Behind the scenes
- 📧 **Email**: paldi0013@gmail.com

## 🙏 Thanks To

Shoutout ke semua yang udah bikin project ini possible:

- [Vercel AI SDK](https://sdk.vercel.ai/) - AI integration yang powerful
- [Shadcn UI](https://ui.shadcn.com/) - Component library yang beautifully crafted
- [Next.js Team](https://nextjs.org/) - Framework yang bikin hidup jadi lebih mudah
- [Tailwind CSS](https://tailwindcss.com/) - Utility CSS yang game-changer
- **OpenAI/Anthropic/Google** - AI providers yang ngasih akses ke model-model keren

Dan tentunya, **terima kasih buat Anda** yang udah mau mampir dan ngecek portfolio saya! 🙏

---

⭐ **Kalau project ini menarik atau membantu, jangan lupa kasih star ya!**

**Dibuat dengan ❤️ dan ☕ oleh Aldi di Bandung**
