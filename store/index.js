export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async getCsrfToken() {
    return await this.$axios.$get("/oauth/csrf")
  }
}
