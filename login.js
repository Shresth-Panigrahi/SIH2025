const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!email.endsWith("@gmail.com")) {
    alert("Please enter a valid Gmail address.");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPhone", phone);

  // Redirect to Medi Mitra main page
  window.location.href = "main.html";
});
