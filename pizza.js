/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/
var order11821 = {
	customer:"James Franko",
 	address: "2155 E Lake Dr",
 	city: 	 "Seatte",
 	state:   "WA",
 	zipcode: "11310",
 	pizza: {
 		crust: 	    "thin",
 		pizzasauce: "robust marinara",
 		cheese: 	"regular",
 		},
 	toppings:{
 		veggies: "olives, green peppers",
 		meats:   "pepperoni, ham, sausage",
 		},
 	sideitems:   "breadsticks, bbq wings 6 pieces ",
 	sauces:      "ranch",
 	specialinstructions: "please cut into squares",
 	paymenttype: "cash",
 	storeid:     "112"
};

var order11372 = {
	name:    "Justin Bieber",
	address: "1801 W Rodeo Dr",
	city:    "Beverly Hills",
	state:   "CA",
	zipCode: "91833",
	pizza: {
  		crust:      "stuffed crust",
  		pizzaSauce: "creamy garlic alfredo",
  		cheese:     "double",
  		},
  	toppings: {
    	veggies: "onion, anchovies, mushrooms",
    	meats:   "chicken, bacon",
    	},
	sideItems:   "double fudge brownie dessert",
	sauces:      "bbq, garlic sauce",
	specialInstructions: "call 815 at the gate",
	paymentType: "credit card",
	storeId:     "382"
};

/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/
 var currentOrders = {
 	order11821:{
 		customer:"James Franko",
 	address: "2155 E Lake Dr",
 	city: 	 "Seatte",
 	state:   "WA",
 	zipcode: "11310",
 	pizza: {
 		crust: 	    "thin",
 		pizzasauce: "robust marinara",
 		cheese: 	"regular",
 		},
 	toppings:{
 		veggies: "olives, green peppers",
 		meats:   "pepperoni, ham, sausage",
 		},
 	sideitems:   "breadsticks, bbq wings 6 pieces ",
 	sauces:      "ranch",
 	specialinstructions: "please cut into squares",
 	paymenttype: "cash",
 	storeid:     "112"
 	},
 order11372:{
	name:    "Justin Bieber",
	address: "1801 W Rodeo Dr",
	city:    "Beverly Hills",
	state:   "CA",
	zipCode: "91833",
	pizza: {
  		crust:      "stuffed crust",
  		pizzaSauce: "creamy garlic alfredo",
  		cheese:     "double",
  		},
  	toppings: {
    	veggies: "onion, anchovies, mushrooms",
    	meats:   "chicken, bacon",
    	},
	sideItems:   "double fudge brownie dessert",
	sauces:      "bbq, garlic sauce",
	specialInstructions: "call 815 at the gate",
	paymentType: "credit card",
	storeId:     "382"
 }
 }
/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/
console.log(currentOrders)