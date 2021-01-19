<template></template>

<script>
export default {
  mounted() {
    this.$zplat.signout().then((ret) => {
      this.$message({
        type: "success",
        message: "登出成功，欢迎下次再来~",
      });
      this.$router.push({ name: "signin" });
    });
  },
};
</script>

<style>
</style>