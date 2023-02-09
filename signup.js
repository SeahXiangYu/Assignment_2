$(document).ready(function () {
  const APIKEY = "63e4b31d478852088da67f11";

  $("#signup").on("click", function (e) {
    e.preventDefault();

    let email = $("#email").val();
    let password = $("#password").val();

    if (email == "") {
      alert("email cannot be empty.");
      return;
    }
    if (password == "") {
      alert("password cannot be empty.");
      return;
    }
    if (password.length < 8) {
      alert("password must be 8-20 characters long.");
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
        if (response[i].Email === email) {
          exists = true;
          break;
        }
      }

      if (exists) {
        alert("email already exists.");
        return;
      } else {
        let jsondata = {
          Email: email,
          Password: password,
        };

        let settings = {
          async: true,
          crossDomain: true,
          url: "https://customer-b2c0.restdb.io/rest/customer",
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache",
          },
          processData: false,
          data: JSON.stringify(jsondata),
          beforeSend: function () {
            alert("sucessfully created a flush account.");

            $("#add-customer").trigger("reset");
          },
        };

        $.ajax(settings).done(function (response) {
          console.log(response);

          $("#signup").prop("disabled", false);
          window.location = "signup.html";
        });
      }
    });
  });
});
