<template>
  <div class="container">
    <the-header />
    <div class="content content__header">
      <h1 class="content__title">Последние операции</h1>
      <div class="sort-date content__sort-date">
        <button class="sort-date__button active">На этой неделе</button>
        <button class="sort-date__button">На прошлой неделе</button>
        <button class="sort-date__picker">Дата <span>arrow</span></button>
      </div>
    </div>
    <div class="content content__body">
      <div class="sum-block__container sum-block">
        <h3 class="sum-block__title">Сумма по выбранным операциям:</h3>
        <div class="sum-section sum-block__section">
          <p class="sum-section__title">Пополнения</p>
          <p class="sum-section__amount">0</p>
        </div>
        <div class="sum-section sum-block__section">
          <p class="sum-section__title">Снятия</p>
          <p class="sum-section__amount">1 000</p>
        </div>
      </div>

      <the-table />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheTable from "@/components/TheTable.vue";

export default {
  name: "TheOverview",
  components: {
    TheHeader,
    TheTable,
  },
};
</script>
