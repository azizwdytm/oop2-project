<script lang="ts" setup>
</script>
<template>
    <v-sheet class="justify-center pa-12" rounded>
      <v-card class="mx-auto my-auto px-6 py-8 bg-deep-purple" max-width="344">
        <v-form>
          <v-text-field
            v-model="mahasiswa.npm"
            :readonly="true"
            class="mb-2"
            clearable
            label="NPM"
          ></v-text-field>
  
          <v-text-field
            v-model="mahasiswa.nama"
            :readonly="true"
            class="mb-2"
            clearable
            label="Nama"
          ></v-text-field>
          <v-text-field
            v-model="mahasiswa.ipk"
            :readonly="true"
            clearable
            label="IPK"
          ></v-text-field>
  
          <br>
        </v-form>
      </v-card>
    </v-sheet>
  </template>
  <script lang="ts">
    import { Mahasiswa } from '@/models/Mahasiswa';
    const mhs = new Mahasiswa("1111", "Aziz", 4)

    export default {
      data: () => ({
        mahasiswa: mhs
      }),
  
      methods: {
      },
    }
</script>