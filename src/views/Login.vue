<template>
  <div class="login-area">
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">用户名</label>
        <validate-input
          placeholder="请输入用户名"
          :rules="usernameRules"
          v-model="usernameRef"
          ref="inputRef"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          placeholder="请输入密码"
          :rules="passwordRules"
          v-model="passwordRef"
        />
      </div>
    </validate-form>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue"
import Header from '../components/BlogHeader.vue'
import ValidateForm from '../components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'

export default defineComponent({
  components: {
    Header,
    ValidateInput,
    ValidateForm
  },
  props: {

  },
  setup() {
    const usernameRef = ref('')
    const passwordRef = ref('')

    const usernameRules: RulesProp = [
      { type: 'required', message: '用户名不能为空' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]

    const onFormSubmit = (result: boolean) => {
      if (result) {
        console.log(result)
      }
    }
    return {
      usernameRef,
      passwordRef,
      usernameRules,
      passwordRules,
      onFormSubmit
    }

  }
})
</script>
<style>
</style>
