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
  // 5. Interactive Project Carousel
  const track = document.querySelector("[data-carousel-track]");
  const prevBtn = document.querySelector("[data-carousel-prev]");
  const nextBtn = document.querySelector("[data-carousel-next]");
  const counter = document.querySelector("[data-carousel-counter]");
  const dots = document.querySelectorAll(".carousel-dot");

  if (track && prevBtn && nextBtn) {
    const cards = track.querySelectorAll(".carousel-card");
    const totalCards = cards.length;

    function getCardWidth() {
      if (cards.length === 0) return 0;
      const cardStyle = window.getComputedStyle(cards[0]);
      const gap = parseFloat(window.getComputedStyle(track).gap) || 28;
      return cards[0].offsetWidth + gap;
    }

    function getCurrentIndex() {
      const cardW = getCardWidth();
      if (!cardW) return 0;
      return Math.round(track.scrollLeft / cardW);
    }

    function updateCarouselState(idx) {
      const activeIdx = Math.max(0, Math.min(idx, totalCards - 1));
      if (counter) {
        counter.textContent = `${String(activeIdx + 1).padStart(2, "0")} / ${String(totalCards).padStart(2, "0")}`;
      }
      dots.forEach((dot, dIdx) => {
        dot.classList.toggle("active", dIdx === activeIdx);
      });
    }

    function scrollToIndex(idx) {
      const targetIdx = (idx + totalCards) % totalCards;
      const cardW = getCardWidth();
      track.scrollTo({
        left: targetIdx * cardW,
        behavior: "smooth"
      });
      updateCarouselState(targetIdx);
    }

    nextBtn.addEventListener("click", () => {
      const cur = getCurrentIndex();
      scrollToIndex(cur + 1);
    });

    prevBtn.addEventListener("click", () => {
      const cur = getCurrentIndex();
      scrollToIndex(cur - 1);
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = parseInt(dot.dataset.index, 10);
        scrollToIndex(idx);
      });
    });

    let scrollTimeout;
    track.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        updateCarouselState(getCurrentIndex());
      }, 60);
    }, { passive: true });

    // Keyboard support (Left / Right arrow keys when hovered/focused)
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToIndex(getCurrentIndex() - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToIndex(getCurrentIndex() + 1);
      }
    });
  }

});
