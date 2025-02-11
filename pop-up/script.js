const content = {
    about: "Uncommon Hacks is an RSO that organizes coding-related competitions on campus...",
    schedule: "9:30 check-in, team formation...",
    judging: "Once you've gotten a chance to work on your project...",
    register: "Join the designathon by registering online...",
    team: "Form a team of up to 5 people...",
    faq: "Common questions about Uncommon Makes...",
    contact: "Reach out to us via email...",
    conduct: "Rules and guidelines for participants...",
    speakers: "Meet our guest speakers..."
};

document.querySelectorAll(".popup-btn").forEach(button => {
    button.addEventListener("click", () => {
        const page = button.getAttribute("data-page");
        document.querySelector(".popup-text").innerHTML = content[page] || "Not Found";
        document.getElementById("popup").classList.add("visible");
    });
});

document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("popup").classList.remove("visible");
});
