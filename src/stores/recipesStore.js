import { defineStore } from 'pinia'
import axios from 'axios'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchRecipes() {
      this.loading = true
      this.error = null

      try {
        const response = await axios.get('/api/recipes.json')

        this.recipes = response.data.recipes
      } catch (error) {
        console.error('Failed to fetch recipes:', error)
        this.error = 'Failed to load recipes.'
      } finally {
        this.loading = false
      }
    }
  }
})