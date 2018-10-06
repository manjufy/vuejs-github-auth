<template>
  <div class="hello">
    <p>
      Github Callback - Code {{ this.code }}
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GithubCallback',
  props: {
    msg: String
  },
  async created() {
    const code = this.$route.query.code
    console.log('Calling API to get the access token.')
    const response = await axios.get(`http://dev.githubauth.com:3333/auth?code=${code}`)
    const user = await axios.get(`https://api.github.com/user?access_token=${response.data.access_token}`)
    const emails = await axios.get(`https://api.github.com/user/emails?access_token=${response.data.access_token}`)

    console.log('Githug', user, emails)
  },
  data() {
    return {
      code: this.$route.query,
      loading: false
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
