function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected content section
    document.getElementById(sectionId).classList.add('active');
}
