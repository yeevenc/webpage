<template>
    <div>
        <p>Test</p>
        <button v-on:click="goBack">Go Back</button>
        <HelloWorld />
    </div>
</template>
<script>
export default {
  name: 'TestPage',
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>
<style>
a {
  color: #42b983;
}
</style>
