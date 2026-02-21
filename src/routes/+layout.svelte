<script>
	import '../index.css';
	import { onMount, onDestroy } from 'svelte';
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	/** @type {HTMLCanvasElement | undefined} */
	let globeCanvas;
	/** @type {number | undefined} */
	let globeAnimationId;
	const GLOBE_SIZE = 180;
	const PERSPECTIVE = 2.4; // camera distance (unit sphere)
	const R = 1; // unit sphere

	/** @param {number} x @param {number} y @param {number} z @param {number} rotY */
	function project(x, y, z, rotY) {
		const cos = Math.cos(rotY);
		const sin = Math.sin(rotY);
		const xr = x * cos - z * sin;
		const zr = x * sin + z * cos;
		const d = PERSPECTIVE;
		const k = (GLOBE_SIZE / 2) * (d - 1) / (d + zr);
		const sx = GLOBE_SIZE / 2 + xr * k;
		const sy = GLOBE_SIZE / 2 - y * k;
		return { sx, sy, z: zr };
	}

	/** @param {CanvasRenderingContext2D} ctx @param {number} t */
	function drawGlobe(ctx, t) {
		const rotY = t * 0.00035;

		ctx.clearRect(0, 0, GLOBE_SIZE, GLOBE_SIZE);

		const latSteps = 9;
		const lonSteps = 12;
		const strokeColor = 'rgba(51, 255, 178, 0.9)';

		// Latitude rings (parallels) - unit sphere
		for (let i = 1; i < latSteps; i++) {
			const phi = (Math.PI * i) / latSteps;
			const r = Math.sin(phi);
			const y = Math.cos(phi);
			ctx.beginPath();
			let first = true;
			for (let j = 0; j <= lonSteps; j++) {
				const theta = (2 * Math.PI * j) / lonSteps;
				const x = r * Math.cos(theta);
				const z = r * Math.sin(theta);
				const { sx, sy, z: zr } = project(x, y, z, rotY);
				if (first) { ctx.moveTo(sx, sy); first = false; }
				else ctx.lineTo(sx, sy);
			}
			ctx.strokeStyle = strokeColor;
			ctx.lineWidth = 1;
			ctx.stroke();
		}

		// Longitude arcs (meridians)
		for (let j = 0; j < lonSteps; j++) {
			const theta = (2 * Math.PI * j) / lonSteps;
			ctx.beginPath();
			let first = true;
			for (let i = 0; i <= latSteps; i++) {
				const phi = (Math.PI * i) / latSteps;
				const r = Math.sin(phi);
				const y = Math.cos(phi);
				const x = r * Math.cos(theta);
				const z = r * Math.sin(theta);
				const { sx, sy, z: zr } = project(x, y, z, rotY);
				if (first) { ctx.moveTo(sx, sy); first = false; }
				else ctx.lineTo(sx, sy);
			}
			ctx.strokeStyle = strokeColor;
			ctx.lineWidth = 1;
			ctx.stroke();
		}
	}

	/** @param {number} t */
	function tick(t) {
		if (!globeCanvas) return;
		const ctx = globeCanvas.getContext('2d');
		if (!ctx) return;
		drawGlobe(ctx, t);
		globeAnimationId = requestAnimationFrame(tick);
	}

	onMount(() => {
		if (globeCanvas) {
			globeCanvas.width = GLOBE_SIZE;
			globeCanvas.height = GLOBE_SIZE;
			globeAnimationId = requestAnimationFrame(tick);
		}
	});

	onDestroy(() => {
		if (globeAnimationId) cancelAnimationFrame(globeAnimationId);
	});

	/** @type {{ name: string; expanded?: boolean; file?: boolean; selected?: boolean; children?: { name: string; expanded?: boolean; file?: boolean; selected?: boolean; children?: unknown[] }[] }[]} */
	const fileTree = [
		{ name: 'src/lib', expanded: true, children: [
			{ name: 'components', expanded: false, children: [] },
			{ name: 'VueLamellie', file: true, selected: true }
		]},
		{ name: 'src/klb', expanded: false, children: [] },
		{ name: 'src/dab', expanded: false, children: [] },
		{ name: 'src/routes', expanded: true, children: [
			{ name: '+layout.svelte', file: true },
			{ name: '+page.svelte', file: true }
		]},
		{ name: 'src/data', expanded: false, children: [] },
		{ name: 'src/uis', expanded: false, children: [] },
		{ name: 'hacks', expanded: false, children: [] }
	];

	const palette = ['#0A1C19', '#33FFB2', '#66FFB2', '#144F18', '#00FF00'];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
</svelte:head>

<div class="dashboard">
	<header class="header">
		<div class="logo">finkegabriel</div>
		<nav class="nav-links">
			<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			<a href="/blog">Blog</a>
			<a href="/tools">Tools</a>
		</nav>
		<div class="header-right">
			<span class="hackstation"></span>
      
		</div>
	</header>

	<div class="body">
		<main class="main">
			<div class="content-panel">
				<div class="content-inner">
					{@render children()}
				</div>
			</div>
			<div class="widgets">
				<div class="widget globe-widget">
					<div class="globe-placeholder" aria-hidden="true">
						<canvas
							bind:this={globeCanvas}
							class="globe-canvas"
							width={GLOBE_SIZE}
							height={GLOBE_SIZE}
						></canvas>
					</div>
				</div>
				<div class="widget data-widget">
					<div class="widget-title">Data Series</div>
					<div class="widget-body">
						<p class="muted">Core datasets &amp; pipelines</p>
						<div class="skull-icon" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
								<path d="M12 2C7 2 4 6 4 10c0 2 1 4 2 5v2h12v-2c1-1 2-3 2-5 0-4-3-8-8-8z"/>
								<circle cx="9" cy="10" r="1.5" fill="currentColor"/>
								<circle cx="15" cy="10" r="1.5" fill="currentColor"/>
								<path d="M8 15h8M9 18h6"/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>

	<footer class="footer">

	</footer>
</div>

<style>
	.dashboard {
		--bg-dark: #0A1C19;
		--accent-cyan: #33FFB2;
		--accent-cyan-light: #66FFB2;
		--green-dark: #144F18;
		--neon: #00FF00;
		--text: #e0e0e0;
		--text-muted: rgba(255, 255, 255, 0.5);
		--glass: rgba(10, 28, 25, 0.85);
		font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
		min-height: 100vh;
		background: var(--bg-dark);
		background-image:
			linear-gradient(rgba(0, 255, 0, 0.03) 1px, transparent 1px),
			linear-gradient(90deg, rgba(0, 255, 0, 0.03) 1px, transparent 1px);
		background-size: 24px 24px;
		color: var(--text);
		display: flex;
		flex-direction: column;
	}

	/* Header */
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.6rem 1.25rem;
		background: var(--glass);
		border-bottom: 1px solid rgba(51, 255, 178, 0.2);
		backdrop-filter: blur(8px);
	}
	.logo {
		font-weight: 600;
		color: var(--accent-cyan);
		text-shadow: 0 0 12px rgba(51, 255, 178, 0.5);
		letter-spacing: 0.05em;
	}
	.nav-links {
		display: flex;
		gap: 1.5rem;
	}
	.nav-links a {
		color: var(--text);
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s, text-shadow 0.2s;
	}
	.nav-links a:hover,
	.nav-links a.active {
		color: var(--neon);
		text-shadow: 0 0 8px rgba(0, 255, 0, 0.4);
	}
	.header-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.hackstation {
		color: var(--accent-cyan);
		font-size: 0.85rem;
		opacity: 0.9;
	}
	.window-controls {
		display: flex;
		gap: 6px;
	}
	.win-btn {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--green-dark);
	}
	.win-btn.close { background: #4a1a1a; }

	/* Body: sidebar + main */
	.body {
		display: flex;
		flex: 1;
		min-height: 0;
	}
	.sidebar {
		width: 240px;
		flex-shrink: 0;
		background: rgba(10, 28, 25, 0.6);
		border-right: 1px solid rgba(51, 255, 178, 0.15);
		padding: 0.75rem 0;
		overflow-y: auto;
	}
	.sidebar-title {
		font-size: 0.75rem;
		padding: 0 1rem 0.5rem;
		color: var(--text-muted);
	}
	.sidebar-title .muted { opacity: 0.7; }
	.file-tree {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.file-tree .tree-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.4rem 1rem;
		background: none;
		border: none;
		color: var(--text);
		font-family: inherit;
		font-size: 0.8rem;
		text-align: left;
		cursor: pointer;
		transition: background 0.15s, color 0.15s;
	}
	.tree-item:hover {
		background: rgba(51, 255, 178, 0.08);
		color: var(--accent-cyan);
	}
	.tree-item.selected {
		background: var(--neon);
		color: var(--bg-dark);
		text-shadow: none;
	}
	.tree-item .icon { font-size: 0.7rem; opacity: 0.9; }
	.tree-children {
		list-style: none;
		margin: 0;
		padding: 0 0 0 1rem;
		border-left: 1px solid rgba(51, 255, 178, 0.2);
		margin-left: 0.75rem;
	}
	.tree-children .tree-item { padding-left: 0.75rem; }

	/* Main */
	.main {
		flex: 1;
		display: flex;
		min-width: 0;
		padding: 1rem;
		gap: 1rem;
	}
	.content-panel {
		flex: 1;
		min-width: 0;
		background: rgba(10, 28, 25, 0.7);
		border: 1px solid rgba(51, 255, 178, 0.2);
		border-radius: 6px;
		overflow: auto;
		box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
	}
	.content-inner {
		padding: 1.25rem;
		min-height: 100%;
	}
	.widgets {
		width: 220px;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.widget {
		background: rgba(10, 28, 25, 0.8);
		border: 1px solid rgba(51, 255, 178, 0.2);
		border-radius: 6px;
		overflow: hidden;
	}
	.widget-title {
		font-size: 0.75rem;
		padding: 0.5rem 0.75rem;
		border-bottom: 1px solid rgba(51, 255, 178, 0.15);
		color: var(--accent-cyan);
	}
	.widget-body {
		padding: 0.75rem;
		font-size: 0.8rem;
		color: var(--text-muted);
	}
	.globe-placeholder {
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--accent-cyan);
		opacity: 0.9;
	}
	.globe-canvas {
		width: 100%;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 0 6px rgba(51, 255, 178, 0.35));
	}
	.skull-icon {
		margin-top: 0.5rem;
		color: var(--neon);
		opacity: 0.8;
		filter: drop-shadow(0 0 6px rgba(0, 255, 0, 0.4));
	}
	.skull-icon svg { width: 48px; height: 48px; }
	.muted { color: var(--text-muted); font-size: 0.75rem; }

	/* Footer */
	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1.25rem;
		background: rgba(10, 28, 25, 0.9);
		border-top: 1px solid rgba(51, 255, 178, 0.15);
		font-size: 0.75rem;
		color: var(--text-muted);
	}
	.palette {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
	.swatch {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 4px;
		border: 1px solid rgba(255,255,255,0.2);
		font-size: 0.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: transparent;
		overflow: hidden;
		text-indent: -999px;
	}
	.tech-stack { letter-spacing: 0.03em; }

	@media (max-width: 768px) {
		.body { flex-direction: column; }
		.sidebar { width: 100%; max-height: 160px; }
		.main { flex-direction: column; }
		.widgets { width: 100%; flex-direction: row; flex-wrap: wrap; }
		.widget { flex: 1; min-width: 160px; }
	}
</style>
