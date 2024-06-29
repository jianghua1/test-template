<template>
  <div>
    id:{{params.id}}
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useParams } from '@/hooks'
type Params = {
  id: string
}
const params = useParams<Params>();

</script>

<style>
</style>

<route lang="yaml">
meta:
  layout: default
</route>
