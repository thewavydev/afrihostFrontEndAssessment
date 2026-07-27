<template>
  <main class="">
      <router-view />
  </main>
  <div v-if="$route.name !== 'recipes-overview'" class="mt-32">
    <bottom-bar />
  </div>
</template>

<script>
export default {
  data() {
    return {
       
    }
  }
}
</script>
