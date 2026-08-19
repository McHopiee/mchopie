---
layout: post
title: CSA Studio
description: A small, focused workspace for the Computer Science A portfolio.
permalink: /personal/csa/portfolio
author: Hope Fune
categories: [CSA Portfolio]
---

<style>
	.csa-studio {
		--studio-bg: #0d0b12;
		--studio-panel: #15111d;
		--studio-panel-2: #1c1627;
		--studio-line: #31243e;
		--studio-text: #eee9f5;
		--studio-muted: #a79caf;
		--studio-purple: #8762a8;
		--studio-purple-soft: #bd9bdd;
		background: radial-gradient(circle at 85% 0%, #27183a 0, transparent 34rem), var(--studio-bg);
		border: 1px solid var(--studio-line);
		color: var(--studio-text);
		font-family: Georgia, 'Times New Roman', serif;
		margin: 0 -1rem;
		min-height: 60vh;
		overflow: hidden;
		padding: clamp(1.25rem, 4vw, 3.5rem);
	}

	.csa-studio a { color: inherit; text-decoration: none; }
	.studio-kicker { animation: studio-fade-up .5s both; color: var(--studio-purple-soft); font: 700 .72rem/1.2 monospace; letter-spacing: .16em; text-transform: uppercase; }
	.studio-title { animation: studio-fade-up .6s .1s both; font-size: clamp(2.3rem, 7vw, 5rem); letter-spacing: -.05em; line-height: .95; margin: .65rem 0 1rem; max-width: 8em; }
	.studio-intro { animation: studio-fade-up .6s .2s both; color: var(--studio-muted); font: 1rem/1.65 system-ui, sans-serif; margin: 0; max-width: 38rem; }
	.studio-top { align-items: end; display: flex; gap: 2rem; justify-content: space-between; margin-bottom: clamp(2rem, 7vw, 5rem); }
	.studio-orbit { animation: studio-spin 14s linear infinite; border: 1px solid var(--studio-purple); border-radius: 50%; height: 5.5rem; opacity: .75; position: relative; width: 5.5rem; }
	.studio-orbit::after { animation: studio-pulse 2.2s ease-in-out infinite; background: var(--studio-purple-soft); border-radius: 50%; content: ''; height: .55rem; position: absolute; right: .2rem; top: .9rem; width: .55rem; }
	.studio-section-label { animation: studio-fade-up .5s .25s both; color: var(--studio-muted); font: .75rem/1.2 monospace; letter-spacing: .12em; margin-bottom: .85rem; text-transform: uppercase; }
	.studio-weeks { display: grid; gap: 1.5rem; grid-template-columns: repeat(3, 1fr); }
	.studio-week { align-items: center; display: flex; flex-direction: column; gap: .35rem; padding: .5rem; text-align: center; transition: transform .25s ease; }
	.studio-week:hover { transform: translateY(-.35rem) scale(1.03); }
	.studio-week:hover .studio-folder-icon::before { transform: translateY(-.12rem) rotate(-4deg); }
	.studio-week:hover .studio-folder-icon::after { filter: brightness(1.12); transform: translateY(-.05rem); }
	.studio-week-number { color: var(--studio-purple-soft); font: .75rem monospace; transition: color .2s ease; }
	.studio-week:hover .studio-week-number { color: var(--studio-text); }
	.studio-folder-icon { flex-shrink: 0; height: 3.2rem; margin: .35rem 0 .5rem; position: relative; width: 4.2rem; }
	.studio-folder-icon::before { background: var(--studio-purple); border-radius: .3rem .3rem 0 0; content: ''; height: .55rem; left: 0; position: absolute; top: -.5rem; transition: transform .25s ease; width: 45%; }
	.studio-folder-icon::after { background: linear-gradient(160deg, var(--studio-purple-soft), var(--studio-purple)); border-radius: .2rem .5rem .5rem .5rem; content: ''; height: 100%; left: 0; position: absolute; top: 0; transition: transform .25s ease, filter .25s ease; width: 100%; }
	.studio-week h2 { font-size: 1.1rem; margin: 0; }
	.studio-back { animation: studio-fade-up .45s both; color: var(--studio-purple-soft); display: inline-block; font: .75rem monospace; letter-spacing: .08em; margin-bottom: 1.5rem; text-decoration: none; text-transform: uppercase; transition: transform .2s ease; }
	.studio-back:hover { text-decoration: underline; transform: translateX(-.25rem); }
	.studio-reveal { animation: studio-rise .55s both; }
	.studio-reveal:nth-child(2) { animation-delay: .08s; }
	.studio-reveal:nth-child(3) { animation-delay: .16s; }
	@keyframes studio-rise { from { opacity: 0; transform: translateY(.7rem); } to { opacity: 1; transform: translateY(0); } }
	@keyframes studio-fade-up { from { opacity: 0; transform: translateY(.5rem); } to { opacity: 1; transform: translateY(0); } }
	@keyframes studio-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
	@keyframes studio-pulse { 0%, 100% { opacity: .75; transform: scale(1); } 50% { opacity: .25; transform: scale(1.4); } }
	@media (max-width: 700px) { .studio-top { align-items: start; } .studio-orbit { display: none; } .studio-weeks, .studio-tools { grid-template-columns: 1fr; } }
	@media (prefers-reduced-motion: reduce) { .csa-studio * { animation: none !important; transition: none !important; } }
</style>

<div class="csa-studio">
	<a class="studio-back" href="{{ site.baseurl }}/">&larr; Back</a>
	<div class="studio-top studio-reveal">
		<div>
			<div class="studio-kicker">APCSA / 2026 portfolio</div>
			<h1 class="studio-title">A place to make things.</h1>
			<p class="studio-intro">Hope's AP CSA Portfolio for the 2026-2027 school year.</p>
		</div>
		<div class="studio-orbit" aria-hidden="true"></div>
	</div>

	<div class="studio-section-label">01 / choose a week</div>
	<div class="studio-weeks">
		<a class="studio-week studio-reveal" href="week-one/"><span class="studio-week-number">WEEK 01</span><span class="studio-folder-icon" aria-hidden="true"></span><h2>AP Introduction</h2></a>
		<a class="studio-week studio-reveal" href="week-two/"><span class="studio-week-number">WEEK 02</span><span class="studio-folder-icon" aria-hidden="true"></span><h2>Week Two</h2></a>
		<a class="studio-week studio-reveal" href="week-three/"><span class="studio-week-number">WEEK 03</span><span class="studio-folder-icon" aria-hidden="true"></span><h2>Week Three</h2></a>
	</div>
</div>
