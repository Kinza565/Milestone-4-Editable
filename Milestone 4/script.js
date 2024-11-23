"use strict";
var _a;
(_a = document.getElementById("ResumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Helper function to safely get an element by ID
    const getElement = (id) => document.getElementById(id);
    // Fetch the input elements using the helper function
    const nameElement = getElement("fullName");
    const emailElement = getElement("email");
    const phoneElement = getElement("phoneNumber");
    const educationElement = getElement("education");
    const experienceElement = getElement("Experience");
    const skillsElement = getElement("skills");
    // Ensure all elements are found and non-null
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        // Create resume output with editable fields
        const resumeOutput = `
          <h2>Resume</h2>
          <p><b>Name:</b> <span class="editable" contenteditable="true">${name}</span></p>
          <p><b>Email:</b> <span class="editable" contenteditable="true">${email}</span></p>
          <p><b>Phone:</b> <span class="editable" contenteditable="true">${phone}</span></p>
  
          <h3>Education</h3>
          <p class="editable" contenteditable="true">${education}</p>
  
          <h3>Experience</h3>
          <p class="editable" contenteditable="true">${experience}</p>
  
          <h3>Skills</h3>
          <p class="editable" contenteditable="true">${skills}</p>
      `;
        // Display the generated resume in the output div
        const resumeOutputElement = getElement("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Add focus effect to editable fields
            const editableFields = resumeOutputElement.querySelectorAll(".editable");
            editableFields.forEach(field => {
                field.addEventListener("focus", () => {
                    field.style.border = "1px dashed #4CAF50";
                });
                field.addEventListener("blur", () => {
                    field.style.border = "none";
                });
            });
        }
        else {
            console.error("Error: Cannot find resumeOutput element");
        }
    }
    else {
        console.error("One or more input elements not found");
    }
});
