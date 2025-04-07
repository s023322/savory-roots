<script lang="ts">
	import '../../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Reservation | Savory Roots</title>
</svelte:head>

{@render children()}
