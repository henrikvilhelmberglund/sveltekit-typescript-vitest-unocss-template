import { render } from '@testing-library/svelte';
import CurrencyStat from './CurrencyStat.svelte';

it('displays the gives value formatted as currency', () => {
	const { getByText } = render(CurrencyStat, { value: 123 });

	expect(getByText('$123')).toBeInTheDocument();
});
