document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    grecaptcha.ready(function () {
      grecaptcha.execute('6Lf3w6QrAAAAAMlB8cAbfqtQi143SGcokERzGlgR', {action: 'submit'})
        .then(function (token) {
          const formData = new FormData(form);
          formData.append('g-recaptcha-response', token);

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