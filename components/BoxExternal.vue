<template>
  <div :class="['box text-center relative mt-4', { '--is-new': item.isNew }]">
    <div class="absolute md:-top-7 -top-5 -left-5 z-10 p-2" @click="updateStar(item)">
      <font-awesome-icon :icon="[is_mygame ? 'fas' : 'far', 'star']" :class="['text-yellow-400', 'text-2xl']" />
    </div>
    <div @click="playGame">
      <div :class="['box__image flex items-center', { '--is-new': item.isNew }]">
        <img v-lazy="item.image" class="w-full h-full object-contain" />
      </div>
      <RatingBar :win-rate="item.winRate" v-if="item.winRate" />
      <span v-if="isNameShown" class="box__name block mt-2">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import RatingBar from '@/components/RatingBar.vue';

const props = defineProps({
  isNameShown: { type: Boolean, required: false, default: true },
  item: { type: Object, required: true },
  updateMygame: { type: Function, required: true },
});

const emits = defineEmits(['updateMygame', 'playGame']);

const like = ref(false);
const is_mygame = ref(false);
const winRate = ref(Math.floor(Math.random() * 100));

is_mygame.value = props.item.is_mygame;

const updateStar = (data) => {
  is_mygame.value = !is_mygame.value;
  const type = is_mygame.value ? 'add' : 'delete';
  emits.updateMygame(data, type);
};

const playGame = () => {
  emits.playGame(props.item.link);
};
</script>


<style scoped>
.box__image {
  width: 100%;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  border-radius: 5px;
  background-color: #700909;
}

.box__image:hover {
  background-color: #bf1313;
}

.box__image.--is-new::after {
  content: '';
  background-image: url(/static/images/new.png);
  position: absolute;
  top: -5px;
  left: -5px;
  width: 47px;
  height: 27px;
  background-repeat: no-repeat;
  background-size: cover;
}

.box__name {
  color: #ffff;
}
</style>
