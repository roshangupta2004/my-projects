document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


    // --- Header Scroll Behavior ---
    let lastScrollTop = 0;
    const header = document.getElementById("header");
    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Downscroll
            header.style.top = "-80px";
        } else {
            // Upscroll
            header.style.top = "0";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }, false);


    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });


    // --- Dynamic Project Cards ---
    const projects = [
        {
            title: "Metal & Object Detection",
            description: "Developed a system using sensors and microcontroller logic to identify metallic and non-metallic objects, with real-time alerts.",
            tags: ["Sensors", "Microcontroller", "C++"],
            github: "#",
            live: "#"
        },
        {
            title: "Stress Detection System",
            description: "Designing a smart system using physiological sensors and machine learning to detect and classify stress levels for health monitoring.",
            tags: ["Machine Learning", "Python", "Sensors"],
            github: "#",
            live: "#"
        },
        {
            title: "Personal Portfolio V1",
            description: "My first personal portfolio website. A great learning experience in the fundamentals of web development.",
            tags: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/roshangupta2004/Portfolio-Website",
            live: "https://roshangupta2004.github.io/Portfolio-Website/"
        },
        
    ];

    const projectContainer = document.getElementById('project-container');
    if (projectContainer) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            let githubLink = project.github !== '#' ? `<a href="${project.github}" target="_blank" aria-label="GitHub Link"><i class="fab fa-github"></i></a>` : '';
            let liveLink = project.live !== '#' ? `<a href="${project.live}" target="_blank" aria-label="Live Demo"><i class="fas fa-external-link-alt"></i></a>` : '';

            projectCard.innerHTML = `
                <div class="project-header">
                    <div class="folder-icon"><i class="far fa-folder"></i></div>
                    <div class="project-links">${githubLink}${liveLink}</div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            `;
            projectContainer.appendChild(projectCard);
        });
    }
});
