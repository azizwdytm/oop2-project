export class MataKuliah{
    public kode: string
    public nama: string

  constructor(kode: string, nama: string) {
    this.kode = kode
    this.nama = nama
  }

  getKode() {
    return this.kode
  }

  getNama() {
    return this.nama
  }
}