<template>
  <div style="background-color: #409EFF; width: 100%; height: 100%; position: absolute;">
    <div style="background-color: #fff; top: 50%; position: absolute; width: 100%; height: 100px; transform: translate(0, -50%);display: flex; justify-content: center; align-items: center;">
      <el-form :inline="true">
        <el-form-item label="账号">
          <el-input type="text" v-model="username" placeholder="请输入手机号" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
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
