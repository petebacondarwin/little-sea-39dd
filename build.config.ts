import { defineBuildConfig } from 'unbuild';
import { cloudflare, env, nodeless } from 'unenv';

const { alias, inject, polyfill, external } = env(nodeless, cloudflare);

console.log(external);

export default defineBuildConfig({
	// alias,
	// inject,
	// polyfill,
	externals: external,
	entries: ['./src/index.ts'],
	outDir: './build',
	rollup: { alias },
	failOnWarn: false,
});
