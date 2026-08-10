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
    constructor(id, nama, email) {
        this.id = id;
        this.nama = nama;
        this.email = email;
    }
}

class Pustakawan {
    constructor(id, nama) {
        this.id = id;
        this.nama = nama;
    }

    tambahBukuKePerpustakaan(perpustakaan, buku) {
    perpustakaan.tambahBuku(buku);
    console.log(`${this.nama} menambahkan buku "${buku.judul}" ke perpustakaan.`);
    }
}

class Peminjaman {
    constructor(id, buku, anggota, tanggalPinjam) {
        this.id = id;
        this.buku = buku;
        this.anggota = anggota;
        this.tanggalPinjam = tanggalPinjam;
        this.status = "DIPINJAM";
    }
}

class Perpustakaan {
    #buku = [];
    #anggota = [];
    #peminjaman = [];
    #pustakawan = [];
    #nomorPeminjaman = 1;   

    tambahBuku(buku) {
        this.#buku.push(buku);
    }

    tambahAnggota(anggota) {
        this.#anggota.push(anggota);
    }

    tambahPustakawan(pustakawan) {
        this.#pustakawan.push(pustakawan);
    }

    pinjamkan(isbn, idAnggota, tanggal) {
        const buku = this.#buku.find((b) => b.isbn === isbn);
        const anggota = this.#anggota.find((a) => a.id === idAnggota);
        if (!buku || !anggota) throw new Error("Buku/anggota tidak ditemukan.");
        if (buku.eksemplarTersedia <= 0) throw new Error("Stok habis.");    

        buku.eksemplarTersedia -= 1;
        const peminjaman = new Peminjaman(this.#nomorPeminjaman++, buku, anggota, tanggal);
        this.#peminjaman.push(peminjaman);
        return peminjaman;
    }

    daftarPeminjamanAktif() {
        return this.#peminjaman.filter((p) => p.status === "DIPINJAM");
    }
}

const perpus = new Perpustakaan();

const admin1 = new Pustakawan(1, "Budi");
perpus.tambahPustakawan(admin1);
admin1.tambahBukuKePerpustakaan(perpus, new Buku("978-1", "Clean Code", "Teknologi", 2));
perpus.tambahAnggota(new Anggota(101, "Rani", "rani@kampus.ac.id"));
const p1 = perpus.pinjamkan("978-1", 101, new Date("2026-02-01"));
console.log(`Peminjaman #${p1.id}: "${p1.buku.judul}" oleh ${p1.anggota.nama}, Status: ${p1.status}`);
