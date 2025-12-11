document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlist');
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = (form.querySelector('#email') || {}).value || '';
        const message = email
            ? `Thanks, ${email}! You're on the Attune waitlist.`
            : 'You’re on the Attune waitlist.';
        alert(message);
        form.reset();
    });
});
