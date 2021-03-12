<template>
  <div id="home111">
    <!-- 导航条 start -->
    <div class="nav">
      <div v-for="item in menuList" :key="item.name" class="div1">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
    </div>
    <!-- 内容 start -->
    <div class="section-part">
      <layout></layout>
    </div>
  </div>
</template>
<script>
import menuList from '.././router/menu-list.js'
import layout from '../components/layout.vue'
export default {
  name: 'home',
  components: { layout },
  data () {
    return {
      menuList: menuList
    }
  }
}
</script>
<style lang="postcss" scoped>
#home111 {
  /* position: inherit; */
  /* border: 2px solid red; */
  height: 100%;
  width: 100%;
  display: flex;
  .section-part {
    width: calc(100% - 120px);
    height: 100%;
    background-color: khaki;
  }
}

.nav {
  width: 120px;
  height: 100%;
  background-color: #98c2ec;
}

.div1 {
  width: 100px;
  height: 40px;
  line-height: 40px;
}

a {
  cursor: pointer;
}

/* .section-part {
  width: calc(100% - 120px);
  height: 100%;
  background-color: khaki;
} */

/deep/ .el-row {
  width: 100%;
  height: 100%;
}
/deep/ [class*="el-col-"] {
  height: 100%;
}
</style>
