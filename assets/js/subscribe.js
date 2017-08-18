function postSubscriptionToGoogle(){
  var email = $('#subscribe_email').val();
  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSflHAOOgJAsLPdes8N_wdbmALOgbeEqq6NDQitG7m4i2GmZew/formResponse",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Access-Control-Allow-Origin', 'chrome-extension://EXTENSION_ID');
      xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    },
    data: {"entry.371138634" : email},
    type: "POST",
    dataType: "xml",
    xhrFields: {
      withCredentials: true
    },
    statusCode: {
      0: function (){

      },
      200: function (){

      }
    }
  });
}
$(document).ready(function(){
  $('#subscribe_form').submit(function() {
    postSubscriptionToGoogle();
    return false;
  });
});
