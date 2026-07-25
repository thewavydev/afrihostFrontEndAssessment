<template>
  <div>
      <router-view />
  </div>
  <div>
    <bottom-bar />
  </div>
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
