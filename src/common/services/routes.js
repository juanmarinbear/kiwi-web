'use strict';

kiwiWeb.factory('Routes', function() {

  return {
    main: {
      order: 0,
      landing: 0,
      products: 1,
      residential: 2,
      business: 3,
      dedicated: 4,
      metromesh: 5,
      salesForm: 6 
    },
    support: {
      order: 1,
      faq: 0,
      supportForm: 1
    },
    company: {
      order: -1,
      about: 0,
      privacy: 1,
      contact: 2,
      contactForm: 3
    },
    customer: {
      customerForm: 0
    }
  }
});
