/*
 * This Module:
 * Contains validation constraints for the differnet fields used in the app.
 */

module.exports = {
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
  city: {
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
