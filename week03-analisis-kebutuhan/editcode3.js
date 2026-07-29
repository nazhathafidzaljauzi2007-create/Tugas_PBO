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

  // Kebutuhan #9
hitungSisaMasaPinjam() {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}
}

class Pustakawan {
constructor(id, nama) {
    this.id = id;
    this.nama = nama;
}

tambahBuku(dataBuku) {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}

  // Kebutuhan #5
mendaftarkanAnggota(dataAnggota) {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}

  // Kebutuhan #6
hitungDenda(peminjaman) {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}

  // Kebutuhan #7
cetakBarcode(buku) {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}

  // Kebutuhan #10
ubahStatusPeminjaman(peminjaman, statusBaru) {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}
}

// ============================================================================
// ENTITAS BARU (SKELETON CLASSES HASIL TUGAS LATIHAN)
// ============================================================================

class Denda {
constructor(id, peminjaman, jumlah, status = "BELUM_LUNAS") {
    this.id = id;
    this.peminjaman = peminjaman;
    this.jumlah = jumlah;
    this.status = status;
}

getDetailDenda() {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}
}

class Notifikasi {
constructor(id, penerima, pesan, tipe) {
    this.id = id;
    this.penerima = penerima;
    this.pesan = pesan;
    this.tipe = tipe;
}

kirim() {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}
}

class Reservasi {
constructor(id, buku, anggota, tanggalReservasi) {
    this.id = id;
    this.buku = buku;
    this.anggota = anggota;
    this.tanggalReservasi = tanggalReservasi;
    this.status = "MENUNGGU";
}

prosesReservasi() {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}
}

class Laporan {
constructor(id, jenisLaporan, periode) {
    this.id = id;
    this.jenisLaporan = jenisLaporan;
    this.periode = periode;
}

generateLaporan() {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}
}

class Barcode {
constructor(kodeBarcode, refId) {
    this.kodeBarcode = kodeBarcode;
    this.refId = refId;
}

generateBarcode() {
    throw new Error("Belum diimplementasikan — lihat Minggu 4");
}
}
