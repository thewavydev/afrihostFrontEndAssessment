<template>
  <div class="w-full mt-4 px-4">
    <div class="w-full flex place-items-center ">
      <div class="w-1/2">
        <p class="text-lg md:text-xl">Good {{ this.timeOfDay }}</p>
        <p class="text-xl md:text-2xl font-bold">Lehlohonolo Mona</p>
      </div>
      <div class="w-1/2">
        <p class="text-end">
          Cart
        </p>
      </div>
    </div>
    <div class="w-full mt-4">
      <div>
        <featured-card />
      </div>
    </div>
    <div>
      <recipes-card />
    </div>
    <!-- <router-view /> -->
  </div>
  <bottom-bar />
</template>

<script>
export default {
  data() {
    return {
      Category: ['Breakfast', 'Lunch', 'Dinner'],
      active: 'Breakfast'
    }
  },
  computed: {
    timeOfDay() {
      const hour = new Date().getHours()
      if (hour < 12) {
        return 'Morning'
      }
      if (hour < 18) {
        return 'Afternoon'
      }
      return 'Evening'
    }
  }
}
</script>
