```markdown
# TypeScript Practice Repository

This repository is dedicated to practicing TypeScript through various tasks.

## Tasks

[Task 1: Object typing](tasks/task1)
[Task 2: Function typing](tasks/task2)
[Task 3: Creating typeguard of response](tasks/task3)
[Task 4: shopping cart](tasks/task4)
Create a website shopping cart (Cart) that includes a list of added products (Product) and delivery parameters (Delivery). Implement the following methods for Cart:
- Add a product to the cart.
- Remove a product from the cart by ID.
- Calculate the total cost of items in the cart.
- Set delivery options.
- Checkout - return confirmation if there are products and delivery parameters.
  Product: id, name, and price.
  Delivery: can be either home delivery (date and address) or delivery to a pickup point (date = Today and store ID).
[Task 5: Abstract logger](tasks/task5)
  You need to implement an abstract class Logger with two methods:
  an abstract method - Log(message): void
  printDate - a method that prints the date to the console.
  You also need to create a concrete class that would have a method LogWithDate,
  which prints the date first and then the provided message.
[Task 6: Function generic](tasks/task6)
  You need to write a function toString that takes any type and returns its string representation. If it can't, then it returns undefined.
[Task 7: Function sort with generic](tasks/task7)
  You need to write a sorting function for any objects that have an 'id' property, sorting them in both descending and ascending order.
[Task 8: Grouping function](tasks/task8)
  You need to write a grouping function that takes an array of objects and a key, performs grouping based on the specified key, and returns the grouped object.
  [Task 9: Mapping types](tasks/task9)
Create a type to get the form validation results, or select a form type.
  [Task 10: Decorator](tasks/task10)
A decorator that adds a property
createdAt to the class, capturing the creation date. 
  [Task 11: Error catch decorator](tasks/task11)
A decorator that catching errors.
  [Task 12: Utils for completing commands]


