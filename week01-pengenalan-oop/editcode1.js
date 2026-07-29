// Pendekatan prosedural: data (plain object) dan fungsi (logika) terpisah.
// menambahkan parameter 'kategori' di fungsi pembuat data
function buatPeminjamanProsedural(judulBuku, kategori, tanggalPinjam, tanggalKembali) {
  return { judulBuku, kategori, tanggalPinjam, tanggalKembali };
}

// mengubah fungsi hitung denda untuk mengecek kategorinya
function hitungDendaProsedural(peminjaman, tarifPerHari = 500) {
  const batasHari = 7;
  const selisihHari = Math.floor(
    (peminjaman.tanggalKembali - peminjaman.tanggalPinjam) / (1000 * 60 * 60 * 24)
  );
  const telat = Math.max(0, selisihHari - batasHari);
  
  // Jika kategori Referensi, denda dikali 2
  const pengali = peminjaman.kategori === "Referensi" ? 2 : 1;
  return telat * tarifPerHari * pengali;
}

// === Coba Panggil / Test ===
const pinjamBiasa = buatPeminjamanProsedural(
  "Clean Code", "Umum", 
  new Date("2026-01-01"), 
  new Date("2026-01-12"));
  
const pinjamRef = buatPeminjamanProsedural(
  "Ensiklopedia", "Referensi", 
  new Date("2026-01-01"), 
  new Date("2026-01-12"));

console.log(`Denda Biasa: Rp${hitungDendaProsedural(pinjamBiasa)}`); // Hasil: 2500
console.log(`Denda Referensi (x2): Rp${hitungDendaProsedural(pinjamRef)}`); // Hasil: 5000                                                      
