/*
 * This Module:
 * Validates Jobs class object before sending to Zendesk.
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
    if(validate(ticket, constraints.jobs)) {
      return false; 
    } else {
      return true; 
    }
  },
  errors: function (ticket) {
    return validate(ticket, constraints.jobs);
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
        subject: ticket.type + ' - ' + ticket.role,
        description: ticket.message,
        ticket_form_id: zendeskFields.jobs,
        custom_fields: [
          { id: zendeskFields.role, value: foldToASCII(ticket.role).replace(/\s/g, '_').toLowerCase() },
          { id: zendeskFields.state, value: ticket.state },
          { id: zendeskFields.contact, value: ticket.contact },
          { id: zendeskFields.education, value: foldToASCII(ticket.education) },
          { id: zendeskFields.college, value: ticket.college},
          { id: zendeskFields.collegeUrl, value: ticket.collegeUrl },
          { id: zendeskFields.masters, value: ticket.masters },
          { id: zendeskFields.mastersUrl, value: ticket.mastersUrl },
          { id: zendeskFields.phd, value: ticket.phd },
          { id: zendeskFields.phdUrl, value: ticket.phdUrl },
          { id: zendeskFields.experience, value: ticket.experience },
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
