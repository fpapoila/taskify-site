export default function ({isDev, $axios}) {
  if (isDev) {
    $axios.defaults.baseURL = 'http://localhost:3001'
  } else {
    $axios.defaults.baseURL = 'https://taskifyworks.herokuapp.com'
  }
}
