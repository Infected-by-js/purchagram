<template>
  <div class="table__content">
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
          <span> <icon-attachment /></span>
          1
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {IconAttachment} from '@/components/icons';

export default {
  name: 'TheTable',

  components: {
    IconAttachment,
  },
};
</script>
