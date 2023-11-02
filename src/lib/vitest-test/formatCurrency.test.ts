import { it, expect } from 'vitest';
import { formatCurrency } from './formatCurrency';

// to make sure Vitest works

it('adds $ before the given number', () => {
	const resultA = formatCurrency(1);

	expect(resultA).toBe('$1');

	const resultB = formatCurrency(42);

	expect(resultB).toBe('$42');
});
