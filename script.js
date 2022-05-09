function compute()
{
    // Assign variables to input values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Validate Principal Input
    if (principal < 1) {
        alert("please enter positive value");
        document.getElementById("principal").focus()
        return false;
    }

    // Compute Output 
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    // Output to HTML
    document.getElementById("result").innerHTML="\<br\>" + 
    "If you deposit " + "\<span class=\"high\"\>" + principal + "\<\/span\>" + "\<br\>" +
    "At an interest rate of " + "\<span class=\"high\"\>" + rate + "%\<\/span\>" + "\<br\>" +
    "You will receive an ammount of " + "\<span class=\"high\"\>" + interest + "\<\/span\>" + "\<br\>" +
    "In the year " + "\<span class=\"high\"\>" + year + "\<\/span\>" + "\<br\>"


    
}

//Update the value next to the slider so that the user can see what value the slider corispondes to
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}