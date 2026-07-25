<template>
    <div class="w-full max-w-2xl mx-auto p-4">
        <!-- Profile Header -->
        <div class="flex flex-col items-center text-center">
            <img :src="profile.avatar" :alt="profile.name" class="w-24 h-24 rounded-full object-cover" />

            <h2 class="mt-4 text-2xl font-bold">
                {{ profile.name }}
            </h2>

            <p class="text-gray-500">
                {{ profile.email }}
            </p>
        </div>

        <!-- Profile Details -->
        <div class="mt-8 bg-white rounded-2xl shadow p-6">
            <h3 class="text-lg font-semibold mb-4">
                Profile Information
            </h3>

            <div class="space-y-4">
                <div>
                    <p class="text-sm text-gray-400">
                        Full Name
                    </p>
                    <p class="font-medium">
                        {{ profile.name }}
                    </p>
                </div>

                <div>
                    <p class="text-sm text-gray-400">
                        Email
                    </p>
                    <p class="font-medium">
                        {{ profile.email }}
                    </p>
                </div>

                <div>
                    <p class="text-sm text-gray-400">
                        Location
                    </p>
                    <p class="font-medium">
                        {{ profile.location }}
                    </p>
                </div>

                <div>
                    <p class="text-sm text-gray-400">
                        Favourite Cuisine
                    </p>
                    <p class="font-medium">
                        {{ profile.favouriteCuisine }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Preferences -->
        <div class="mt-4 bg-white rounded-2xl shadow p-6">
            <h3 class="text-lg font-semibold mb-4">
                Preferences
            </h3>

            <div class="flex flex-wrap gap-2">
                <span v-for="preference in profile.preferences" :key="preference"
                    class="px-4 py-2 rounded-full bg-[#EAF7F7] text-[#3DA0A7]">
                    {{ preference }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profile: {
                name: "Lehlohonolo Mona",
                email: "lehlohonolomona23@gmail.com",
                location: "South Africa",
                favouriteCuisine: "Asian",
                avatar: "https://i.pravatar.cc/150?img=12",
                preferences: [
                    "Healthy Meals",
                    "Quick Recipes",
                    "High Protein",
                    "Meal Planning"
                ]
            }
        };
    }
};
</script>