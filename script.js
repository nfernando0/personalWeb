function submitData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("msg").value;

  if (name == "") {
    return alert("Nama tidak boleh kosong!");
  }
  if (email == "") {
    return alert("Email tidak boleh kosong!");
  }
  if (phone == "") {
    return alert("Nomor HP tidak boleh kosong!");
  }
  if (subject == "") {
    return alert("Subject tidak boleh kosong!");
  }

  let data = {
    name,
    email,
    phone,
    subject,
    message,
  };

  console.log(data);

  let emailReceiver = "nandof986@gmail.com";
  let a = document.createElement("a");

  a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}?subject=${subject}&body=Hallo, nama saya ${name}, ${message}, tolong hubungi saya di nomor ${phone}, terima kasih`;
  a.click();
}
