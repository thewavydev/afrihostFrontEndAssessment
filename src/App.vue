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
    <div class="w-full mt-10">
      <div>
        <featured-card />
      </div>
    </div>
    <div class="w-full mt-10">
      <p class="text-xl font-bold">Category</p>
      <div class="mt-4 flex gap-3 overflow-x-auto pb-2">
        <button v-for="item in Category" :key="item" @click="active = item" class="rounded-3xl px-6 py-3 font-medium transition" :class="active === item ? 'bg-[#3DA0A7] text-white': 'bg-gray-100 text-gray-700'">
          {{ item }}
        </button>
      </div>
    </div>
    <div>
      <recipes-card />
    </div>
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