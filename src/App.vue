<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/mhs">Mahasiswa</RouterLink>
        <RouterLink to="/matkul">Mata Kuliah</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

