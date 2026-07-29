# Analisis Kebutuhan — SIPUSTAKA

## Kebutuhan Fungsional (contoh awal, lengkapi sesuai tugas)

1. Anggota dapat mencari buku berdasarkan judul/kategori.
2. Anggota dapat mengajukan peminjaman buku yang tersedia.
3. Anggota dapat mengembalikan buku yang sedang dipinjam.
4. Pustakawan dapat menambah/mengubah data buku.
5. Pustakawan dapat mendaftarkan anggota baru.
6. Pustakawan dapat menghitung denda.
7. Pustakawan dapat mencetak label barcode untuk dipasang pada buku fisik.
8. Anggota dapat melihat denda yang dimikilinya.
9. Anggota dapat melihat sisa masa peminjaman dan jatuh tempo buku yang sedang dipinjam.
10. Pustakawan dapat mengubah status peminjaman.

## Kebutuhan Non-Fungsional (contoh awal)

1. Sistem harus menolak peminjaman jika stok buku habis (integritas data).
2. Riwayat peminjaman harus tetap tersimpan meskipun buku sudah dikembalikan.
3. Data yang ada di dalam sistem harus aman, jika terkena serangan dari luar maupun dalam.
4. Seberapa cepat sistem jika diakses oleh anggota maupun pustakawan.

## User Story

Format: *Sebagai [peran], saya ingin [aksi], agar [tujuan].*

- Sebagai **anggota**, saya ingin mencari buku berdasarkan judul, agar saya cepat
  menemukan buku yang saya butuhkan.
- Sebagai **anggota**, saya ingin meminjam buku yang tersedia, agar saya bisa
  membacanya di luar perpustakaan.
- Sebagai **anggota**, saya ingin melihat tanggal jatuh tempo pengembalian, agar
  saya tidak terkena denda.
- Sebagai **pustakawan**, saya ingin menambahkan judul buku baru, agar koleksi
  perpustakaan selalu ter-update.
- Sebagai **pustakawan**, saya ingin mendaftarkan anggota baru, agar data peminjam terverifikasi secara sah dan resmi tercatat di dalam sistem perpustakaan.
- Sebagai **pustakawan**, saya ingin menghitung denda, agar dapat menentukan total biaya keterlambatan.
- Sebagai **pustakawan**, saya ingin mencetak label barcode untuk dipasang pada buku fisik, agar proses peminjaman dan pencarian buku jadi lebih mudah ataupun cepat.

## Identifikasi Entitas Awal (calon class)

Dari kebutuhan di atas, entitas yang teridentifikasi: `Buku`, `Anggota`,
`Peminjaman`, `Pustakawan`. Entitas ini akan menjadi dasar Class Diagram di
Minggu 6.

---

## TUGAS LATIHAN
1. Tambahkan minimal **5 kebutuhan fungsional** dan **2 kebutuhan non-fungsional** lain.
2. Tulis minimal **3 user story** tambahan (boleh untuk peran pustakawan).
3. Berdasarkan kebutuhan tambahanmu, apakah ada entitas baru yang perlu
   ditambahkan ke `index.js`? Sebutkan.
