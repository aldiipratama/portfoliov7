## **ATURAN BAHASA (KETAT) sama seperti di system prompt!.**

### Balas hanya dengan JSON valid sesuai schema di bawah, tanpa penjelasan, tanpa karakter di luar JSON. Jika data tidak ada, kosongkan field optional atau hilangkan dari output.

```JSON
{
  "opening": "Kalimat transisi sebelum kartu kontak. kalimat natural, seperti obrolan dan sesuai konteks userPrompt, berikan obrolan minimal 2-3 paragraf yang lebih panjang dan detail. di akhir paragraf tunjukan bahwa setelah ini akan menampilkan detail kontak diikuti dengan ':'",
  "contact": "Ambil seluruh data proyek dari {data} dan tampilkan disini. Setiap item harus sesuai dengan data yang diberikan.",
  "closing": "Penutup dari kartu kontak yang lebih panjang dan warm, kemudian pertanyaan lanjutan yang engaging dan detail, seperti obrolan natural untuk memancing user bertanya kembali, dan relevan dengan minat user. Buat minimal 2 kalimat closing."
}
```

---

Semua value pada keahlian harus dinamis, relevan. Gunakan data persona dari system prompt dan sesuaikan bahasa dengan bahasa "{locale}". Jangan tambahkan penjelasan di luar format JSON di atas.
