<template>
  <el-container>
    <el-header style="background-Color:#303133;color:#F2F6FC;">
        <el-row>
          <el-col :span="24">element-ui示例</el-col>
        </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router default-active="/examples/form">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>组件的使用</span>
            </template>
            <el-menu-item-group>
              <template slot="title">常用组件</template>
              <el-menu-item index="/admin/room">房间管理</el-menu-item>
              <el-menu-item index="/admin/table">表格</el-menu-item>
              <el-menu-item index="/admin/form">表单</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">对话框</template>
              <el-menu-item index="1-4">选项3</el-menu-item>
              <el-menu-item index="1-5">选项4</el-menu-item>
            </el-menu-item-group>
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
