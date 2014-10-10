var sales = require('cloud/sales.js');
var support = require('cloud/support.js');
var contact = require('cloud/contact.js');
var jobs = require('cloud/jobs.js');

Parse.Cloud.beforeSave("Sales", function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  if(sales.valid(ticket)) {
    sales.save(ticket, function (data) {
      request.object.set('zendeskId', data.ticket.id.toString());
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error(sales.errors(ticket));
  }
});

Parse.Cloud.afterSave("Sales", function(request) {
  var zendeskId = request.object.get('zendeskId');
  var ticket = {
    ticket: {
      external_id: request.object.id
    }
  };
  sales.update(zendeskId, ticket, function (data) {
  }, function (error) {
    console.error("Got an error " + error.code + " : " + error.message);
  });
});

Parse.Cloud.beforeSave("Support", function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  if(support.valid(ticket)) {
    support.save(ticket, function (data) {
      request.object.set('zendeskId', data.ticket.id.toString());
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error(support.errors(ticket));
  }
});

Parse.Cloud.afterSave("Support", function(request) {
  var zendeskId = request.object.get('zendeskId');
  var ticket = {
    ticket: {
      external_id: request.object.id
    }
  };
  support.update(zendeskId, ticket, function (data) {
  }, function (error) {
    console.error("Got an error " + error.code + " : " + error.message);
  });
});

Parse.Cloud.beforeSave("Contact", function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  if(contact.valid(ticket)) {
    contact.save(ticket, function (data) {
      request.object.set('zendeskId', data.ticket.id.toString());
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error(contact.errors(ticket));
  }
});

Parse.Cloud.afterSave("Contact", function(request) {
  var zendeskId = request.object.get('zendeskId');
  var ticket = {
    ticket: {
      external_id: request.object.id
    }
  };
  contact.update(zendeskId, ticket, function (data) {
  }, function (error) {
    console.error("Got an error " + error.code + " : " + error.message);
  });
});

Parse.Cloud.beforeSave("Jobs", function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  console.log('Mobile: ' + ticket.mobile + ' ' + typeof(ticket.mobile));
  console.log('Experience: ' + ticket.experience + ' ' + typeof(ticket.experience));

  if(jobs.valid(ticket)) {
    jobs.save(ticket, function (data) {
      request.object.set('zendeskId', data.ticket.id.toString());
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error(jobs.errors(ticket));
  }
});

Parse.Cloud.afterSave("Jobs", function(request) {
  var zendeskId = request.object.get('zendeskId');
  var ticket = {
    ticket: {
      external_id: request.object.id
    }
  };
  jobs.update(zendeskId, ticket, function (data) {
  }, function (error) {
    console.error("Got an error " + error.code + " : " + error.message);
  });
});
