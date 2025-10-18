<template>
  <div class="empty-state">
    <p v-if="searchQuery">No props found matching "{{ searchQuery }}"</p>
    <p v-else>No props match the selected filters.</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  searchQuery: string;
}>();
</script>

<style scoped>
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--vp-c-text-2);
}

.empty-state p {
  font-size: 1.1rem;
  margin: 0;
}
</style>

