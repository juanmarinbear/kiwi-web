'use strict';

kiwiWeb.factory('Routes', function() {

  return {
    about: {
      parent: 'company',
      xOrder: 0,
      yOrder: 0
    },
    concesion: {
      parent: 'company',
      xOrder: 0,
      yOrder: 1
    },
    careers: {
      parent: 'company',
      xOrder: 0,
      yOrder: 2
    },
    apply: {
      parent: 'form'
    },
    stories: {
      parent: 'company',
      xOrder: 0,
      yOrder: 3
    },
    privacy: {
      parent: 'company',
      xOrder: 0,
      yOrder: 4
    },
    home: {
      parent: 'home',
      xOrder: 1,
      yOrder: 0
    },
    products: {
      parent: 'home',
      xOrder: 1,
      yOrder: 1
    },
    residential: {
      parent: 'home',
      xOrder: 1,
      yOrder: 2
    },
    business: {
      parent: 'home',
      xOrder: 1,
      yOrder: 3
    },
    dedicated: {
      parent: 'home',
      xOrder: 1,
      yOrder: 4
    },
    metromesh: {
      parent: 'home',
      xOrder: 1,
      yOrder: 5
    },
    faq: {
      parent: 'home',
      xOrder: 1,
      yOrder: 6
    },
    sales: {
      parent: 'form'
    },
    dashboard: {
      parent: 'customer',
      xOrder: 2,
      yOrder: 0
    },
    pay: {
      parent: 'customer',
      xOrder: 2,
      yOrder: 1
    },
    refer: {
      parent: 'customer',
      xOrder: 2,
      yOrder: 2
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
    },
    contact: {
      parent: 'contact',
      xOrder: 4,
      yOrder: 0
    }
  };
});
