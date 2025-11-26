
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".nav");
  const cta = document.querySelector(".nav-cta");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.dataset.open === "true";
      nav.dataset.open = String(!isOpen);
      if (cta) cta.dataset.open = String(!isOpen);
      if (!isOpen) {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "56px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.padding = "10px 16px 12px";
        nav.style.background = "rgba(245,247,248,0.98)";
        nav.style.borderBottom = "1px solid rgba(229,231,235,0.9)";
        if (cta) {
          cta.style.display = "flex";
          cta.style.marginTop = "8px";
        }
      } else {
        nav.removeAttribute("style");
        if (cta) cta.removeAttribute("style");
      }
    });
  }
});
