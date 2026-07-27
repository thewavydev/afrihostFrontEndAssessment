<template>
    <div>
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-semibold">Featured</h2>
            <button class="text-[#3DA0A7] font-medium hover:underline transition" @click="$router.push('/')">
                See All
            </button>
        </div>
        <div ref="cardContainer" class="flex gap-4 overflow-x-auto md:overflow-hidden scroll-smooth pb-2">
            <div v-for="(item, index) in cardDetails" :key="index"
                class="relative rounded-lg h-48 w-72 sm:w-80 overflow-hidden flex-shrink-0">
                <div class="absolute inset-0 bg-[url('/Food.png')] bg-cover bg-center"></div>
                <div class="absolute inset-0 bg-[#3DA0A7]/60"></div>
                <div class="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                    <p class="text-xl w-52">{{ item.title }}</p>
                    <div class="mt-2 flex justify-between">
                        <p>{{ item.name }}</p>
                        <p>{{ item.duration }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cardDetails: [
                {
                    title: 'Asian white noodle with extra seafood',
                    name: 'Michael Chen',
                    duration: '25 Min'
                },
                {
                    title: 'Creamy Garlic Parmesan Pasta',
                    name: 'Sarah Williams',
                    duration: '30 Min'
                },
                {
                    title: 'Asian White Noodles with Extra Seafood',
                    name: 'James Spader',
                    duration: '20 Min'
                },
                {
                    title: 'Grilled Chicken Avocado Salad',
                    name: 'Emma Johnson',
                    duration: '15 Min'
                },
                {
                    title: 'Classic Beef Burger with Crispy Fries',
                    name: 'Daniel Smith',
                    duration: '35 Min'
                },
                {
                    title: 'Fresh Mediterranean Vegetable Bowl',
                    name: 'Olivia Brown',
                    duration: '20 Min'
                },
                {
                    title: 'Honey Garlic Glazed Salmon',
                    name: 'Noah Davis',
                    duration: '25 Min'
                },
                {
                    title: 'Creamy Mushroom and Spinach Risotto',
                    name: 'Sophia Miller',
                    duration: '40 Min'
                },
                {
                    title: 'Spicy Chicken Tacos with Fresh Salsa',
                    name: 'Ethan Wilson',
                    duration: '30 Min'
                },
                {
                    title: 'Classic Tomato and Basil Bruschetta',
                    name: 'Ava Martinez',
                    duration: '10 Min'
                }
            ]
        };
    },

    methods: {
        scrollLeft() {
            this.$refs.cardContainer.scrollBy({
                left: -320,
                behavior: "smooth",
            });
        },

        scrollRight() {
            this.$refs.cardContainer.scrollBy({
                left: 320,
                behavior: "smooth",
            });
        }
    }
};
</script>