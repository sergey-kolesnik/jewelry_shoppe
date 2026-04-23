<script lang="ts" setup>
  import { NAVIGATION_SECONDARY } from '~/constants/navigation'
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
        <div class="footer__right"></div>
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
