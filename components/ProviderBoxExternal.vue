<template>
  <div :class="['box text-center', { '--is-new': item.isNew }]">
    <div @click="playGame">
      <div :class="['box__image flex items-center', { '--is-new': item.isNew }]">
        <img v-lazy="item.image" class="w-full" />
      </div>
      <span v-if="isNameShown" class="box__name block mt-2">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isNameShown: { type: Boolean, required: false, default: true },
  item: { type: Object, required: true },
});

const emits = defineEmits(['playGame']);

const playGame = () => {
  console.log('playGame');
  emits.playGame(props.item.link);
  console.log('emit');
};
</script>


<style scoped>
.box__image {
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  border-radius: 5px;
   /* border: 2px solid $primary-theme-color; */
  overflow: hidden;
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
