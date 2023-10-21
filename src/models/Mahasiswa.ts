import { MataKuliah } from "./MataKuliah";

export class Mahasiswa{
    public npm: string
    public nama: string
    public ipk: number
    private matkul: MataKuliah[]

  constructor(npm: string, nama: string, ipk: number) {
    this.npm = npm
    this.nama = nama
    this.ipk = ipk
    this.matkul = []
  }

  getNpm() {
    return this.npm
  }

  getNama() {
    return this.nama
  }

  getIPK() {
    return this.ipk
  }

  tambahMatkul(matkul: MataKuliah) {
    return this.matkul.push(matkul)
  }
}