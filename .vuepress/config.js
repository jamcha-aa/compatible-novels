const summaryja = require('./summaryja.js');
const summaryen = require('./summaryen.js');
const summaryes = require('./summaryes.js');

module.exports = {
    locales: {
        '/': {
            lang: 'ja-JP',
            title: 'エウロパの翻訳機',
            description: '英語に適切に翻訳できる日本語の文体で書かれた小説。'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Translator from Europa',
            description: 'Novels written in Japanese style that can be properly translated into English.'
        },
        '/es/': {
            lang: 'es-ES',
            title: 'Traductor de Europa',
            description: 'Novelas escritas en estilo japonés que pueden traducirse correctamente al inglés.'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    themeConfig: {
        search: false,
        locales: {
            '/': {
                selectText: '言語',
                label: '日本語',
                nav: [
                    { text: 'ホーム', link: '/' },
                    { text: '作品一覧', link: 'https://jamcha-aa.github.io/About/' },
                    { text: 'GitHub', link: 'https://github.com/jamcha-aa/compatible-novels/' }
                ],
                sidebar: {
                    '/article/': summaryja.genSidebarConfig('目次')
                }
            },
            '/en/': {
                selectText: 'Languages',
                label: 'English',
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Works', link: 'https://jamcha-aa.github.io/About/' },
                    { text: 'GitHub', link: 'https://github.com/jamcha-aa/compatible-novels/' }
                ],
                sidebar: {
                    '/en/article/': summaryen.genSidebarConfig('Table of Contents')
                }
            },
            '/es/': {
                selectText: 'Idioma',
                label: 'Español',
                nav: [
                    { text: 'Home', link: '/es/' },
                    { text: 'Works', link: 'https://jamcha-aa.github.io/About/' },
                    { text: 'GitHub', link: 'https://github.com/jamcha-aa/compatible-novels/' }
                ],
                sidebar: {
                    '/es/article/': summaryes.genSidebarConfig('Tabla de contenido')
                }
            }
        }
    },
    head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    base: '/compatible-novels/',
    dest: 'docs'
}
