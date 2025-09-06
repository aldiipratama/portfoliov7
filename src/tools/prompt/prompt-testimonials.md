## **ATURAN BAHASA (KETAT) sama seperti di system prompt!.**

### Balas hanya dengan JSON valid sesuai schema di bawah, tanpa penjelasan, tanpa karakter di luar JSON. Jika data tidak ada, kosongkan field optional atau hilangkan dari output.

```JSON
{
  "opening": "Kalimat transisi sebelum kartu testimonial. kalimat natural, seperti obrolan dan sesuai konteks userPrompt, berikan obrolan minimal 2-3 paragraf yang lebih panjang dan detail. PENTING: Jika array testimonials kosong atau tidak ada data, jelaskan bahwa saya belum pernah menerima testimonial resmi dan ajak user untuk menjadi yang pertama memberikan testimonial. Jika ada data testimonials, di akhir paragraf tunjukan bahwa setelah ini akan menampilkan detail testimonial diikuti dengan ':'",
  "testimonials": [
    {
      "author_name": "string - nama pemberi testimonial",
      "author_testimonial": "string - isi testimonial lengkap",
      "author_position": "string atau undefined - posisi/jabatan",
      "author_company": "string atau undefined - nama perusahaan",
      "author_rating": "number 1-5 - rating yang diberikan",
      "author_avatar": "string atau undefined - URL avatar",
      "author_instragram": "string atau undefined - username Instagram",
      "author_linkedin": "string atau undefined - URL LinkedIn",
      "author_github": "string atau undefined - username GitHub",
      "author_website": "string atau undefined - URL website"
    }
  ],
  "closing": "LOGIKA DINAMIS: Jika testimonials kosong, set sebagai string kosong \"\". Jika ada testimonials, buat penutup yang warm tentang apresiasi terhadap testimonial yang diberikan, kemudian pertanyaan lanjutan yang engaging dan detail untuk memancing user bertanya kembali. Buat minimal 2-3 kalimat closing yang relevan dengan kondisi data."
}
```

**PENTING: Untuk field testimonials:**

- Jika data {data} berisi testimonials, gunakan SELURUH data yang ada dari {data.testimonials}
- Jika data kosong atau tidak ada, set sebagai array kosong []
- JANGAN ubah atau modifikasi data testimonial yang sudah ada
- Gunakan data persis seperti yang diberikan dalam {data.testimonials}

---

## **INSTRUKSI KHUSUS UNTUK AI:**

**DATA TESTIMONIALS TERSEDIA DI: {data.testimonials}**

Berikut adalah data testimonal yang sudah diambil dari database:

```
{data}
```

**WAJIB FOLLOW RULES:**

1. **SELALU GUNAKAN DATA DARI {data.testimonials}** - Jangan membuat testimonial palsu
2. **JANGAN MODIFIKASI ISI TESTIMONIAL** - Gunakan data persis seperti yang diberikan
3. **COPY EXACT VALUES** - Semua field harus sesuai dengan data asli
4. **JIKA {data.testimonials} ADA ISI** - Tampilkan semua testimonials yang ada
5. **JIKA {data.testimonials} KOSONG** - Set testimonials sebagai array kosong []

## **LOGIKA KONDISIONAL TESTIMONIALS:**

**JIKA DATA TESTIMONIALS KOSONG:**

- Opening: Jelaskan bahwa saya adalah developer yang masih membangun portfolio dan belum memiliki testimonial resmi
- Ajak user menjadi yang pertama memberikan testimonial
- Jelaskan pentingnya feedback untuk pengembangan karir
- Testimonials: Set sebagai array kosong []
- Closing: Set sebagai string kosong ""

**JIKA DATA TESTIMONIALS ADA:**

- Opening: Perkenalkan testimonials yang akan ditampilkan
- Testimonials: Tampilkan semua data yang ada
- Closing: Apresiasi atas testimonials yang sudah ada dan ajak interaksi lebih lanjut

Semua value pada testimonials harus dinamis, relevan. Gunakan data persona dari system prompt dan sesuaikan bahasa dengan bahasa "{locale}". Jangan tambahkan penjelasan di luar format JSON di atas.
