<template>
    <el-container>
        <el-aside width="200px">
            <el-menu default-active="1-1">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>系统管理</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">
                            <router-link to="/module1">选项1</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-2">
                            <router-link to="/module2">选项2</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">分组二</template>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-menu-item index="1-4">选项4</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">分组三</template>
                        <el-menu-item index="1-5">选项5</el-menu-item>
                        <el-menu-item index="1-6">选项6</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <el-breadcrumb separator="/" style="flex-grow: 1">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
                <div style="float: right;">
                    <el-button type="warning">退出</el-button>
                </div>
            </el-header>
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
