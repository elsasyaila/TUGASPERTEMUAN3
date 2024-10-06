// Superclass Mahasiswa
class Mahasiswa {
    constructor(nama, nim, prodi, angkatan) {
        this.nama = nama;
        this.nim = nim;
        this.prodi = prodi;
        this.angkatan = angkatan;
        this._status = "Aktif";
    }

    // Method 1: Info dasar mahasiswa
    getInfo() {
        return `Nama: ${this.nama}
        NIM: ${this.nim}
        Program Studi: ${this.prodi}
        Angkatan: ${this.angkatan}
        Status: ${this._status}`;
    }

    // Method 2: Update status mahasiswa
    updateStatus(statusBaru) {
        this._status = statusBaru;
        return `Status mahasiswa ${this.nama} telah diubah menjadi ${this._status}`;
    }

    // Method 3: Cek masa studi
    cekMasaStudi() {
        const tahunSekarang = new Date().getFullYear();
        const lamaMasaStudi = tahunSekarang - this.angkatan;
        return `Masa studi ${this.nama}: ${lamaMasaStudi} tahun`;
    }

    // Method 4: Validasi NIM
    validasiNIM() {
        if (this.nim.length === 10) {
            return `NIM ${this.nim} valid`;
        }
        return `NIM ${this.nim} tidak valid`;
    }
}

// Subclass 1: MahasiswaSistemInformasi
class MahasiswaSistemInformasi extends Mahasiswa {
    constructor(nama, nim, angkatan, peminatan, ipk) {
        super(nama, nim, "Sistem Informasi Kelautan", angkatan);
        this.peminatan = peminatan;
        this.ipk = ipk;
        this.projekAkhir = null;
    }

    // Override method getInfo
    getInfo() {
        return `${super.getInfo()}
        Peminatan: ${this.peminatan}
        IPK: ${this.ipk}`;
    }

    // Method khusus: Input projek akhir
    setProjekAkhir(judulProjek) {
        this.projekAkhir = judulProjek;
        return `Projek akhir ${this.nama} telah diset: ${this.projekAkhir}`;
    }

    // Method khusus: Cek status kelulusan
    cekStatusKelulusan() {
        if (this.ipk >= 2.75 && this.projekAkhir) {
            return `${this.nama} memenuhi syarat kelulusan`;
        }
        return `${this.nama} belum memenuhi syarat kelulusan`;
    }
}

// Subclass 2: MahasiswaOrganisasi
class MahasiswaOrganisasi extends Mahasiswa {
    constructor(nama, nim, prodi, angkatan, organisasi, jabatan) {
        super(nama, nim, prodi, angkatan);
        this.organisasi = organisasi;
        this.jabatan = jabatan;
        this.kegiatan = [];
    }

    // Override method getInfo
    getInfo() {
        return `${super.getInfo()}
        Organisasi: ${this.organisasi}
        Jabatan: ${this.jabatan}`;
    }

    // Method khusus: Tambah kegiatan
    tambahKegiatan(namaKegiatan, tanggal) {
        this.kegiatan.push({ nama: namaKegiatan, tanggal: tanggal });
        return `Kegiatan ${namaKegiatan} telah ditambahkan untuk ${this.nama}`;
    }

    // Method khusus: Lihat semua kegiatan
    lihatKegiatan() {
        if (this.kegiatan.length === 0) {
            return `${this.nama} belum memiliki kegiatan`;
        }
        return this.kegiatan.map(k => `- ${k.nama} (${k.tanggal})`).join('\n');
    }

    // Method khusus: Hitung jumlah kegiatan
    hitungJumlahKegiatan() {
        return `Total kegiatan ${this.nama}: ${this.kegiatan.length}`;
    }
}

// Contoh penggunaan 2 OBJEK MAHASISWA
const mahasiswa1 = new MahasiswaSistemInformasi(
    "Elsa Syaila Arzetti",
    "2301436",
    2023,
    "Data Science",
    3.85
);

const mahasiswa2 = new MahasiswaOrganisasi(
    "Fadli Kurnia",
    "23",
    "Sistem Informasi Kelautan",
    2023,
    "HIMATASKA",
    "Ketua Bidang Pengabdian"
);

// Testing MahasiswaSistemInformasi
console.log(mahasiswa1.getInfo());
console.log(mahasiswa1.setProjekAkhir("Analisis Data Kelautan menggunakan Machine Learning"));
console.log(mahasiswa1.cekStatusKelulusan());
console.log(mahasiswa1.cekMasaStudi());
console.log(mahasiswa1.validasiNIM());

// Testing MahasiswaOrganisasi
console.log("\n" + mahasiswa2.getInfo());
console.log(mahasiswa2.tambahKegiatan("Rapat Koordinasi", "2024-10-05"));
console.log(mahasiswa2.tambahKegiatan("Seminar Kelautan", "2024-10-28"));
console.log("Daftar Kegiatan:");
console.log(mahasiswa2.lihatKegiatan());
console.log(mahasiswa2.hitungJumlahKegiatan());