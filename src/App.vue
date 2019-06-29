<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
      <!-- 这里是会被缓存的视图组件 -->
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
    <!-- 这里是不被缓存的视图组件 -->
  </div>
</template>


<style lang="scss">
#app {
  height: 100%;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 900px;
}
</style>
