// Під'єднання фукнцій через об'єкти
const SplitStringIntoArray = require("./Task1-6/split_string_into_array")
const SortWordInAlphabeticalOrder = require("./Task1-6/sort_word_in_alphabetical_order")
const BiggestMutualDivider = require("./Task1-6/biggest_mutual_divider")
const ShuffleArray = require("./Task1-6/shuffle_array")
const days_of_month_and_year = require("./Task1-6/days_of_month_and_year")
const sort_array_of_users_by_field = require("./Task1-6/sort_array_of_users_by_field")

//Під'єднання модуля через об'єкти
const class_module = require("./class_module/module")

// Виклик функцій через методи об'єктів, які були під'єднанні через request, з тестовими даними

console.log('Task 1')
console.log(SplitStringIntoArray.SplitStringIntoArray('3231241 3121 32131'))

console.log('Task 2')
console.log(SortWordInAlphabeticalOrder.SortWordInAlphabeticalOrder('WordToSort'))

console.log('Task 3')
console.log(BiggestMutualDivider.BiggestMutualDivider(3, 6))

console.log('Task 4')
console.log(ShuffleArray.ShuffleArray([123, 321313, 101, 22231]))

console.log('Task 5')
console.log(days_of_month_and_year.days_of_month_and_year(1999, 10))

console.log('Task 6')
console.log(sort_array_of_users_by_field.sort_array_of_users_by_field([
    { name: 'Norman', surname: 'Peterson' },
    { name: 'Adam', surname: 'Henpeck' },
    { name: 'Anna', surname: 'Peterson' },
]))

//Task 7
console.log('Task 7')
let ports = []
let ships = []


class_module.AddPort('Odessa', [], ports)
class_module.AddPort('Singapore', [], ports)
class_module.AddPort('Shanghai', [], ports)

console.log(ports)

class_module.EditPort('Shanghai', ports, 'Shenzhen', [])

console.log(ports)

class_module.DeletePort('Shenzhen', ports)

console.log(ports)

console.log(class_module.FindPort('Singapore', ports))

class_module.AddShip(1356788, 'Container Ship', ships)
class_module.AddShip(3564332, 'Tanker Ship', ships)
class_module.AddShip(3554783, 'Naval Ship', ships)

console.log(ships)

class_module.EditShip(3564332, ships, 3564332, 'Offshore Ship')

console.log(ships)

class_module.DeleteShip(3564332, ships)

console.log(ships)

console.log(class_module.FindShip(3554783, ships))

class_module.AddDock(22312, 2, ports[0])
class_module.AddDock(35631, 5, ports[0])
class_module.AddDock(35431, 5, ports[0])

console.log(ports)
console.log(ports[0].docks)

class_module.DeleteDock(35631, ports[0])

console.log(ports)
console.log(ports[0].docks)

class_module.AddShip(1062932, 'Tanker Ship', ships)
class_module.AddShip(3132145, 'Tanker Ship', ships)

class_module.ShipArrival(ships[0], ports[0].docks[0])
class_module.ShipArrival(ships[1], ports[0].docks[0])
class_module.ShipArrival(ships[2], ports[0].docks[0])

console.log(ports[0].docks[0])

class_module.ShipDeparture(3554783, ports[0].docks[0])

console.log(ports[0].docks[0])

console.log(class_module.FindAllShipsInSpecificDock(ports[0], 22312))

console.log(typeof SplitStringIntoArray)