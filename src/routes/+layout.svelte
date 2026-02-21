<nav>
  <div class="logo"><img alt="code" class="logo" src={Code}/>
</div>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/map_space">MapSpace</a></li>
  </ul>
</nav>

<style>
	nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: gray;
    color: white;
  }
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .logo{
	height: 5vh;
  }
</style>

<script>
	import favicon from '$lib/assets/favicon.svg';
	import Code from '../img/code.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
