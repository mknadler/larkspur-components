<script>
	import Checkbox from '$lib/components/Checkbox.svelte'
	import RadioGroup from '$lib/components/RadioGroup.svelte'
	import GridLink from '$lib/components/GridLink.svelte'
	import Logo from './logo.svelte'

	let veryHackyWayToUseThisStringUntilIInstallAMarkdownThingy = `import { Checkbox } from 'larkspur';`

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
	<h2>Installation</h2>
	installation notes go here in the future. if you're seeing this for some reason: https://www.npmjs.com/package/larkspur-components is the package. then, in a .svelte file, `{veryHackyWayToUseThisStringUntilIInstallAMarkdownThingy}`
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

<section>
	<h2>Grid link</h2>
	<GridLink magnitude={2} numPoints={20} duration={3000}>
		<a slot="link" href="#">This is a link</a>
	</GridLink>
	<GridLink magnitude={10} numPoints={30} duration={5000}>
		<a slot="link" href="#">This is a different link</a>
	</GridLink>
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