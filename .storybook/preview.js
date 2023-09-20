/** @type { import('@storybook/svelte').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		},
		backgrounds: {
			default: 'larkspur-dark',
				values: [
					{
						name: 'larkspur-dark',
						value: '#110026'
					}
				]
		}
	}
};

export default preview;
