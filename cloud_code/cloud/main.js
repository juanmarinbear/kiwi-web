var zendesk = require('cloud/zendesk.js');
var constraints = require('cloud/constraints.js');
var format = require('cloud/zendeskFormat.js');

Parse.Cloud.beforeSave('Sales', function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  if(zendesk.valid(ticket, constraints.sales)) {
    ticket = format.sales(ticket);
    zendesk.save(ticket, function (data) {
      request.object.set('zendeskId', data.ticket.id.toString());
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error(zendesk.errors(ticket, constraints.sales));
  }
});

Parse.Cloud.afterSave('Sales', function(request) {
  var zendeskId = request.object.get('zendeskId');
  var ticket = {
    ticket: {
      external_id: request.object.id
    }
  };
  zendesk.update(zendeskId, ticket, function (data) {
  }, function (error) {
    console.error('Got an error ' + error.code + ' : ' + error.message);
  });
});

Parse.Cloud.beforeSave('Technical', function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  if(zendesk.valid(ticket, constraints.technical)) {
    ticket = format.technical(ticket);
    zendesk.save(ticket, function (data) {
      request.object.set('zendeskId', data.ticket.id.toString());
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error(zendesk.errors(ticket, constraints.technical));
  }
});

Parse.Cloud.afterSave('Technical', function(request) {
  var zendeskId = request.object.get('zendeskId');
  var ticket = {
    ticket: {
      external_id: request.object.id
    }
  };
  zendesk.update(zendeskId, ticket, function (data) {
  }, function (error) {
    console.error('Got an error ' + error.code + ' : ' + error.message);
  });
});

Parse.Cloud.beforeSave('Administrative', function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  if(zendesk.valid(ticket, constraints.administrative)) {
    ticket = format.administrative(ticket);
    zendesk.save(ticket, function (data) {
      request.object.set('zendeskId', data.ticket.id.toString());
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error(zendesk.errors(ticket, constraints.administrative));
  }
});

Parse.Cloud.afterSave('Administrative', function(request) {
  var zendeskId = request.object.get('zendeskId');
  var ticket = {
    ticket: {
      external_id: request.object.id
    }
  };
  zendesk.update(zendeskId, ticket, function (data) {
  }, function (error) {
    console.error('Got an error ' + error.code + ' : ' + error.message);
  });
});

Parse.Cloud.beforeSave('Contact', function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  if(zendesk.valid(ticket, constraints.contact)) {
    ticket = format.contact(ticket);
    zendesk.save(ticket, function (data) {
      request.object.set('zendeskId', data.ticket.id.toString());
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error(zendesk.errors(ticket, constraints.contact));
  }
});

Parse.Cloud.afterSave('Contact', function(request) {
  var zendeskId = request.object.get('zendeskId');
  var ticket = {
    ticket: {
      external_id: request.object.id
    }
  };
  zendesk.update(zendeskId, ticket, function (data) {
  }, function (error) {
    console.error('Got an error ' + error.code + ' : ' + error.message);
  });
});

Parse.Cloud.beforeSave('Jobs', function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  if(zendesk.valid(ticket, constraints.jobs)) {
    ticket = format.jobs(ticket);
    zendesk.save(ticket, function (data) {
      request.object.set('zendeskId', data.ticket.id.toString());
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error(zendesk.errors(ticket, constraints.jobs));
  }
});

Parse.Cloud.afterSave('Jobs', function(request) {
  var zendeskId = request.object.get('zendeskId');
  var ticket = {
    ticket: {
      external_id: request.object.id
    }
  };
  zendesk.update(zendeskId, ticket, function (data) {
  }, function (error) {
    console.error('Got an error ' + error.code + ' : ' + error.message);
  });
});
