// assigment 2 
// Student 1 idris zahir - form handling


// first we can listen if the user actually submits the form
document.getElementById("bowlForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // after that we can Get the  base selection
    const base = document.getElementById("base").value;

    
    const fruits = [];
    document.querySelectorAll('input[name="fruits"]:checked').forEach((item) => {
        fruits.push(item.value);
    });

    
    const toppings = [];
    document.querySelectorAll('input[name="toppings"]:checked').forEach((item) => {
        toppings.push(item.value);
    });

    // then we can grab the  other inputs the user choses
    const protein = document.getElementById("protein").value;
    const sweetener = document.getElementById("sweetener").value;
    const size = document.querySelector('input[name="size"]:checked')?.value;
    const instructions = document.getElementById("instructions").value;

   
    if (!base) {
        alert("Please select a base.");
        return;
    }

    if (fruits.length === 0) {
        alert("Please select at least one fruit.");
        return;
    }

    if (!size) {
        alert("Please select a bowl size.");
        return;
    }

    console.log("Base:", base);
    console.log("Fruits:", fruits);
    console.log("Toppings:", toppings);
    console.log("Protein:", protein);
    console.log("Sweetener:", sweetener);
    console.log("Size:", size);
    console.log("Instructions:", instructions);


});