// rlp.js
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('mainNav');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const top = section.offsetTop - nav.offsetHeight;
            const bottom = top + section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
                navLinks[index].classList.add('active');
            } else {
                navLinks[index].classList.remove('active');
            }
        });
    });
});

    function checkEligibility() {
        var age = document.getElementById('age').value;
        var weight = document.getElementById('weight').value;
        var medicalHistory = document.getElementById('medicalHistory').value;

        // Perform eligibility checks based on your criteria
        // Example: Check age, weight, and medical history

        // Example eligibility criteria (you can customize this)
        if (age >= 18 && weight >= 50 && !medicalHistory.includes('serious illness')) {
            document.getElementById('result').innerText = 'You are eligible to donate blood!';
        } else {
            document.getElementById('result').innerText = 'Sorry, you are not eligible to donate blood.';
        }
    }
