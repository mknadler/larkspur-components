<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Checkbox from '$lib/components/Checkbox.svelte'
</script>

<Meta
	title="Larkspur/Checkbox"
	component={Checkbox}
	argType={{
		checkboxLabel: { control: 'text' }
	}}
/>

<Template let:args>
	<Checkbox {...args} />
</Template>

<Story
	name="Default"
	args={{
		checkboxLabel: 'Checkbox'
	}}
/>