<template>
    <div v-if="recipesStore.loading" class="py-8 text-center">
        Loading recipe...
    </div>

    <div v-else-if="recipesStore.error" class="py-8 text-center text-red-500">
        {{ recipesStore.error }}
    </div>

    <div v-else-if="recipeNotFound" class="py-8 text-center text-slate-700">
        Recipe not found.
    </div>

    <div v-else class="w-full min-h-screen relative bg-cover bg-center shadow-xl"
        :style="{ backgroundImage: `url(${recipeImage})` }">
        <!-- Header -->
        <div class="flex justify-between items-center pt-10 px-4">
            <router-link to="/" class="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                <X :size="18" class="text-black" />
            </router-link>
            <button type="button" class="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
                <Heart :size="18" class="text-black" />
            </button>
        </div>
        <div class="bg-white shadow-2xl w-full pb-32 mt-96 absolute rounded-tl-4xl rounded-tr-4xl px-4">
            <div class="w-32 h-1.5 mt-4 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <div class="flex justify-between items-center gap-4">
                <div>
                    <p class="text-2xl font-semibold">
                        {{ recipe.title }}
                    </p>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    <Clock4 :size="15" />
                    <p class="text-slate-500">
                        {{ cookingTime }}
                    </p>
                </div>
            </div>
            <div class="w-full mt-4">
                <p class="text-sm leading-6">
                    <!-- {{ showMore ? recipe.description : recipe.description.substring(0, 150)}} -->
                    <span v-if="recipe.description.length > 150" @click="showMore = !showMore"
                        class="text-sm font-bold hover:underline cursor-pointer ml-1">
                        {{ showMore ? 'View Less' : 'View More' }}
                    </span>
                </p>
            </div>
            <div class="w-full mt-4">
                <div class="w-full flex flex-wrap gap-y-4">
                    <div v-for="nutrient in recipe.meta.nutrients" :key="nutrient.label"
                        class="w-1/2 flex items-center gap-2">
                        <div class="bg-slate-100 px-2 py-1 rounded-lg shrink-0">
                            <Flame :size="20" />
                        </div>

                        <div>
                            <p>
                                {{ nutrient.amount }}{{ nutrient.unit }}
                                {{ nutrient.label }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabs -->
            <div class="w-full mt-6">
                <div class="w-full flex bg-[#E6EBF2] rounded-xl p-2 gap-4">
                    <div @click="active = 'Ingredients'" class="w-1/2 rounded-xl px-4 py-3 text-center cursor-pointer"
                        :class="active === 'Ingredients' ? 'bg-[#042628] text-[#E6EBF2]' : 'text-[#042628]'">
                        Ingredients
                    </div>
                    <div @click="active = 'Instructions'" class="w-1/2 rounded-xl px-4 py-3 text-center cursor-pointer"
                        :class="active === 'Instructions' ? 'bg-[#042628] text-[#E6EBF2]' : 'text-[#042628]'">
                        Instructions
                    </div>
                </div>
            </div>
            <div v-if="active === 'Ingredients'" class="w-full mt-6">
                <div class="w-full flex justify-between items-center">
                    <p class="font-semibold text-lg">
                        Ingredients
                    </p>
                    <p class="text-slate-500">
                        {{ recipe.ingredients.length }} Items
                    </p>
                </div>

                <div class="mt-4">
                    <div class="w-full flex flex-col gap-4">
                        <div v-for="(ingredient, index) in recipe.ingredients" :key="index"
                            class="w-full flex gap-3 shadow-xl p-4 rounded-lg bg-white items-center justify-between">
                            <!-- Ingredient Icon -->
                            <div class="bg-slate-100 px-2 py-1 rounded-lg shrink-0">
                                <LeafyGreen :size="20" />
                            </div>

                            <!-- Ingredient Name -->
                            <div class="flex-1">
                                <p>
                                    {{ ingredient.label }}
                                </p>
                            </div>

                            <!-- Quantity -->
                            <div class="shrink-0">
                                <p class="text-slate-500">
                                    {{ ingredient.quantity }}
                                    {{ ingredient.unit }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instructions -->
            <div v-if="active === 'Instructions'" class="w-full mt-6">
                <div class="w-full flex justify-between items-center">
                    <p class="font-semibold text-lg">
                        Instructions
                    </p>

                    <p class="text-slate-500">
                        {{ recipe.instructions.length }} Steps
                    </p>
                </div>

                <div class="mt-4 flex flex-col gap-5">
                    <div v-for="(instruction, index) in recipe.instructions" :key="index" class="flex gap-4">
                        <!-- Step Number -->
                        <div
                            class="w-8 h-8 rounded-full bg-[#042628] text-white flex items-center justify-center shrink-0">
                            {{ index + 1 }}
                        </div>

                        <!-- Instruction -->
                        <div class="flex-1">
                            <p class="text-sm leading-6 text-slate-700">
                                {{ instruction }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { X, Heart, Clock4, Flame, LeafyGreen } from '@lucide/vue';
import { useRecipesStore } from '../stores/recipesStore';

export default {
    components: { X, Heart, Clock4, Flame, LeafyGreen },

    data() {
        return {
            showMore: false,
            active: 'Ingredients',
            recipesStore: useRecipesStore()
        };
    },

    computed: {
        recipeId() {
            return Number(this.$route.params.id);
        },

        recipe() {
            return this.recipesStore.recipes.find(recipe => recipe.id === this.recipeId) || null;
        },

        recipeNotFound() {
            return (
                !this.recipesStore.loading &&
                !this.recipesStore.error &&
                this.$route.params.id &&
                !this.recipe &&
                this.recipesStore.recipes.length > 0
            );
        },

        recipeImage() {
            return (
                this.recipe?.images?.find(image => image.mime === 'image/avif')?.url ||
                this.recipe?.images?.[0]?.url ||
                ''
            );
        },

        cookingTime() {
            const seconds = this.recipe?.meta?.cooking_time || 0;
            const minutes = Math.floor(seconds / 60);
            return `${minutes} Min`;
        }
    },

    created() {
        if (!this.recipesStore.recipes.length) {
            this.recipesStore.fetchRecipes();
        }
    }
};
</script>