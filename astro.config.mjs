import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export const locales = {
	root: { label: 'English', lang: 'en' },
	'zh-cn': { label: '简体中文', lang: 'zh-CN' },
};
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'lazy-js-utils',
			favicon: 'kv.jpeg',
			social: {
				github: 'https://github.com/Simon-He95',
				"x.com": 'https://twitter.com/simon_he1995',
				discord: 'https://discord.com/invite/ZnjxzMKWNW'
			},
			locales,
			sidebar: [
				{
					label: 'Guide',
					translations: {
						'zh-cn': '指南',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Quick Start', link: '/guides/start/', translations: {
								'zh-cn': '快速上手',
							}
						},
						{
							label: 'About', link: '/guides/about/', translations: {
								'zh-cn': '关于',
							}
						}
					],
				},
				{
					label: 'Api',
					translations: {
						'zh-cn': '接口',
					},
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Array', link: '/api/array/', translations: {
								'zh-cn': 'Array',
							}
						},
						{
							label: 'Canvas', link: '/api/canvas/', translations: {
								'zh-cn': 'Canvas',
							}
						},
						{
							label: 'Common', link: '/api/common/', translations: {
								'zh-cn': 'Common',
							}
						},
						{
							label: 'Compress', link: '/api/compress/', translations: {
								'zh-cn': 'Compress',
							}
						},
						{
							label: 'Css', link: '/api/css/', translations: {
								'zh-cn': 'Css',
							}
						},
						{
							label: 'Date', link: '/api/date/', translations: {
								'zh-cn': 'Date',
							}
						},
						{
							label: 'Event', link: '/api/event/', translations: {
								'zh-cn': 'Event',
							}
						},
						{
							label: 'Waterfall', link: '/api/waterfall/', translations: {
								'zh-cn': 'Waterfall',
							}
						},
						{
							label: 'Html', link: '/api/html/', translations: {
								'zh-cn': 'Html',
							}
						},
						{
							label: 'Https', link: '/api/https/', translations: {
								'zh-cn': 'Https',
							}
						},
						{
							label: 'Is', link: '/api/is/', translations: {
								'zh-cn': 'Is',
							}
						},
						{
							label: 'Javascript', link: '/api/javascript/', translations: {
								'zh-cn': 'Javascript',
							}
						},
						{
							label: 'Log', link: '/api/log/', translations: {
								'zh-cn': 'Log',
							}
						},
						{
							label: 'Message', link: '/api/message/', translations: {
								'zh-cn': 'Message',
							}
						},
						{
							label: 'Monitor', link: '/api/monitor/', translations: {
								'zh-cn': 'Monitor',
							}
						},
						{
							label: 'Node', link: '/api/node/', translations: {
								'zh-cn': 'Node',
							}
						},
						{
							label: 'Number', link: '/api/number/', translations: {
								'zh-cn': 'Number',
							}
						},
						{
							label: 'Object', link: '/api/object/', translations: {
								'zh-cn': 'Object',
							}
						},
						{
							label: 'Parse', link: '/api/parse/', translations: {
								'zh-cn': 'Parse',
							}
						},
						{
							label: 'Perf', link: '/api/perf/', translations: {
								'zh-cn': 'Perf',
							}
						},
						{
							label: 'performance', link: '/api/performance/', translations: {
								'zh-cn': 'performance',
							}
						},
						{
							label: 'Qrcode', link: '/api/qrcode/', translations: {
								'zh-cn': 'Qrcode',
							}
						},
						{
							label: 'Random', link: '/api/random/', translations: {
								'zh-cn': 'Random',
							}
						},
						{
							label: 'Request', link: '/api/request/', translations: {
								'zh-cn': 'Request',
							}
						},
						{
							label: 'Screen', link: '/api/screen/', translations: {
								'zh-cn': 'Screen',
							}
						},
						{
							label: 'Script', link: '/api/script/', translations: {
								'zh-cn': 'Script',
							}
						},
						{
							label: 'Scroll', link: '/api/scroll/', translations: {
								'zh-cn': 'Scroll',
							}
						},
						{
							label: 'Storage', link: '/api/storage/', translations: {
								'zh-cn': 'Storage',
							}
						},
						{
							label: 'String', link: '/api/string/', translations: {
								'zh-cn': 'String',
							}
						},
						{
							label: 'To', link: '/api/to/', translations: {
								'zh-cn': 'To',
							}
						},
						{
							label: 'VitePlugin', link: '/api/vitePlugin/', translations: {
								'zh-cn': 'VitePlugin',
							}
						},
					],
				},
			],
		}),
	],
});
