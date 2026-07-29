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

// Pendekatan OOP: data (atribut) dan perilaku (method) dibungkus jadi satu class.
class PeminjamanBuku {
  #tarifPerHariTelat = 500;
  #batasHariPeminjaman = 7;

  // menambahkan parameter 'kategori' di constructor
  constructor(judulBuku, kategori, tanggalPinjam, tanggalKembali) {
    this.judulBuku = judulBuku;
    this.kategori = kategori; // Simpan kategori ke dalam object
    this.tanggalPinjam = tanggalPinjam;
    this.tanggalKembali = tanggalKembali;
  }

  #hitungSelisihHari() {
    return Math.floor(
      (this.tanggalKembali - this.tanggalPinjam) / (1000 * 60 * 60 * 24)
    );
  }

  // mengupdate method hitungDenda() untuk cek kategorinya
  hitungDenda() {
    const telat = Math.max(0, this.#hitungSelisihHari() - this.#batasHariPeminjaman);
    
    // Cek kategori objek ini sendiri
    const pengali = this.kategori === "Referensi" ? 2 : 1;
    
    return telat * (this.#tarifPerHariTelat * pengali);
  }
}

// membuat objeknya dengan kategori masing-masing
const pinjam2Biasa = new PeminjamanBuku(
  "Clean Code",
  "Umum",
  new Date("2026-01-01"),
  new Date("2026-01-12")
);

const pinjam2Ref = new PeminjamanBuku(
  "Ensiklopedia",
  "Referensi",
  new Date("2026-01-01"),
  new Date("2026-01-12")
);

// menampilkan hasil
console.log(`Denda OOP (Biasa): Rp${pinjam2Biasa.hitungDenda()}`);
console.log(`Denda OOP (Referensi x2): Rp${pinjam2Ref.hitungDenda()}`);
