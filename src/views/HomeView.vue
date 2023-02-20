<template>
   <el-container>
  <el-aside width = "15vw">Aside</el-aside>
  <el-container>
    <el-header height = "10vh">Header</el-header>
    <el-main>
      {{input}}
    </el-main>
  </el-container>
</el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data () {
    return {
      input: '1111222'
    }
  }
}
</script>

<style scoped lang="less">
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    overflow: auto;
    height: 90vh;
    width: 85vw;
  }

</style>
