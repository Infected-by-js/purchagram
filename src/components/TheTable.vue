<template>
  <div class="main">
    <div class="filter main__filter">
      <div class="search filter__search">
        <label class="search__label">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5.66667" cy="5.66667" r="4.66667" stroke="#98A0AD" stroke-width="1.5" />
            <path
              d="M13 13L9 9"
              stroke="#98A0AD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </label>
        <input type="text" class="search__input" placeholder="Поиск по описанию" />
      </div>
      <button class="sort-button filter__username">
        <span class="sort-button__icon"></span>
        <p class="sort-button__text">Пользователь</p>
        <span class="sort-button__arrow">arrow</span>
      </button>
      <button class="sort-button filter__type">
        <span class="sort-button__icon"></span>
        <p class="sort-button__text">Вид Операции</p>
        <span class="sort-button__arrow">arrow</span>
      </button>
      <button class="sort-button filter__date">
        <span class="sort-button__icon"></span>
        <p class="sort-button__text">Дата операции</p>
        <span class="sort-button__arrow">arrow</span>
      </button>
      <button class="sort-button filter__new-transaction">
        <span class="sort-button__icon"></span>
        <p class="sort-button__text">Новая операция</p>
      </button>
    </div>
    <div class="table">
      <div class="table__header">
        <div class="table__row">
          <div class="table__cell table__cell-check">
            <input type="checkbox" />
          </div>
          <div class="table__cell table__cell-id">ID</div>
          <div class="table__cell table__cell-username">Пользователь</div>
          <div class="table__cell table__cell-type">Вид операции</div>
          <div class="table__cell table__cell-date">Дата операции</div>
          <div class="table__cell table__cell-sum">Сумма</div>
          <div class="table__cell table__cell-description">Описание</div>
          <div class="table__cell table__cell-attachment">
            <icon-attachment />
          </div>
        </div>
      </div>

      <div class="table__body">
        <div class="table__row">
          <div class="table__cell table__cell-check">
            <input type="checkbox" />
          </div>
          <div class="table__cell table__cell-id">18026ff3b90</div>
          <div class="table__cell table__cell-username">@tlawait</div>
          <div class="table__cell table__cell-type"><span class="icon-deposit"></span>Снятие</div>
          <div class="table__cell table__cell-date"><b>11 апреля 2022</b> 3 д. назад</div>
          <div class="table__cell table__cell-sum">1 000 ₽</div>
          <div class="table__cell table__cell-description">Оплата за интернет Yota</div>
          <div class="table__cell table__cell-attachment">
            <icon-attachment />
            1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconAttachment from '@/assets/icons/attachment.svg?inline';

export default {
  name: 'TheTable',

  components: {
    IconAttachment,
  },
};
</script>
