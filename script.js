const submitBtn = document.getElementById("convert-btn");
const resultText = document.getElementById("result-paragraph");
const resultDiv = document.getElementById("output");
const romanNums = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

const convertToRoman = (input) => {
    const nums = Object.keys(romanNums);
    let i = nums.length - 1;
    let result = '';
    if (input > 0) {
        while (input > 0) {
            if (input >= nums[i]) {
                result += romanNums[nums[i]];
                input -= nums[i];
            } else {
                i--;
            }
        }
    }
    return result;
};

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const userInput = document.getElementById("number").value;
    if(/[0-9]/g.test(userInput) && userInput > 0 && userInput < 4000){
        resultDiv.style.display = "block";
        resultText.style.color = "#fff";
        resultDiv.style.backgroundColor = "#ffffff22";
        resultDiv.style.border = "1px solid #fff";
        resultText.style.fontFamily = "serif";
        resultText.innerText = convertToRoman(parseInt(userInput));
    }else if(!/[0-9]/g.test(userInput)){
        resultDiv.style.display = "block";
        resultText.style.color = "#850000";
        resultDiv.style.backgroundColor = "#ffadad";
        resultDiv.style.border = "1px solid #850000";
        resultText.innerText = "please enter a valid number";
        resultText.style.fontFamily = "sans-serif";
    }else if(userInput <= 0){
        resultDiv.style.display = "block";
        resultText.style.color = "#850000";
        resultDiv.style.backgroundColor = "#ffadad";
        resultDiv.style.border = "1px solid #850000";
        resultText.style.fontFamily = "sans-serif";
        resultText.innerText = "Please enter a number greater than or equal to 1.";
    }else if(userInput >= 4000){
        resultDiv.style.display = "block";
        resultText.style.color = "#850000";
        resultDiv.style.backgroundColor = "#ffadad";
        resultDiv.style.border = "1px solid #850000";
        resultText.style.fontFamily = "sans-serif";
        resultText.innerText = "Please enter a number less than or equal to 3999.";
    }
})