//console.log("JavaScript file is loaded successfully!");
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    const convertBtn = document.getElementById("convertBtn");
    const calculateBtn = document.getElementById("calculateBtn");

    if (convertBtn) {
        console.log("Convert button found!");
        convertBtn.addEventListener("click", function () {
            console.log("Convert button clicked!");
        });
    } else {
        console.error("Convert button not found!");
    }

    if (calculateBtn) {
        console.log("Calculate button found!");
        calculateBtn.addEventListener("click", function () {
            console.log("Calculate button clicked!");
        });
    } else {
        console.error("Calculate button not found!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is running!");

    const calculateBtn = document.getElementById("calculate-btn");

    if (calculateBtn) {
        console.log("Calculate button found!");
        calculateBtn.addEventListener("click", function () {
            console.log("Calculate button clicked!");

            const homePrice = parseFloat(document.getElementById("homePrice").value);
            const downPayment = parseFloat(document.getElementById("downPayment").value);
            const monthlyRent = parseFloat(document.getElementById("monthlyRent").value);
            const rentDuration = parseFloat(document.getElementById("rentDuration").value);
            const netSalary = parseFloat(document.getElementById("netSalary").value);

            if (isNaN(homePrice) || isNaN(downPayment) || isNaN(monthlyRent) || isNaN(rentDuration) || isNaN(netSalary)) {
                document.getElementById("result").innerText = "Please enter valid numbers.";
                return;
            }

            const totalRentCost = monthlyRent * 12 * rentDuration;
            const totalBuyCost = homePrice - downPayment;

            let decision = totalBuyCost <= totalRentCost ? "Buying is better in the long run." : "Renting might be a better option for now.";

            document.getElementById("result").innerText = `Total Rent Cost: $${totalRentCost.toFixed(2)} | Total Buy Cost: $${totalBuyCost.toFixed(2)} \n ${decision}`;
        });
    } else {
        console.error("Calculate button not found!");
    }
});
