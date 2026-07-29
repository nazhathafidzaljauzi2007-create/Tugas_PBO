// Minggu 3 — Dari Analisis Kebutuhan ke Skeleton Class
// Lihat requirements.md untuk daftar kebutuhan & user story lengkap.

class Buku {
constructor(isbn, judul, penulis, jumlahEksemplar) {
    this.isbn = isbn;
    this.judul = judul;
    this.penulis = penulis;
    this.jumlahEksemplar = jumlahEksemplar;
    this.barcode = null; // Asosiasi ke class Barcode
}
}

class Anggota {
constructor(id, nama, email) {
    this.id = id;
    this.nama = nama;
    this.email = email;
}

cariBuku(kataKunci) {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}

  // Kebutuhan #8
lihatDenda() {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}
}

class Peminjaman {
constructor(id, buku, anggota, tanggalPinjam) {
    this.id = id;
    this.buku = buku;
    this.anggota = anggota;
    this.tanggalPinjam = tanggalPinjam;
    this.status = "PENGAJUAN";
}

