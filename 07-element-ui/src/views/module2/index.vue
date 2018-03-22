<template>
    <el-table
        :data="content"
        stripe
        border
        style="width: 100%">
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
        <el-table-column
            prop="create_date"
            label="创建日期">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
  data () {
    return {
      content: [
        {
          name: '许小姐',
          address: '广州大道北',
          create_date: '2018-01-01'
        }
      ]
    }
  }
}
</script>
