<script lang="ts" setup>
  import { ref } from 'vue'
  import BaseInput from '~/components/BaseInput.vue'
  import ArrowIcon from '~/assets/icons/ArrowIcon.vue'
  import { isValidEmail } from '~/utils/validation'
  import FooterSocial from '~/components/FooterSocial.vue'
  import FooterLinks from '~/components/FooterLinks.vue'

  const toggleTable = ref(false)
  const email = ref('')
  const errorMessage = ref('')
  let timeToogleTable = 3000
  let emailStorageKey = 'newsLetterEmail'

  const saveEmail = () => {
    if (isValidEmail(email.value)) {
      localStorage.setItem(emailStorageKey, email.value)
      email.value = ''
      errorMessage.value = ''
      toggleTable.value = true
      setTimeout(() => {
        toggleTable.value = false
      }, timeToogleTable)
    } else {
      errorMessage.value = 'Введите правильно почту'
    }
  }
</script>

<template>
  <footer class="footer container footer__container">
    <div class="footer__line">
      <div class="footer__left">
        <FooterLinks class="footer__links" />
        <p class="footer__legal">
          &copy;&nbsp;<b>2021&nbsp;Shelly.</b> Terms of&nbsp;use <b>and</b> privacy policy.
        </p>
      </div>
      <div class="footer__right">
        <form action="" class="footer__form">
          <BaseInput
            id="email"
            v-model="email"
            placeholder="Give an&nbsp;email, get the newsletter."
            :error="errorMessage"
            class="footer__field"
          />
          <button class="footer__button" type="button" @click="saveEmail">
            <ArrowIcon />
          </button>
        </form>
        <div :class="['footer__success', { 'footer__success--visible': toggleTable }]">
          Ваша почта добавлена
        </div>
        <FooterSocial class="footer__social" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    &__line {
      display: flex;
      justify-content: space-between;
      padding-top: 56px;
      padding-bottom: 108px;
      border-top: 1px solid $gray-color;
    }

    &__links:deep(.footer-links__link),
    &__legal {
      @include text-style(16px, $dark-gray-color, 27px);
    }

    &__right {
      position: relative;
    }

    &__form {
      display: flex;
      width: 396px;
      padding-bottom: 13px;
      margin-bottom: 50px;
      border-bottom: 1px $black-color solid;
    }

    &__field:deep(.base-input__field) {
      width: 371px;
    }

    &__field:deep(.base-input__field)::placeholder {
      @include text-style(16px, $dark-gray-color, 27px);
    }

    &__success {
      position: absolute;
      top: 40px;
      left: 0;
      z-index: 2;
      padding: 1px 6px;
      pointer-events: none;
      background: green;
      border: 1px solid $black-color;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    &__success--visible {
      opacity: 1;
    }
  }
</style>
