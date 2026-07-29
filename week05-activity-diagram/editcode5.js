// Minggu 5 — Dari Activity Diagram ke Kode (Modifikasi Buku Referensi - Refactored)

class Buku {
constructor(isbn, judul, eksemplarTersedia, jenis = "Umum") {
    this.isbn = isbn;
    this.judul = judul;
    this.eksemplarTersedia = eksemplarTersedia;
    this.jenis = jenis; // "Umum" atau "Referensi"
}

  // Method enkapsulasi untuk mengurangi stok secara aman
kurangiStok() {
    if (this.eksemplarTersedia > 0) {
    this.eksemplarTersedia -= 1;
    }
}
}

class Anggota {
constructor(id, nama, tunggakan = 0, peminjamanAktif = 0) {
    this.id = id;
    this.nama = nama;
    this.tunggakan = tunggakan;
    this.peminjamanAktif = peminjamanAktif;
}

  // Method enkapsulasi untuk menambah jumlah peminjaman aktif
tambahPeminjamanAktif() {
    this.peminjamanAktif += 1;
}
}

function prosesPeminjaman(buku, anggota, disetujuiKhusus = false) {
console.log(`[MULAI] ${anggota.nama} mengajukan "${buku.judul}" (${buku.jenis})`);

  // Guard 1: Stok Buku
console.log("[CEK] Buku tersedia?");
if (buku.eksemplarTersedia <= 0) {
    console.log("[TOLAK] Stok buku habis.\n");
    return { berhasil: false, alasan: "STOK_HABIS" };
}

  // Guard 2: Persetujuan Khusus Buku Referensi
console.log("[CEK] Apakah buku Referensi dan belum disetujui?");
if (buku.jenis === "Referensi" && !disetujuiKhusus) {
    console.log("[TOLAK] Buku referensi memerlukan persetujuan khusus.\n");
    return { berhasil: false, alasan: "BUTUH_PERSETUJUAN" };
}

  // Guard 3: Tunggakan Anggota
console.log("[CEK] Anggota memiliki tunggakan?");
if (anggota.tunggakan > 0) {
    console.log(`[TOLAK] Tunggakan Rp${anggota.tunggakan}.\n`);
    return { berhasil: false, alasan: "ADA_TUNGGAKAN" };
}

  // Guard 4: Batas Peminjaman Aktif
console.log("[CEK] Peminjaman aktif sudah 3 atau lebih?");
if (anggota.peminjamanAktif >= 3) {
    console.log("[TOLAK] Batas peminjaman aktif tercapai.\n");
    return { berhasil: false, alasan: "BATAS_PINJAM" };
}

  // Eksekusi Peminjaman via Method (Lebih rapi & aman dari side-effect)
buku.kurangiStok();
anggota.tambahPeminjamanAktif();

const catatan = {
    isbn: buku.isbn,
    idAnggota: anggota.id,
    status: "DIPINJAM",
    jenisBuku: buku.jenis
};

console.log("[AKSI] Buat catatan peminjaman.");
console.log("[AKSI] Kurangi stok buku.");
console.log("[AKSI] Kirim konfirmasi.");
console.log("[SELESAI] Peminjaman berhasil.\n");
return { berhasil: true, catatan };
}

// ================= UJI COBA PENGAJUAN =================
const bukuCleanCode = new Buku("978-1", "Clean Code", 1, "Umum");
const bukuKamus = new Buku("978-4", "Kamus Bahasa", 1, "Referensi");

const rani = new Anggota(1, "Rani");
const dewi = new Anggota(4, "Dewi");

// 1. Buku Umum (Berhasil)
prosesPeminjaman(bukuCleanCode, rani);

// 2. Buku Referensi Tanpa Persetujuan Khusus (Ditolak)
prosesPeminjaman(bukuKamus, dewi, false);

// 3. Buku Referensi Dengan Persetujuan Khusus (Berhasil)
prosesPeminjaman(bukuKamus, dewi, true);
