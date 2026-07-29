// Minggu 5 — Dari Activity Diagram ke Kode (Modifikasi Buku Referensi - Refactored)

class Buku {
constructor(isbn, judul, eksemplarTersedia, jenis = "Umum") {
    this.isbn = isbn;
    this.judul = judul;
    this.eksemplarTersedia = eksemplarTersedia;
    this.jenis = jenis; // "Umum" atau "Referensi"
}

