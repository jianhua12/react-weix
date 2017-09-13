import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '../components/Index.vue'
import Foo from '../components/Foo'
import Bar from '../components/Bar'


	

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Foo',
      //name: 'Index',
      component: Foo
    },
    {
      path: '/Bar',
      //name: 'Index',
      component: Bar
    }
  ]
})
