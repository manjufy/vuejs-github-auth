<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Click on the Below link to Authenticate with Github
      <br/>
      <input @click="authenticateWithGithub()" class="button" type="button" name="GITHUB" value="GITHUB"/>
    </p>
  </div>
</template>

<script>
export default {
  name: 'GithubAuth',
  props: {
    msg: String
  },
  data() {
    return {
      GH_CLIENT_ID: '13713e448956673736bb',
      GH_CLIENT_SECRET: 'c1b575cce6f3fc4e77ec829c6bcd7657ebd6a9ce'
    }
  },
  methods: {
    authenticateWithGithub() {
      window.location.href = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${this.GH_CLIENT_ID}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>
