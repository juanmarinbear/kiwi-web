var sales = require('cloud/sales.js');

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
    response.error('Error!');
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
