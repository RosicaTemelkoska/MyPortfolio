document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const sections = document.querySelectorAll("section:not(.hero)");
    const hero = document.querySelector(".hero");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    const sectionLinks = document.querySelectorAll("section[id]");
    const scrollToTopBtn = document.getElementById("scrollToTop");
    const themeToggle = document.querySelector(".theme-toggle");
    const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;
    const themeLabel = themeToggle ? themeToggle.querySelector("span") : null;
    const storedTheme = localStorage.getItem("portfolio-theme");
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    function setTheme(theme) {
        body.setAttribute("data-theme", theme);
        localStorage.setItem("portfolio-theme", theme);

        if (!themeToggle || !themeIcon || !themeLabel) {
            return;
        }

        const isDark = theme === "dark";
        themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        themeToggle.setAttribute("aria-pressed", String(!isDark));
        themeIcon.className = isDark ? "fas fa-moon" : "fas fa-sun";
        themeLabel.textContent = isDark ? "Dark" : "Light";
    }

    setTheme(storedTheme || (preferredDark ? "dark" : "light"));

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const nextTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
            setTheme(nextTheme);
        });
    }

    if (hero) {
        hero.classList.add("visible");
    }

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navMenu.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    function updateActiveNavLink() {
        let current = "";
        const scrollPosition = window.scrollY + 140;

        sectionLinks.forEach(function (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + current);
        });
    }

    function updateScrollToTop() {
        if (!scrollToTopBtn) {
            return;
        }

        scrollToTopBtn.classList.toggle("show", window.scrollY > 320);
    }

    window.addEventListener("scroll", function () {
        updateActiveNavLink();
        updateScrollToTop();
    });

    updateActiveNavLink();
    updateScrollToTop();

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }
});
