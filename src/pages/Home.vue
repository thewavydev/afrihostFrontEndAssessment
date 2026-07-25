<template>
  <div class="w-full mt-4 px-4">
    <div class="w-full flex place-items-center ">
      <div class="w-1/2">
        <p class="text-lg md:text-xl">Good {{ this.timeOfDay }}</p>
        <p class="text-xl md:text-2xl font-bold">Lehlohonolo Mona</p>
      </div>
      <div class="w-1/2">
        <p class="text-end">
          <ShoppingCart :size="32"/>
        </p>
      </div>
    </div>
    <div class="w-full mt-4">
      <div>
        <featured-card />
      </div>
    </div>
    <div>
      <recipes-card />
    </div>
  </div>
</template>

<script>
import { ShoppingCart  } from "@lucide/vue";
export default {
    component:{ShoppingCart},
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

</style>