<template>
  <div class="container">
    <the-header />
    <div class="content content__header">
      <h1 class="content__title">Последние операции</h1>
    </div>
    <div class="content content__body">
      <div class="table">
        <p-filter />

        <p-table />
      </div>
      <p-chosen-sum />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import PTable from '@/components/PTable.vue';
import PFilter from '@/components/PFilter.vue';
import PChosenSum from '@/components/PChosenSum.vue';

export default {
  name: 'TheOverview',
  components: {
    TheHeader,
    PTable,
    PFilter,
    PChosenSum,
  },
};
</script>

<style scoped>
.content__body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
