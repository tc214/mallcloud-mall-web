<template>
  <!--<div id="app">-->
    <!--<div class="page-contanier">-->
      <!--<page-header></page-header>-->
      <!--<div class="main">-->
        <!--<div class="main-big w">-->
          <!--<page-notice @close="$store.dispatch('close_notice')"></page-notice>-->
          <!--<router-view v-cloak></router-view>-->
        <!--</div>-->
      <!--</div>-->
      <!--<page-footer></page-footer>-->
    <!--</div>-->
  <!--</div>-->

    <div id="app">
      <router-view></router-view>
    </div>
</template>
<!--<script>-->
  <!--import PageHeader from './views/layout/header/index.vue';-->
  <!--import PageFooter from './views/layout/footer/index.vue';-->
  <!--import PageNotice from './components/notice/index.vue';-->

  <!--export default {-->
    <!--components: {-->
      <!--PageHeader,-->
      <!--PageFooter,-->
      <!--PageNotice-->
    <!--}-->
  <!--};-->
<!--</script>-->
<!--<style rel="stylesheet/scss" lang="scss">-->
  <!--@import './assets/styles/index.scss';-->
  <!--.w {-->
    <!--width: 100%;-->
    <!--margin: 0 auto;-->
  <!--}-->
  <!--.page-contanier {-->
    <!--background-color: #f8f8f8;-->
    <!--position: relative;-->
    <!--min-height: 670px;-->
    <!--height: 100%;-->
  <!--}-->
  <!--.main {-->
    <!--height: 100%;-->
    <!--padding: 116px 0;-->
  <!--}-->
  <!--.main-big {-->
    <!--width: 1000px;-->
    <!--height: 100%;-->
    <!--display: flex;-->
    <!--justify-content: center;-->
    <!--align-items: center;-->
  <!--}-->
<!--</style>-->

<style>
  @import "../static/css/main.css";
  @import "../static/css/color-dark.css";     /*深色主题*/
  /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
</style>
