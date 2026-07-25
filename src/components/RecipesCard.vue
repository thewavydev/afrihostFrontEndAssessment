<template>
    <div class="relative bg-white  flex flex-col w-60 rounded-3xl shadow-xl p-4 mb-32">
        <div class="absolute top-6 right-8 bg-white p-2 rounded-lg shadow">
            <Heart :size="18" />
        </div>

        <img src="/Food.png" alt="A selection of food dishes" class="rounded-xl" />
        <div class="mt-4">
            <p class="font-bold text-xl">
                Healthy Taco Salad with fresh vegetable
            </p>
        </div>

        <div class="flex justify-between mt-4 text-slate-500">
            <div class="flex items-center gap-2">
                <Flame :size="15" />
                <span>120 Kcal</span>
            </div>
            <div class="flex place-items-center">
                <Dot :size="40"/>
            </div>
            <div class="flex items-center gap-2">
                <Clock4 :size="15" />
                <span>20 Min</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Heart, Flame, Clock4, Dot } from "@lucide/vue";

export default {
    components: {
        Heart,
        Flame,
        Clock4,
        Dot
    },
};
</script>