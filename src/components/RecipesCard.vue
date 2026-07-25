<template>
    <div>
        <div class="w-full mt-10">
            <p class="text-xl font-bold">Category</p>
            <div class="mt-4 flex gap-3 overflow-x-auto pb-2">
                <button v-for="item in Category" :key="item" @click="active = item"
                    class="rounded-3xl px-6 py-3 font-medium transition"
                    :class="active === item ? 'bg-[#3DA0A7] text-white' : 'bg-gray-100 text-gray-700'">
                    {{ item }}
                </button>
            </div>
        </div>
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-2xl font-semibold">Popular Recipes</h2>
            <button class="text-blue-500 font-medium hover:underline" @click="seeAll">
                See All
            </button>
        </div>
        <div class="flex gap-6 overflow-x-auto scrollbar-hide pb-4 md:grid md:grid-cols-4 md:overflow-visible">
            <div v-for="recipe in recipeCardDetails" :key="recipe.id"
                class="relative flex-shrink-0 bg-white flex flex-col w-60 rounded-3xl shadow-xl p-4">
                <div class="absolute top-6 right-8 bg-white p-2 rounded-lg shadow">
                    <Heart :size="18" />
                </div>

                <img :src="recipe.image" :alt="recipe.name" class="w-full h-32 object-cover rounded-xl" />

                <p class="mt-4 font-bold text-xl">
                    {{ recipe.name }}
                </p>

                <div class="flex justify-between items-center mt-4 text-slate-500">
                    <div class="flex items-center gap-2">
                        <Flame :size="15" />
                        <span>{{ recipe.energy }}</span>
                    </div>

                    <Dot :size="25" />

                    <div class="flex items-center gap-2">
                        <Clock4 :size="15" />
                        <span>{{ recipe.time }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Heart, Flame, Clock4, Dot, ArrowRight, ArrowLeft } from "@lucide/vue";

export default {
    components: {
        Heart,
        Flame,
        Clock4,
        Dot,
        ArrowRight,
        ArrowLeft
    },

    data() {
        return {
            Category: ['Breakfast', 'Lunch', 'Dinner'],
            active: 'Breakfast',
            recipeCardDetails: [
                {
                    id: 1,
                    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
                    name: 'Healthy Taco Salad with Fresh Vegetables',
                    energy: '120 kCal',
                    time: '20 Min'
                },
                {
                    id: 2,
                    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600',
                    name: 'Fresh Avocado & Quinoa Bowl',
                    energy: '310 kCal',
                    time: '25 Min'
                },
                {
                    id: 3,
                    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600',
                    name: 'Grilled Chicken with Mixed Salad',
                    energy: '420 kCal',
                    time: '35 Min'
                },
                {
                    id: 4,
                    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600',
                    name: 'Classic Italian Pasta',
                    energy: '510 kCal',
                    time: '30 Min'
                },
                {
                    id: 5,
                    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600',
                    name: 'Salmon with Roasted Vegetables',
                    energy: '450 kCal',
                    time: '40 Min'
                },
                {
                    id: 6,
                    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600',
                    name: 'Margherita Pizza',
                    energy: '680 kCal',
                    time: '25 Min'
                }
            ]
        };
    },
    methods: {
        seeAll() {
            this.$router.push('/recipes')
        },
    },
};
</script>