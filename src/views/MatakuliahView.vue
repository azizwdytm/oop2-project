<script lang="ts" setup>
</script>
<template>
    <v-sheet class="justify-center pa-12" rounded>
      <center><H3>Tambah Mata Kuliah</H3></center>
      <br>
      <v-card class="mx-auto my-auto px-6 py-8 bg-deep-purple" max-width="344">
        <v-form>
          <v-text-field
            v-model="kodeMatkul"
            :readonly="false"
            class="mb-2"
            clearable
            placeholder="Kode Matkul"
            label="Kode Matkul"
          ></v-text-field>
  
          <v-text-field
            v-model="namaMatkul"
            :readonly="false"
            class="mb-2"
            clearable
            placeholder="Nama Matkul"
            label="Nama Matkul"
          ></v-text-field>

          <v-text-field
            v-model="kodeNamaMatkul"
            :readonly="true"
            class="mb-2"
            clearable
            placeholder="Kode Nama Matkul"
            label="Kode Nama Matkul"
          ></v-text-field>
          <br>
          <v-btn @click="simpan">
            Simpan
          </v-btn>
        </v-form>
      </v-card>
      <br>
      <v-card class="mx-auto my-auto px-6 py-8 bg-deep-purple" max-width="344">
      <table>
        
        <thead>
          <th>Kode</th>
          <th>Nama</th>
        </thead>

        <tbody>
          <tr v-for='(matkul, index) in listMatkul' :key="index">
            <td>{{ index }}</td>
            <td>{{ matkul.kode }}</td>
            <td>{{ matkul.nama }}</td>
          </tr>
        </tbody>

      </table>
      </v-card>
    </v-sheet>
  </template>
  <script lang="ts">
    import { MataKuliah } from '@/models/MataKuliah';
    const matkul = new MataKuliah("001", "OOP2")
    let listMatkul: MataKuliah[] = []
    export default {
      data: () => ({
        matkul: matkul,
        listMatkul: listMatkul,
        kodeMatkul: "",
        namaMatkul: "",
      }),
      computed: {
        kodeNamaMatkul() {
          return this.kodeMatkul + " " + this.namaMatkul;
        }
      },
      watch: {
        kodeMatkul(newData){
          if(newData == "001"){
            this.namaMatkul = "Object 2"
          }else if(newData == "002"){
            this.namaMatkul = "Algo 1"
          }
        }
      },
      methods: {
        simpan() {
          this.listMatkul.push(new MataKuliah(matkul.getKode(), matkul.getNama()))
          console.log(listMatkul)
          alert("data tersimpan")
        }
      }
    }
</script>