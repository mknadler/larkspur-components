<script>
	import anime from 'animejs';
	import { onMount } from 'svelte';
	// randomly trace from left to right

	export let magnitude;
	export let numPoints;
	export let duration;

	if (numPoints < 2) {
		numPoints = 2;
	}

	if (!Number.isInteger(numPoints)) {
		numPoints = Math.floor(numPoints);
	}

	let height = magnitude * 2;

	let el;
	let pathEl;

	// Make this reactive to the link width
	let width;

	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function dAttributeFrom2dPathArray(arr) {
		return arr.map(direction => {
			return direction.join(' ')
		}).join(' ');
	}
	//pointY += getRandomIntInclusive(-10, 10);

	function generateRandomPathParts(oldParts) {
		let newParts = oldParts.map((directionArray, index) => {
			if (index === 0 || index === directionArray.length - 1) {
				return directionArray;
			}
			return directionArray.map((direction, index) => {
				if (index !== 2) { return direction; }
				return direction += getRandomIntInclusive(magnitude * -1, magnitude);
			})
		})
		return newParts;
	}

	let linkParts = [
		['M', '0', `${height/2}`]
	];


	/*
		$: linkPath = dAttributeFrom2dPathArray(linkParts);
		$: linkPartsMoved = generateRandomPathParts(linkParts);
		$: linkPathMoved = dAttributeFrom2dPathArray(linkPartsMoved);
	*/
	let animation;


	onMount(() => {
		width = el.clientWidth;
			let segmentWidth = width / (numPoints - 1);
			
		for (let i = 1; i < numPoints; i++) {
			let pointX = segmentWidth * i;
			let pointY = height/2;
			linkParts.push([
				'L', 
				pointX, 
				pointY
			]);
		}


		let linkPath = dAttributeFrom2dPathArray(linkParts);
		let linkPartsMoved = generateRandomPathParts(linkParts);
		let linkPathMoved = dAttributeFrom2dPathArray(linkPartsMoved);

		pathEl.setAttribute('d', linkPathMoved)


		animation = anime({
		  targets: [pathEl],
		  d: [
			{ value: linkPathMoved },
			{ value: dAttributeFrom2dPathArray(generateRandomPathParts(linkParts)) },
			{ value: dAttributeFrom2dPathArray(generateRandomPathParts(linkParts)) },
			{ value: dAttributeFrom2dPathArray(generateRandomPathParts(linkParts)) },
			{ value: dAttributeFrom2dPathArray(generateRandomPathParts(linkParts)) },
			{ value: dAttributeFrom2dPathArray(generateRandomPathParts(linkParts)) },
		  ],
		  easing: 'linear',
		  autoplay: false,
		  loop: true,
		  direction: 'alternate',
		  duration: duration
		});
	})

	function handleMouseenter(e) {
		animation.play();
	}

	function handleMouseleave(e) {
		animation.pause();
	}

	$: containerOffset = `height: ${height}px; transform: translateY(${height/2}px`

</script>

<span class="lark-gridlink" on:mouseenter={handleMouseenter} on:mouseleave={handleMouseleave} bind:this={el}>
	<slot class="lark-gridlink__link" name="link" />
	<div class="lark-gridlink__container" style={containerOffset}>
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
			height="{height}"
			width="{width}"
			fill="none"
		>
			<path bind:this={pathEl}></path>
		</svg>
	</div>
</span>

<style>
	@import '../larkspur.css';

	svg {
		width: auto;
	}

	path {
		stroke: var(--color-medpink);
	}

	.lark-gridlink__container {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
	
	.lark-gridlink {
		position: relative;
		width: auto;
		display: inline-block;
	}

	.lark-gridlink:hover {
		cursor: pointer;
	}

	.lark-gridlink :global(> a) {
		color: var(--color-text);
		text-decoration: none;
		font-size: 24px;
		font-weight: 100;
		font-family: var(--font-space-grotesk);
	}

	.lark-gridlink :global(> a:hover) {
		color: var(--color-medpink);
	}

	.lark-gridlink svg {
		position: absolute;
		top: 0;
		left: 0;
	}
</style>