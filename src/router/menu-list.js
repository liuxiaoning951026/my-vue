export default [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    title: 'Hello-word',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/a-component',
    name: 'a-component',
    title: 'A组件',
    component: () => import('@/components/a.vue')
  },
  {
    path: '/b-component',
    name: 'b-component',
    title: 'B组件',
    component: () => import('@/components/b.vue')
  },
  {
    path: '/c-component',
    name: 'c-component',
    title: 'C组件',
    component: () => import('@/components/c.vue')
  }
]
