<template>
  <div>
    我是a页面
    <el-button size="small" type="primary" @click="toHref">跳转</el-button>
  </div>
</template>
<script>
export default {
  name: 'a-component',
  data () {
    return {}
  },
  methods: {
    toHref () {
      this.$router.push({ name: 'c-component' })
    }
  },
  mounted () {}
}
</script>
