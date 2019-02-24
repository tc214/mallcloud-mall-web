let mixin = {
  data() {
    return {};
  },
  methods: {
    goSignIn() {
      if (process.env.NODE_ENV === 'production') {
        window.location.href = 'http://passport.tc.com';
      } else {
        window.location.href = 'http://passport.tc.com';
      }
    },
    goSignUp() {
      if (process.env.NODE_ENV === 'production') {
        window.location.href = 'http://passport.tc.com/register';
      } else {
        window.location.href = 'http://passport.tc.com/register';
      }
    },
    logOut() {
      this.$http({
        headers: {
          'Content-Type': "application/json; charset=utf-8",
        },
        url: '/usc/user/logout',
        method: 'POST',
        params: {
          access_token: this.$store.getters.getAccessToken
        }
      }).then(() => {
        alert("退出成功！");
        this.$store.dispatch('delete_user_info');
        this.goHome();
      }).catch(() => {
        this.$store.dispatch('delete_user_info');
        this.goHome();
      });
    },


    loadPage(routerName, param) {
      if (param) {
        this.$router.push({name: routerName, query: param});
      } else {
        this.$router.push({name: routerName});
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    goHome() {
      this.loadPage('Index');
    },
    message(msg, type, showClose) {
      this.$message({
        showClose: showClose || false,
        message: msg,
        type: type
      });
    },
    ajax(param) {
      let {type, url, data, success, isUnMusk, loading} = param;
      if (!isUnMusk) {
        this.$pcNProgress.start();
      }
      if (loading && !this.$store.getters.getAjaxLoading) {
        this.$store.dispatch('show_ajaxLoading');
      }
      if (loading && !this.$store.getters.getButtonLoading) {
        this.$store.dispatch('show_buttonLoading');
      }
      this.$http({
        method: type || 'POST',
        url: url || '',
        data: data || ''
      }).then((res) => {
        this.$pcNProgress.done();
        if (loading && this.$store.getters.getAjaxLoading) {
          this.$store.dispatch('hide_ajaxLoading');
        }
        if (loading && this.$store.getters.getButtonLoading) {
          this.$store.dispatch('hide_buttonLoading');
        }
        if (success) {
          success(res);
        } else {
          this.goBack();
        }
      }).catch((error) => {
        this.$pcNProgress.done();
        this.$loading = false;
        if (loading && this.$store.getters.getAjaxLoading) {
          this.$store.dispatch('hide_ajaxLoading');
        }
        if (loading && this.$store.getters.getButtonLoading) {
          this.$store.dispatch('hide_buttonLoading');
        }
        console.error(error);
      });
    },

    // 字段的验证，支持非空、手机、邮箱的判断
    validate(value, type) {
      // 非空验证
      if (type === 'require') {
        return !!value;
      }
      // 手机号验证
      if (type === 'phone') {
        return /^1\d{10}$/.test(value);
      }
      // 邮箱格式验证
      if (type === 'email') {
        return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
      }
      if (type === 'pwd') {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,14}$/.test(value);
      }
    }
  }
};

export default mixin;
