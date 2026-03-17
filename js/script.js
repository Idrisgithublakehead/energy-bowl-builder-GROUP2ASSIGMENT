// assigment 2 
// Student 1 idris zahir - form handling
// Student 2 Tugudur Natsagdorj 200585649
class EnergyBowl {
    constructor(base, fruits, toppings, protein, sweetener, size, instructions) {
        this.base = base;
        this.fruits = fruits;
        this.toppings = toppings;
        this.protein = protein;
        this.sweetener = sweetener;
        this.size = size;
        this.instructions = instructions;
    }

    // method in order to describe the bowl
    getDescription() {
        return `
        <strong>Base:</strong> ${this.base}<br>
        <strong>Fruits:</strong> ${this.fruits.join(", ")}<br>
        <strong>Toppings:</strong> ${this.toppings.join(", ")}<br>
        <strong>Protein:</strong> ${this.protein}<br>
        <strong>Sweetener:</strong> ${this.sweetener}<br>
        <strong>Size:</strong> ${this.size}<br>
        <strong>Instructions:</strong> ${this.instructions || "None"}
        `;
    }

    // calculate prisze
    calculatePrice() {
        let price = 5; // base

        // size pricing
        if (this.size === "Medium") price += 2;
        if (this.size === "Large") price += 4;

        // add-ons
        price += this.fruits.length * 1;
        price += this.toppings.length * 0.5;

        if (this.protein !== "None") price += 2;
        if (this.sweetener !== "None") price += 1;

        return price.toFixed(2);
    }
}


// first we can listen if the user actually submits the form
document.getElementById("bowlForm").addEventListener("submit", function(event) {
    const bowl = new EnergyBowl(
    base,
    fruits,
    toppings,
    protein,
    sweetener,
    size,
    instructions
);
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


