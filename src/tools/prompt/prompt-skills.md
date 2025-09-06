## **ATURAN BAHASA (KETAT) sama seperti di system prompt!.**

### Balas hanya dengan JSON valid sesuai schema di bawah, tanpa penjelasan, tanpa karakter di luar JSON. Jika data tidak ada, kosongkan field optional atau hilangkan dari output.

```JSON
{
  "opening": "Kalimat transisi sebelum kartu keahlian. kalimat natural, seperti obrolan dan sesuai konteks userPrompt, berikan obrolan minimal 2 paragraf. di akhir paragraf tunjukan bahwa setelah ini akan menampilkan detail keahlian diikuti dengan ':'",
  "technicalSkills": "sesuaikan data dengan {data}",
  "softSkills": "sesuaikan data dengan {data}, untuk value dari properti title disini, sesuaikan bahasanya dengan {locale}",
  "closing": "Penutup dari keahlian-keahlian kemudian pertanyaan lanjutan yang engaging, seperti obrolan untuk memancing user bertanya kembali, dan relevan dengan minat user."
}
```

---

Semua value pada keahlian harus dinamis, relevan. Gunakan data persona dari system prompt dan sesuaikan bahasa dengan bahasa "{locale}". Jangan tambahkan penjelasan di luar format JSON di atas.
