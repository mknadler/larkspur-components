<script>
	export let checkboxLabel = '';
	export let checked = false;
</script>

<label class="lark-checkbox" hasChecked={checked}>
	<input type="checkbox" bind:checked={checked} />
	{checkboxLabel}
</label>

<style>
	@import '../larkspur.css';

	.lark-checkbox {
		font-family: var(--lark-font-mono);
		color: var(--lark-color-text);
		font-size: 1rem;
		display: grid;
		grid-template-columns: 1em auto;
		grid-gap: 1rem;
		margin-bottom: 1rem;
		line-height: 1.25;
		padding: .25rem;
	}

	.lark-checkbox:last-child {
		margin-bottom: 0;
	}

	.lark-checkbox:hover,
	.lark-checkbox input:hover {
		cursor: pointer;
		text-decoration: underline;
		text-decoration-color: var(--lark-color-accents)
	}

	.lark-checkbox [type="checkbox"] {
		-webkit-appearance: none;
		appearance: none;
		font-size: inherit;
		margin: 0;
		padding: 0;
		width: 1.25em;
		height: 1.25em;
		display: grid;
		place-content: center;
		border: 1px solid var(--lark-color-accents);
	}

	.lark-checkbox [type="checkbox"]::before {
		content: '';
		width: 1.25em;
		height: 1.25em;
		background: var(--lark-color-accents);
		transform: scale(0);
		transition: transform 200ms ease-out;
	}

	.lark-checkbox [type="checkbox"]:checked::before {
		transform: scale(.75);
	}

	.lark-checkbox:hover [type="checkbox"]::before,
	.lark-checkbox [type="checkbox"]:hover::before {
		filter: brightness(1.25);
		transform: scale(.25);
	}

	.lark-checkbox[hasChecked="true"]:hover input:checked::before,
	.lark-checkbox input:checked:hover::before {
		transform: scale(.65);
	}

	.lark-checkbox input:focus {
		outline: 1px solid var(--lark-color-outline);
	}
</style>