
document.addEventListener('DOMContentLoaded', () => {
  
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('addSkillModal');
    const closeModalBtn = document.querySelector('.close-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const skillForm = document.getElementById('skillForm');
    const openModal = () => {
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modal.style.display = 'none';
        skillForm.reset();
    };
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });

    skillForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const category = document.getElementById('category').value;
        const skillName = document.getElementById('skillName').value;
        const proficiency = document.getElementById('proficiency').value;
        const newSkill = document.createElement('div');
        newSkill.classList.add('skill');

        newSkill.innerHTML = `
            <div class="skill-info">
                <span>${skillName}</span>
                <span>${proficiency}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: ${proficiency}%"></div>
            </div>
        `;
        let targetCard;
        if (category === 'frontend') {
            targetCard = document.querySelector('.skill-card:nth-child(1)');
        } else if (category === 'backend') {
            targetCard = document.querySelector('.skill-card:nth-child(2)');
        } else if (category === 'languages') {
            targetCard = document.querySelector('.skill-card:nth-child(3)');
        }

        if (targetCard) {
            targetCard.appendChild(newSkill);
        }
        closeModal();
    });
});

const menuToggle = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});