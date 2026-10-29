# 🛠️ Portofolio & CV Gabungan IT Support Specialist

Portofolio dan Curriculum Vitae (CV) modern, responsif, dan interaktif khusus untuk profesi **IT Support Specialist / Helpdesk & Network Administrator**. Dibuat murni menggunakan **HTML5, CSS3, dan Vanilla JavaScript (ES6+)** tanpa ketergantungan library luar (zero-dependency).

---

## 📁 Struktur Berkas

```
Alif Project/
├── index.html   # Struktur halaman web lengkap (Hero, CV, Keahlian, Pengalaman, Kasus Proyek, Simulator, Kontak)
├── style.css    # Gaya visual modern (Dark/Light mode, Responsif HP/Tablet/Desktop, CSS Khusus Cetak A4 PDF)
├── script.js    # Logika interaktif (Ganti tema, Filter proyek, Modal detail kasus, Simulasi Diagnostik IT, Form)
└── README.md    # Panduan penggunaan & cara kustomisasi
```

---

## 🚀 Cara Menjalankan

1. Cukup buka file **`index.html`** langsung dengan mengklik dua kali (double-click) di File Explorer komputer Anda.
2. File akan langsung terbuka di browser favorit Anda (Google Chrome, Microsoft Edge, Firefox, Brave, Safari, dll).
3. **Tidak memerlukan Node.js, PHP, atau web server tambahan** — semua berjalan lancar secara offline maupun online!

---

## 🌟 Fitur Utama yang Disediakan

1. **Format Gabungan Portofolio & CV Terintegrasi**:
   - Memadukan ringkasan resume formal untuk HRD dengan portofolio studi kasus teknis untuk Technical User / IT Manager.
2. **Fitur Cetak / Simpan PDF Otomatis (`window.print()`)**:
   - Tersedia tombol **"Cetak CV (PDF)"** di bagian atas dan bawah.
   - Menggunakan teknologi `@media print` CSS khusus yang secara otomatis menyembunyikan tombol navigasi, simulator, ulasan, dan warna latar gelap, lalu memformat seluruh profil, keahlian, dan riwayat kerja menjadi **lembar CV dokumen resmi siap kirim ke HRD**.
3. **Mode Tampilan Gelap & Terang (Dark / Light Theme)**:
   - Dilengkapi tombol saklar tema dengan penyimpanan otomatis preferensi di browser (`localStorage`).
4. **Portofolio Studi Kasus Berbasis Metode STAR (Situation, Task, Action, Result)**:
   - 6 proyek nyata dunia IT Support (Migrasi massal Windows 11, Perapihan Rack Server & VLAN MikroTik, Helpdesk Jira, Backup 3-2-1 Synology, CCTV IP WireGuard, Revitalisasi Hardware Workstation).
   - Dilengkapi filter kategori dan jendela **Modal Detail Interaktif**.
5. **Galeri Foto Kegiatan & Dokumentasi IT**:
   - Menampilkan dokumentasi visual aktivitas teknisi: perakitan & upgrade SSD, cable management rack server, konfigurasi Winbox MikroTik, instalasi CCTV PoE, printer sharing, dan deployment OS massal.
   - Dilengkapi filter kategori foto dan fitur **Lightbox interaktif** (zoom, navigasi slide foto berikutnya/sebelumnya, serta tombol keyboard panah kiri/kanan).
   - Mudah diganti dengan foto asli Anda sendiri cukup dengan menaruh berkas foto di folder `assets/gallery/`.
6. **Simulasi Alat Diagnostik IT Interaktif (Live Diagnostic Tool)**:
   - **Terminal Ping Simulator**: Menguji respon latency gateway, DNS, dan server secara visual.
   - **Subnet IPv4 Calculator**: Menghitung netmask, IP network, range host valid, dan broadcast secara dinamis.
   - **Decision Tree Helpdesk**: Panduan langkah penanganan insiden umum (No Internet, Spooler printer offline, Disk 100%, BSOD, dugaan Malware/Ransomware).
7. **Integrasi WhatsApp & Kontak Langsung**:
   - Tombol pesan langsung ke WhatsApp dengan pesan template otomatis.

---

## ✏️ Cara Menyesuaikan Data Pribadi Anda

Anda dapat dengan mudah mengubah nama, foto, kontak, atau riwayat kerja dengan membuka file `index.html` menggunakan teks editor (seperti VS Code, Notepad++, atau Notepad biasa):

1. **Mengubah Nama & Gelar**:
   - Cari kata `Muhammad Alif` dan ganti dengan nama lengkap Anda.
   - Cari `IT Support Specialist` untuk menyesuaikan titel jabatan yang Anda inginkan.
2. **Mengubah Kontak & WhatsApp**:
   - Cari tautan `https://wa.me/6281234567890` di `index.html` dan ganti angka `6281234567890` dengan nomor WhatsApp aktif Anda (diawali kode negara 62).
   - Cari `muhammad.alif.itsupport@email.com` dan ganti dengan email asli Anda.
3. **Mengubah Pengalaman Kerja**:
   - Temukan bagian `<section id="pengalaman">` di `index.html`. Anda dapat mengedit nama perusahaan, tahun bekerja, dan poin tanggung jawab sesuai pengalaman Anda.
4. **Mengubah Sertifikasi & Pendidikan**:
   - Temukan bagian `<section id="edukasi">` di `index.html` untuk menyesuaikan sertifikat (CompTIA, Google IT Support, MikroTik, BNSP, dsb.) dan riwayat kampus/sekolah Anda.

---

## 🖨️ Tips Menyimpan CV Menjadi PDF

1. Klik tombol **"Cetak CV (PDF)"** di pojok kanan atas website atau tekan tombol pintas keyboard **`Ctrl + P`** (Windows) / **`Cmd + P`** (Mac).
2. Pada jendela cetak browser:
   - **Destination / Tujuan**: Pilih **`Save as PDF`** (Simpan sebagai PDF).
   - **Pages / Halaman**: Pilih *All*.
   - **Layout**: Pilih *Portrait*.
   - **Paper size**: Pilih *A4*.
   - Di bagian *More settings*: centang **"Background graphics"** (Grafis latar belakang) agar aksen warna badge dan garis pembatas tetap rapi.
3. Klik **Save / Simpan**. CV Anda telah siap dilampirkan saat melamar pekerjaan!
