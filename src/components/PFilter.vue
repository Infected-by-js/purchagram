<template>
  <div class="filter table__filter">
    <div class="search filter__search">
      <label class="search__label">
        <icon-search />
      </label>
      <input type="text" class="search__input" placeholder="Поиск по описанию" />
    </div>

    <button class="filter-button filter__username">
      <span class="filter-button__icon"><icon-user /> </span>
      <span class="filter-button__arrow"><icon-arrow /></span>
    </button>

    <button class="filter-button filter__type">
      <span class="filter-button__icon"><icon-analitics /> </span>
      <span class="filter-button__arrow"><icon-arrow /></span>
    </button>

    <button class="filter-button filter__date">
      <span class="filter-button__icon"><icon-calendar /></span>
      <span class="filter-button__arrow"><icon-arrow /></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PFilter',
};
</script>
