document.addEventListener('DOMContentLoaded', function () {
    var resumeForm = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    var reeditButton = document.getElementById('reedit-btn');
    var doneButton = document.getElementById('done-btn'); // Reference to the Done button
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        // Update resume output content
        document.getElementById('output-name').textContent = name;
        document.getElementById('output-email').textContent = "Email: ".concat(email);
        document.getElementById('output-education').textContent = "Education: ".concat(education);
        document.getElementById('output-skills').textContent = "Skills: ".concat(skills);
        document.getElementById('output-experience').textContent = "Experience: ".concat(experience);
        // Show the resume output and hide the form
        resumeOutput.style.display = 'block';
        resumeForm.style.display = 'none';
        doneButton.style.display = 'block'; // Ensure Done button is shown initially
    });
    // Allow user to re-edit the form
    reeditButton.addEventListener('click', function () {
        resumeOutput.style.display = 'none';
        resumeForm.style.display = 'block';
        doneButton.style.display = 'block'; // Show Done button when re-editing
    });
    // When Done button is clicked, show the resume again
    doneButton.addEventListener('click', function () {
        resumeOutput.style.display = 'block';
        resumeForm.style.display = 'none';
        doneButton.style.display = 'none'; // Hide Done button after finishing editing
    });
});
