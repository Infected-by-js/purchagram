<template>
  <div class="container nav-mobile">
    <router-link :to="{name: 'home'}" class="nav-mobile__logo logo">
      <svg
        width="30"
        height="40"
        viewBox="0 0 30 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.9343 3.6C22.2122 1.2 18.4557 0 13.6648 0H0V2.62857H13.6648C17.6935 2.62857 20.7967 3.6 22.9744 5.48572C25.0976 7.37143 26.1864 10.0571 26.1864 13.4857C26.1864 16.9714 25.0976 19.6571 22.9744 21.4857C20.7967 23.3714 17.6935 24.2857 13.6648 24.2857H0V40H2.77652V26.9143H13.6648C18.4557 26.9143 22.2122 25.7714 24.9343 23.3714C27.6564 20.9714 29.0174 17.7143 29.0174 13.4857C29.0174 9.31429 27.6564 6 24.9343 3.6V3.6Z"
          fill="#B70000"
        />
      </svg>
    </router-link>

    <nav>
      <input type="checkbox" v-model="isMenuOpen" id="burger-btn" class="burger-btn" />
      <label for="burger-btn" class="burger-icon"></label>

      <div class="menu" v-if="isMenuOpen">
        <div class="menu__section">
          <ul class="menu__list">
            <li class="menu__item">@tlawait<icon-user /></li>
            <li class="menu__item">Настройки<icon-settings /></li>
            <li class="menu__item">Уведомления<icon-notifications /></li>
            <li class="menu__item">Новая операция<icon-add /></li>
          </ul>
        </div>
        <div class="menu__section">
          <ul class="menu__list">
            <li class="menu__item">Главная <icon-overview /></li>
            <li class="menu__item">Кошелек <icon-pocket /></li>
            <li class="menu__item">Календарь <icon-calendar /></li>
            <li class="menu__item">Аналитика <icon-stats /></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PNavMobile',
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
