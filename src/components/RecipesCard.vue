<template>
    <div>
        <div class="mt-10">
            <p class="text-xl font-bold">Category</p>
            <div class="flex gap-3 mt-4 overflow-x-auto pb-2">
                <button v-for="category in categories" :key="category" @click="active = category"
                    class="capitalize  px-6 py-3 rounded-3xl font-medium whitespace-nowrap" :class="active === category
                        ? 'bg-[#3DA0A7] text-white'
                        : 'bg-gray-100 text-gray-700'">
                    {{ category }}
                </button>
            </div>
        </div>

        <div class="flex items-center justify-between mt-8 mb-4">
            <h2 class="text-2xl font-semibold">
                Popular Recipes
            </h2>
            <button @click="seeAll" class="text-blue-500 font-medium hover:underline">
                See All
            </button>
        </div>

        <div v-if="recipesStore.loading" class="py-8 text-center">
            Loading recipes...
        </div>
        <div v-else-if="recipesStore.error" class="py-8 text-center text-red-500">
            {{ recipesStore.error }}
        </div>

        <div v-else class="flex gap-6 pb-4 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible">
            <div v-for="recipe in filteredRecipes" :key="recipe.id" @click="viewRecipe(recipe.id)"
                class="relative flex-shrink-0 w-60 p-4 bg-white rounded-3xl shadow-xl cursor-pointer">
                <button class="absolute top-6 right-8 p-2 bg-white rounded-lg shadow">
                    <Heart :size="18" />
                </button>
                <img :src="recipe.images[0].url" :alt="recipe.title" :type="recipe.images.mime" class="w-full h-32 object-cover rounded-xl" />
                <p class="mt-4 text-xl font-bold">
                    {{ recipe.title }}
                </p>
                <div class="flex items-center justify-between mt-4 text-slate-500">
                    <div class="flex items-center gap-2">
                        <Flame :size="15" />
                        <span>
                            {{ getNutrient(recipe, 'Carbs') }}g
                        </span>
                    </div>

                    <Dot :size="25" />

                    <div class="flex items-center gap-2">
                        <Clock4 :size="15" />
                        <span>
                            {{ formatCookingTime(recipe.meta.cooking_time) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Heart, Flame, Clock4, Dot } from "@lucide/vue";
import { useRecipesStore } from "../stores/recipesStore";

export default {
    components: { Heart, Flame, Clock4, Dot },
    data() {
        return {
            categories: [
                "breakfast",
                "lunch",
                "dinner"
            ],
            active: "breakfast",
            recipesStore: useRecipesStore()
        };
    },
    computed: {
        filteredRecipes() {
            return this.recipesStore.recipes.filter(recipe => recipe.category === this.active).slice(0, 6);
        }
    },
    mounted() {
        this.recipesStore.fetchRecipes();
    },
    methods: {
        seeAll() {
            this.$router.push("/recipes");
        },
        viewRecipe(id) {
            this.$router.push(`/recipes/${id}`);
        },
        getNutrient(recipe, label) {
            const nutrient = recipe.meta.nutrients.find(item => item.label === label);
            return nutrient ? nutrient.amount : 0;
        },
        formatCookingTime(seconds) {
            return `${Math.round(seconds / 60)} min`;
        }
    }
};
</script>