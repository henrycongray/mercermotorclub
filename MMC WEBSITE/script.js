document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-visible");

  document.querySelectorAll("a[data-transition='true']").forEach((link) => {
    if (link.origin !== window.location.origin) return;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.add("is-leaving");
      window.setTimeout(() => {
        window.location.href = link.href;
      }, 260);
    });
  });

  const membershipForm = document.getElementById("membership-form");
  if (membershipForm) {
    const confirmation = document.getElementById("membership-confirmation");
    membershipForm.addEventListener("submit", (event) => {
      event.preventDefault();
      membershipForm.reset();
      confirmation.classList.remove("hidden");
      confirmation.textContent = "Application received.";
    });
  }

  const memberForm = document.getElementById("member-login-form");
  if (memberForm) {
    const passwordInput = document.getElementById("member-password");
    const content = document.getElementById("member-content");
    const message = document.getElementById("member-message");

    memberForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (passwordInput.value.trim() === "mmcnyc") {
        content.classList.remove("hidden");
        message.textContent = "Access granted.";
        memberForm.classList.add("hidden");
      } else {
        message.textContent = "Access denied.";
      }
      passwordInput.value = "";
    });
  }
});
