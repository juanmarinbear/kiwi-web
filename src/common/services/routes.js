'use strict';

kiwiWeb.factory('Routes', function() {

  return {
    home: {
      parent: 'home',
      xOrder: 2,
      yOrder: 0
    },
    products: {
      parent: 'home',
      xOrder: 2,
      yOrder: 1
    },
    residential: {
      parent: 'home',
      xOrder: 2,
      yOrder: 2
    },
    business: {
      parent: 'home',
      xOrder: 2,
      yOrder: 3
    },
    dedicated: {
      parent: 'home',
      xOrder: 2,
      yOrder: 4
    },
    metromesh: {
      parent: 'home',
      xOrder: 2,
      yOrder: 5
    },
    sales: {
      parent: 'form'
    },
    about: {
      parent: 'company',
      xOrder: 1,
      yOrder: 0
    },
    concesion: {
      parent: 'company',
      xOrder: 1,
      yOrder: 1
    },
    careers: {
      parent: 'company',
      xOrder: 1,
      yOrder: 2
    },
    stories: {
      parent: 'company',
      xOrder: 1,
      yOrder: 3
    },
    privacy: {
      parent: 'company',
      xOrder: 1,
      yOrder: 4
    },
    contact: {
      parent: 'contact',
      xOrder: 0,
      yOrder: 0
    },
    dashboard: {
      parent: 'form'
    },
    pay: {
      parent: 'form'
    },
    refer: {
      parent: 'form'
    },
    support: {
      parent: 'support',
      xOrder: 3,
      yOrder: 0
    },
    status: {
      parent: 'support',
      xOrder: 3,
      yOrder: 1
    }
  };
});
