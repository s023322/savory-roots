<script lang="ts">
	import '../../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Work Log | Savory Roots</title>
</svelte:head>

{@render children()}
