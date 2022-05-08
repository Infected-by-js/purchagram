<template>
	<div class="filter table__filter">
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
			<span class="sort-button__icon"> </span>
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
	</div>
</template>

<script>
export default {
	name: 'PFilter',
};
</script>
