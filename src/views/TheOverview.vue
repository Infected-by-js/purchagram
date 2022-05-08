<template>
  <div class="wrapper">
    <p-header />
  </div>
  <!-- <div class="content content__header">
      <h1 class="content__title">Последние операции</h1>
    </div>
    <div class="content content__body">
      <div class="table">
        <p-filter />

        <p-table />
      </div>
      <p-chosen-sum />
    </div> -->
</template>

<script>
import PHeader from '@/components/PHeader.vue';
// import PTable from '@/components/PTable.vue';
// import PFilter from '@/components/PFilter.vue';
// import PChosenSum from '@/components/PChosenSum.vue';

export default {
  name: 'TheOverview',
  components: {
    PHeader,
    // PTable,
    // PFilter,
    // PChosenSum,
  },
};
</script>

<style>
.wrapper {
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
}

.container {
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1376px;
}
</style>
