var sales = require('cloud/sales.js');

Parse.Cloud.beforeSave("Sales", function(request, response) {

  var ticket = JSON.stringify(request.object);
  ticket = JSON.parse(ticket);

  if(sales.valid(ticket)) {
    sales.save(ticket, function () {
      response.success();
    }, function (error) {
      response.error(error);
    });
  } else {
    response.error('Error!');
  }
});
