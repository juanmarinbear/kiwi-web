'use strict';

kiwiWeb.factory('Menu', function() {

  return {
    title : 'Kiwi',
    current : 'company',
    sections : { 
      company : {
        name : 'company',
        label : 'Empresa',
        visible: true,
        sections : {
          about : {
            name : 'about',
            label : 'Nosotros',
            href : 'about'
          }, 
          concesion : {
            name : 'concesion',
            label : 'Concesión',
            href : 'concesion'
          }, 
          blog : {
            name : 'blog',
            label : 'Blog',
            href : 'blog'
          }, 
          jobs : {
            name : 'jobs',
            label : 'Trabajo',
            href : 'jobs'
          }, 
          stories : {
            name : 'stories',
            label : 'Casos de Éxito',
            href : 'stories'
          }, 
          privacy : {
            name : 'privacy',
            label : 'Privacidad',
            href : 'privacy'
          }
        } 
      },
      products : {
        name : 'products',
        label : 'Productos',
        visible: false,
        sections : {
          residential : {
            name : 'residential',
            label : 'Residencial',
            href : 'residential'
          }, 
          business : {
            name : 'business',
            label : 'Business',
            href : 'business'
          }, 
          dedicated : {
            name : 'dedicated',
            label : 'Dedicated',
            href : 'dedicated'
          }, 
          metromesh : {
            name : 'metromesh',
            label : 'Metro Mesh',
            href : 'metromesh'
          }, 
          faq : {
            name : 'faq',
            label : 'Preguntas',
            href : 'faq'
          }, 
          salesForm : {
            name : 'salesForm',
            label : 'Contrata',
            href : 'salesForm'
          }
        } 
      },
      customer : {
        name : 'customer',
        label : 'Clientes',
        visible: false,
        sections : {
          dashboard : {
            name : 'customer',
            label : 'Dashboard',
            href : 'customer'
          }, 
          payments : {
            name : 'payments',
            label : 'Paga',
            href : 'payments'
          },
          refer : {
            name : 'refer',
            label : 'Recomienda',
            href : 'refer'
          }
        } 
      },
      support : {
        name : 'support',
        label : 'Soporte',
        visible: false,
        sections : {
          wiki : {
            name : 'wiki',
            label : 'Wiki',
            href : 'wiki'
          }, 
          status : {
            name : 'status',
            label : 'Status',
            href : 'status'
          }, 
          support : {
            name : 'support',
            label : 'Ayuda',
            href : 'support'
          }
        }
      },
      contact : {
        name : 'contact',
        label : 'Contacto',
        visible: false,
        sections : {
          phones : {
            name : 'phones',
            label : 'Teléfonos',
            href : 'contact'
          },
          email : {
            name: 'email',
            label : 'Email',
            href : 'contact'
          },
          conatact : {
            name : 'social',
            label : 'Social',
            href : 'contact'
          }
        }
      }
    } 
  };
});
