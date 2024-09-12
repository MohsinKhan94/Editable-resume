document.addEventListener('DOMContentLoaded', () => {
    const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    const reeditButton = document.getElementById('reedit-btn') as HTMLButtonElement;
    const doneButton = document.getElementById('done-btn') as HTMLButtonElement; // Reference to the Done button

    resumeForm.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        // Get form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

        // Update resume output content
        (document.getElementById('output-name') as HTMLElement).textContent = name;
        (document.getElementById('output-email') as HTMLElement).textContent = `Email: ${email}`;
        (document.getElementById('output-education') as HTMLElement).textContent = `Education: ${education}`;
        (document.getElementById('output-skills') as HTMLElement).textContent = `Skills: ${skills}`;
        (document.getElementById('output-experience') as HTMLElement).textContent = `Experience: ${experience}`;

        // Show the resume output and hide the form
        resumeOutput.style.display = 'block';
        resumeForm.style.display = 'none';
        doneButton.style.display = 'block'; // Ensure Done button is shown initially
    });

    // Allow user to re-edit the form
    reeditButton.addEventListener('click', () => {
        resumeOutput.style.display = 'none';
        resumeForm.style.display = 'block';
        doneButton.style.display = 'block'; // Show Done button when re-editing
    });

    // When Done button is clicked, show the resume again
    doneButton.addEventListener('click', () => {
        resumeOutput.style.display = 'block';
        resumeForm.style.display = 'none';
        doneButton.style.display = 'none'; // Hide Done button after finishing editing
    });
});
