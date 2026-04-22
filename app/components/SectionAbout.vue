<template>
  <section class="about">
    <div class="container about__container">
      <h2 class="about__title section-title">About</h2>
      <p class="about__title-text">Who we&nbsp;are and why we&nbsp;do&nbsp;what we&nbsp;do!</p>
      <p class="about__content">
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante&nbsp;a,
        gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque&nbsp;a. Nam
        ac&nbsp;<br />urna maximus, tempor magna&nbsp;et, placerat urna. Curabitur eu&nbsp;magna
        enim. Proin placerat tortor lacus, ac&nbsp;sodales lectus placerat quis.
      </p>
      <h3 class="about__subtitle">Top trends</h3>
      <picture>
        <source media="(max-width: 768px)" srcset="../assets/images/aboutMobile.webp" />
        <img class="about__image" src="../assets/images/about.webp" alt="" />
      </picture>
      <p class="about__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a&nbsp;<br />volutpat
        hendrerit, sapien tortor faucibus augue, a&nbsp;maximus elit ex&nbsp;vitae libero. Sed quis
        mauris eget arcu facilisis consequat sed eu&nbsp;felis.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about {
    &__container {
      width: 100%;
      width: 704px;
      padding: 0 16px;
      margin: 0 auto;
    }

    &__title {
      margin-bottom: 24px;
      text-align: center;

      @media (max-width: $breakpoint-m) {
        margin-bottom: 2px;
        font-size: 20px;
        line-height: 20px;
        text-align: left;
      }
    }

    &__title-text {
      margin-bottom: 46px;
      text-align: center;

      @include text-style(20px, $black-color, 26px);

      @media (max-width: $breakpoint-m) {
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 22px;
        text-align: left;
      }
    }

    &__content {
      margin-bottom: 39px;
      letter-spacing: 0.9px;

      @include text-style(16px, $black-color, 27px);

      @media (max-width: $breakpoint-m) {
        display: -webkit-box;
        margin-bottom: 22px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        font-size: 12px;
        line-height: 20px;
        -webkit-box-orient: vertical;
      }
    }

    &__subtitle {
      margin-bottom: 23px;

      @include text-style(26px, $black-color, 35px);

      @media (max-width: $breakpoint-m) {
        margin-bottom: 13px;
        font-size: 16px;
        line-height: 27px;
      }
    }

    &__image {
      width: 670px;
      margin-bottom: 48px;
      border-radius: 8px;

      @media (max-width: $breakpoint-m) {
        width: 288px;
        height: 200px;
        margin-bottom: 16px;
      }
    }
  }
</style>
