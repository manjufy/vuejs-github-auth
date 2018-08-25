<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Github Callback
    </p>
  </div>
</template>

<script>
export default {
  name: 'GithubCallback',
  props: {
    msg: String
  },
  created() {
    console.log(this.$router.query)
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
