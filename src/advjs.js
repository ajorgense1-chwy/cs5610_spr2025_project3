class Animal {

    constructor(name, type) {
        this.name = name;
        this.type = type;
    }


    greeting() {
        if(this.type === "cat") {
            return "meow"
        } else {
            return "hello, my name is " + this.name
        }

    }

}

const myCat = new Animal("bobo", "cat");
const myDog = new Animal("midnight", "dog");

Animal.prototype.greeting = function() {
    return "I was hacked!"
}

console.log(myCat.greeting())
console.log(myDog.greeting())

const refrigerator = [
    'water', 'fruit', 'leftovers'
]

const foodItem = 'apple'

function addNewFood(foodStorageDevice, food) {
    foodStorageDevice.push(food)
}

function updateFood(food) {
    food = "orange"
}

updateFood(foodItem)

console.log(foodItem)

addNewFood(refrigerator, foodItem)

console.log(refrigerator)


let favoriteFood = 'apple'

const today = 'thursday'

if(today === 'tuesday') {
    favoriteFood = 'banana';
}

const mostFavoriteFood = today === 'tuesday' ? 'banana' : 'apple';

const huntersFridge = {
    apples: 'red',
    banana: 'yellow',
    grape: 'purple'
}

const julezFridge = {
    juice: 'lemonade',
    spindrift: 'raspberry',
    grape: 'green'
}

const sharedFridge = {
    ...huntersFridge,
    ...julezFridge,
    grape: 'yellow'
}

console.log(sharedFridge);

function whatColorFruit(fridge) {

    const {
        apple, grape, banana
    } = fridge

    return "My apple is " + apple + " and my grape is " + grape + " and my banana is " + banana
}

console.log(whatColorFruit(huntersFridge))


function exclaim(word) {
    return word + "!";
}

console.log(exclaim("yay"))

const exclaimArrow = (word) => word + "!"

console.log(exclaimArrow("double yay"))

const excitingFoods = ['chocolate', 'wine', 'ice cream']

const otherExcitingFoods = excitingFoods.map(exclaim)
// for(let i = 0; i < excitingFoods.length; i++) {
//     otherExcitingFoods.push(exclaimArrow(excitingFoods[i]))
// }

console.log(otherExcitingFoods)

const [firstFavoriteExcitingFood, secondFavoriteExcitingFood, ...moreFavoriteExcitingFoods] = otherExcitingFoods;

firstFavoriteExcitingFood
secondFavoriteExcitingFood
moreFavoriteExcitingFoods

let yourFavTeacher = 'hunter';

function greetFavTeacher() {
    return "hello, professor " + yourFavTeacher;
}

const greeting = greetFavTeacher()

yourFavTeacher = 'bruce';

console.log(greeting)


const fruitObject = {
    banana: 'yellow', 
    apple: 'red',
    numberOfBananas: 1,
    veggies: {


    }


}

fruitObject['banana'] === fruitObject.banana 

const fruitKey = 'banana';
fruitObject[fruitKey]


const someAnimes = ['my hero academia', 'dandadan', 'frieren', 'drgaon ball z']

const [firstAnime, secondAnime, ...otherAnimes] = someAnimes;

firstAnime === 'my hero academia'
secondAnime === 'dandadan';
otherAnimes === ['frieren', 'drgaon ball z']

function randomNumber() {
    return 5;
}

const someOtherRandomNumber = function() {
    return 8;
}

const someSomeOtherRandomNumber = () => 4;



someSomeOtherRandomNumber() === 4


{/* <button onClick={() => doFunction()} ></button> */}




if("") {
    console.log("don't show!")
} else {
    console.log("do show :)")
}


