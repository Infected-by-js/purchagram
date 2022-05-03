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
								<circle
									cx="5.66667"
									cy="5.66667"
									r="4.66667"
									stroke="#98A0AD"
									stroke-width="1.5"
								/>
								<path
									d="M13 13L9 9"
									stroke="#98A0AD"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</label>
						<input
							type="text"
							class="search__input"
							placeholder="Поиск по описанию"
						/>
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
			</div>

			<the-table />
		</div>
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheTable from '@/components/TheTable.vue';

export default {
	name: 'TheOverview',
	components: {
		TheHeader,
		TheTable,
	},
};
</script>
