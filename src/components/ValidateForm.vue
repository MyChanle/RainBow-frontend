<template>
  <form class="validate-form-container">
    <slot class="default"></slot>
    <div class="submit-area" @click_prevent="submitForm">
      <slot class="submit">
        <button type="submit" class="btn btn-primary">Login</button>
      </slot>
    </div>
  </form>
</template>
<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

type ValidateFunc = () => boolean
interface CallbackProps {
  validator: ValidateFunc;
}
type Events = { 'form-item-created': CallbackProps }
export const emiiter = mitt<Events>()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, context) {
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result)
      context.emit('form-submit', result)
    }
    let funcArr: ValidateFunc[] = []

    const callback = (obj?: CallbackProps) => {
      if (obj) {
        funcArr.push(obj.validator)
      }
    }

    emiiter.on('form-item-created', callback)
    onUnmounted(() => {
      emiiter.off('form-item-created', callback)
      funcArr = []
    })
    return {
      submitForm
    }
  }
})
</script>
<style>
</style>