<template>
    <div class="mt-4 w-full overflow-x-auto">
        <div class="flex gap-4  pb-2">
            <div v-for="(item, index) in cardDetails" :key="index"
                class="bg-[#3DA0A7] rounded-lg h-48 w-72 sm:w-80 flex-shrink-0 flex flex-col justify-end">
                <div class="p-4">
                    <p class="text-xl text-white w-52">
                        {{ item.title }}
                    </p>
                    <div class="mt-2 flex justify-between gap-4 text-white">
                        <p class="">
                            {{ item.name }}
                        </p>
                        <p class="">
                            {{ item.duration }}
                        </p>
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
        }
    }
}
</script>

<style lang="scss" scoped></style>