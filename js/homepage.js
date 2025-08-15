document.getElementById("symptomForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const symptoms = document.getElementById("symptoms").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const location = document.getElementById("location").value;

  // Placeholder AI output
  document.getElementById("predictionResult").innerHTML = `
        <p>Possible condition based on symptoms: <strong>${symptoms}</strong></p>
        <p>Age: ${age}, Gender: ${gender}, Location: ${location}</p>
    `;

  // Placeholder doctor list
  document.getElementById("doctorList").innerHTML = `
        <ul>
            <li>Dr. John Doe - General Physician</li>
            <li>City Hospital - Emergency</li>
        </ul>
    `;
});

document.getElementById("logoutBtn").addEventListener("click", function () {
  alert("You have been logged out!");
  // Redirect logic can go here
});
