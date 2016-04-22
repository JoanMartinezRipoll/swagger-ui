$(document).ready(function(){
  setup_request_headers();
  $(document).on('click', '.submit', function() {
    setup_request_headers();
  });
});

function setup_request_headers() {
  host = window.location.host
  $.ajax({
    type: 'POST',
    url: "http://"+ host + "/auth/sign_in",
    data: {email: "admin@admin.com", password: "admin1234!yolo"},
    success: function(data, textStatus, request) {
      client = request.getResponseHeader('client');
      access_token = request.getResponseHeader('access-token');
      expiry = request.getResponseHeader('expiry');
      uid = request.getResponseHeader('uid');
      swaggerUi.api.clientAuthorizations.add("client", new SwaggerClient.ApiKeyAuthorization("client", client, "header"));
      swaggerUi.api.clientAuthorizations.add("access-token", new SwaggerClient.ApiKeyAuthorization("access-token", access_token, "header"));
      swaggerUi.api.clientAuthorizations.add("expiry", new SwaggerClient.ApiKeyAuthorization("expiry", expiry, "header"));
      swaggerUi.api.clientAuthorizations.add("uid", new SwaggerClient.ApiKeyAuthorization("uid", uid, "header"));
    }
  });
}
