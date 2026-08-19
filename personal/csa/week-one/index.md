---
layout: post
title: Week One / Foundations
permalink: /personal/csa/week-one/
author: Hope Fune
categories: [CSA Portfolio]
---

<style>
	.csa-folder {
		--folder-bg: #0a1420;
		--folder-panel: #0f1e2f;
		--folder-panel-2: #14283d;
		--folder-line: #223650;
		--folder-text: #e8f0f7;
		--folder-muted: #93a9bd;
		--folder-blue: #3f8bc4;
		--folder-blue-soft: #8fc3ea;
		background: radial-gradient(circle at 85% 0%, #123249 0, transparent 34rem), var(--folder-bg);
		border: 1px solid var(--folder-line);
		color: var(--folder-text);
		font-family: Georgia, 'Times New Roman', serif;
		margin: 0 -1rem;
		min-height: 60vh;
		overflow: hidden;
		padding: clamp(1.25rem, 4vw, 3.5rem);
	}

	.csa-folder a { color: inherit; text-decoration: none; }
	.folder-kicker { animation: folder-fade-up .5s both; color: var(--folder-blue-soft); font: 700 .72rem/1.2 monospace; letter-spacing: .16em; text-transform: uppercase; }
	.folder-title { animation: folder-fade-up .6s .1s both; font-size: clamp(2.3rem, 7vw, 5rem); letter-spacing: -.05em; line-height: .95; margin: .65rem 0 1rem; max-width: 8em; }
	.folder-intro { animation: folder-fade-up .6s .2s both; color: var(--folder-muted); font: 1rem/1.65 system-ui, sans-serif; margin: 0; max-width: 38rem; }
	.folder-top { align-items: end; display: flex; gap: 2rem; justify-content: space-between; margin-bottom: clamp(2rem, 7vw, 5rem); }
	.folder-orbit { animation: folder-spin 14s linear infinite; border: 1px solid var(--folder-blue); border-radius: 50%; height: 5.5rem; opacity: .75; position: relative; width: 5.5rem; }
	.folder-orbit::after { animation: folder-pulse 2.2s ease-in-out infinite; background: var(--folder-blue-soft); border-radius: 50%; content: ''; height: .55rem; position: absolute; right: .2rem; top: .9rem; width: .55rem; }
	.folder-section-label { animation: folder-fade-up .5s .25s both; color: var(--folder-muted); font: .75rem/1.2 monospace; letter-spacing: .12em; margin-bottom: .85rem; text-transform: uppercase; }
	.folder-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(3, 1fr); }
	.folder-card { align-items: center; display: flex; flex-direction: column; gap: .35rem; padding: .5rem; text-align: center; transition: transform .25s ease; }
	.folder-card:hover { transform: translateY(-.35rem) scale(1.03); }
	.folder-card:hover .folder-icon::before { transform: translateY(-.12rem) rotate(-4deg); }
	.folder-card:hover .folder-icon::after { filter: brightness(1.12); transform: translateY(-.05rem); }
	.folder-card-number { color: var(--folder-blue-soft); font: .75rem monospace; transition: color .2s ease; }
	.folder-card:hover .folder-card-number { color: var(--folder-text); }
	.folder-icon { flex-shrink: 0; height: 3.2rem; margin: .35rem 0 .5rem; position: relative; width: 4.2rem; }
	.folder-icon::before { background: var(--folder-blue); border-radius: .3rem .3rem 0 0; content: ''; height: .55rem; left: 0; position: absolute; top: -.5rem; transition: transform .25s ease; width: 45%; }
	.folder-icon::after { background: linear-gradient(160deg, var(--folder-blue-soft), var(--folder-blue)); border-radius: .2rem .5rem .5rem .5rem; content: ''; height: 100%; left: 0; position: absolute; top: 0; transition: transform .25s ease, filter .25s ease; width: 100%; }
	.folder-card h2 { font-size: 1.1rem; margin: 0; }
	.folder-back { animation: folder-fade-up .45s both; color: var(--folder-blue-soft); display: inline-block; font: .75rem monospace; letter-spacing: .08em; margin-bottom: 1.5rem; text-decoration: none; text-transform: uppercase; transition: transform .2s ease; }
	.folder-back:hover { text-decoration: underline; transform: translateX(-.25rem); }
	.folder-reveal { animation: folder-rise .55s both; }
	.folder-reveal:nth-child(2) { animation-delay: .08s; }
	.folder-reveal:nth-child(3) { animation-delay: .16s; }
	@keyframes folder-rise { from { opacity: 0; transform: translateY(.7rem); } to { opacity: 1; transform: translateY(0); } }
	@keyframes folder-fade-up { from { opacity: 0; transform: translateY(.5rem); } to { opacity: 1; transform: translateY(0); } }
	@keyframes folder-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
	@keyframes folder-pulse { 0%, 100% { opacity: .75; transform: scale(1); } 50% { opacity: .25; transform: scale(1.4); } }
	@media (max-width: 700px) { .folder-top { align-items: start; } .folder-orbit { display: none; } .folder-grid { grid-template-columns: 1fr; } }
	@media (prefers-reduced-motion: reduce) { .csa-folder * { animation: none !important; transition: none !important; } }
</style>

<div class="csa-folder">
	<a class="folder-back" href="{{ site.baseurl }}/personal/csa/portfolio">&larr; Back</a>
	<div class="folder-top folder-reveal">
		<div>
			<div class="folder-kicker">WEEK 01 / APCSA</div>
			<h1 class="folder-title">AP Introduction</h1>
			<p class="folder-intro">Lessons/Mini projects for the first week of CSA.</p>
		</div>
		<div class="folder-orbit" aria-hidden="true"></div>
	</div>

	<div class="folder-section-label">01 / choose a folder</div>
	<div class="folder-grid">
		<a class="folder-card folder-reveal" href="{{ site.baseurl }}/personal/csa/coderunner"><span class="folder-card-number">FOLDER 01</span><span class="folder-icon" aria-hidden="true"></span><h2>Code Runner - Raw MD</h2></a>
		<a class="folder-card folder-reveal" href="{{ site.baseurl }}/personal/csa/coderunner-java"><span class="folder-card-number">FOLDER 02</span><span class="folder-icon" aria-hidden="true"></span><h2>Code Runner - JAVA</h2></a>
		<a class="folder-card folder-reveal" href="{{ site.baseurl }}/personal/csa/coderunner-javascript"><span class="folder-card-number">FOLDER 03</span><span class="folder-icon" aria-hidden="true"></span><h2>Code Runner - JAVASCRIPT</h2></a>
	</div>
</div>

