<template>
  <Toolbar
    v-model="activeTab"
    @open-filter="showFilter = true"
  />
  <CobaSekarang />
  <Video :active-tab="activeTab" />
</template>

<script setup>
import { ref } from 'vue'
import Toolbar from '@/components/gerakan/Toolbar.vue'
import CobaSekarang from '@/components/gerakan/CobaSekarang.vue'
import Video from '@/components/gerakan/Video.vue'

const activeTab = ref('Huruf')
const showFilter = ref(false)
</script>
