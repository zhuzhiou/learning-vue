<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <el-card class="box-card" style="background-color: #409EFF;">
        appear-active-class
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card" style="background-color: #67C23A;">
        appear-active-class
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card" style="background-color: #E6A23C;">
        appear-active-class
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="box-card" style="background-color: #F56C6C;">
        appear-active-class
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
  .box-card {
    border-radius: 0;
  }
</style>
