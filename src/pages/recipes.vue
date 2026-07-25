<template>
    <div class="w-full h-screen relative bg-cover bg-center bg-[url('/Food.png')]">
        <div class="flex justify-between pt-10 px-4 ">
            <div>
                <button class="bg-red-500 px-4 rounded-lg h-10">
                    <X :siz="15" class="text-black" />
                </button>
            </div>
            <div>
                <button class="bg-green-500 px-4 rounded-lg h-10">
                    <Heart :siz="15" class="text-black" />
                </button>
            </div>
        </div>
        <div class="bg-red-500 w-full pb-32 mt-96 absolute  rounded-tl-4xl rounded-tr-4xl px-4">
            <div class="w-32 h-1.5 mt-4 bg-gray-300 rounded-full mx-auto mb-6"></div>
            <div class="flex justify-between">
                <div class="">
                    <p class="text-lg font-semibold">
                        Healthy Taco Salad
                    </p>
                </div>
                <div class="flex place-items-center gap-4">
                    <Clock4 :size="15" />
                    <p class="text-slate-500">15 Min</p>
                </div>
            </div>
            <div class="w-full">
                <p>This Healthy Taco Salad is the universal delight of taco night</p>
            </div>
            <div class="w-full mt-4">
                <div class="w-full flex flex-wrap gap-4">
                    <div v-for="nutrient in nutrients" class="flex place-items-center gap-2">
                        <div class="bg-slate-500 px-2 py-1 rounded-lg">
                            <Flame :size="20" />
                        </div>
                        <div>
                            <p class="">{{ nutrient.amount }}{{ nutrient.unit }} {{ nutrient.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full mt-6">
                <div class="w-full flex bg-slate-500 rounded-xl p-2 gap-4">
                    <div @click="active = 'Ingredients'" class="w-1/2 rounded-xl px-4 py-3 text-center cursor-pointer"
                        :class="active === 'Ingredients'
                            ? 'bg-black text-red-500'
                            : 'text-white'">
                        Ingredients
                    </div>

                    <div @click="active = 'Instructions'" class="w-1/2 rounded-xl px-4 py-3 text-center cursor-pointer"
                        :class="active === 'Instructions'
                            ? 'bg-black text-red-500'
                            : 'text-white'">
                        Instructions
                    </div>
                </div>
            </div>
            <div v-if="active === 'Ingredients'" class="w-full mt-6">
                <div class="w-full">
                    <p>Ingredients</p>
                    <p>6 Item</p>
                    <div class="mt-4">
                        <div class="w-full flex flex-col gap-4 shadow ">
                            <div v-for="ingredient in ingredients"
                                class="w-full flex gap-2 shadow p-4 rounded-lg bg-green-500 place-items-center justify-between">
                                <div class="bg-slate-500 px-2 py-1 rounded-lg">
                                    <Flame :size="20" />
                                </div>
                                <div class="w-1/2">
                                    <p>
                                        {{ ingredient.label }}
                                    </p>
                                </div>
                                <div class="w-3/6 flex justify-end">
                                    <p>
                                        {{ ingredient.quantity }} {{ ingredient.unit }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="active === 'Instructions'" class="w-full mt-6">
                intsructiion
            </div>
        </div>
    </div>
</template>

<script>
import { X, Heart, Clock4, Flame } from '@lucide/vue';
export default {
    components: { X, Heart, Clock4, Flame },
    props: {

    },
    data() {
        return {
            active: 'Ingredients',
            nutrients: [
                { "unit": "g", "amount": 65, "label": "Carbs" },
                { "unit": "g", "amount": 27, "label": "Proteins" },
                { "unit": "", "amount": 120, "label": "Kcal" },
                { "unit": "g", "amount": 91, "label": "Fats" }
            ],
            "ingredients": [
                { "label": "Romaine lettuce or mixed leafy greens", "quantity": 4, "unit": "cups" },
                { "label": "Lean ground turkey or grilled chicken breast", "quantity": 250, "unit": "g" },
                { "label": "Low-sodium taco seasoning", "quantity": 1, "unit": "tbsp" },
                { "label": "Cherry tomatoes", "quantity": 1, "unit": "cup" },
                { "label": "Bell pepper", "quantity": 1, "unit": "medium" },
                { "label": "Black beans", "quantity": 1, "unit": "cup" },
                { "label": "Avocado", "quantity": 1, "unit": "large" },
                { "label": "Red onion", "quantity": 0.25, "unit": "cup" },
                { "label": "Fresh cilantro", "quantity": 2, "unit": "tbsp" },
                { "label": "Lime juice", "quantity": 1, "unit": "lime" },
                { "label": "Greek yogurt", "quantity": 0.25, "unit": "cup" },
                { "label": "Olive oil", "quantity": 1, "unit": "tbsp" },
                { "label": "Salt", "quantity": 0, "unit": "to taste" },
                { "label": "Black pepper", "quantity": 0, "unit": "to taste" }
            ],
        }
    }
}
</script>

<style></style>