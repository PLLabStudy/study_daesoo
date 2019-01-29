<template lang="html">
  <div>
    Im a Sub Page!!!!!!!!!!!!!!!!!!!
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Sub extends Vue {
  created() {
    // ..
  }
  mounted() {
    console.log('fuck you im a sub man!');
    // ..
  }
}
</script>
