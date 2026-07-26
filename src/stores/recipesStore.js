import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [],
    recipe: null,
    loading: false,
    error: null
  }),

  actions: {
    async fetchRecipes() {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get('/api/recipes.json')

        this.recipes = response.data.recipes || []
      } catch (error) {
        console.error('Failed to fetch recipes:', error)
        this.error = 'Failed to load recipes.'
      } finally {
        this.loading = false
      }
    },

async fetchRecipe(id) {
    this.loading = true
    this.error = null
    this.recipe = null

    try {
        const response = await axios.get(`/api/recipes/${id}.json`)

        this.recipe = response.data.recipe

    } catch (error) {
        console.error('Failed to fetch recipe:', error)
        this.error = 'Failed to load recipe.'
    } finally {
        this.loading = false
    }
}
  }
})