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
              id="search"
              type="email"
              placeholder="Give an&nbsp;email, get the newsletter."
              :buttonImage="ArrowIcon"
            />
          </div>
          <div class="footer__social">
            <a
              v-for="link in SOCIAL_ICONS"
              :key="link.id"
              href="link.href"
              class="footer__social-link"
            >
              <component :is="link.icon" class="footer__social-image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    &__line {
      border-top: 1px solid $gray-color;
    }
  }
</style>
