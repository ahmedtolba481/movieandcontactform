 (function() {
    emailjs.init("0aFnJV9Rzpyj_79H-"); 
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_bg87ktc", "template_q64kya8", this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (err) => {
        alert("Failed to send message: " + JSON.stringify(err));
      });
  });