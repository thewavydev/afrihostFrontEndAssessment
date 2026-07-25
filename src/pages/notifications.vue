<template>
    <div class="w-full max-w-2xl mx-auto p-4">
        <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold">
                Notifications
            </h2>
            <button @click="markAllAsRead" class="text-sm text-[#3DA0A7] font-medium">
                Mark all as read
            </button>
        </div>
        <div class="space-y-3">
            <div v-for="notification in notifications" :key="notification.id" @click="markAsRead(notification.id)"
                class="flex gap-4 p-4 rounded-xl cursor-pointer transition" :class="notification.read
                        ? 'bg-white'
                        : 'bg-[#EAF7F7]'
                    ">
                <div class="w-10 h-10 rounded-full flex items-center justify-center" :class="notification.read
                        ? 'bg-gray-100'
                        : 'bg-[#3DA0A7] text-white'
                    ">
                    <Bell :size="15"/>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between gap-4">
                        <h3 class="font-semibold">
                            {{ notification.title }}
                        </h3>
                        <span class="text-xs text-gray-400 whitespace-nowrap">
                            {{ notification.time }}
                        </span>
                    </div>
                    <p class="text-sm text-gray-500 mt-1">
                        {{ notification.message }}
                    </p>
                </div>
                <div v-if="!notification.read" class="w-2 h-2 bg-[#3DA0A7] rounded-full mt-2"></div>
            </div>
        </div>
        <div v-if="notifications.length === 0" class="text-center py-10 text-gray-500">
            <p>No notifications yet.</p>
        </div>
    </div>
</template>

<script>
import {Bell} from '@lucide/vue'
export default {
    components:{Bell},
    data() {
        return {
            notifications: [
                {
                    id: 1,
                    title: "New Recipe Available",
                    message: "A new healthy breakfast recipe has been added.",
                    time: "5 min ago",
                    read: false
                },
                {
                    id: 2,
                    title: "Recipe Saved",
                    message: "Your Healthy Taco Salad was added to your favourites.",
                    time: "1 hour ago",
                    read: false
                },
                {
                    id: 3,
                    title: "Weekly Reminder",
                    message: "Don't forget to plan your meals for the week.",
                    time: "Yesterday",
                    read: true
                },
                {
                    id: 4,
                    title: "New Meal Plan",
                    message: "Your personalised meal plan is ready to view.",
                    time: "2 days ago",
                    read: true
                }
            ]
        };
    },

    methods: {
        markAsRead(id) {
            const notification = this.notifications.find(
                notification => notification.id === id
            );

            if (notification) {
                notification.read = true;
            }
        },

        markAllAsRead() {
            this.notifications.forEach(notification => {
                notification.read = true;
            });
        }
    }
};
</script>