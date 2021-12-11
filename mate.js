1
declareVariables.js
const age = 31;

commentCode.js
const uncommented = 'release me immediately!!!';
2
helloWorld.js
const greeting = 'Hello, world!';
console.log(greeting);
2
assignValues.js
const brand = 'Toyota';
const price = 22500;
const isSedan = true;
const wings = undefined;
const owner = null;

4
declareBoolean.js
const isWaterHot = true; 

canStayHome.js
const isHoliday = true;
const isVacation = false;
const canStayHome = isHoliday || isVacation; // don't change this line

makeTea.js
const isWaterHot = true;
const haveTea = false;
const canMakeTea = isWaterHot && haveTea; // don't change this line

makeCake.js
const hasEggs = true;
const hasFlour = true;
const hasSugar = true;
const canMakeCake = hasEggs && hasFlour && hasSugar; // don't change this line
5
numbersOperators.js
const a = 10;
const b = 2;
// write your code below this line
const addition = a + b;
const subtraction = a - b;
const division = a / b;
const multiplication = a * b;

modulusExponentiation.js
const a = 7;
const b = 2;
// write your code below this line
const exp = a ** b;
const mod = a % b;

parentheses.js
const expression = 10 *( 7 + 8 - 11) / 4;

assignmentOperators.js
console.log(a);
console.log(b);

let addAssignment = a;
let subAssignment = a;
let divAssignment = a;
let mulAssignment = a;
let expAssignment = a;
let modAssignment = a;

// WRITE CODE BELOW THIS LINE
addAssignment += b;
subAssignment -= b;
divAssignment /= b;
mulAssignment  *= b;
expAssignment **= b;
modAssignment %= b;
// WRITE CODE ABOVE THIS LINE
6
stringLiteral.js
const backticks = `backticks`;
const singleQuotes = 'singleQuotes';
const doubleQuotes = "doubleQuotes";

stringConcat.js
const a = 'Con';
const b = 'enation';
const c = 'cat';
// write your code below
const resultString = a + c + b;

stringInterpolation.js
const a = 'Hello';
const b = 'world';
// write your code below
const resultString = `${a}, ${b}!`;

breakLine.js
const myString = 'Hello, world!\nIt\'s JavaScript!'
7
camelCase.js
const myFirstValue = 'my first value';
const mySecondValue = 'my second value';
const addValues = `${myFirstValue} ${mySecondValue}`;

spacesOperator.js
const trapezePerimeter = 2 + 4 + 4 + 10;
const trianglePerimeter = 10 + 20 + 30;
const rectanglePerimeter = 2 * ( 50 + 20 );
const bigMathFormula = ( 10 * trapezePerimeter + rectanglePerimeter * 100 ) - 228;

splitProgram.js
const firstValue = 100;
const secondValue = 2000;
const sum = secondValue + firstValue;

refactorProgram.js
const userName = 'Elon Musk';
const newEvent = 'created a new car';
const eventDate = '2019.10.10';
const eventMessage = `${userName} ${newEvent} in ${eventDate}`;
9
declareFunction.js
function myFunction() {}

hello.js
function hello() {
    console.log('Hello, world!');
}

getString.js
function getString() {
    const greeting = 'Hello, Mate Academy!';
    return greeting;
  }

getStringResult.js
function getString() {
    return 'I am learning JavaScript';
}
const result = getString();

getString.js
const getString = () => {
const jobTitle = 'I am a programmer';
return jobTitle;
}

greeter.js
function greeter(name) {
    return `Hi, ${name}!`;
}

arrowGreeter.js
const greeter = name => `Hi, ${name}!`;

greeter.js
const greeter = (name, partOfDay) => `Good ${partOfDay}, ${name}!`;

double.js
const double = num => num*2;

multiply.js
const multiply = (a, b = 1) => {
    return a * b;
}
10
canBuyBeer.js
function canBuyBeer(age) {
    if (age >= 18) {
      return 'You can buy beer';
    } else {
      return 'You can not buy beer';
    }
  }

getNumbersEquality.js
function getNumbersEquality(a, b) {
if (a === b) {
    return 'a and b are equal';
};
if (a < b) {
    return 'a < b';
} 
if (a > b) {
    return 'a > b';
}
}

getTipsRating.js
function getTipsRating(amount) {
    if (amount === 0 ) {
      return 'terrible';
    }
    if (amount > 0 && amount <= 10) {
      return 'poor';
    }
    if (amount > 10 && amount <= 20) {
      return 'good';
    }
    if (amount > 20 && amount <= 50) {
      return 'great';
    }
    if (amount > 50) {
      return 'excellent';
    }
}

calculateTaxes.js
function calculateTaxes(income) {
    if (income <= 1000) {
      return income * 0.02;
    }
    if (income > 1000 && income <= 10000) {
      return (1000 * 0.02 + (income - 1000) * 0.03);
    }
    if (income > 10000) {
      return ((1000 * 0.02) + (9000 * 0.03) + (income - 10000) * 0.05);
    }
}

getLargestExpressionResult.js
const getLargestExpressionResult = (a, b) => {
const first = a + b;
const second = a - b;
const third = a * b;
const fourth = a / b;
const results = [second, third, fourth];
let maxResult = first;

for (const result of results) {
    if (result > maxResult) {
    maxResult = result;
    }
}

return maxResult;
};
11
getTask.js
function getTask(weekday) {
switch (weekday) {
    case 'monday':
    return 'Write a new module for the program';
    case 'tuesday':
    return 'Test the module and find bugs';
    case 'wednesday':
    return 'Write a new module for the program';
    case 'thursday':
    return 'Test the module and find bugs';
    case 'friday':
    return 'You need to meet the boss today';
    case 'saturday':
    return 'Spend the evening with your friends';
    case 'sunday':
    return 'Go to the movies in the evening';
    default:
    return 'Entered the wrong day of the week';
}
}

getPaymentSystem.js
function getPaymentSystem(number) {
    switch (number) {
      case 34:
      case 37:
        return 'American Express';
      case 4:
        return 'VISA';
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
        return 'MasterCard';
      case 63:
      case 67:
        return 'Maestro';
      default:
        return 'unknown payment system';
    }
}

getDirection.js
function getDirection(direction) {
    switch (direction) {
    case 'forward':
    return 'hor=0 ver=1';
    case 'back':
    return 'hor=0 ver=-1';
    case 'right':
    return 'hor=1 ver=0';
    case 'left':
    return 'hor=-1 ver=0';
    case 'stop':
    return 'hor=0 ver=0';
    default:
    return 'hor=0 ver=0';
    }
}
12
loopPractice.js
function printNumbers(N) {
    for (let i = 1; i <= N; i = i + 1) {
    console.log(i);
}
}


getDrinks.js
function getDrinks(numberOfGuests) {
    let porcion = 0;
    for (let i = 1; i <= numberOfGuests; i++) {
    porcion += i;
}
return porcion;
}

getDrinksWithStep.js
function getDrinksWithStep(numberOfGuests, step) {
    let porcion = 0;

for (let i = 1; i <= numberOfGuests; i += step) {
    porcion += i;
}

return porcion;
}

calculateProfit.js
function calculateProfit(amount, percent, period) {
    let now = amount;

for (let i = 1; i <= period; i++) {
    now += now * (percent / 100);
}

const profit = now - amount;

return profit;
}

getYears.js
function getYears(amount, percent, limit) {
    let years = -1;
    let backMoney = amount;
  
    while (backMoney <= limit) {
      backMoney += backMoney * (percent / 100);
      years++;
    }
  
    return years;
}
13
decodeSignal.js
function decodeSignal(input) {
    if (!!input === true) {
      return 1;
    }
  
    if (!!input === false) {
      return 0;
    }
}

getWinner.js
function getWinner(maxSolved, romanSolved) {
    maxSolved = parseInt(maxSolved);
    romanSolved = parseInt(romanSolved);
  
    if (maxSolved > romanSolved) {
      return 'Max winner!!!';
    }
  
    if (romanSolved > maxSolved) {
      return 'Roman winner!!!';
    }
  
    if (romanSolved === maxSolved) {
      return 'Roman and Maxim are the winners!!!';
    }
}

getGuestsCount.js
function getGuestsCount(guestsInput) {
    if (!!(parseInt(guestsInput)) === true) {
      return parseInt(guestsInput);
    } else if (parseInt(guestsInput) === 0) {
      return parseInt(guestsInput);
    }
    else {
      return 'not a number';
    }
    // if (parseInt(guestsInput) === Number) {
    //   return parseInt(guestsInput);
    // } else {
    //   return 'not a number';
    // }
}
14
canTheyBook.js
function canTheyBook(adultsCount = 0, childrenCount = 0) {
    const room = 8;
    const first = 1 + 2;
    const all = adultsCount + childrenCount;
  
    if (all <= 8 && childrenCount / adultsCount <= 2 && adultsCount > 0) {
      return true;
    } else {
      return false;
    }
}

canTheyBook.js
function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    const room = 8;
    const all = adultsCount + childrenCount;
    const kids = childrenCount + babiesCount;
  
    if (all <= 8
    && all + babiesCount <= 9
    && kids / adultsCount <= 2
    && adultsCount > 0) {
      return true;
    } else {
      return false;
    }
}

recommendRoom.js
function recommendRoom(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    const all = adultsCount + childrenCount + babiesCount;
  
    if (all <= 4) {
      return 'small room';
    } else if (all === 5
      && babiesCount >= 1) {
      return 'small room + extra bed';
    } else if (all >= 4
      && all <= 8
      && babiesCount === 0) {
      return 'big room';
    } else if (all <= 8) {
      return 'big room';
    } else if (all === 9
      && babiesCount >= 1) {
      return 'big room + extra bed';
    } else {
      return 'no room for yall muthafuckers';
    }
}
15
getCentury.js
function getCentury(year) {
    let century = Math.ceil(+year / 100);
    
    century = Math.trunc(century);
  
    if (year && isFinite(year)) {
      return century;
    } else if (+year === 0) {
      return 1;
    }
}

convertCurrency.js
function convertCurrency(amount, exchangeRate, currencyName) {
    let money = amount * exchangeRate;
  
    money = +money.toFixed(2);
  
    if (amount > 0 && exchangeRate > 0) {
      return `Give them ${money} ${currencyName}('s)`;
    } else {
      return 'Enter valid data';
    }
}

getRectangleArea.js
function getRectangleArea(side, diagonal) {
    let s = side * Math.sqrt(diagonal * diagonal - side * side);
  
    s = +s.toFixed(2);
  
    if (+diagonal > +side && +diagonal > 0 && side > 0) {
      return s;
    } else if (diagonal <= 0 || side <= 0) {
      return 'not a rectangle';
    } else {
      return 'not a rectangle';
    }
}

isEven.js
function isEven(number) {
    if (number % 2 === 0 && Number.isInteger(number)) {
      return true;
    } else {
      return false;
    }
}

makeDecision.js
function makeDecision(fuelRemaining, distance, fuelConsumption) {
    const enough = distance * fuelConsumption / 100;
  
    if (fuelRemaining < 0
      || distance <= 0
      || fuelConsumption <= 0) {
      return 'please, enter the valid data.';
    } else if (fuelRemaining < enough) {
      return 'ask for help';
    } else if (fuelRemaining >= enough) {
      return 'reach gas station by themselves';
    }
}

countNetworking.js
function countNetworking(quarantineLength, frequency) {
    let result = (12 - quarantineLength) / frequency;
  
    result = Math.ceil(result);
  
    return result;
}
16 - 7
calculateGuests.js
function calculateGuests(guestsInput) {
    let guestNumber = '';
    let isFound = false;
  
    for (const char of guestsInput) {
      const possibleNumber = parseInt(char, 10);
  
      if (!isNaN(possibleNumber)) {
        isFound = true;
        guestNumber += char;
      } else {
        if (isFound) {
          break;
        }
      }
    }
  
    const result = parseInt(guestNumber, 10);
  
    return (result === 0 || isNaN(result)) ? 'not a number' : result;
}

getSuccessRate.js
function getSuccessRate(statistic) {
    if (!statistic.length) {
      return 0;
    }
  
    let count = 0;
  
    for (let i = 0; i <= statistic.length; i++) {
      if (statistic[i] === '1') {
        count++;
      }
    }
  
    return Math.round(count * 100 / statistic.length);
}

isAlphabet.js
function isAlphabet(letters) {
    const abetka = letters.toLowerCase();
  
    if (abetka.length === 0) {
      return false;
    } else if (abetka.length === 1) {
      return true;
    }
  
    let isValid = true;
  
    for (let i = 0; i <= abetka.length; i++) {
      const currentCharCode = abetka.charCodeAt(i);
      const nextCharCode = abetka.charCodeAt(i + 1);
  
      if (!isNaN(nextCharCode)) {
        if (nextCharCode - currentCharCode !== 1) {
          isValid = false;
        }
      }
    }
  
    return isValid;
}

removeVowels.js
function removeVowels(doc) {
    const vowelsLetters = ['a', 'e', 'i', 'o', 'u', 'y'];
    let newstr = doc;
  
    for (const i of doc) {
      if (vowelsLetters.includes(i)
        || vowelsLetters.includes(i.toLowerCase())) {
        newstr = newstr.replace(i, '');
      }
    }
  
    return newstr;
}

makeAbbr.js
function makeAbbr(words) {
    let str = '';
  
    str += words.charAt(0);
  
    for (let i = 1; i <= words.length; i++) {
      if (words.charCodeAt(i) === 32) {
        str += words[i + 1];
      } else if (words.charCodeAt(i) !== 32) {
        str += '';
      }
    }
    str = str.toUpperCase();
  
    return str;
}

decryptMessage.js
function decryptMessage(message) {
    const arrayOfString = message.split('');
    const arrayReversed = arrayOfString.reverse();
    const result = arrayReversed.join('');
  
    return result;
}

isWerewolf.js
function isWerewolf(target) {
    const ignoreArr = [' ', ',', '-'];
  
    let isValid = true;
  
    for (let i = 0, j = target.length - 1;
      i < target.length && j >= 0;
      i++, j--) {
      if (ignoreArr.includes(target[i])) {
        i++;
      }
  
      if (ignoreArr.includes(target[j])) {
        j--;
      }
  
      console.log(target[i], target[j]);
  
      if (!ignoreArr.includes(target[i]) && !ignoreArr.includes(target[j])) {
        if (target[i].toLowerCase() !== target[j].toLowerCase()) {
          isValid = false;
          break;
        }
      }
    }
  
    return isValid;
}
17 - 7
makeStickers.js
function makeStickers(detailsCount, robotPart) {
    const newArr = [];
  
    for (let n = 1; n <= detailsCount; n++) {
      if (detailsCount === 0) {
        newArr.push(`${robotPart} detail #0`);
        break;
      }
      newArr.push(`${robotPart} detail #${n}`);
    }
  
    return newArr;
}

doublePower.js
function doublePower(currentPowers) {
    const arr = [];
  
    for (let elem of currentPowers) {
      arr.push(elem * 2);
    }
    
    return arr;
}

getSpeedStatistic.js
function getSpeedStatistic(testResults) {
    let resultArray = [];
  
    if (testResults.length === 0) {
      resultArray.push(0, 0, 0);
  
      return resultArray;
    }
  
    if (testResults.length <= 1) {
      resultArray.push(testResults[0], testResults[0], testResults[0]);
  
      return resultArray;
    }
  
    testResults.sort((a, b) => b - a);
    resultArray.push(testResults[testResults.length - 1]);
    resultArray.push(testResults[0]);
  
    let summ = 0;
  
    for (let elem of testResults) {
      summ = summ + elem;
    }
  
    let average = summ / testResults.length;
  
    average = Math.floor(average);
  
    resultArray.push(average);
  
    return resultArray;
}

compareRobots.js
function compareRobots(firstRobotResults, secondRobotResults) {
    let summ1 = 0;
    let summ2 = 0;
  
    for (let elem of firstRobotResults) {
      summ1 += elem;
    }
  
    for (let elem of secondRobotResults) {
      summ2 += elem;
    }
  
    if (summ1 > summ2) {
      return 'First robot for sale!';
    } else if (summ1 < summ2) {
      return 'Second robot for sale!';
    } else if (summ1 === summ2) {
      return 'Both robots for sale!';
    }
}

isSorted.js
function isSorted(boxNumbers) {
    if (boxNumbers.length <= 1) {
      return true;
    }
  
    for (let i = 0; i < boxNumbers.length; i++) {
      const a = i + 1;
  
      if (boxNumbers[i] < boxNumbers[a]) {
        if (boxNumbers[a] <= boxNumbers[a + 1]) {
          return true;
        }
      } else if (boxNumbers[i] >= boxNumbers[a]) {
        return false;
      }
    }
}

getLocation.js
function getLocation(coordinates, commands) {
    let x = coordinates[0];
    let y = coordinates[1];
    let result = {};
    commands.forEach(function(a){
        result[a] = result[a] + 1 || 1;
    });
    let forward = result.forward;
    if (forward === undefined) {
        forward = 0;
    }
    let back = result.back;
    if (back === undefined) {
        back = 0;
    }
    console.log(back);
    let right = result.right;
    if (right === undefined) {
        right = 0;
    }
    let left = result.left;
    if (left === undefined) {
        left = 0;
    }
    // console.log(forward);
    // console.log(back);
    // console.log(right);
    // console.log(left);

    y = y + 1 * forward;
    // console.log(y);
    y = y - (1 * back);
    console.log(y);
    x = x + 1 * right;
    // console.log(x);
    x = x - 1 * left;
    // console.log(x);

    let newCoordinates = [];
    newCoordinates.push(x, y);
    console.log(newCoordinates);
    return newCoordinates;
}

getPlan.js
function getPlan(currentProduction, months, percent) {
    let result = [];
    let total = Math.floor(currentProduction + (currentProduction * (percent / 100)));
  
    for (let i = 0; i < months; i++) {
      result[i] = total;
      total += Math.floor(total * percent / 100);
    }
  
    return result;
}
18 - 9
objectsWarehouse.js
const warehouse = { memory: 15, processors: 10, displays: 20 };

ironmanTriathlon.js
function getTriathlonDistance(distance) {
    const allDistance = 3.86 + 180.25 + 42.2;
    const left = allDistance - distance;
  
    if (distance === 0) {
      return 'Starting Line... Good Luck!';
    }
  
    if (distance > 0 && distance < 3.86) {
      return { swim: `${left.toFixed(2)} to go!` };
    }
  
    if (distance >= 3.86 && distance < 184.11) {
      return { bike: `${left.toFixed(2)} to go!` };
    }
  
    if (distance >= 184.11 && distance < 226.31) {
      return { run: `${parseFloat(left.toFixed(2))} to go!` };
    }
  
    if (distance >= 226.31) {
      return 'You\'re done! Stop running!';
    }
}

addFullName.js
function addFullName(user) {
    user['fullName'] = `${user.firstName} ${user.lastName}`;
}

restoreNames.js
function restoreNames(users) {
    for (let i = 0; i < users.length; i++) {
      const posibleName = users[i].fullName.split(' ')[0];
  
      users[i].firstName = posibleName;
    }
}

removeFemaleAges.js
function removeFemaleAges(people) {
    for (let char of people) {
      if (char.gender === 'female') {
        delete char.age;
      }
    }
}

getOutdated.js
function getOutdated(robots, newVersion) {
    let arr = [];
  
    for (let i = 0; i < robots.length; i++) {
      if (robots[i].coreVersion < newVersion) {
        arr.push(i);
      }
    }
  
    return arr;
}

countBoxes.js
function countBoxes(boxes) {
    const arrayOfBoxes = boxes.split('');
    let count = {};
  
    for (const key of arrayOfBoxes) {
      if(count[key] === undefined) {
        count[key] = 1;
      } else {
        count[key]++;
      }
    }
  
    return count;
}

getRobotSchema.js
function getRobotSchema(robot) {
    const result = {};
    
    for (const key in robot) {
      result[key] = typeof robot[key];
    }
  
    return result;
}

compareRobots.js
const compareRobots = (robot1, robot2) => {
    const keyOf1 = Object.keys(robot1);
    const keyOf2 = Object.keys(robot2);
  
    if (keyOf1.length !== keyOf2.length) {
      return false;
    }
  
    for (let robotProperty of keyOf1) {
      if (robotProperty !== 'serialNo') {
        if (robotProperty in robot2) {
          if (robot1[robotProperty] !== robot2[robotProperty]) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return true;
};
19 - 20

colorStones.js
function colorStones(stones) {
    let repeatCount = 0
    for (let i = 0; i < stones.length; i++) {
        if (stones.charAt(i) === stones.charAt(i + 1)) {
            repeatCount++
        }
    }
    return repeatCount
}

findCalculationType.js
function findCalculationType(a, b, res) {
    if (a + b === res) {
      return 'addition';
    }
    
    if (a - b === res) {
      return 'subtraction';
    }
    
    if (a * b === res) {
      return 'multiplication';
    }
  
    if (a / b === res) {
      return 'division';
    }
}

findSmallerDigits.js
function findSmallerDigits(arr) {
    const result = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = i; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
        count++;
    }
    }
    result.push(count);
}

return result;
}

getProductId.js
function getProductId(url) {
    const arrayOfString = url.split('-');
    let result;
    
    for (let i = 0; i <= arrayOfString.length; i++) {
      if (arrayOfString[i] === 'p') {
        const a = parseInt(arrayOfString[i + 1], 10);
  
        if (a && !isNaN(a)) {
          result = `${arrayOfString[i + 1]}`;
  
          break;
        }
      }
    }
  
    return result;
}

splitString.js
function splitString(str) {
    const arrOfStr = str.split('');
    const result = [];
  
    for (let i = 0; i < arrOfStr.length; i += 2) {
      if (arrOfStr[i + 1] !== undefined) {
        result.push(`${arrOfStr[i]}${arrOfStr[i+1]}`);
      } else {
        result.push(`${arrOfStr[i]}_`);
      }
    }
  
    return result;
}

getLeaders.js
function getLeaders(numbers) {
    const result = [];
  
    let summOfAnother = 0;
  
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (numbers[i] > summOfAnother) {
        result.unshift(numbers[i]);
      }
      summOfAnother += numbers[i];
    }
  
    return result;
}

getArrayProduct.js
function getArrayProduct(numbers) {
    const product = [];
  
    for (let i = 0; i < numbers.length; i++) {
      const copy = [...numbers];
  
      copy.splice(i, 1);
  
      product[i] = copy.reduce((multiplier, currentValue) =>
        multiplier * currentValue);
    }
  
    return product;
}

getRowWeights.js
function getRowWeights(array) {
    const result = [];
  
    if (!array.length) {
      return result;
    }
  
    const firstTeam = [];
    const secondTeam = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        firstTeam.push(array[i]);
      } else {
        secondTeam.push(array[i]);
      }
    }
  
    const summOfWeight = (weight, currentWeight) => currentWeight + weight;
  
    return [
      firstTeam.reduce(summOfWeight, 0),
      secondTeam.reduce(summOfWeight, 0),
    ];
}

getKiller.js
function getKiller(suspects, dead) {
    let killer;
  
    for (const suspect in suspects) {
      let found = true;
  
      for (const victim of dead) {
        found = suspects[suspect].includes(victim);
  
        if (!found) {
          break;
        }
      }
  
      if (found) {
        killer = suspect;
        break;
      }
    }
  
    return killer;
}

whoIsOnline.js
function whoIsOnline(friends) {
    const result = {
      online: [],
      offline: [],
      away: [],
    };
  
    for (let i = 0; i < friends.length; i++) {
      const n = friends[i];
  
      if (n.status === 'offline') {
        result.offline.push(n.username);
      }
  
      if (n.status === 'online' && n.lastActivity <= 10) {
        result.online.push(n.username);
      }
  
      if (n.status === 'online' && n.lastActivity > 10) {
        result.away.push(n.username);
      }
    }
  
    return friends.length !== 0 ? result : {};
}

addNumbers.js
function addNumbers(object) {
    let sum = 0;
    const n = Object.values(object);
  
    for (const i of n) {
      if (typeof i === 'number') {
        sum += i;
      } else if (typeof i !== 'number') {
        sum += 0;
      }
    }
  
    return sum;
}

countLettersInString.js
function countLettersInString(str) {
    const arrOfString = str.split('');
    const result = {};
  
    arrOfString.forEach(function(a) {
      result[a] = result[a] + 1 || 1;
    });
    
    return result;
}

scrollingText.js
function scrollingText(word) {
    const result = [];
    const strInUp = word.toUpperCase();
    
    for (let i = 0; i < word.length; i++) {
      result.push(strInUp.substring(i) + strInUp.substring(0, i));
    }
  
    return result;
}

checkNumber.js
function checkNumber(number) {
    const result = [];
  
    if (number > 0) {
      result.push(true);
    } else {
      result.push(false);
    }
  
    if (number % 2 === 0) {
      result.push(true);
    } else {
      result.push(false);
    }
  
    if (number % 10 === 0) {
      result.push(true);
    } else {
      result.push(false);
    }
  
    return result;
}

sumObjects.js
function sumObjects() {
    const findObjects = [...arguments];
  
    return findObjects.reduce((result, elem) => {
      for (const letter in elem) {
        if (elem.hasOwnProperty(letter))
          result[letter] = (result[letter] || 0) + elem[letter];
      }
      
      return result;
    }, {});
    
}

getArraysSum.js
function getArraysSum(arr1, arr2) {
    let result = 0;
  
    for (const elem of arr1) {
      result += elem;
    }
  
    for (const elem of arr2) {
      result += elem;
    }
  
    return result;
}

combineArrays.js
function combineArrays(first, second) {
    const result = [];
    
    for (let i = 0; i < first.length; i++) {
      result.push(first[i] + second[i]);
  
      if (first.length === 0 || second.length === 0) {
        return result.push();
      }
      console.log(result);
    }
  
    return result;
}

isJumping.js
function isJumping(number) {
    const str = String(number);
  
    let check = true;
  
    for (let i = 0; i < str.length - 1; i++) {
      const a = parseInt(str[i + 1], 10);
      const b = parseInt(str[i], 10);
  
      check = Math.abs(b - a) === 1;
  
      if (!check) {
        break;
      }
    }
  
    return (check ? 'JUMPING' : 'NOT JUMPING');
}

isSpecialNumber.js
function isSpecialNumber(n) {
    const str = String(n);
    const arr = [0, 1, 2, 3, 4, 5];
  
    if (str.length === 0) {
      return 'NOT!!';
    }
  
    if (str.length === 1
    && parseInt(str[0], 10) >= 0
    && parseInt(str[0], 10) <= 5) {
      return 'Special!!';
    }
  
    if (str.length === 1) {
      if (parseInt(str[0], 10) === 0 || parseInt(str[0], 10) > 5) {
        if (parseInt(str[0], 10) === 0 || parseInt(str[0], 10) !== 0) {
          return 'NOT!!';
        }
      }
    }
  
    let is = true;
  
    for (let i = 0; i < str.length; i++) {
      is = parseInt(str[i], 10) >= 0 && parseInt(str[i], 10) <= 5;
      
      if (!is) {
        break;
      }
    }
  
    return (is ? 'Special!!' : 'NOT!!');
}

tidyNumbers.js
function isTidy(number) {
    const str = String(number);
  
    let check = true;
  
    for (let i = 0; i < str.length - 1; i++) {
      const b = parseInt(str[i + 1], 10);
      const a = parseInt(str[i], 10);
  
      check = b >= a;
  
      if (!check) {
        break;
      }
    }
  
    return check;
}



