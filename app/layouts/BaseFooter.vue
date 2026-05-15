<script lang="ts" setup>
  import { ref } from 'vue'
  import BaseInput from '~/components/BaseInput.vue'
  import ArrowIcon from '~/assets/icons/ArrowIcon.vue'
  import { isValidEmail } from '~/utils/validation'
  import FooterSocial from '~/components/FooterSocial.vue'
  import FooterLinks from '~/components/FooterLinks.vue'
  import BaseCheckbox from '~/components/BaseCheckbox.vue'
  import BaseButton from '~/components/BaseButton.vue'

  const showSuccessMessage = ref(false)
  const email = ref('')
  const errorMessage = ref('')
  const SUCCESS_MESSAGE_TIMEOUT = 3000
  const EMAIL_STORAGE_KEY = 'newsLetterEmail'
  const isChecked = ref(false)

  const saveEmail = () => {
    if (isValidEmail(email.value)) {
      localStorage.setItem(EMAIL_STORAGE_KEY, email.value)
      email.value = ''
      errorMessage.value = ''
      showSuccessMessage.value = true
      setTimeout(() => {
        showSuccessMessage.value = false
      }, SUCCESS_MESSAGE_TIMEOUT)
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
        <form action="" class="footer__form" @submit.prevent="saveEmail">
          <BaseInput
            id="email"
            v-model="email"
            placeholder="Give an&nbsp;email, get the newsletter."
            :error="errorMessage"
            class="footer__field"
          />
          <BaseButton type="submit" variant="transparent" class="footer__button">
            <ArrowIcon class="footer__button-icon" />
          </BaseButton>
        </form>
        <BaseCheckbox
          id="checkbox"
          v-model="isChecked"
          for="checkbox"
          labelText="i&nbsp;agree to&nbsp;the website&rsquo;s terms and conditions"
          class="footer__checkbox"
        />
        <div :class="['footer__success', { 'footer__success--visible': showSuccessMessage }]">
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
      position: relative;
      display: flex;
      justify-content: space-between;
      padding-top: 56px;
      padding-bottom: 108px;
      border-top: 1px solid $gray-color;

      @media (max-width: $breakpoint-m) {
        flex-direction: column;
        border-top: none;
      }
    }

    @media (max-width: $breakpoint-m) {
      &__left,
      &__right {
        display: contents;
      }

      &__form {
        order: 1;
      }

      &__checkbox {
        order: 2;
      }

      &__success {
        order: 3;
      }

      &__links {
        order: 4;
      }

      &__social {
        order: 5;
      }

      &__legal {
        order: 6;
      }
    }

    &__links:deep(.footer-links__link),
    &__legal {
      @include text-style(16px, $dark-gray-color, 27px);

      @media (max-width: $breakpoint-m) {
        font-size: 12px;
      }
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

      @media (max-width: $breakpoint-l) {
        width: 240px;
        margin-bottom: 70px;
      }

      @media (max-width: $breakpoint-m) {
        width: 100%;
        margin-bottom: 11px;
      }
    }

    &__button-icon {
      @media (max-width: $breakpoint-m) {
        width: 15px;
      }
    }

    &__checkbox {
      display: none;
      margin-bottom: 40px;

      @include text-style(12px, $black-color, 20px);

      @media (max-width: $breakpoint-m) {
        display: block;
      }
    }

    &__checkbox:deep(.checkbox__input) {
      margin-right: 4px;
    }

    &__field:deep(.base-input__field) {
      width: 100%;
    }

    &__field:deep(.base-input__field)::placeholder {
      @include text-style(16px, $dark-gray-color, 27px);

      @media (max-width: $breakpoint-l) {
        font-size: 12px;
      }
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

      @include text-style(16px, $black-color, 27px);

      @media (max-width: $breakpoint-m) {
        top: 96px;
      }
    }

    &__success--visible {
      opacity: 1;
    }
  }
</style>
