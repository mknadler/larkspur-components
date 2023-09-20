<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import RadioGroup from '$lib/components/RadioGroup.svelte'
</script>

<Meta
	title="Larkspur/RadioGroup"
	component={RadioGroup}
	argType={{
		groupLabel: { control: 'text' },
		name: { control: 'text' },
		radioList: { control: 'array' }

	}}
/>

<Template let:args>
	<RadioGroup {...args} />
</Template>

<Story
	name="Default"
	args={{
		groupLabel: 'Pick one',
		name: 'picker-name',
		radioList: [
			{label: 'Thing 1', value: 'thing1'},
			{label: 'Thing 2', value: 'thing1'},
			{label: 'Thing 3', value: 'thing1'}
		]
	}}
/>