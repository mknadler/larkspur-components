<script>
	import Checkbox from '$lib/components/Checkbox.svelte'
	import RadioGroup from '$lib/components/RadioGroup.svelte'
	import Logo from './logo.svelte'

	let checkboxBound = 'true';
	let radiogroupBound;
</script>
<header>
	<Logo></Logo>
	<h1>Larkspur</h1>
</header>

<section class="about">
	<p>Larkspur is a component library / design system I am making for my own purposes.</p>
	<p>I am making this because it is a commonly known best practice for web developers to make their own UI libraries instead of using someone else's.</p>
	<p>This is in, like, pre-pre-pre-release and not ready for public consumption. Come back later :)</p>
</section>

<section class="usage">
```npm install whatever```
</section>

<section>
	<h2>Checkbox</h2>
	<Checkbox checkboxLabel="Test" bind:checked={checkboxBound}></Checkbox>
	Bound data: {checkboxBound}
</section>

<section>
	<h2>Radio group</h2>
	<RadioGroup groupLabel="Select blah" radioList={[
		{label: 'Thing 1', value: 'thing1'},
		{label: 'Thing 2', value: 'thing2'},
		{label: 'Thing 3', value: 'thing3'}
	]} bind:selectedRadio={radiogroupBound}></RadioGroup>

	Reactive data: {radiogroupBound}
</section>




<style lang="scss">

	:global(body) {
		background: var(--color-background);
		color: var(--color-text);
		font-family: "Space Grotesk";
		padding: 0;
		margin: 0;
	}

	img {
		width: 200px;
	}

	header {
		background: var(--color-lightgray);
		width: 100%;
		height: 8rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-left: 2rem;
	}

	header h1 {
		color: var(--color-darkpurp);
	}

	section {
		margin: 3rem;
		padding: 1rem;
		border: 1px dotted var(--color-accents);
	}

	section.about p {
		font-size: 1.5rem;
	}

	section p {
		margin: 1rem 0;
		font-size: 1rem;
		line-height: 1.5;
	}

	section :first-child {
		margin-top: 0;
	}

	section :last-child {
		margin-bottom: 0;
	}
</style>