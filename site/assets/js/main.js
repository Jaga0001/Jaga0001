// Jagavantha PA — Portfolio Script
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav .nav__link");

  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // 2. Active Navigation Spy
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { passive: true });

  // 3. Email Copy Functionality
  const copyBtns = document.querySelectorAll("[data-copy-email]");
  const toast = document.querySelector(".toast");

  copyBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const email = btn.dataset.copyEmail || "jagavanthaarunkumar@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
        showToast("Email copied to clipboard!");
      } catch (err) {
        showToast("Failed to copy. Address: " + email);
      }
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  // 4. Render Live GitHub Contribution Grid
  const calGrid = document.querySelector(".calendar-grid");
  const totalCommitsEl = document.querySelector("[data-total-commits]");

  if (calGrid) {
    fetch("data/contributions.json")
      .then((res) => res.json())
      .then((data) => {
        if (!data || !Array.isArray(data.days)) return;
        if (totalCommitsEl && data.total) {
          totalCommitsEl.textContent = `${data.total.toLocaleString()} commits tracking live`;
        }

        calGrid.innerHTML = "";
        const days = data.days;
        const totalWeeks = Math.ceil(days.length / 7);

        for (let w = 0; w < totalWeeks; w++) {
          const col = document.createElement("div");
          col.className = "calendar-col";

          for (let d = 0; d < 7; d++) {
            const idx = w * 7 + d;
            if (idx >= days.length) break;
            const day = days[idx];
            const cell = document.createElement("div");
            cell.className = "calendar-cell";
            cell.dataset.level = day.level || 0;
            cell.title = `${day.date}: ${day.count} commits`;
            col.appendChild(cell);
          }
          calGrid.appendChild(col);
        }
      })
      .catch(() => {
        // Fallback or leave quiet if offline
      });
  }
});
