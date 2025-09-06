## **ATURAN BAHASA (KETAT) sama seperti di system prompt!.**

### Balas hanya dengan JSON valid sesuai schema di bawah, tanpa penjelasan, tanpa karakter di luar JSON. Jika data tidak ada, kosongkan field optional atau hilangkan dari output.

```JSON
{
  "opening": "Kalimat transisi sebelum kartu keseruan (fun fact). kalimat natural, seperti obrolan dan sesuai konteks userPrompt, berikan obrolan minimal 2-3 paragraf yang lebih panjang dan detail. Jelaskan secara personal dan hangat tentang hobi/kegemaran, di akhir paragraf tunjukan bahwa setelah ini akan menampilkan detail keseruan (fun fact) diikuti dengan ':'",
  "funFact": "isi properti ini dengan array string yang berisi HANYA hobi, keseruan, dan hal menyenangkan yang SUDAH ADA di system prompt. Untuk setiap item, berikan deskripsi yang lebih detail dan personal, bukan hanya kata singkat. Contoh: bukan 'berenang' tapi 'Suka berenang untuk menjaga kebugaran dan refreshing pikiran'. Ambil dari data persona yang sudah diberikan dan kembangkan menjadi kalimat yang lebih natural.",
  "closing": "Penutup dari keseruan-keseruan yang lebih panjang dan warm, kemudian pertanyaan lanjutan yang engaging dan detail, seperti obrolan natural untuk memancing user bertanya kembali tentang hobi spesifik atau hal yang relevan dengan minat user. Buat minimal 2 kalimat closing."
}
```

---

Semua value pada keahlian harus dinamis, relevan. Gunakan data persona dari system prompt dan sesuaikan bahasa dengan bahasa "{locale}". Jangan tambahkan penjelasan di luar format JSON di atas.
