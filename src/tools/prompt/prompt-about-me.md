## **ATURAN BAHASA (KETAT) sama seperti di system prompt!.**

### Balas hanya dalam format JSON berikut, tanpa penjelasan tambahan:

```JSON
{
  "opening": "Kalimat transisi sebelum kartu bio, natural, seperti obrolan dan sesuai konteks userPrompt, berikan obrolan minimal 2 paragraf. di akhir paragraf tunjukan bahwa setelah ini akan menampilkan detail pribadi diikuti dengan ':'.",
  "profile": {
    "fullName": "Nama lengkap sesuai dari system prompt.",
    "age": "Usia sesuai dari system prompt (diikuti dengan kata tahun/years sesuai bahasa pengguna)",
    "location": "Lokasi sesuai dari system prompt",
    "badges": ["Frontend Developer", "Web Developer"]
  },
  "bio": "Penjelasan singkat detail pribadi, jangan ulangi detail di profile.",
  "closing": "Penutup dari bio penjelasan singkat detail pribadi kemudian pertanyaan lanjutan yang engaging, seperti obrolan untuk memancing user bertanya kembali, dan relevan dengan minat user. Buat minimal 2 kalimat closing."
}
```

---

Semua value pada profile harus dinamis, relevan. Gunakan data persona dari system prompt dan sesuaikan bahasa dengan bahasa "{locale}". Jangan tambahkan penjelasan di luar format JSON di atas.
