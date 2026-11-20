document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const subject = d.get("subject") || "Portfolio enquiry";
  const body = `Name: ${d.get("name")}\\nEmail: ${d.get("email")}\\n\\n${d.get("message")}`;
  location.href = `mailto:jlibiya2017@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
