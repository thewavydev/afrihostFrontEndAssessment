    <template>
        <div v-if="recipe" class="w-full min-h-screen relative bg-cover bg-center shadow-xl"
            :style="{ backgroundImage: `url(${recipeImage})` }">
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
                            {{ (recipe.meta.cooking_time / 60).toFixed(0) }} Min
                        </p>
                    </div>
                </div>
                <div class="w-full mt-4">
                    <p class="text-sm leading-6">
                        {{ showMore ? recipe.description : (recipe.description || '').substring(0, 150) }}
                        <span v-if="recipe.description && recipe.description.length > 150" @click="showMore = !showMore"
                            class="text-sm font-bold hover:underline cursor-pointer ml-1">
                            {{ showMore ? 'View Less' : 'View More' }}
                        </span>
                    </p>
                </div>
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
                <div class="w-full mt-6">
                    <div class="w-full flex bg-[#E6EBF2] rounded-xl p-2 gap-4">
                        <div @click="active = 'Ingredients'"
                            class="w-1/2 rounded-xl px-4 py-3 text-center cursor-pointer"
                            :class="active === 'Ingredients' ? 'bg-[#042628] text-[#E6EBF2]' : 'text-[#042628]'">
                            Ingredients
                        </div>
                        <div @click="active = 'Instructions'"
                            class="w-1/2 rounded-xl px-4 py-3 text-center cursor-pointer"
                            :class="active === 'Instructions' ? 'bg-[#042628] text-[#E6EBF2]' : 'text-[#042628]'">
                            Instructions
                        </div>
                    </div>
                </div>
                <div v-if="active === 'Ingredients'" class="w-full mt-6">
                    <div class="w-full flex flex-wrap justify-between items-center">
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
                                <div class="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                                    <img :src="ingredientImage" :alt="ingredient.label"
                                        class="w-full h-full object-cover" />
                                </div>
                                <div class="flex-1">
                                    <p>
                                        {{ ingredient.label }}
                                    </p>
                                </div>
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
                <div v-if="active === 'Instructions'" class="w-full mt-6">
                    <div class="w-full flex justify-between items-center">
                        <div class="font-semibold text-lg">
                            <p>
                                Instructions
                            </p>
                            <span class="font-normal text-md">
                                {{ (recipe.meta.cooking_time / 60).toFixed(0) }} Min
                            </span>
                        </div>
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
                <div class=" mt-10 border-t border-slate-200 ">
                    <div class="w-full mt-4">
                        <div class="w-full">
                            <p class="text-2xl font-bold">Creator</p>
                        </div>
                        <div class="w-full flex place-items-center mt-4 gap-8 ">
                            <div class="bg-slate-100 border-4 border-teal-100 rounded-full p-1">
                                <User :size="52" />
                            </div>
                            <div class="leading-6">
                                <p class="font-normal">Lehlohonolo Mona</p>
                                <p class="font-light">I'm the author and recipe developer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-8">
                        <div>
                            <div class="flex items-center justify-between mt-8 mb-4">
                                <h2 class="text-2xl font-semibold">
                                    Related Recipes
                                </h2>
                                <button  class="text-[#3DA0A7] font-medium hover:underline">
                                    See All
                                </button>
                            </div>
                            <div class="flex flex-none md:flex-wrap gap-6 pb-4 overflow-x-auto">
                                <div v-for="relatedRecipe in relatedRecipes" :key="relatedRecipe.id"
                                    @click="viewRecipe(relatedRecipe.id)"
                                    class="relative flex-shrink-0 w-66 p-4 bg-white rounded-3xl shadow cursor-pointer hover:shadow-lg transition">
                                    <div>
                                        <button class="absolute top-6 right-8 p-2 bg-white rounded-lg shadow">
                                            <Heart :size="18" />
                                        </button>
                                    </div>
                                    <div>
                                        <img :src="relatedRecipe.img" :alt="relatedRecipe.title" class="w-full h-32 object-cover rounded-xl" />
                                    </div>
                                    <div>
                                        <p class="mt-4 text-xl font-bold">
                                            {{ relatedRecipe.title }}
                                        </p>
                                    </div>
                                    <div class="w-full flex items-center justify-between mt-4 text-slate-500">
                                        <div class="flex items-center gap-2">
                                            <Flame :size="15" />
                                            <span>{{ relatedRecipe.calories }} kcal</span>
                                        </div>

                                        <Dot :size="52" />

                                        <div class="flex items-center gap-2">
                                            <Clock4 :size="15" />
                                            <span>{{ relatedRecipe.duration }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="recipesStore.loading" class="min-h-screen flex items-center justify-center">
            <p>Loading recipe...</p>
        </div>
        <div v-else-if="recipesStore.error" class="min-h-screen flex items-center justify-center text-red-500">
            {{ recipesStore.error }}
        </div>
    </template>

<script>
import { X, Heart, Clock4, Dot, Flame, User } from '@lucide/vue'
import { useRecipesStore } from '../stores/recipesStore'
export default {
    components: { X, Heart, Dot, Clock4, Flame, User },
    data() {
        return {
            relatedRecipes: [
                {
                    id: 1,
                    title: "Classic Margherita Pizza",
                    img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=600&auto=format&fit=crop",
                    calories: 320,
                    duration: "30 Min"
                },
                {
                    id: 2,
                    title: "Creamy Chicken Alfredo",
                    img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&auto=format&fit=crop",
                    calories: 540,
                    duration: "25 Min"
                },
                {
                    id: 3,
                    title: "Avocado Toast",
                    img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&auto=format&fit=crop",
                    calories: 280,
                    duration: "15 Min"
                },
                {
                    id: 4,
                    title: "Blueberry Pancakes",
                    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&auto=format&fit=crop",
                    calories: 410,
                    duration: "20 Min"
                },
                {
                    id: 5,
                    title: "Caesar Salad",
                    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&auto=format&fit=crop",
                    calories: 260,
                    duration: "18 Min"
                }
            ],
            recipesStore: useRecipesStore(),
            showMore: false,
            active: 'Ingredients'
        }
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
                this.recipe.images.find(image => image.width === '1024' && image.mime === 'image/avif')?.url ||
                this.recipe.images.find(image => image.width === '1024')?.url || this.recipe.images[0]?.url
            )
        },
        ingredientImage() {
            if (!this.recipe.images.length) {
                return ''
            }
            return (
                this.recipe.images.find(image => image.width === '134' && image.mime === 'image/avif')?.url ||
                this.recipe.images.find(image => image.width === '134')?.url ||
                this.recipe.images[0]?.url
            )
        },
    },
    async created() {
        const id = this.$route.params.id
        await this.recipesStore.fetchRecipe(id)
    }
}
</script>