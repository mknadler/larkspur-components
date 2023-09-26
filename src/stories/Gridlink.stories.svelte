<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import Gridlink from '$lib/components/Gridlink.svelte'
</script>

<Meta
	title="Larkspur/Gridlink"
	component={Gridlink}
	argType={{
		magnitude: { control: 'number' },
		numPoints: { control: 'number' },
		duration: { control: 'number' }
	}}
/>

<Template let:args>
	<Gridlink {...args}>
		<a href="#" slot="link">A link</a>
	</Gridlink>
</Template>

<Story
	name="Default"
	args={{
		magnitude: 4,
		numPoints: 15,
		duration: 3000
	}}
/>