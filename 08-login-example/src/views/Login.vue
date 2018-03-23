<template>
  <el-form>
    <el-form-item label="账号">
      <el-input type="text" v-model="login.username"></el-input>
      <p>{{login.usernameError}}</p>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">登陆</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      login: {
        username: '',
        usernameError: '请输入账号'
      }
    }
  }
}
</script>
