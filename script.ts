const submitButton = document.getElementById("submit")

submitButton?.addEventListener("click", function(event) {
    event.preventDefault();
    //type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experinceElement = document.getElementById("experience") as HTMLInputElement;
    const skillElement = document.getElementById("skill") as HTMLInputElement;


    if (nameElement && emailElement && phoneElement &&educationElement && experinceElement && skillElement)
{
    const name= nameElement.value;
    const email= emailElement.value;
    const phone= phoneElement.value;
    const education= educationElement.value;
    const experience= experinceElement.value;
    const skill= skillElement.value;
    

    const resumeOutput = `
    <h2> Resume </h2>
    <p><strong>Named:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>PhoneNumber:</strong> ${phone} </p>

    <h3> Education</h3>
    <p> ${experience}</p>

    <h3> skill</h3>
    <p> ${skill}</p>
   ` ;

const resumeOutputElement = document.getElementById("resumeOutput")
if (resumeOutputElement){
    resumeOutputElement.innerHTML =resumeOutput
}  else {
    console.error("one or two output elements are missing")
}
}})