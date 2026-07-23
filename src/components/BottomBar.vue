<template>
  <nav class="absolute bottom-0 w-full bg-green-500 flex items-center justify-around h-20  rounded-t-3xl shadow-[0_-6px_24px_rgba(0,0,0,0.06)]">
    <button v-for="item in tabs" :key="item.name" @click="active = item.name"
      class="p-2" :class="active === item.name ? 'text-teal-400' : 'text-gray-300'">
      <component :is="item.icon" class="w-6 h-6" />
    </button>

    <button @click="active = 'chef'"
      class="absolute left-1/2 -top-8 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0e2626] text-white flex items-center justify-center shadow-[0_0_0px_10px_white]">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="w-7 h-7">
        <path d="M8 10.5a3 3 0 1 1 1.2 2.4A3 3 0 0 1 6 15v1h12v-1a3 3 0 0 1-3.2-2.1A3 3 0 1 1 16 10.5c0-2-1.6-4-4-4s-4 2-4 4Z" />
        <path d="M7 16h10v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2Z" />
      </svg>
    </button>

    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1.5 rounded-full bg-teal-100" />
  </nav>
</template>

<script>
export default {
  name: 'BottomNavBar',
  data() {
    return {
      active: 'home',
      tabs: [
        { name: 'home', icon: 'IconHome' },
        { name: 'search', icon: 'IconSearch' },
        { name: 'notifications', icon: 'IconBell' },
        { name: 'profile', icon: 'IconUser' },
      ],
    }
  },
  components: {
    IconHome: {
      template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9" /></svg>`,
    },
    IconSearch: {
      template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>`,
    },
    IconBell: {
      template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path d="M10 20a2 2 0 0 0 4 0" /></svg>`,
    },
    IconUser: {
      template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" /></svg>`,
    },
  },
}
</script>