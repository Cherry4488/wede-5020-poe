
// Enhancements (Accordion, Gallery, Animations)
// ===============================

// Accordion toggle
function toggleAccordion() {
  const content = document.getElementById("accordionContent");
  content.style.display = (content.style.display === "none") ? "block" : "none";
}

// Lightbox gallery
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightboxImg").src = img.src;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Fade-in animation
window.addEventListener("scroll", function() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("visible");
    }
  });
});

// ===============================
// Dynamic Content (Product Search/Filter)
// ===============================
function filterProducts() {
  const query = document.getElementById("searchBar")?.value.toLowerCase();
  const items = document.querySelectorAll("#productList li");
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
}

// ===============================
// Validation + AJAX (Forms)
// ===============================

// Enquiry form validation
document.getElementById("enquiryForm")?.addEventListener("submit", function(e) {
  const email = this.email.value;
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    e.preventDefault();
  }
});

// Contact form AJAX submission
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch("send_message.php", { method: "POST", body: formData })
    .then(response => response.text())
    .then(data => alert("Message sent successfully!"))
    .catch(error => alert("Error sending message."));
});

// Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  const name = this.querySelector("[name='name']").value.trim();
  const surname = this.querySelector("[name='surname']").value.trim();
  const email = this.querySelector("[name='email']").value.trim();
  const message = this.querySelector("[name='message']").value.trim();

  // check if all fields are filled
  if (name === "" || surname === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    e.preventDefault();
    return;
  }

  // Check if email is valid
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    e.preventDefault();
    return;
  }

  // Message if it was a success
  alert("Thank you! Your message has been submitted.");
});

document.getElementById("enquiryForm")?.addEventListener("submit", function(e) {
  const nameField = this.querySelector("[name='name']");
  const surnameField = this.querySelector("[name='surname']");
  const messageField = this.querySelector("[name='message']");
  const emailField = this.querySelector("[name='email']");

  // Check the name field
  if (nameField.value.trim() === "") {
    nameField.setCustomValidity("Please fill in the missing details");
    nameField.reportValidity();
    e.preventDefault();
    return;
  } else {
    nameField.setCustomValidity("");
  }

  // Check the surname field
  if (surnameField.value.trim() === "") {
    surnameField.setCustomValidity("Please fill in the missing details");
    surnameField.reportValidity();
    e.preventDefault();
    return;
  } else {
    surnameField.setCustomValidity("");
  }

  // Check the message field
  if (messageField.value.trim() === "") {
    messageField.setCustomValidity("Please fill in the missing details");
    messageField.reportValidity();
    e.preventDefault();
    return;
  } else {
    messageField.setCustomValidity("");
  }

  // Check the email field
  if (emailField.value.trim() === "" || !emailField.value.includes("@")) {
    emailField.setCustomValidity("Please enter a valid email address");
    emailField.reportValidity();
    e.preventDefault();
    return;
  } else {
    emailField.setCustomValidity("");
  }
  });