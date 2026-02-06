<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	import Navbar from '$lib/navbar.svelte';

	import style from '$lib/style.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href={style} />
</svelte:head>


<Navbar />
{@render children()}
