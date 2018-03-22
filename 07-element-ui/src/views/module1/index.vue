<template>
  <div>
    <el-form :inline="true">
      <el-form-item>
        <el-input placeholder="姓名" v-model="criteria.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select placeholder="性别" v-model="criteria.gender">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-plus">新增</el-button>
      </el-form-item>
    </el-form>
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
            label="创建日期"
            width="150">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      criteria: {
        username: '',
        gender: ''
      },
      content: [
        {
          name: '朱先生',
          address: '广州大道北',
          create_date: '2018-01-01'
        }
      ]
    }
  }
}
</script>
