<template>
  <div class="hello">
    <h1 v-show="showText">{{ msg }}</h1>
    <button v-on:click="toggle">toggle</button>
    <children :text="sendText"></children>
    <input v-model="sendText">
    <input v-model="num">
    <button @click="toPage">go to page</button>
  </div>
</template>

<script>
import Children from './Children'
export default {
  name: 'HelloWorld',
  components: {
    Children
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showText: true,
      sendText: 'hello parent',
      num: 0
    }
  },
  methods: {
    toggle: function () {
      this.showText = !this.showText
    },
    toPage: function () {
      this.$router.push('/pages/' + this.num)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
