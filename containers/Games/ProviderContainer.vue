<template>
  <provider-tab
    :selected="selectedCategory"
    :selectors="categories"
    :items="providers"
    :on-select="onchangeProvider"
    :is-loading="isLoading"
    @removeGame="removeFavotieGame"
  ></provider-tab>
</template>

<script setup>
import useProviders from '@/composables/useProviders'
import ProviderTab from '@/components/ProviderTab'

const { onLoadProviderByCategory, providers, selectedCategory, removeGame } = useProviders();

const removeFavoriteGame = (value) => {
  removeGame(value);
};

const onChangeProvider = async (value) => {
  await onLoadProviderByCategory(value);
  setTimeout(() => {
    let element = document.getElementsByClassName('tab__content');
    element[0].scrollIntoView({ behavior: 'smooth', block: 'start'});
  }, 200);
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
