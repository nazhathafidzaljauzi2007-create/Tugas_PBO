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

