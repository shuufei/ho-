import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Blog from './blog/blog.vue'

Vue.use(VueRouter)

const NotFound = App;
const Home = App;
const BlogPage = Blog;
const TravelInfoPage = { template: '<p>trabel info page</p>' }
const AboutPage = { template: '<p>about page cache confirm</p>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    // { path: '*', component: Home },
    { path: '/', component: Home },
    { path: '/blog', component: BlogPage },
    { path: '/travelinfo', component: TravelInfoPage },
    { path: '/about', component: AboutPage }
  ]
})

new Vue({
  router,
  el: '#app',
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `
})

// const routes = {
//   '/': Home,
//   '/blog': BlogPage,
//   '/travelInfo': TravelInfoPage,
//   '/about': AboutPage
// }

// new Vue({
//   el: '#app',
//   data: {
//     currentRoute: window.location.pathname
//   },
//   computed: {
//     ViewComponent () {
//       return routes[this.currentRoute] || NotFound
//     }
//   },
//   render (h) { return h(this.ViewComponent) }
// })
