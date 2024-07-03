<template>
  <provider-tab
    v-if="!isMobile"
    :selected="selectedCategory"
    :selectors="categories"
    :items="providers"
    :on-select="onLoadProviderByCategory"
    :is-loading="isLoading"
    @removeGame="removeFavotieGame"
  ></provider-tab>
</template>

<script setup>
import { isMobile } from 'mobile-device-detect'
import useProviders from '@/composables/useProviders'
import ProviderTab from '@/components/ProviderTab'

const { onLoadProviderByCategory, providers, selectedCategory, removeGame } = useProviders();

const removeFavoriteGame = (value) => {
  removeGame(value);
};

onMounted(async () => {
  await onLoadProviderByCategory('mygame');
  if (providers.value.length === 0) {
    selectedCategory.value = 'all';
    onLoadProviderByCategory('all');
  }
});
</script>

<style scoped></style>
