function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        document.getElementById("message").textContent = "All fields are required.";
        return;
    }

    // Demo behavior before backend integration
    document.getElementById("message").style.color = "green";
    document.getElementById("message").textContent = "Connecting... Please wait";

    setTimeout(() => {
        window.location.href = "https://google.com"; // simulate login redirect
    }, 1800);
}

function showHelp() {
    alert("Please enter your login details. Contact support if your account is inactive.");
}

function showTerms() {
    alert("By accessing this network, you agree to comply with institution usage policy.");
}
