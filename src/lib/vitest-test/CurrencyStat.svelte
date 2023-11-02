<script lang="ts">
	import { formatCurrency } from './formatCurrency';

	export let value: number;
</script>

<div>
	<p class="text-3xl p-24">
    <!-- this should fail -->
		<!-- {value} -->

    <!-- this should work -->
		{formatCurrency(value)}
	</p>
</div>

<style>
</style>
