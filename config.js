'use strict';

module.exports = {
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Blog by John Doe',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: '記事一覧',
      path: '/'
    },
    {
      label: 'とよももについて',
      path: '/pages/about'
    }
    // {
    //   label: 'ご連絡ください',
    //   path: '/pages/contacts'
    // }
  ],
  author: {
    name: 'とよもも',
    photo: '/momo-pic.png',
    bio: 'Momoko Toyota | 29歳でキャリアチェンジしてWEB開発の道へ。今はコードを書くプロダクトマネージャしてます',
    contacts: {
      email: 'toyopet-momoko@hotmail.co.jp',
      twitter: '#',
      github: '#',
      linkedin: '#',
    }
  }
};
