<script lang="ts" setup>
  import { NAVIGATION_SECONDARY } from '~/constants/navigation'
  import BaseInput from '~/components/BaseInput.vue'
  import ArrowIcon from '~/assets/icons/ArrowIcon.vue'
  import { SOCIAL_ICONS } from '~/constants/social'
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__line">
        <div class="footer__left">
          <ul class="footer__links">
            <li v-for="item in NAVIGATION_SECONDARY" :key="item.id" class="footer__links-item">
              <a class="footer__link" :href="item.href">
                {{ item.label }}
              </a>
            </li>
          </ul>
          <p class="footer__legal">
            &copy;&nbsp;<b>2021&nbsp;Shelly.</b> Terms of&nbsp;use <b>and</b> privacy policy.
          </p>
        </div>
        <div class="footer__right">
          <div class="footer__input">
            <BaseInput
              id="email"
              type="email"
              placeholder="Give an&nbsp;email, get the newsletter."
              class="footer__field"
            />
            <button class="footer__button">
              <ArrowIcon />
            </button>
          </div>
          <div class="footer__social">
            <ul class="footer__social-list">
              <li v-for="link in SOCIAL_ICONS" :key="link.id" class="footer__social-item">
                <a :href="link.href" class="footer__social-link">
                  <component :is="link.icon" class="footer__social-image" />
                </a>
              </li>
            </ul>
          </div>
        </div>
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

    &__links {
      display: flex;
      margin-bottom: 48px;
    }

    &__links-item:not(:last-child) {
      margin-right: 41px;
    }

    &__link {
      text-transform: uppercase;
    }

    &__link,
    &__legal {
      @include text-style(16px, $dark-gray-color, 27px);
    }

    &__input {
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

    &__social-list {
      display: flex;
      justify-content: flex-end;
    }

    &__social-item:not(:last-child) {
      margin-right: 30px;
    }
  }
</style>
