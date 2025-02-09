console.log(getMenu("Monday", 450, false));   
console.log(getMenu("Friday", 1200, false));
console.log(getMenu("Sunday", 550, true));
console.log(getMenu("Tuesday", 250, false));
console.log(getMenu("Wednesday", 600, false));
console.log(getMenu("Thursday", 800, true));   

function getMenu(day, budget, wantsDessert) {
    let output = "";
    
    if (day === "Monday") {
        if (budget < 500) {
            output = "Deal 1";
        } else if (budget >= 500 && budget <= 1000) {
            output = "Deal 2";
        } else if (budget > 1000) {
            output = "Deal 1 & Deal 2";
        }
    } else if (day === "Friday") {
        if (budget >= 1000) {
            output = "Buffet";
        } else {
            output = "Regular Menu";
        }
    } else if (day === "Sunday") {
        if (budget >= 500 && wantsDessert) {
            output = "Deal & Dessert";
        } else {
            output = "Deal";
        }
    } else if (day === "Tuesday") {
        if (budget < 300) {
            output = "Tuesday Special Deal 1";
        } else if (budget >= 300 && budget < 700) {
            output = "Tuesday Special Deal 2";
        } else {
            output = wantsDessert ? "Tuesday Premium Deal & Dessert" : "Tuesday Premium Deal";
        }
    } else if (day === "Wednesday") {
        if (budget < 300) {
            output = "Wednesday Special Deal 1";
        } else if (budget >= 300 && budget < 700) {
            output = "Wednesday Special Deal 2";
        } else {
            output = wantsDessert ? "Wednesday Premium Deal & Dessert" : "Wednesday Premium Deal";
        }
    } else if (day === "Thursday") {
        if (budget < 300) {
            output = "Thursday Special Deal 1";
        } else if (budget >= 300 && budget < 700) {
            output = "Thursday Special Deal 2";
        } else {
            output = wantsDessert ? "Thursday Premium Deal & Dessert" : "Thursday Premium Deal";
        }
    } else if (day === "Saturday") {
        if (budget < 300) {
            output = "Saturday Special Deal 1";
        } else if (budget >= 300 && budget < 700) {
            output = "Saturday Special Deal 2";
        } else {
            output = wantsDessert ? "Saturday Premium Deal & Dessert" : "Saturday Premium Deal";
        }
    }

    return output;
}