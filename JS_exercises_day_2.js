
// Main Class to store operations in
class Restaurant {
   
    orders = []

    pricesOfOrders = []

    customers = []

    // pushes the ordered dish into "orders", the Price into "pricesOfOrders", the customer into "customers"
    orderDish(input, customer) {
        return this.orders.push(input.name),
               this.pricesOfOrders.push(input.price),
               this.customers.push(customer.toLowerCase())}

    // Create a list of orders (gets printed)
    printOrders() {
        for (let i = 0; i < this.orders.length; i++) {
            console.log("Order #" + (i + 1) + ": " + this.orders[i])
        }
    }

    // Create a bill with orders and price, plus total (gets printed)
    printCheck() {

        let total = 0

        for (let i = 0; i < this.orders.length; i++) {
            console.log("Order #" + (i + 1) + ": " + this.orders[i] + " - " + this.pricesOfOrders[i])
            total += this.pricesOfOrders[i]
        }
        console.log("Total: " + total)
    }

    // Create a bill for one specific Customer, his orders and his total (gets printed)
    printPersonalCheck(customer) {

        let total = 0

        let number = 1

        // logging the Name of the customer with a capital first letter
        console.log(customer[0].toUpperCase() + customer.slice(1) + ":")

        // logging the orders correlating with the "customers" array
        for (let i = 0; i < this.orders.length; i++) {
            if (this.customers[i].toLowerCase() === customer.toLowerCase()) {
                console.log("Order #" + (number) + ": " + this.orders[i] + " - " + this.pricesOfOrders[i])
                    total += this.pricesOfOrders[i]
                    number += 1
            }
        }

        // logging the customers total
        console.log("Total: " + total)
        console.log("-----------------------")
    }
}

// Class to create Dishes and methods that those dishes can use
class Dish {
    constructor(name, price, ingredients) {
        this.name = name
        this.ingredients = ingredients
        this.price = price
    }
    // Calculates the cost of production of the Dish
    cost() {
        let DishCost = 10

        for (let i = 0; i < this.ingredients.length; i++) {
            DishCost += this.ingredients[i][1]
        }
        return DishCost
    }   
    // Calculates the profit the restaurant has left
    profit() {
        return this.price - this.cost() 
    }
}

// Class to create Ingredients
class Ingredient {
    constructor(name, cost) {
        return [name, cost]
    }
}
//-------------------------------------------------------------------------------------------------------
// Creating Instance of Restaurant
let restaurant = new Restaurant

// Creating Instances of Class "Ingredient" to make separate ingretients
const cheese = new Ingredient("Cheese", 5)
const tomato = new Ingredient("Tomato", 2)
const dough = new Ingredient("Dough", 2)
const meat = new Ingredient("Meat", 8)
const spice = new Ingredient("Spice", 2)
const vodka = new Ingredient("Vodka", 3)

// Creating Instances of Class "Ingredient" to make separate ingretients
const pizza = new Dish("Pizza", 32, [cheese, tomato, dough, meat])
const salad = new Dish("Salad", 30, [spice, tomato, meat])
const burger = new Dish ("Burger", 32, [meat, tomato, spice, dough])
const bloodyMary = new Dish ("bloodyMary", 17, [tomato, vodka])

// using the various objects and their inherited methods to perform tasks

// console.log(tomato)
// console.log(pizza)
//  console.log(pizza.cost())
//  console.log(bloodyMary.profit())

restaurant.orderDish(pizza, "mark")
restaurant.orderDish(salad, "john")
restaurant.orderDish(salad, "mark")
restaurant.orderDish(burger, "john")
restaurant.orderDish(bloodyMary, "john")

// restaurant.printOrders()
// restaurant.printCheck()
// console.log(restaurant.customers)
// console.log(restaurant.orders)
// // console.log(restaurant.pricesOfOrders)
restaurant.printPersonalCheck("mark")
restaurant.printPersonalCheck("john")