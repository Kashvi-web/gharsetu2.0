function convertArea() {
    console.log("Convert button clicked! Running conversion function...");

    const inputAreaField = document.getElementById("inputArea");
    const fromUnitField = document.getElementById("fromUnit");
    const toUnitField = document.getElementById("toUnit");
    const resultField = document.getElementById("conversionResult");

    if (!inputAreaField || !fromUnitField || !toUnitField || !resultField) {
        console.error("One or more elements are missing!");
        return;
    }

    const inputArea = parseFloat(inputAreaField.value);
    let fromUnit = fromUnitField.value.toLowerCase().replace(" ", "_");
    let toUnit = toUnitField.value.toLowerCase().replace(" ", "_");

    console.log("From Unit:", fromUnit);
    console.log("To Unit:", toUnit);

    if (isNaN(inputArea)) {
        resultField.innerText = "Please enter a valid number.";
        return;
    }

    const conversionFactors = {
        "square_meter": 1,
        "square_kilometer": 1000000,
        "square_feet": 0.092903,   // Fixed key to match dropdown
        "square_yard": 0.836127,
        "acre": 4046.86,
        "hectare": 10000
    };

    if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors)) {
        resultField.innerText = "Invalid conversion units.";
        return;
    }

    let areaInSquareMeters = inputArea * conversionFactors[fromUnit];
    let convertedArea = areaInSquareMeters / conversionFactors[toUnit];

    resultField.innerText = 
        `${inputArea} ${fromUnit.replace("_", " ")} = ${convertedArea.toFixed(4)} ${toUnit.replace("_", " ")}`;
}
