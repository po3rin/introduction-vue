<template>
  <div class="hello">
   <p>this page number is {{id}}</p>
   <p>{{title}}</p>
   <div>
      <router-link to="/">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pages',
  data () {
    return {
      id: this.$route.params.id,
      title: null
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    axios.get('http://localhost:3000/v1/tasks/' + this.$route.params.id).then(res => {
      this.title = res.data.title
    })
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
