function percentage_calculator() {
    let x = parseInt(document.getElementById('total-classes').value, 10);
    let y = parseInt(document.getElementById('total-attend').value, 10);
    let z = parseFloat(document.getElementById('percentage').value);

    if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y < 0 || z <= 0) {
        document.getElementById("classes").textContent = "Please enter valid inputs.";
        document.getElementById("weeks").textContent = "";
        return;
    }

    let p = (y / x) * 100;

    if (p < z) {
        // Calculate the number of classes needed to meet the desired percentage
        let requiredClasses = ((z / 100) * x - y) / ((100 - z) / 100);
        document.getElementById("classes").textContent = "You need to attend " + requiredClasses.toFixed(2) + " more classes.";
        document.getElementById("weeks").textContent = "That's " + (requiredClasses / 22).toFixed(2) + " weeks.";
    } else {
        // Calculate how many days the student can be absent and still maintain the desired percentage
        let maxAbsentDays = ((y * 100) - (z * x)) / z;
        document.getElementById("classes").textContent = "You have already achieved the desired percentage.";
        document.getElementById("weeks").textContent = "You can be absent for " + maxAbsentDays.toFixed(2) + " more classes.";
    }
}


