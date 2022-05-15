<template>
  <div>
      <DataProtectionComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import DataProtectionComponent from '@/components/DataProtectionComponent.vue'

export default {
  name: 'DataProtectionView',
  components: {
    DataProtectionComponent
  }
}
</script>