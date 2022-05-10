<template>
  <header class="header">
    <div class="container header__container">
      <router-link :to="{name: 'home'}" class="header__logo">
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

      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link
              :to="{name: 'home'}"
              class="nav__link"
              exact-active-class="nav__link_active"
            >
              <icon-overview />
            </router-link>
          </li>
          <li class="nav__item">
            <router-link :to="{name: 'pocket'}" class="nav__link" active-class="nav__link_active">
              <icon-pocket />
            </router-link>
          </li>
          <li class="nav__item">
            <router-link :to="{name: 'calendar'}" class="nav__link" active-class="nav__link_active">
              <icon-calendar />
            </router-link>
          </li>
          <li class="nav__item">
            <router-link :to="{name: 'stats'}" class="nav__link" active-class="nav__link_active">
              <icon-stats />
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="header__settings settings">
        <ul class="settings__list">
          <li class="settings__item">
            <button class="settings__btn btn__add">
              <icon-add />
            </button>
          </li>
          <li class="settings__item">
            <button class="settings__btn btn__notifications">
              <icon-notifications />
            </button>
          </li>
          <li class="settings__item">
            <button class="settings__btn btn__settings">
              <icon-settings />
            </button>
          </li>
          <li class="settings__item">
            <button class="settings__btn btn__avatar">
              <img src="../assets/img/avatar.png" alt="avatar" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PHeader',
};
</script>
