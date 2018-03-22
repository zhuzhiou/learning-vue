<template>
    <el-container>
        <el-header>
            <el-menu mode="horizontal" default-active="2">
                <el-menu-item index="1">菜单一</el-menu-item>
                <el-menu-item index="2">菜单二</el-menu-item>
            </el-menu>
        </el-header>
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
                                <router-link to="/module1/index">选项1</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/module2/index">选项2</router-link>
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
</style>
