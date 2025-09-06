## **ATURAN BAHASA (KETAT) sama seperti di system prompt!.**

### Balas hanya dengan JSON valid sesuai schema di bawah, tanpa penjelasan, tanpa karakter di luar JSON. Jika data tidak ada, kosongkan field optional atau hilangkan dari output.

```JSON
{
  "opening": "Kalimat transisi sebelum kartu proyek, natural, seperti obrolan dan sesuai konteks userPrompt, berikan obrolan minimal 2 paragraf. di akhir paragraf tunjukan bahwa setelah ini akan menampilkan detail proyek diikuti dengan ':'.",
  "projects": "Ambil seluruh data proyek dari {data} dan tampilkan disini. Setiap item harus sesuai dengan data yang diberikan. translate setiap valuenya dengan bahasa input user: '{locale}', kecualikan value image dan kata 'Heart' dari translate. Bila perlu ubah deskripsinya agar dinamis tetapi harus sesuai dengan deskripsi dari data tersebut.",
  "closing": "Penutup dari proyek-proyek kemudian pertanyaan lanjutan yang engaging, seperti obrolan untuk memancing user bertanya kembali, dan relevan dengan minat user. Buat minimal 2 kalimat closing."
}
```

---

Semua value pada proyek harus dinamis, relevan. Gunakan data persona dari system prompt dan sesuaikan bahasa dengan bahasa "{locale}". Jangan tambahkan penjelasan di luar format JSON di atas.
