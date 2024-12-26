const resetBtn = document.querySelector("#reset")

resetBtn.addEventListener("click", reset)

function calculateTip(event) {
    event.preventDefault();
    
    // Get the bill
    const bill = document.querySelector("#bill")
    const bill_error = document.querySelector("#bill-error")
    
    
    if (bill.value == "" || !Number.isInteger(Number(bill.value))) {
        bill_error.innerHTML = "Enter a valid amount"
    } else {
        bill_error.innerHTML = null
    }
    

    const tip_percentage = document.querySelector("#tip-percentage")
    const retrieve_tip_percentage = retrieveTipPercentage(tip_percentage.children)
    const tip_error = document.querySelector("#tip-error")


    if (!Number.isInteger(retrieve_tip_percentage)) {
        tip_error.innerHTML = "Please select an option"
    } else {
        tip_error.innerHTML = null
    }

    // Get the number of people
    const numberOfPeople = document.querySelector("#number-of-people")
    const no_of_people_error = document.querySelector("#no-of-people-error")


    if (numberOfPeople && !Number.isInteger(Number(numberOfPeople.value))) {
        no_of_people_error.innerHTML = "Enter a valid number"
    } else if (!isPositive(numberOfPeople.value)) {
        const no_of_people_error = document.querySelector("#no-of-people-error")
        no_of_people_error.innerHTML = "Can't be zero"
    } else {
        no_of_people_error.innerHTML = null
    }

    const tip_amount = document.querySelector(".tip-amount")

    tip_amount.innerHTML = Number((retrieve_tip_percentage / 100) * Number(bill.value)).toPrecision(3)

    const total_amount = document.querySelector(".total-amount")

    total_amount.innerHTML = Number(tip_amount.innerHTML / Number(numberOfPeople.value)).toPrecision(3)
}


function isPositive(number) {
    return number > 0
}

function retrieveTipPercentage(elements) {
    for (const element of elements) {
        if (element.classList.contains("active")) {
            if (element.tagName == "DIV") {
                console.log(element.children[0].value);

                return Number(element.children[0].value)
            } else {
                let percentage = element.value.slice(0, -1)

                return Number(percentage)
            }
        }
    }
}

function setActiveInput(input) {
    removeActiveInputs()

    // Add active class to the clicked input
    input.classList.add('active');
}


function removeActiveInputs() {
    const inputs = document.querySelector("#tip-percentage");

    // Loop through the existing inputs
    for (const i of inputs.children) {
        i.classList.remove("active")
    }

}


function reset(event){
    // event.preventDefault()
    document.querySelector("form").reset();


    let bill = document.querySelector("#bill")
    let numberOfPeople = document.querySelector("#number-of-people")

    bill.value = 0
    numberOfPeople.value = 0

    removeActiveInputs()

    let tip_amount = document.querySelector(".tip-amount")
    let total_amount = document.querySelector(".total-amount")

    tip_amount.innerHTML = "0.00"
    total_amount.innerHTML = "0.00"
    console.log("reset");
    
}