document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); 
    } else {
        alert("Please fill out all fields.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        formMessage.innerHTML = "Sending message... ⏳";
        formMessage.style.color = "#007bff"; // Blue color while sending

        const formData = new FormData(this);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                formMessage.innerHTML = "Message sent successfully! ✅";
                formMessage.style.color = "green";
                contactForm.reset();
            } else {
                formMessage.innerHTML = "Something went wrong. ❌ Please try again.";
                formMessage.style.color = "red";
            }
        } catch (error) {
            console.error("Error:", error);
            formMessage.innerHTML = "Network error. Please try again later. ❌";
            formMessage.style.color = "red";
        }
    });
});
