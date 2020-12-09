/* global axios, Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: []
    };
  },
  methods: {
    getProducts: function () {
      axios.get("http://localhost:3000/api/products").then(response => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
  created: function () {
    console.log('in created...');
    this.getProducts();
  }
});