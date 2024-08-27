  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); //important to specify the initial value for the accumulator to use - ootherwise unexpected bugs may happen!
// to see the arrow function written out:
// console.log(
// "accumulator:", acc,
// "current value:", curr,
// "total:" acc + curr); //this shows the accumulation process starts with the 2nd element of the array,so 1 is added to 0. need to add initial value so this doesnt happen.

console.log(sum);



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);


// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc,curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  };
  return acc;
}, {});

console.log(experienceByProfession);

// I’m using the longer arrow function form here  which includes curly braces since this function  
// will be a few lines of code and will need a return  statement. Just to be crystal clear, this first  
// set of curly braces is the boundaries of the  callback function, and the second set after the  
// comma is our initial value, an empty object. This  is what the accumulator will be on the first pass. 
// So at this point in the function, the accumulator  is an empty object and curr is the first team  
// member in the array. So, if I want to create a  property in my object for Developer, I need to get  
// curr.profession. I’ll call this variable key. Now, I need to check whether the key already exists in  
// the object we’re going to be accumulating into.  If it doesn’t yet exist, I’ll set it equal to  
// curr.yrsExperience. This means the first time  we see a new profession, that property will  
// be added into the accumulator and its value  will be set to the team member’s experience.  
// Otherwise, if the key does already exist, it’s as  simple as adding the current member’s experience  
// to the already existing value. When I’m done, all  I’ve got to do is return the accumulator.
