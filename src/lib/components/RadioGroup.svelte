<script>
	export let groupLabel = '';
	export let radioList = [];

	export let name = '';

	export let selectedRadio = radioList[0].value;

	function sluggify(string) {
		return string.trim().toLowerCase().replace(/\s+/g, '-')
	}
</script>


<fieldset class="lark-radiogroup">
	<legend>{groupLabel}</legend>
	{#each radioList as radio}
		<label class="lark-radiogroup__item" selected={selectedRadio === radio.value}>
			<input type="radio" 
				name={name}
				value={radio.value} 
				bind:group={selectedRadio} 
			/>
			{radio.label}
		</label>
	{/each}
</fieldset>


<style>
	@import '../larkspur.css';
	
	.lark-radiogroup {
		font-family: var(--font-space-mono);
		color: var(--color-lightgray);
		margin: 2rem 0;
		padding: 1rem;
		max-width: 20rem;
		font-family: var(--font-table);
		border-color: var(--color-accents);
		background: rgba(255, 255, 255, 0.05);
	}
	.lark-radiogroup legend {
		font-family: var(--font-space-grotesk);
	}

	.lark-radiogroup__item {
		font-size: 1rem;
		display: grid;
		grid-template-columns: 1em auto;
		grid-gap: 1rem;
		margin-bottom: 1rem;
		line-height: 1.25;
		padding: .25rem;
	}

	.lark-radiogroup__item:last-child {
		margin-bottom: 0;
	}

	.lark-radiogroup__item:hover,
	.lark-radiogroup__item input:hover {
		cursor: pointer;
		text-decoration: underline;
		text-decoration-color: var(--color-medpink)
	}

	.lark-radiogroup__item [type="radio"] {
		-webkit-appearance: none;
		appearance: none;
		background-color: var(--color-dark);
		font-size: inherit;
		margin: 0;
		padding: 0;
		width: 1.25em;
		height: 1.25em;
		border-radius: 50%;
		display: grid;
		place-content: center;
		border: 1px solid var(--color-accents);
	}

	.lark-radiogroup__item [type="radio"]::before {
		content: '';
		width: 1.25em;
		height: 1.25em;
		background: var(--color-accents);
		border-radius: 50%;
		transform: scale(0);
		transition: transform 200ms ease-out;
	}

	.lark-radiogroup__item [type="radio"]:checked::before {
		transform: scale(.75);
	}

	.lark-radiogroup__item:hover [type="radio"]::before,
	.lark-radiogroup__item [type="radio"]:hover::before {
		filter: brightness(1.25);
		transform: scale(.25);
	}

	.lark-radiogroup__item[selected="true"]:hover,
	.lark-radiogroup__item input:checked:hover {
		cursor: auto;
	}

	.lark-radiogroup__item[selected="true"]:hover input:checked::before,
	.lark-radiogroup__item input:checked:hover::before {
		transform: scale(.75);
	}

	.lark-radiogroup__item input:focus {
		outline: 1px solid var(--color-lightgray);
	}
</style>