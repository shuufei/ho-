import Vue from 'vue'
import App from './App.vue'
import Blog from './blog/blog.vue'

const NotFound = App;
const Home = App;
const BlogPage = Blog;
const TravelInfoPage = { template: '<p>trabel info page</p>' }
const AboutPage = { template: '<p>about page cache confirm</p>' }

const routes = {
  '/': Home,
  '/blog': BlogPage,
  '/travelInfo': TravelInfoPage,
  '/about': AboutPage
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
