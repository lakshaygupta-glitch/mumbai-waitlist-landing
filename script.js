
/**
 * Mumbai Traders Network — Waitlist landing page script
 * Lightweight form handling placeholder.
 */
(function () {
  "use strict";

  var form = document.getElementById("waitlist-form");
  var submitBtn = document.getElementById("submit-btn");
  var statusEl = document.getElementById("form-status");

  // Naive email validation
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function setStatus(message, isError) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.style.color = isError ? "#dc2626" : "#047857";
  }

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var experience = form.experience.value;

    if (!name || !email || !experience) {
      setStatus("Please complete all fields.", true);
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("Please enter a valid work email.", true);
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Submitting…";
    }
    setStatus("");

    var payload = {
      name: name,
      email: email,
      experience: experience
    };

    // Form submission placeholder.
    // Replace this fetch target with your email capture backend endpoint
    // (e.g. Mailchimp, ConvertKit, Supabase, or a custom serverless function).
    // To enable real capture, uncomment and point `url` to your endpoint:
    // fetch("https://your-endpoint.example.com/waitlist", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload)
    // })
    //   .then(function (res) { return res.json(); })
    //   .then(function () { setStatus("Thanks — you're on the list!"); form.reset(); })
    //   .catch(function () { setStatus("Something went wrong. Please try again.", true); });

    // Placeholder behavior: confirm submission visually without a backend.
    setStatus("Thanks — you're on the Mumbai waitlist.");

    form.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Request early access";
    }

    console.log("[waitlist] captured payload:", payload);
  });
})();
