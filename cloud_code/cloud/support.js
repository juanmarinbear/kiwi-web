/*
 * This Module:
 * Validates Sale class object before sending to Zendesk.
 * Formats object according to Zendesk specification.
 * Submits object to Zendesk.
 */

var validate = require('cloud/lib/validate.min.js');
var foldToASCII = require('cloud/lib/fold-to-ascii.min.js');
var constraints = require('cloud/constraints.js');
var zendeskFields = require('cloud/zendeskFields.js');
var auth = require('cloud/auth.js');

module.exports = {

  valid: function (ticket) {
    if(validate(ticket, constraints.support)) {
      return false; 
    } else {
      return true; 
    }
  },
  errors: function (ticket) {
    return validate(ticket, constraints.support);
  },
  format: function (ticket) {
    return {
      ticket: {
        requester: {
          name: ticket.name + ' ' + ticket.last,
          email: ticket.email,
          locale_id: '2',
          user_fields: {
            mobile_mx: ticket.mobile 
          }
        },
        subject: ticket.type + ' - ' + ticket.service + ' - ' + ticket.subject,
        description: ticket.message == '' ? ticket.type + ' - ' + ticket.service + ' - ' + ticket.subject : ticket.message,
        ticket_form_id: zendeskFields[ticket.type.toLowerCase()],
        custom_fields: [
          { id: zendeskFields.supportSubject, value: ticket.subject == 'Other' ? 'support_other' : foldToASCII(ticket.subject).replace(/\s/g, '_').toLowerCase() },
          { id: zendeskFields.company, value: ticket.company},
          { id: zendeskFields.service, value: foldToASCII(ticket.service).replace(/\s/g, '_').toLowerCase() },
          { id: zendeskFields.contact, value: ticket.contact }
        ]
      } 
    }
  },
  save: function (ticket, success, error) {
    Parse.Cloud.httpRequest({
      method: 'POST',
      url: 'https://kiwinetworks.zendesk.com/api/v2/tickets.json',
      headers: auth.zendesk.headers, 
      body: this.format(ticket),
      success: function (httpResponse) {
        success(httpResponse.data); 
      },
      error: function(httpResponse) {
        error('Request failed with response code ' + httpResponse.status);
      }
    });  
  },
  update: function (zendeskId, ticket, success, error) {
    Parse.Cloud.httpRequest({
      method: 'PUT',
      url: 'https://kiwinetworks.zendesk.com/api/v2/tickets/' + zendeskId + '.json',
      headers: auth.zendesk.headers, 
      body: ticket,
      success: function (httpResponse) {
        success(httpResponse.data); 
      },
      error: function(httpResponse) {
        error('Request failed with response code ' + httpResponse.status);
      }
    });  
  }
}
