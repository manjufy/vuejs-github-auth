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
  created() {
    const code = this.$route.query.code
    console.log('Calling API to get the access token.')
    axios.get(`http://dev.githubauth.com:3333/auth?code=${code}`).then(data => {
      // call github to get user info
      axios.get(`https://api.github.com/user?access_token=${}`, {
          params: {
            access_token: data.data.access_token
          }
      }).then(data => {
        console.log('User', data)
      }).catch(error => {
        console.log('Error', error)
      })
    })
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
