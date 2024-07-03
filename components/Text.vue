<template>
  <div :class="error">
    <label>
      <typography variant="span" class="label-text">{{ label }}</typography>
      <input
        :class="isTextRight ? 'text-right' : 'text-left'"
        v-model.lazy="text"
        type="text"
        :placeholder="placeholder"
        @blur="validator.$touch()"
        :disabled="disabled"
      />
    </label>
  </div>
</template>

<script setup>
import Typography from '@/components/Typography'

  const props = defineProps({
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String | Number,
      required: true,
    },
    validator: {
      type: Object,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    isTextRight: {
      type: Boolean,
      required: false,
      default: false,
    },
  })
</script>

<style scoped>
.label-text {
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: 400;
    outline: none;
  }
  
  input:focus {
    border-color: #700909;
  }
  
  .hasError input {
    border: 1px solid red;
  }
</style>
