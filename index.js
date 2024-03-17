function countVowelsAndConsonants() {
    const inputString = document.getElementById('inputString').value.toLowerCase();
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }

    const resultElement = document.getElementById('result1');
    resultElement.innerHTML = `
        <p>Number of vowels: ${vowelCount}</p>
        <p>Number of consonants: ${consonantCount}</p>
    `;
}

function checkPalindrome() {
    var input = document.getElementById('numberInput').value;
    var result = document.getElementById('result2');

    if (isPalindrome(input)) {
        result.innerText = "Yes, it's a palindrome!";
    } else {
        result.innerText = "No, it's not a palindrome.";
    }
}

function isPalindrome(input) {
    var cleaned = input.replace(/\D/g, '');
    
    var reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}

function calculateTotal() {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(subtotal) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers.");
        return;
    }

    var tipAmount = (subtotal * tipPercentage) / 100;
    var total = subtotal + tipAmount;

    document.getElementById('total').innerText = "Total Amount (including tip): $" + total.toFixed(2);
}
