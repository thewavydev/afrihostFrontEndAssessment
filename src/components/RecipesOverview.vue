<template>
    <div v-if="recipe" class="w-full min-h-screen relative bg-cover bg-center shadow-xl"
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

        <!-- Recipe Content -->
        <div class="bg-white shadow-2xl w-full pb-32 mt-96 absolute rounded-tl-4xl rounded-tr-4xl px-4">

            <!-- Drag Indicator -->
            <div class="w-32 h-1.5 mt-4 bg-gray-300 rounded-full mx-auto mb-6"></div>

            <!-- Title -->
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

            <!-- Description -->
            <div class="w-full mt-4">
                <p class="text-sm leading-6">
                    {{
                        showMore
                            ? recipe.description
                            : (recipe.description || '').substring(0, 150) + '...'
                    }}

                    <span
                        v-if="recipe.description && recipe.description.length > 150"
                        @click="showMore = !showMore"
                        class="text-sm font-bold hover:underline cursor-pointer ml-1"
                    >
                        {{ showMore ? 'View Less' : 'View More' }}
                    </span>
                </p>
            </div>

            <!-- Nutrients -->
            <div class="w-full mt-6">

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <div v-for="nutrient in recipe.meta.nutrients" :key="nutrient.label"
                        class="w-full flex items-center gap-2">
                        <div class="bg-slate-100 px-2 py-2 rounded-lg shrink-0">
                            <Flame :size="20" />
                        </div>

                        <div>
                            <p class="text-sm font-medium">
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
                        :class="active === 'Ingredients'
                            ? 'bg-[#042628] text-[#E6EBF2]'
                            : 'text-[#042628]'">
                        Ingredients
                    </div>

                    <div @click="active = 'Instructions'" class="w-1/2 rounded-xl px-4 py-3 text-center cursor-pointer"
                        :class="active === 'Instructions'
                            ? 'bg-[#042628] text-[#E6EBF2]'
                            : 'text-[#042628]'">
                        Instructions
                    </div>

                </div>
            </div>

            <!-- Ingredients -->
            <div v-if="active === 'Ingredients'" class="w-full mt-6">

                    <div class="w-full flex justify-between items-center">

                        <p class="font-semibold text-lg">
                            Ingredients
                        </p>

                        <p class="text-slate-500">
                            {{ recipe.ingredients?.length }}Items
                        </p>

                    </div>

                <div class="mt-4">

                    <div class="w-full flex flex-col gap-4">

                        <div v-for="(ingredient, index) in recipe.ingredients" :key="index"
                            class="w-full flex gap-3 shadow-xl p-4 rounded-lg bg-white items-center justify-between">

                            <!-- Small Recipe Image -->
                            <div class="w-14 h-14 rounded-lg overflow-hidden shrink-0">

                                <img :src="ingredientImage" :alt="ingredient.label"
                                    class="w-full h-full object-cover" />

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

                        <div
                            class="w-8 h-8 rounded-full bg-[#042628] text-white flex items-center justify-center shrink-0">
                            {{ index + 1 }}
                        </div>

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

    <!-- Loading -->
    <div v-else-if="recipesStore.loading" class="min-h-screen flex items-center justify-center">
        <p>Loading recipe...</p>
    </div>

    <!-- Error -->
    <div v-else-if="recipesStore.error" class="min-h-screen flex items-center justify-center text-red-500">
        {{ recipesStore.error }}
    </div>

</template>

<script>
import {
    X,
    Heart,
    Clock4,
    Flame
} from '@lucide/vue'

import { useRecipesStore } from '../stores/recipesStore'

export default {

    components: {
        X,
        Heart,
        Clock4,
        Flame
    },

    data() {
        return {
            recipesStore: useRecipesStore(),

            showMore: false,

            active: 'Ingredients'
        }
    },
    methods: {
        
    },
    computed: {

        recipe() {
            return this.recipesStore.recipe
        },

        recipeImage() {

            if (!this.recipe?.images?.length) {
                return ''
            }

            return (
                this.recipe.images.find(
                    image =>
                        image.width === '1024' &&
                        image.mime === 'image/avif'
                )?.url ||
                this.recipe.images.find(
                    image => image.width === '1024'
                )?.url ||
                this.recipe.images[0]?.url
            )
        },

        ingredientImage() {

            if (!this.recipe?.images?.length) {
                return ''
            }

            return (
                this.recipe.images.find(
                    image =>
                        image.width === '134' &&
                        image.mime === 'image/avif'
                )?.url ||
                this.recipe.images.find(
                    image => image.width === '134'
                )?.url ||
                this.recipe.images[0]?.url
            )
        },

        cookingTime() {

            if (!this.recipe?.meta?.cooking_time) {
                return '0 Min'
            }

            return `${Math.floor(
                this.recipe.meta.cooking_time / 60
            )} Min`
        }
    },

    async created() {

        const id = this.$route.params.id

        await this.recipesStore.fetchRecipe(id)

    }
}
</script>