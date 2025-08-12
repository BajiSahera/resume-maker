document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const summary = document.getElementById("summary").value;
  const skills = document.getElementById("skills").value.split(",");
  const experience = document.getElementById("experience").value;
  const education = document.getElementById("education").value;
  const template = document.getElementById("templateSelect").value;

  // Generate resume HTML
  const output = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <h3>Summary</h3>
    <p>${summary}</p>
    <h3>Skills</h3>
    <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Education</h3>
    <p>${education}</p>
  `;

  // Apply template and render resume
  const resumeOutput = document.getElementById("resumeOutput");
  resumeOutput.className = `resume ${template}`;
  resumeOutput.innerHTML = output;
});

// PDF download
document.getElementById("downloadBtn").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Get plain text from resume
  const resumeText = document.getElementById("resumeOutput").innerText;

  // Add text to PDF
  const lines = doc.splitTextToSize(resumeText, 180);
  doc.text(lines, 10, 10);

  // Save PDF
  doc.save("resume.pdf");
});
