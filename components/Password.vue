<template>
  <div :class="{ hasError: validator.$error }">
    <label>
      <typography variant="span" class="label-text">{{ label }}</typography>
      <input
        v-model.lazy="text"
        type="password"
        :placeholder="placeholder"
        @blur="validator.$touch()"
      />
    </label>
  </div>
</template>

<script setup>
import Typography from '@/components/Typography'

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
