/*
 * This Module:
 * Contains validation constraints for the differnet fields used in the app.
 */

module.exports = {
  subject: {
    presence: true,
    inclusion: [
      'Desconexión',
      'Lentitud',
      'Facturación y Cobranza',
      'Otro'
    ]
  },
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
      'Metromesh',
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
}
