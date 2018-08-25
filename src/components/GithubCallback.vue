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
    // Make a post request to Github
    axios.post('https://github.com/login/oauth/access_token', {
      client_id: '13713e448956673736bb',
      client_secret: 'c1b575cce6f3fc4e77ec829c6bcd7657ebd6a9ce',
      code,
      accept: 'json'
    }, {
      headers: {
        'crossDomain': true
      }
    })
    .then(data => {
      console.log('Data', data)
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
