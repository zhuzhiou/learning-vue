<template>
  <el-container>
    <el-header style="background-Color:#303133;color:#F2F6FC;">
        <el-row>
          <el-col :span="24">element-ui示例</el-col>
        </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router default-active="/admin/form" :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <template slot="title">常用组件</template>
              <el-menu-item index="/admin/room">娃娃机管理</el-menu-item>
              <el-menu-item index="/admin/table">货架管理</el-menu-item>
              <el-menu-item index="/admin/form">APP管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">游戏</template>
              <el-menu-item index="1-4">游戏列表</el-menu-item>
              <el-menu-item index="1-5">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>运营管理</span>
            </template>
            <el-menu-item index="2-1">功能一</el-menu-item>
            <el-menu-item index="2-2">功能二</el-menu-item>
            <el-menu-item index="2-3">功能三</el-menu-item>
          </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped>
  .el-header {
      display: flex;
      align-items: center;
  }
</style>
