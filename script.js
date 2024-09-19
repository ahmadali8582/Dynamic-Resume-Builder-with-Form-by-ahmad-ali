var submitButton = document.getElementById("submit");
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experinceElement = document.getElementById("experience");
    var skillElement = document.getElementById("skill");
    if (nameElement && emailElement && phoneElement && educationElement && experinceElement && skillElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experinceElement.value;
        var skill = skillElement.value;
        var resumeOutput = "\n    <h2> Resume </h2>\n    <p><strong>Named:</strong> ".concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>PhoneNumber:</strong> ").concat(phone, " </p>\n\n    <h3> Education</h3>\n    <p> ").concat(experience, "</p>\n\n    <h3> skill</h3>\n    <p> ").concat(skill, "</p>\n   ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("one or two output elements are missing");
        }
    }
});
