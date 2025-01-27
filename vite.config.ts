import { readFileSync } from 'fs'
import { resolve } from 'path'

import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Vue from '@vitejs/plugin-vue'
import matter from 'gray-matter'
import LinkAttributes from 'markdown-it-link-attributes'
import Prism from 'markdown-it-prism'
import { presetUno, presetWebFonts } from 'unocss'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import SSGUtils from 'vite-plugin-ssg-utils'
import Layouts from 'vite-plugin-vue-layouts'

const markdownWrapperClasses = 'prose children:text-start'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    SSGUtils(),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        return route
      },
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
        'vitest',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: '',
          enabledCollections: [
            'carbon',
            'logos',
            'vscode-icons',
            'simple-icons',
          ],
        }),
      ],

      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
      defaultStyle: 'display: inline-block; vertical-align: middle;',
    }),

    Unocss({
      presets: [
        presetUno({
          dark: undefined,
        }),
        presetWebFonts({
          fonts: {
            sans: 'Source Sans Pro:400,500,700',
            serif: 'Playfair Display:400',
          },
        }),
      ],
      shortcuts: [
        ['text-serif', 'font-serif font-extralight'],
        ['text-primary', 'text-black'],
        ['text-light', 'op95'],
        ['text-lighter', 'op70'],
        [
          'btn-base',
          'px-2 py-1 rounded inline-flex justify-center gap-2 leading-30px children:mya !no-underline cursor-pointer text-black opacity-50 hover:opacity-80',
        ],
        ['icon-btn', 'btn-base text-white op-100'],
        ['prose', 'text-light fw400 lh-7'],
        ['flex-center', 'flex items-center'],
        ['subheading', 'mt-0 mb-2'],
      ],
    }),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          pattern: /^https?:\/\//,
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Magdalena Jirku',
        short_name: 'Magdalena Jirku',
        theme_color: '#eee',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false,
    }),
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes(paths) {
      const staticPaths = paths.filter((path) => !path.includes(':'))
      return [...staticPaths, '/404']
    },
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
})
