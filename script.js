// Admin access code system
const adminBtn = document.getElementById("admin-btn");
const adminCode = document.getElementById("admin-code");
const secretCode = "623admin"; // your access code

if (adminBtn) {
  adminBtn.addEventListener("click", () => {
    if (adminCode.value.toLowerCase() === secretCode) {
      window.location.href = "admin.html";
    } else {
      alert("Wrong code, access denied.");
    }
  });
}

// Admin page functionality
function toggleProduct(id) {
  const product = document.getElementById(id);
  if (product.style.display === "none") {
    product.style.display = "block";
  } else {
    product.style.display = "none";
  }
}
