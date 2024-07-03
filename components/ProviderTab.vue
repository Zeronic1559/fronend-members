<template>
  <div>
    <Jackpot />
    <div class="flex flex-row justify-start items-start h-full" id="provider-tab">
      <div :class="['hidden md:block', 'tab__selector rounded-l-2xl sticky top-4']">
        <div class="btn-auto-scroll scroll-top" @click="scrollCate('top')">
          <i class="fas fa fa-chevron-up text-white"></i>
        </div>
        <div class="h-[700px] section-item-list overflow-y-scroll" ref="sliderScroll">
          <div v-for="selector in providerList" :key="selector.id" class="relative">
            <div :class="[
        'tab__selector__item flex flex-col items-center justify-center p-2 md:p-4 ',
        { '--is-selected': selector.id === selected },
      ]" @click="onSelect(selector.id)">
              <img v-lazy="selector.image" class="tab__selector__image mb-2" :alt="selector.name" />
              <span class="tab__selector__name text-xs md:text-sm">{{ selector.name }}</span>
            </div>
          </div>
        </div>

        <div class="btn-auto-scroll scroll-bottom" @click="scrollCate('bottom')">
          <i class="fas fa fa-chevron-down text-white"></i>
        </div>
      </div>

      <div :class="['block md:hidden', 'tab__selector rounded-l-2xl sticky top-1']">
        <div class="h-[calc(100vh-95px)] md:h-[500px] section-item-list overflow-y-scroll" ref="sliderScroll">
          <div v-for="selector in providerList" :key="selector.id" class="relative">
            <div :class="[
        'tab__selector__item flex flex-col items-center justify-center p-2 md:p-4 ',
        { '--is-selected': selector.id === selected },
      ]" @click="onSelect(selector.id)">
              <img v-lazy="selector.image" class="tab__selector__image mb-2" :alt="selector.name" />
              <span class="tab__selector__name text-xs md:text-sm">{{ selector.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tab__content flex-1 rounded-r-2xl rounded-bl-2xl">
        <div v-if="isLoading" class="w-full mt-40">
          <loader></loader>
        </div>

        <div v-else class="h-full w-full">
          <typography variant="h2" class="text-center text-white mt-5 mb-2">
            {{ providerName }}
          </typography>
          <div v-if="provider">
            <img v-if="provider.image" v-lazy="provider.image" class="tab__prefix__image m-auto pt-8" alt="logo" />
            <div v-if="provider.isJokerProvider" class="mt-4 mb-6">
              <typography variant="span" class="text-white text-center"> ยูสสำหรับบนแอปพลิเคชัน </typography>
              <typography variant="paragraph" class="text-white text-center">
                {{ USER_APP }}.{{ $auth.user.username }}
              </typography>
            </div>
          </div>
          <div v-if="!isLoading && items.length > 0 && selected != 'mygame'"
            class="grid grid-cols-1 md:grid-cols-2 p-3 gap-1 md:gap-2">
            <template v-for="item in items">
              <provider-box-external v-if="item.linkType === 'external'" :key="item.id" :item="item"
                :is-name-shown="false" @playGame="playGame"></provider-box-external>
              <provider-box-internal v-else :key="item.id" :item="item" :is-name-shown="false"></provider-box-internal>
            </template>
          </div>
          <div v-else-if="selected == 'mygame'" class="p-2">
            <div class="grid grid-cols-1 md:grid-cols-4 p-8 gap-4">
              <div v-for="item in items" :key="item.id">
                <box-external :key="item.id" :item="item" @updateMygame="updateMygame"></box-external>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loader from '@/components/Loader'
import Typography from '@/components/Typography'
import ProviderBoxExternal from '@/components/ProviderBoxExternal'
import ProviderBoxInternal from '@/components/ProviderBoxInternal'
import BoxExternal from '@/components/BoxExternal'
import Jackpot from '@/components/Jackpot.vue'
import { mapActions } from 'vuex'


const props = defineProps({
  selected: { type: [String, Number], required: true },
  selectors: { type: Array, required: true },
  items: { type: Array, required: true },
  onSelect: { type: Function, required: true },
  provider: { type: Object, default: null },
  isLoading: { type: Boolean, default: false },
  removeGame: { type: Function, required: true },
});

const emits = defineEmits(['removeGame']);

const USER_APP = 'F7H6';
const providerList = computed(() => {
  return props.selectors.filter(el => {
    if (el.isNew) {
      const offSite = ['meslot666', 'meslot877'];
      return !offSite.includes('meslot168');
    } else return el;
  });
});
const providerName = computed(() => {
  const result = providerList.value.find(el => el.id == props.selected);
  return result?.name || '';
});
const activeId = computed(() => {
  return providerList.value.findIndex(el => el.id == props.selected);
});

const updateMygame = (data) => {
  emits.removeGame(data);
};
const updateSelector = (item) => {
  props.onSelect(item.id);
};
const scrollCate = (position) => {
  const items = document.getElementsByClassName('tab__selector__item');
  const itemWidth = items[0]?.offsetHeight;
  const directionLength = itemWidth * 1.5 || 300;
  const sliderScroll = $refs.sliderScroll;
  sliderScroll.scrollTo({
    top: position === 'top' ? sliderScroll.scrollTop - directionLength : sliderScroll.scrollTop + directionLength,
    behavior: 'smooth',
  });
};

const playGame = (item) => {
  selectGame(item);
  selectPathUrl($route.path);
  console.log($route.path);
  $router.push('/game');
};

export {
  props,
  providerList,
  providerName,
  activeId,
  USER_APP,
  updateMygame,
  updateSelector,
  scrollCate,
  playGame,
};
</script>

<style scoped>
.tab {
  overflow: hidden;
  border-radius: 10px;
}

.tab__selector {
  background-color: #bf1313;
}

.tab__selector__item {
  width: 100%;
  cursor: pointer;
}

.tab__selector__image {
  /* // max-width: 100px;
  // max-height: 75px; */
  @apply max-w-[75px] max-h-[45px] md:max-w-[100px] md:max-h-[75px];
}

.tab__selector__name {
  color: #ffffff;
}

.tab__selector__item:last-child {
  border-right: none;
}

/* // .tab__selector__item.--is-selected:first-child {
//   @apply rounded-tl-2xl;
// } */

.tab__selector__item.--is-selected-top {
  @apply rounded-tl-2xl;
}

.tab__selector__item.--is-selected-bottom {
  @apply rounded-bl-2xl;
}

.tab__selector__item.--is-selected {
  background-color: #700909;
}

.tab__content {
  background-color: #700909;
  @apply min-h-[1000px];
}

.tab__prefix__image {
  max-width: 250px;
}

.btn-auto-scroll {
  @apply flex flex-col justify-center items-center;
  @apply h-[50px] w-full text-white cursor-pointer bg-transparent;
}

.scroll-top {
  @apply rounded-tl-xl;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
}

.scroll-bottom {
  @apply rounded-bl-xl;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
}

/* width */
.section-item-list::-webkit-scrollbar {
  width: 3px;
}

/* Track */
.section-item-list::-webkit-scrollbar-track {
  background: #700909;
}

/* Handle */
.section-item-list::-webkit-scrollbar-thumb {
  height: 10px !important;
  background: rgba(247, 247, 247, 0.467);
  border-radius: 50px;
}

.cr {
  width: 100%;
  position: absolute;
  color: #f0f0f0;
  z-index: 1;
}

.cr-sticky {
  position: absolute;
}

/* Positions */

.cr-top {
  top: 25px;
}

.cr-bottom {
  bottom: 25px;
}

.cr-left {
  left: -50px;
}

.cr-right {
  right: -50px;
}

/* Rotations */

.cr-top.cr-left,
.cr-bottom.cr-right {
  transform: rotate(-45deg);
}

.cr-top.cr-right,
.cr-bottom.cr-left {
  transform: rotate(45deg);
}

/* Colors */

.cr-white {
  background-color: #f0f0f0;
  color: #444;
}

.cr-black {
  background-color: #333;
}

.cr-red {
  background-color: #e43;
}
</style>
