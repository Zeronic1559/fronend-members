<template>
  <div :class="ล้มเหลว">
    <label>
      <typography variant="span" class="label-text">{{ label }}</typography>
      <div class="select-wrapper">
        <select v-model.lazy="text" :disabled="disabled">
          <option selected disabled value="">{{ placeholder }}</option>
          <option v-for="option in options" :key="option.id" :value="option.id">
            {{ option.name }}
          </option>
        </select>
      </div>
    </label>
  </div>
</template>

<script setup>
import Typography from '@/components/Typography'

const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, String],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    validator: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style scoped>
.label-text {
  margin-bottom: 10px;
}

.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: '';
  background-image: url(/icons/arrow-down.png);
  position: absolute;
  top: 50%;
  right: 10px;
  width: 20px;
  height: 6px;
  background-size: contain;
  background-repeat: no-repeat;
  transform: translateY(-50%);
}

select {
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 5px;
  font-weight: 400;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
}

select:focus {
  border-color: #700909;
}

option:disabled {
  color: #bdbdbd;
}

.hasError select {
  border: 1px solid red;
}
</style>
