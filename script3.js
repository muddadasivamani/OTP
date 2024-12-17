// script.js
function generateOTP() {
    const otpLength = 6; // Number of digits in OTP
    let otp = "";
    
    for (let i = 0; i < otpLength; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // Generates a random digit (0-9)
      otp += randomDigit;
    }
    
    // Display the generated OTP in the HTML
    document.getElementById("otp-display").innerText = otp;
  }
  
