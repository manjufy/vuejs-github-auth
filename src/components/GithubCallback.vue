<template>
  <div class="hello">
    <p>
      Github Callback - Code {{ this.code }}
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
    console.log('', this.$route.query)
    console.log('this Coe', this.code)
  },
  data() {
    return {
      code: this.$route.query
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
