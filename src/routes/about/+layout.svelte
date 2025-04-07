<script lang="ts">
	import '../../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>About | Savory Roots</title>
</svelte:head>

{@render children()}
