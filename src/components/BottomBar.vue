<template>
  <nav class="fixed z-50 bottom-0 left-0 w-full h-20 bg-[#3DA0A7] flex items-center justify-around rounded-t-3xl shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
    <button
      v-for="item in tabs"
      :key="item.name"
      @click="active = item.name"
      class="p-2 transition"
      :class="active === item.name ? 'text-white' : 'text-teal-100'"
    >
      <component :is="item.icon" class="w-6 h-6" />
    </button>

    <button
      @click="active = 'chef'"
      class="absolute left-1/2 -top-8 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0e2626] text-white flex items-center justify-center shadow-[0_0_0_10px_white]"
    >
      <ChefHat class="w-7 h-7" />
    </button>

    <!-- Bottom Indicator -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-full bg-teal-100"/>
  </nav>
</template>


<script>
import {
  House,
  Search,
  Bell,
  User,
  ChefHat
} from "@lucide/vue";

export default {
  components: {
    House,
    Search,
    Bell,
    User,
    ChefHat
  },

  data() {
    return {
      active: "home",

      tabs: [
        {
          name: "home",
          icon: House
        },
        {
          name: "search",
          icon: Search
        },
        {
          name: "notifications",
          icon: Bell
        },
        {
          name: "profile",
          icon: User
        }
      ]
    };
  }
};
</script>