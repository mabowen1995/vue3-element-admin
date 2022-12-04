<script lang="ts" setup>

</script>
<template>
  <div class="container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="less">
.container {
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-header,
  .el-footer {
    background-color: var(--el-color-primary-light-7);
  }

  .el-aside {
    background-color: var(--el-color-primary-light-8);
  }

  .el-main {
    background-color: var(--el-color-primary-light-9);
  }
}
</style>