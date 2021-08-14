<template>
  <div class="validate-input-container pd-3">
    <input
      v-if="tag !== 'textarea'"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    >

    <textarea
      v-else
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    >
    </textarea>
    <span v-if="inputRef.error" class="invalid-feedback">{{inputRef.message}}</span>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, PropType, reactive } from 'vue'
import { emiiter } from './ValidateForm.vue'

type InputType = 'input' | 'textarea'

type RuleType = 'required' | 'email' | 'password' | 'range'

export interface RuleProp {
  type: RuleType;
  message: string;
}

export type RulesProp = RuleProp[]

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
    tag: {
      type: String as PropType<InputType>,
      defaults: 'input'
    }
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    const validateInput = () => {
      if (props.rules) {
        const allPassed: boolean = props.rules.every(rule => {
          let passed = true
          switch (rule.type) {
            case 'required':
              inputRef.message = rule.message || ''
              passed = (inputRef.val.trim() !== '')
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed

        return allPassed
      }

      return true
    }

    onMounted(() => {
      emiiter.emit('form-item-created', {
        validator: validateInput
      })
    })

    return {
      inputRef,
      updateValue,
      validateInput
    }
  }
})
</script>
<style>
</style>