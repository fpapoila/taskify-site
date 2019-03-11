export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async signUpWithGitHub() {
    const data = await this.$axios.$get("/oauth/github", {})
    localStorage.setItem("_csrf_token", data.csrfToken)
    location.assign(data.url)
  },
  async getGitHubToken({commit}, data) {
    let csrf = localStorage.getItem("_csrf_token")
    if (csrf === data.state) {
      const r = await this.$axios.$post("/oauth/signup/github", data)
      localStorage.setItem("_github_token", r.accessToken)
    } else {
      console.log("invalid CSRF token")
    }
  }
}
