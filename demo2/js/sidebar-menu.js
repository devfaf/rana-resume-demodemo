document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollToPlugin);

    const links = Array.from(document.querySelectorAll(".glass-icon"));
    const sections = links.map(link => {
        const id = link.getAttribute("href");
        return id && id.startsWith("#") ? document.querySelector(id) : null;
    });


    let activeLinks = Array.from(document.querySelectorAll(".glass-icon.active"));

    let scrollingByClick = false;

    function killTweens(link) {
        if (!link) return;
        gsap.killTweensOf(link);
        const svg = link.querySelector("svg");
        if (svg) gsap.killTweensOf(svg);
    }

    function resetLink(link) {
        if (!link) return;
        link.classList.remove("active");
        killTweens(link);

        gsap.to(link, {
            y: 0,
            backgroundColor: "var(--color-secondary)",
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => gsap.set(link, { clearProps: "transform,backgroundColor" })
        });

        const svg = link.querySelector("svg");
        if (svg) {
            gsap.to(svg, {
                fill: "var(--color-primary)",
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto",
                onComplete: () => gsap.set(svg, { clearProps: "transform,fill" })
            });
        }
    }

    function activateLink(link) {
        if (!link) return;


        activeLinks.forEach(resetLink);


        link.classList.add("active");
        killTweens(link);

        gsap.to(link, {
            y: -5,
            backgroundColor: "var(--color-primary-strong)",
            duration: 0.28,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => gsap.set(link, { clearProps: "transform,backgroundColor" })
        });

        const svg = link.querySelector("svg");
        if (svg) {
            gsap.to(svg, {
                fill: "white",
                scale: 1.15,
                duration: 0.28,
                ease: "power2.out",
                overwrite: "auto",
                onComplete: () => gsap.set(svg, { clearProps: "transform,fill" })
            });
        }


        activeLinks = [link];
    }


    gsap.set(links, { opacity: 0, y: 20 });
    gsap.to(links, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
        stagger: 0.2,
        onComplete: () => {
            gsap.set(links, { clearProps: "transform,opacity" });
        }
    });



    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const id = link.getAttribute("href");
            const target = id ? document.querySelector(id) : null;

            activateLink(link);

            if (target) {
                scrollingByClick = true;
                gsap.to(window, {
                    duration: 0.9,
                    scrollTo: { y: target, offsetY: 180 },
                    ease: "power4.out",
                    overwrite: "auto",
                    onComplete: () => { scrollingByClick = false; }
                });
            }
        });
    });


    let scrollTicking = false;
    window.addEventListener("scroll", () => {
        if (scrollingByClick) return;
        if (scrollTicking) return;
        scrollTicking = true;

        requestAnimationFrame(() => {
            const viewportCenter = window.scrollY + window.innerHeight / 2;
            let closest = null;
            let closestDistance = Infinity;

            sections.forEach((sec, i) => {
                if (!sec) return;
                const rect = sec.getBoundingClientRect();
                const secCenter = rect.top + window.scrollY + rect.height / 2;
                const distance = Math.abs(viewportCenter - secCenter);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closest = links[i];
                }
            });

            if (closest) activateLink(closest);
            scrollTicking = false;
        });
    });
});
