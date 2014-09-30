'use strict';

kiwiWeb.factory('Menu', function() {

  return {
    title : 'Menu',
    sections : [
      {
        name : 'company',
        label : 'Empresa',
        visible: true,
        sections : [
          {
            name : 'about',
            label : 'Nosotros',
            uiSref : 'about'
          },
          {
            name : 'concesion',
            label : 'Concesión',
            uiSref : 'concesion'
          },
          {
            name : 'blog',
            label : 'Blog',
            href: 'http://blog.kiwinetworks.com',
            target: '_blank'
          },
          {
            name : 'careers',
            label : 'Trabajo',
            uiSref : 'careers'
          },
          {
            name : 'stories',
            label : 'Casos de Éxito',
            uiSref : 'stories'
          },
          {
            name : 'privacy',
            label : 'Privacidad',
            uiSref : 'privacy'
          }
        ]
      },
      {
        name : 'products',
        label : 'Productos',
        visible: false,
        sections : [
          {
            name : 'residential',
            label : 'Residencial',
            uiSref : 'residential'
          },
          {
            name : 'business',
            label : 'Business',
            uiSref : 'business'
          },
          {
            name : 'dedicated',
            label : 'Dedicated',
            uiSref : 'dedicated'
          },
          {
            name : 'metromesh',
            label : 'Metro Mesh',
            uiSref : 'metromesh'
          },
          {
            name : 'faq',
            label : 'Preguntas',
            uiSref : 'faq({location: \'general\'})'
          },
          {
            name : 'sales',
            label : 'Contrata',
            uiSref : 'sales({product: \'\'})'
          }
        ]
      },
      {
        name : 'customer',
        label : 'Clientes',
        visible: false,
        sections : [
          {
            name : 'dashboard',
            label : 'Dashboard',
            uiSref : 'dashboard.anon'
          },
          {
            name : 'pay',
            label : 'Paga',
            uiSref : 'pay'
          },
          {
            name : 'refer',
            label : 'Recomienda',
            uiSref : 'refer.anon'
          }
        ]
      },
      {
        name : 'support',
        label : 'Soporte',
        visible: false,
        sections : [
          {
            name : 'support',
            label : 'Solicita Soporte',
            uiSref: 'support'
          },
          {
            name : 'helpcenter',
            label : 'Help Center',
            href: 'http://support.kiwinetworks.com',
            target: '_blank'
          },
          {
            name : 'status',
            label : 'Status',
            uiSref : 'status'
          }
        ]
      },
      {
        name : 'contact',
        label : 'Contacto',
        visible: false,
        sections : [
          {
            name : 'phones',
            label : 'Teléfonos',
            uiSref : 'contact'
          },
          {
            name: 'email',
            label : 'Email',
            uiSref : 'contact'
          },
          {
            name : 'social',
            label : 'Social',
            uiSref : 'contact'
          }
        ]
      }
    ]
  };
});
