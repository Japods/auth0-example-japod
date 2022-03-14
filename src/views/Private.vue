<template>
  <div>
    <h1>This is a private route</h1>
  </div>
</template>
<script>
import { isLogged  } from '../utils/auth';

export default {
  name: 'Private',
  components: {},
  mounted(){
    console.log("Token", isLogged())
  }
};
</script>
