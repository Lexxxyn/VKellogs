
      function validateForm() {
        var isValid = true;

        // Nama Depan
        var fname = document.getElementById("fname");
        var fnameError = document.getElementById("fname-error");
        if (fname.value.trim() === "") {
          fnameError.innerHTML = "Nama depan harus diisi";
          fname.classList.add("error");
          isValid = false;
        } else {
          fnameError.innerHTML = "";
          fname.classList.remove("error");
        }

        // Nama Belakang
        var lname = document.getElementById("lname");
        var lnameError = document.getElementById("lname-error");
        if (lname.value.trim() === "") {
          lnameError.innerHTML = "Nama belakang harus diisi";
          lname.classList.add("error");
          isValid = false;
        } else {
          lnameError.innerHTML = "";
          lname.classList.remove("error");
        }

        // Alamat Email
        var email = document.getElementById("email");
        var emailError = document.getElementById("email-error");
        if (email.value.trim() === "") {
          emailError.innerHTML = "Alamat email harus diisi";
          email.classList.add("error");
          isValid = false;
        } else {
          emailError.innerHTML = "";
          email.classList.remove("error");
        }

        // Nomor Telepon
        var phone = document.getElementById("phone");
        var phoneError = document.getElementById("phone-error");
        if (phone.value.trim() === "") {
          phoneError.innerHTML = "Nomor telepon harus diisi";
          phone.classList.add("error");
          isValid = false;
        } else {
          phoneError.innerHTML = "";
          phone.classList.remove("error");
        }

        // Pesan
        var message = document.getElementById("message");
        var messageError = document.getElementById("message-error");
        if (message.value.trim() === "") {
          messageError.innerHTML = "Pesan harus diisi";
          message.classList.add("error");
          isValid = false;
        } else {
          messageError.innerHTML = "";
          message.classList.remove("error");
        }

        return isValid;
      }