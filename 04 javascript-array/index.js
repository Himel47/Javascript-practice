const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

//--------------- Filter Property ----------------

// const fifteenCenInv = inventors.filter(function(inventor){
//     if(inventor.year>=1500 && inventor.year<1600) return true;
// })

const fifteenCenInv = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

// console.log(fifteenCenInv);
console.table(fifteenCenInv);


//--------------- Map Property ----------------

const fullNames = inventors.map(inventor => (
    `${inventor.first} ${inventor.last}`
))

// console.table(fullNames);
console.log(fullNames);


//--------------- Sort Property ----------------

// const sortedOrder = inventors.sort(function(a,b){
//     if(a.year>b.year) return 1;
//     else return -1;
// })

const sortedOrder = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// console.log(sortedOrder);
console.table(sortedOrder);



//--------------- Reduce Property ----------------

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);


//--------------- Different Sort Property ----------------
// Sorting by age || years lived

const oldestLived = inventors.sort((a, b) => {
    const firstOne = a.passed - a.year;
    const nextOne = b.passed - b.year;

    return firstOne > nextOne ? -1 : 1;
})

// console.log(oldestLived);
console.table(oldestLived);


//--------------- Creating List Property ----------------
//create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

////needed to keep it commented as it refers to another link

// const category = document.querySelector('.mw-category');
// // const links = category.querySelectorAll('a');

// const links = Array.from(category.querySelectorAll('a'));
// // const links = [...category.querySelectorAll('a')];

// const deNames = links
// .map(link => link.textContent)
// .filter(strName => strName.includes('de'));



//--------------- Sort Exercise ----------------
//sort people alphabetically by last name

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const sortedPeople = people.sort((prevOne, nextOne) => {
    // console.log(prevOne);
    
    
    // --- first approach ---
    const names = prevOne.split(', ');
    const names2 = nextOne.split(', ');
    
    return names[0] > names2[0] ? 1 : -1;
    
    // --- second approach ---
    // const [prevLast, prevFirst] = prevOne.split(', ');
    // const [nextLast, nextFirst] = nextOne.split(', ');
    
    // return prevLast>nextLast ? 1 : -1;
    
})
console.log(sortedPeople);



//--------------- Reduce Exercise ----------------
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'hello world'];

const vehicles = data.reduce((obj, item)=>{
    console.log(item);

    if(!obj[item]){obj[item]=0;}
    obj[item]++;

    return obj;
},{});

console.log(vehicles);




