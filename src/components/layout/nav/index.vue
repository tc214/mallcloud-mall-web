<template>
  <div class="nav">
    <div class="w">
      <div class="user-info">
                <span class="user not-login" v-show="loginName == null || loginName === ''">
                    <span class="link js-login" @click="goSignIn">登录</span>
                    <span class="link js-register" @click="goSignUp">注册</span>
                </span>
        <span class="user login" v-show="loginName != null && loginName !== ''">
                    <span class="link-text">
                        欢迎，
                        <span class="username">{{loginName}}</span>
                    </span>
                    <span class="link js-logout" @click.prevent="logout">退出</span>
        </span>
      </div>
      <ul class="nav-list">
        <li class="nav-item">
          <a class="link" @click="loadPage('user-machine')">
            <i class="fa fa-machine"></i>
            目标机(<span class="machine-count">{{machineList.length}}</span>)
          </a>
        </li>
        <li class="nav-item">
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('user-order')">我的目标机</a>
        </li>
        <li class="nav-item">
          <a class="link" href="javascript:void(0)" @click.prevent="loadPage('user-center')">我的KZCloud</a>
        </li>
        <li class="nav-item">
          <a class="link" href="javascript:void(0)" @click.preventk="loadPage('about')">关于KZCloud</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    methods: {},
    computed: {
      loginName() {
        return this.$store.getters.getLoginName;
      },
      machineList() {
        // return this.$store.getters.getMachineList;
      }
    }
  };
</script>
