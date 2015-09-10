$(document).ready(function () {
  $('#convert').click(function () {
    $.get('#question', function (data) {
      console.log(data);
    });
  });
});
