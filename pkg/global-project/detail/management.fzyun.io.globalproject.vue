<script>
export default {
  props: {
    value: {
      type:     Object,
      required: true
    }
  }
};
</script>
<template>
  <div>
    <h1>{{ value.name }}</h1>
    <h3>{{ value.spec.name }}</h3>
    <h3>{{ value.spec.users.length }}</h3>
    <h3>{{ value.spec.clusters.length }}</h3>
    <h3>{{ value.spec.clusters }}</h3>
  </div>
</template>
<style lang="scss" scoped>
</style>
