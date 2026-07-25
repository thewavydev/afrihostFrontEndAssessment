  <template>
    <div class="w-full mt-4 px-4 z-50">
      <div class="w-full flex place-items-center ">
        <div class="w-1/2">
          <div class="text-sm md:text-xl flex gap-2  flex place-items-center">
            <component :is="timeOfDay === 'Good Evening' ? 'Moon' : timeOfDay === 'Good Afternoon' ? 'Sunset' : 'Sun'" :size="15"/>
            {{ this.timeOfDay }}
          </div>
          <p class="text-sm md:text-2xl font-bold">Lehlohonolo Mona</p>
        </div>
        <div class="w-1/2 flex justify-end">
            <ShoppingCart :size="25" class=""/>
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
  import { ShoppingCart, Moon, Sun, Sunset  } from '@lucide/vue';
  export default {
      components:{ShoppingCart, Moon ,Sun, Sunset },
      data () {
          return {

          }
      },
      computed: {
      timeOfDay() {
        const hour = new Date().getHours()
        if (hour < 12) {
          return 'Good Morning'
        }
        if (hour < 18) {
          return 'Good Afternoon'
        }
        return 'Good Evening'
      }
    }
  }
  </script>

  <style lang="scss" scoped>

  </style>