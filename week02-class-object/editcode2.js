class Buku {
  constructor(isbn, judul, penulis, jumlahEksemplar, kategori) {
    this.isbn = isbn;                         // atribut
    this.judul = judul;                       // atribut
    this.penulis = penulis;                   // atribut
    this.jumlahEksemplar = jumlahEksemplar;    // atribut
    this.eksemplarTersedia = jumlahEksemplar;  // atribut
    this.kategori = kategori;                  // atribut
  }

  // method: perilaku yang dimiliki setiap object Buku
  isReferensi() {
    return this.kategori.toLowerCase() === "referensi";
  }

  pinjam() {
    if (this.eksemplarTersedia <= 0) {
      throw new Error(`Buku "${this.judul}" sedang tidak tersedia.`);
    }
    this.eksemplarTersedia -= 1;
    return true;
  }

  kembalikan() {
    if (this.eksemplarTersedia < this.jumlahEksemplar) {
      this.eksemplarTersedia += 1;
    }
  }

  info() {
    return `${this.judul} (${this.kategori}) oleh ${this.penulis} — tersedia ${this.eksemplarTersedia}/${this.jumlahEksemplar}`;
  }
}

// --- Membuat beberapa OBJECT dari CLASS Buku yang sama ---
const daftarBuku = [
  new Buku("978-3-16-148410-0", "Belajar JavaScript", "John Doe", 3, "Pemrograman"),
  new Buku("978-1-23-456789-0", "Algoritma dan Struktur Data", "Jane Smith", 2, "Referensi"),
  new Buku("978-5", "Sistem Basis Data", "Fathansyah", 2, "Pendidikan")
];

console.log("=== DAFTAR BUKU ===");
daftarBuku.forEach((buku) => {
  console.log(buku.info());
  console.log(`Apakah Referensi? ${buku.isReferensi() ? "Ya" : "Tidak"}\n`);
});
