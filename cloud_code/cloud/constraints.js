/*
 * This Module:
 * Contains validation constraints for the differnet fields used in the app.
 */

module.exports = {
  sales: {
    step: {
      presence: true,
      inclusion: [
        'Lead',
        'Contact',
        'Feasibility Check',
        'Contract',
        'Visit',
        'Installation',
        'Wrap Up'
      ]
    },
    outcome: {
      presence: true,
      inclusion: [
        'Open',
        'Won',
        'Lost'
      ]
    },
    service: {
      presence: true,
      inclusion: [
        'Residential',
        'Business',
        'Dedicated',
        'Metro Mesh'
      ]
    },
    name: {
      presence: true 
    },
    last: {
      presence: true 
    },
    email: {
      presence: true,
      email: true
    },
    mobile: {
      presence: true,
      numericality: true,
      format: {
        pattern: /\d{10}/
      }
    },
    contact: {
      presence: true,
      inclusion: [
        'Mobile',
        'Email',
        'WhatsApp'
      ]
    },
    zip: {
      presence: true,
      numericality: true,
      format: {
        pattern: /\d{5}/
      }
    },
    state: {
      presence: true
    },
    municipality: {
      presence: true
    },
    district: {
      presence: true
    },
    street: {
      presence: true
    },
    number: {
      presence: true
    },
    building: {
      presence: true,
      inclusion: {
        within: [
          'building',
          'ground'
        ] 
      }
    },
    levels: {
      numericality: true,
      format: {
        pattern: /\d{2}/
      }
    }
  },
  support: {
    subject: {
      presence: true,
      inclusion: [
        'Desconexión',
        'Lentitud',
        'Facturación y Cobranza',
        'Otro'
      ]
    },
    service: {
      presence: true,
      inclusion: [
        'Residential',
        'Business',
        'Metro Mesh',
        'Other'
      ]
    },
    name: {
      presence: true 
    },
    last: {
      presence: true 
    },
    email: {
      presence: true,
      email: true
    },
    mobile: {
      presence: true,
      numericality: true,
      format: {
        pattern: /\d{10}/
      }
    },
    contact: {
      presence: true,
      inclusion: [
        'Mobile',
        'Email',
        'WhatsApp'
      ]
    }
  },
  contact: {
    subject: {
      presence: true,
      inclusion: [
        'Privacidad',
        'Proveeduría',
        'Prensa',
        'Other'
      ]
    },
    name: {
      presence: true 
    },
    last: {
      presence: true 
    },
    email: {
      presence: true,
      email: true
    },
    mobile: {
      presence: true,
      numericality: true,
      format: {
        pattern: /\d{10}/
      }
    },
    contact: {
      presence: true,
      inclusion: [
        'Mobile',
        'Email',
        'WhatsApp'
      ]
    }
  },
  jobs: {
    role: {
      presence: true,
      inclusion: [
        'Ingeniero en Redes',
        'Ingeniero de Soluciones',
        'Ingeniero en Software'
      ]
    },
    name: {
      presence: true 
    },
    last: {
      presence: true 
    },
    email: {
      presence: true,
      email: true
    },
    mobile: {
      presence: true,
      numericality: true,
      format: {
        pattern: /\d{10}/
      }
    },
    contact: {
      presence: true,
      inclusion: [
        'Mobile',
        'Email',
        'WhatsApp'
      ]
    },
    education: {
      presence: true,
      inclusion: [
        'Preparatoria',
        'Licenciatura',
        'Maestría',
        'Doctorado'
      ]
    },
    experience: {
      presence: true,
      numericality: true,
      format: {
        pattern: /\d{2}/
      }
    },
    message: {
      presence: true
    }
  }
}
