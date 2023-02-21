<template>
  <div>
    <div id="app">
      <form>
        <label>
          用户名：
          <input type="text" v-model="username">
        </label>
        <label>
          密码：
          <input type="password" v-model="password">
        </label>
        <button @click.prevent="login">登录</button>
      </form>
      <div v-if="isLoggedIn">
        您已登录成功！
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>