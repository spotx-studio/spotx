document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // // ✅ Check honeypot
    // const honeypot = document.getElementById("website").value;
    // if (honeypot) {
    //   console.warn("Bot detected via honeypot. Submission aborted.");
    //   return;
    // }

    console.log("Form submitted."); // ✅ This is OK here

    grecaptcha.ready(function () {
      grecaptcha.execute('6Lf3w6QrAAAAAIMB8cAbfqtQ1i43SGcokERzGIgR', {action: 'submit'})
        .then(function (token) {
          console.log("Token:", token); // ✅ Inside the correct scope

          const formData = new FormData(form);
          formData.append('g-recaptcha-response', token);

          console.log("FormData:", [...formData.entries()]); // ✅ Safe here

          fetch("https://hook.us2.make.com/niq7cjmg55cxg7s4pgcqd6ddri6g1v1w", {
            method: "POST",
            body: formData
          })
          .then(response => {
            if (response.ok) {
              alert("Form submitted!");
              form.reset();
            } else {
              alert("Submission failed.");
            }
          })
          .catch(err => {
            console.error(err);
            alert("Error occurred.");
          });
        });
    });
  });
});
