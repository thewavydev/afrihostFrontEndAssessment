<template>
    <div class="w-full min-h-screen relative bg-cover bg-center shadow-xl"
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
                    {{ showMore ? recipe.description : recipe.description.substring(0, 150) + '...' }}
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
export default {
    components: { X, Heart, Clock4, Flame, LeafyGreen },

    data() {
        return {
            showMore: false,

            active: 'Ingredients',

            recipe: {
                id: 1,

                category: 'breakfast',

                title: 'Healthy Taco Salad',

                description:
                    'Fresh, vibrant, and satisfying, this healthy taco salad brings all the bold flavors you love with a nourishing twist. Crisp lettuce forms the base, topped with seasoned lean protein, juicy cherry tomatoes, crunchy peppers, and fiber-rich black beans. Creamy avocado adds healthy fats, while a sprinkle of fresh herbs and lime brightens every bite. Finished with a light, zesty dressing and a touch of spice, this salad delivers the taste of a taco without the heaviness. It’s perfectly balanced, packed with nutrients, and ideal for a wholesome lunch or an easy, guilt-free dinner.',

                images: [
                    {
                        url: 'https://www.afrihost.com/assessments/2603-fe-mid/images/1-large.avif',
                        width: '1024',
                        mime: 'image/avif'
                    },
                    {
                        url: 'https://www.afrihost.com/assessments/2603-fe-mid/images/1-large.jpg',
                        width: '1024',
                        mime: 'image/jpg'
                    },
                    {
                        url: 'https://www.afrihost.com/assessments/2603-fe-mid/images/1-large.webp',
                        width: '1024',
                        mime: 'image/webp'
                    }
                ],

                ingredients: [
                    {
                        label: 'Romaine lettuce or mixed leafy greens',
                        quantity: 4,
                        unit: 'cups'
                    },
                    {
                        label: 'Lean ground turkey or grilled chicken breast',
                        quantity: 250,
                        unit: 'g'
                    },
                    {
                        label: 'Low-sodium taco seasoning',
                        quantity: 1,
                        unit: 'tbsp'
                    },
                    {
                        label: 'Cherry tomatoes',
                        quantity: 1,
                        unit: 'cup'
                    },
                    {
                        label: 'Bell pepper',
                        quantity: 1,
                        unit: 'medium'
                    },
                    {
                        label: 'Black beans',
                        quantity: 1,
                        unit: 'cup'
                    },
                    {
                        label: 'Avocado',
                        quantity: 1,
                        unit: 'large'
                    },
                    {
                        label: 'Red onion',
                        quantity: 0.25,
                        unit: 'cup'
                    },
                    {
                        label: 'Fresh cilantro',
                        quantity: 2,
                        unit: 'tbsp'
                    },
                    {
                        label: 'Lime juice',
                        quantity: 1,
                        unit: 'lime'
                    },
                    {
                        label: 'Greek yogurt',
                        quantity: 0.25,
                        unit: 'cup'
                    },
                    {
                        label: 'Olive oil',
                        quantity: 1,
                        unit: 'tbsp'
                    },
                    {
                        label: 'Salt',
                        quantity: 0,
                        unit: 'to taste'
                    },
                    {
                        label: 'Black pepper',
                        quantity: 0,
                        unit: 'to taste'
                    }
                ],

                instructions: [
                    'Heat the olive oil in a pan over medium heat. Add the ground turkey or chicken and cook for 6–8 minutes until browned and cooked through. Stir in the taco seasoning and a splash of water if needed. Remove from heat.',

                    'Wash and chop the lettuce. Halve the cherry tomatoes, dice the bell pepper, slice the red onion, and chop the cilantro. Rinse and drain the black beans.',

                    'In a small bowl, mix the Greek yogurt (or sour cream) with lime juice, salt, and black pepper until smooth.',

                    'In a large bowl, layer the lettuce, cooked protein, vegetables, black beans, and avocado.',

                    'Drizzle with dressing, add optional toppings, toss gently, and serve immediately.'
                ],

                meta: {
                    cooking_time: 900,

                    nutrients: [
                        {
                            unit: 'g',
                            amount: 65,
                            label: 'Carbs'
                        },
                        {
                            unit: 'g',
                            amount: 27,
                            label: 'Proteins'
                        },
                        {
                            unit: '',
                            amount: 120,
                            label: 'Kcal'
                        },
                        {
                            unit: 'g',
                            amount: 91,
                            label: 'Fats'
                        }
                    ]
                }
            }
        };
    },

    computed: {
        recipeImage() {
            return this.recipe.images.find(
                image => image.mime === 'image/avif'
            )?.url || this.recipe.images[0]?.url;
        },

        cookingTime() {
            const seconds = this.recipe.meta.cooking_time;

            const minutes = Math.floor(seconds / 60);

            return `${minutes} Min`;
        }
    }
};
</script>