/*
 * This Module:
 * Validates Sale class object before sending to Zendesk.
 * Formats object according to Zendesk specification.
 * Submits object to Zendesk.
 */

var validate = require('cloud/lib/validate.min.js');
var constraints = require('cloud/constraints.js');
var zendeskFields = require('cloud/zendeskFields.js');
var auth = require('cloud/auth.js');

module.exports = {

  valid: function (ticket) {
    if(validate(ticket, constraints)) {
      return false; 
    } else {
      return true; 
    }
  },
  errors: function (ticket) {
    return validate(ticket, constraints);
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
        subject: ticket.type + ' - ' + ticket.service,
        description: ticket.type + ' - ' + ticket.service,
        ticket_form_id: zendeskFields.sales,
        custom_fields: [
          { id: zendeskFields.service, value: ticket.service },
          { id: zendeskFields.contact, value: ticket.contact },
          { id: zendeskFields.zip, value: ticket.zip },
          { id: zendeskFields.state, value: ticket.state },
          { id: zendeskFields.city, value: ticket.city },
          { id: zendeskFields.district, value: ticket.district },
          { id: zendeskFields.street, value: ticket.street },
          { id: zendeskFields.number, value: ticket.number },
          { id: zendeskFields.apt, value: ticket.apt },
          { id: zendeskFields.building, value: ticket.building },
          { id: zendeskFields.levels, value: ticket.levels }
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
      success: function () {
        success(); 
      },
      error: function(httpResponse) {
        error('Request failed with response code ' + httpResponse.status);
      }
    });  
  }
}
