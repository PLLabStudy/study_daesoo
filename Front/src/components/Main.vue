<template lang="html">
  <div>
    Im a Main Page!!!!!!!!!!!!!!!!!!!
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
  created() {
    // ..
  }
  mounted() {
    console.log('fuck you im a main man!');
    // ..
  }
}
</script>
