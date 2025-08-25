// script.js

// Animated cycling words inside the search bar, with accessibility fallbacks.
(function () {
  const holder = document.querySelector(".cycling span");
  if (!holder) return;

  const words = JSON.parse(holder.getAttribute("data-words") || "[]");
  if (!words.length) return;

  holder.innerHTML = words.map((w) => `${w}`).join("");
})();

// Smooth scroll for all nav links
document.querySelectorAll("nav a.nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    targetEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Optional: update active nav-link styling on click
    document.querySelectorAll("nav a.nav-link").forEach((nav) =>
      nav.classList.remove("active")
    );
    link.classList.add("active");
  });
});

// Search button click: search filter + scroll to work section
document.querySelector(".btn-grad")?.addEventListener("click", () => {
  const q = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  const target = document.getElementById("work");
  if (!q) {
    target?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  // Simple highlight filter demo:
  document.querySelectorAll(".card").forEach((c) => {
    const t = c.innerText.toLowerCase();
    c.style.outline = t.includes(q)
      ? "1.5px solid rgba(34,211,238,.6)"
      : "1px solid var(--stroke)";
    c.style.transition = "outline 0.2s ease";
  });
});
