const person = {
  name: "Tony",
  last_name: "Stark",
  Age: 45,
  direction: {
    city: "new york",
    zip: 1478521454,
    long: 34.255477,
    lat: 59.321458,
  },
};


const person2 = {...person};
person2.name = 'Peter';


console.log(person);
console.log(person2);

