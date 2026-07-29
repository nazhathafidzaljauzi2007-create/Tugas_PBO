class Buku {
constructor(isbn, judul, kategori, jumlahEksemplar) {
    this.isbn = isbn;
    this.judul = judul;
    this.kategori = kategori;
    this.jumlahEksemplar = jumlahEksemplar;
    this.eksemplarTersedia = jumlahEksemplar;
}
}

class Anggota {
constructor(id, nama) {
    this.id = id;
    this.nama = nama;
    this.tunggakan = 0;
}
}

class Peminjaman {
constructor(id, buku, anggota, tanggalPinjam) {
    this.id = id;
    this.buku = buku;
    this.anggota = anggota;
    this.tanggalPinjam = tanggalPinjam;
    this.tanggalJatuhTempo = new Date(tanggalPinjam);
    this.tanggalJatuhTempo.setDate(this.tanggalJatuhTempo.getDate() + 7);
    this.jumlahPerpanjangan = 0;
    this.status = "DIPINJAM";
}
}

class SistemPerpustakaan {
#bukuList = [];
#anggotaList = [];
#peminjamanList = [];
#nomorPeminjaman = 1;

daftarAnggota(id, nama) {
    if (this.#anggotaList.some((anggota) => anggota.id === id)) {
    throw new Error("ID anggota sudah terdaftar.");
    }
    const anggota = new Anggota(id, nama);
    this.#anggotaList.push(anggota);
    return anggota;
}

tambahBuku(isbn, judul, kategori, jumlahEksemplar) {
    if (this.#bukuList.some((buku) => buku.isbn === isbn)) {
    throw new Error("ISBN sudah terdaftar.");
    }
    const buku = new Buku(isbn, judul, kategori, jumlahEksemplar);
    this.#bukuList.push(buku);
    return buku;
}

cariBuku(kataKunci) {
    const kata = kataKunci.trim().toLowerCase();
    return this.#bukuList.filter((buku) =>
    `${buku.judul} ${buku.kategori}`.toLowerCase().includes(kata)
    );
}

#validasiPeminjaman(isbn, idAnggota) {
    const buku = this.#bukuList.find((item) => item.isbn === isbn);
    const anggota = this.#anggotaList.find((item) => item.id === idAnggota);
    if (!buku) throw new Error("Buku tidak ditemukan.");
    if (!anggota) throw new Error("Anggota tidak ditemukan.");
    if (buku.eksemplarTersedia <= 0) throw new Error("Stok buku habis.");
    if (anggota.tunggakan > 0) throw new Error("Anggota memiliki tunggakan.");
    return { buku, anggota };
}

ajukanPeminjaman(isbn, idAnggota, tanggalPinjam = new Date()) {
    const { buku, anggota } = this.#validasiPeminjaman(isbn, idAnggota);
    buku.eksemplarTersedia -= 1;
    const peminjaman = new Peminjaman(
    this.#nomorPeminjaman++,
    buku,
    anggota,
    tanggalPinjam
    );
    this.#peminjamanList.push(peminjaman);
    return peminjaman;
}

perpanjangPeminjaman(idPeminjaman) {
    const peminjaman = this.#peminjamanList.find((item) => item.id === idPeminjaman);
    if (!peminjaman) throw new Error("Peminjaman tidak ditemukan.");
    if (peminjaman.status !== "DIPINJAM") throw new Error("Peminjaman tidak aktif.");
    if (peminjaman.jumlahPerpanjangan >= 1) throw new Error("Batas perpanjangan tercapai.");

    peminjaman.tanggalJatuhTempo.setDate(peminjaman.tanggalJatuhTempo.getDate() + 7);
    peminjaman.jumlahPerpanjangan += 1;
    return peminjaman;
}

kembalikanBuku(idPeminjaman) {
    const peminjaman = this.#peminjamanList.find((item) => item.id === idPeminjaman);
    if (!peminjaman) throw new Error("Peminjaman tidak ditemukan.");
    if (peminjaman.status !== "DIPINJAM") throw new Error("Peminjaman sudah ditutup.");

    peminjaman.buku.eksemplarTersedia += 1;
    peminjaman.status = "DIKEMBALIKAN";
    return peminjaman;
}

  // 1. USE CASE BARU
lihatRiwayatPeminjaman(idAnggota) {
    const anggota = this.#anggotaList.find((item) => item.id === idAnggota);
    if (!anggota) throw new Error("Anggota tidak ditemukan.");
    return this.#peminjamanList.filter((item) => item.anggota.id === idAnggota);
}
}

// ==========================================
// 3. KODE PENGUJIAN (TRY-CATCH CONSOLE.LOG)
// ==========================================
const sistem = new SistemPerpustakaan();

console.log("=== TEST 1: Error ID Anggota Ganda ===");
try {
sistem.daftarAnggota("A001", "Budi");
console.log("[BERHASIL] Pendaftaran pertama anggota A001.");
  sistem.daftarAnggota("A001", "Siti"); // Harus melempar error
} catch (error) {
console.log("[ERROR TERTANGKAP]:", error.message);
}

console.log("\n=== TEST 2: Error ISBN Ganda ===");
try {
sistem.tambahBuku("978-123", "Belajar JS", "Teknologi", 2);
console.log("[BERHASIL] Penambahan pertama buku ISBN 978-123.");
  sistem.tambahBuku("978-123", "JS Advanced", "Teknologi", 1); // Harus melempar error
} catch (error) {
console.log("[ERROR TERTANGKAP]:", error.message);
}

console.log("\n=== TEST 3: Error Stok Buku Habis ===");
try {
  sistem.tambahBuku("978-456", "Buku Langka", "Sejarah", 1); // Stok hanya 1
sistem.daftarAnggota("A002", "Ani");

sistem.ajukanPeminjaman("978-456", "A001");
console.log("[BERHASIL] A001 meminjam Buku Langka (stok tersisa: 0).");

  sistem.ajukanPeminjaman("978-456", "A002"); // Harus melempar error karena stok habis
} catch (error) {
console.log("[ERROR TERTANGKAP]:", error.message);
}

