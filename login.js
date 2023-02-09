$(document).ready(function () {
  const APIKEY = "63e4b31d478852088da67f11";

  $(".dots").hide();

  $("#login").on("click", function (e) {
    e.preventDefault();

    $(".dots").show();
    let email = $("#email").val();
    let password = $("#password").val();

    if (email == "") {
      alert("email cannot be empty.");
      $(".dots").hide();
      return;
    }
    if (password == "") {
      alert("password cannot be empty.");
      $(".dots").hide();
      return;
    }

    let settings = {
      async: true,
      crossDomain: true,
      url: "https://customer-b2c0.restdb.io/rest/customer",
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-apikey": APIKEY,
        "cache-control": "no-cache",
      },
    };
    $.ajax(settings).done(function (response) {
      let exists = false;
      for (var i = 0; i < response.length; i++) {
        if (response[i].Email === email && response[i].Password === password) {
          exists = true;
          $(".dots").hide();
          window.location = "logged-in.html";
        }
      }
      if (exists == false) {
        $(".dots").hide();
        alert("Incorrect email or password");
        $("#email").val("");
        $("#password").val("");
        return;
      }
    });
  });
});
