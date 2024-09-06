import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://evokzh.github.io',
  integrations: [
    starlight({
      title: 'evokzh',
      description: 'eevokzh.',
      components: {
        TableOfContents: "./src/components/TOC.astro",
        PageTitle: "./src/components/CustomPageTitle.astro"
      },
      logo: {
        light: '/src/assets/athena-light.svg',
        dark: '/src/assets/athena-dark.svg',
      },
      customCss: process.env.NO_GRADIENTS ? [	'./src/styles/_global.css'] : ['./src/styles/landing.css', 	'./src/styles/_global.css'],
      social: {
        github: 'https://github.com/evokzh',
        instagram: 'https://www.instagram.com/evokzhdotcom',
        discord: 'https://discord.gg/QB2973MH',
      },
      editLink: {
        baseUrl: 'https://github.com/evokzh/evokzh.github.io/tree/main/',
      },
      lastUpdated: true,
      sidebar: [
        {
          label: 'Products',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Monadi', link: '/en/getting-started/manifesto' },
          ],
        },
        
        {
          label: 'Community',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Contribute to Monadi', link: '/en/community/contribute' },
            { label: 'Getting Help', link: '/en/community/getting-help' },
            { label: 'Official Monadi Mirrors', link: '/en/community/mirrors' },
            //{ label: 'Style Guide', link: '/en/community/style-guide' },
            { label: 'Setting up a Mirror', link: '/en/community/setting-mirror' },
            { label: 'Submitting Bugs', link: '/en/community/submitting-bugs' },
            { label: 'Submitting Themes', link: '/en/community/submitting-themes' },
          ],
        },
        {
          label: 'Development',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Testing', link: '/en/development/testing' },
          ],
        },
        {
          label: 'Policy',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'evokzh EULA', link: '/en/policy/eula-policy' },
            // { label: 'evokzh Network Service Policy', link: '/en/policy/network-policy' },
            { label: 'evokzh Code of Conduct', link: '/en/policy/code-of-conduct' },
            { label: 'evokzh Collaboration Policy', link: '/en/policy/collaboration-policy' },
            { label: 'evokzh Open Source Policy', link: '/en/policy/opensource-policy' },
            { label: 'evokzh Package Policy', link: '/en/policy/package-policy' },
            { label: 'evokzh Pentesting Tools Policy', link: '/en/policy/tools-policy' },
            { label: 'evokzh Privacy Policy', link: '/en/policy/privacy-policy' },
            { label: 'evokzh Update Policy', link: '/en/policy/update-policy' },
            { label: 'evokzh User Policy', link: '/en/policy/user-policy' },
            // { label: 'Cookie Policy', link: '/en/policy/cookie-policy' },
          ],
        },
      ],
    }),
    react()
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
