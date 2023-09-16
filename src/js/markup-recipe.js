/** @format */

import { fetchGetId } from './fetch-api';

export async function markupRecipe(id) {
	const recipeData = await fetchGetId(id);
	const { title, instructions, thumb, youtube, time, tags, ingredients, rating } = recipeData;
	const index = youtube.indexOf('?v=');
	let youtubeLink = null;
	if (index !== -1) {
		youtubeLink = youtube.substring(index);
	}

	const tagsRecipe = tags
		? tags.map(item => `<li class="recipe-tag">#${item}</li>`).join('')
		: null;
	const ingredientsRecipe = ingredients
		? ingredients
				.map(
					item => `<ul class="recipe-ingradient">
                        <li class="recipe-ingradient-text">${item.name}</li>
				        <li class="recipe-ingradient-text">${item.measure}</li>
                      </ul>`
				)
				.join('')
		: null;
	const modWindow = `
    <div class="recipe-adv">
		<svg class="recipe-close">
			<use href="../img/icon/icon.svg#icon-close"></use>
		</svg>
		<h2 class="recipe-adv-name">${title}</h2>
		<div
			class="recipe-adv-img"			
		>
		<svg class="recipe-youtube">
			<use href="../img/icon/icon.svg#icon-close"></use>
		</svg>
		<img class="recipe-adv-img" src =${thumb} alt='${title}'/>
		</div>
		<div class="recipe-block">
			<ul class="recipe-tags">
				${tagsRecipe}
			</ul>
			<div class="recipe-adv-item-rating">
				<span class="recipe-adv-item-rating-num">${rating}</span>
				<ul class="recipe-item-rating-stars">
					<li class="recipe-item-rating-star">
						<svg class="stars-full">
							<use href="../img/icon/icon.svg#icon-star"></use>
						</svg>
					</li>
					<li class="recipe-item-rating-star">
						<svg class="stars-full">
							<use href="../img/icon/icon.svg#icon-star"></use>
						</svg>
					</li>
					<li class="recipe-item-rating-star">
						<svg class="stars-full">
							<use href="../img/icon/icon.svg#icon-star"></use>
						</svg>
					</li>
					<li class="recipe-item-rating-star">
						<svg class="stars-full">
							<use href="../img/icon/icon.svg#icon-star"></use>
						</svg>
					</li>
					<li class="recipe-item-rating-star">
						<svg class="stars-full">
							<use href="../img/icon/icon.svg#icon-star"></use>
						</svg>
					</li>
				</ul>
				<span class="recipe-adv-item-time">${time} min</span>
			</div>
		</div>
		<div class="recipe-ingradient-block">
			${ingredientsRecipe}
		</div>
		<p class="recipe-text">
			${instructions}
		</p>
		<div class="recipe-button">
			<button class="main-button recipe-button-el" type="{button}">
				Add to favorite
			</button>
			<button class="main-button recipe-button-el" type="{button}">
				Give a rating
			</button>
		</div>
	</div>
    `;
	return modWindow;
}

// {
// 	<iframe
// 		class='recipe-adv-img'
// 		src='https://www.youtube.com/embed/${youtubeLink}'
// 		frameborder='0'
// 		allowfullscreen
// 	></iframe>;
// }