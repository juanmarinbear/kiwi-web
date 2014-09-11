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
            href : 'about'
          },
          {
            name : 'concesion',
            label : 'Concesión',
            href : 'concesion'
          },
          {
            name : 'blog',
            label : 'Blog',
            href : 'blog'
          },
          {
            name : 'jobs',
            label : 'Trabajo',
            href : 'jobs'
          },
          {
            name : 'stories',
            label : 'Casos de Éxito',
            href : 'stories'
          },
          {
            name : 'privacy',
            label : 'Privacidad',
            href : 'privacy'
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
            href : 'residential'
          },
          {
            name : 'business',
            label : 'Business',
            href : 'business'
          },
          {
            name : 'dedicated',
            label : 'Dedicated',
            href : 'dedicated'
          },
          {
            name : 'metromesh',
            label : 'Metro Mesh',
            href : 'metromesh'
          },
          {
            name : 'faq',
            label : 'Preguntas',
            href : 'faq({location: \'general\'})'
          },
          {
            name : 'sales',
            label : 'Contrata',
            href : 'sales({product: \'\'})'
          }
        ]
      },
      {
        name : 'customer',
        label : 'Clientes',
        visible: false,
        sections : [
          {
            name : 'kiwicloud',
            label : 'Kiwi Cloud',
            href : 'kiwicloud'
          },
          {
            name : 'pay',
            label : 'Paga',
            href : 'pay'
          },
          {
            name : 'refer',
            label : 'Recomienda',
            href : 'refer'
          }
        ]
      },
      {
        name : 'support',
        label : 'Soporte',
        visible: false,
        sections : [
          {
            name : 'helpcenter',
            label : 'Help Center',
            href : 'helpcenter'
          },
          {
            name : 'status',
            label : 'Status',
            href : 'status'
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
            href : 'contact'
          },
          {
            name: 'email',
            label : 'Email',
            href : 'contact'
          },
          {
            name : 'social',
            label : 'Social',
            href : 'contact'
          }
        ]
      }
    ]
  };
});
