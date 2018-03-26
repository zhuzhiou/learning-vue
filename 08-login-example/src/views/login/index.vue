<template>
  <el-card class="box-card">
    <el-form :inline="true">
      <el-form-item label="账号">
        <el-input type="text" v-model="username" placeholder="请输入手机号" auto-complete="off" autofocus></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" icon="el-icon-circle-check-outline">登陆</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitForm () {
      if (this.username === '') {
        this.$message.error('请输入手机号')
        return
      }
      if (this.password.length < 6) {
        this.$message.error('请输入6位以上的密码')
        return
      }
      sessionStorage.setItem('token', '123')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
  .el-form-item {
    margin-bottom: 0;
  }
</style>
