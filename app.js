// task1

// const student ={
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12
// };
// function listproperties(obj){
//   const keys = Object.keys(obj);
//   const result = keys.join(",");
//   return result;
// }
// let proporties = listproperties(student);
// console.log(proporties);

// ?--------------------------------------------------------------------

// task2
// const library = [
//     {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     libraryID: 1254
//     },
//     {
//     title: 'Walter Isaacson',
//     author: 'Steve Jobs',
//     libraryID: 4264
//     },
//     {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245
//     }];
// const sortedlibrary = library.sort ((a,b) => b.libraryID-a.libraryID);
// console.log (sortedlibrary)

// ?-------------------------------------------------------------------



// task 3


// function hasproperty (obj, property){
//     if (property in obj){
//         return true;
//     }
//     else{
//         return false;
//     }
//     }
//     const myObject = {
//        name: 'John',
//        age: 30,
//        city: 'New York' 
//     };
//     console.log(hasproperty(myObject, "age"));
//     console.log(hasproperty(myObject, "adress"));
    

// ?-------------------------------------------------------------------



// task 4
// function getAllSubsets(str) {
//     const subsets = [];
  
//     for (let i = 0; i < str.length; i++) {
//       for (let j = i + 1; j <= str.length; j++) {
//         const subset = str.slice(i, j);
//         subsets.push(subset);
//       }
//     }
  
//     return subsets;
//   }
  
//   const inputString = "dog";
//   const result = getAllSubsets(inputString);
//   console.log(result);

// ?-------------------------------------------------------------------

// task5

// let user={
//     title: 'The Road Ahead',
//     yazar: 'Bill Gates',
//     libraryID: 1254
//     }

// function rev(obj){
//     let newObj={}

//     for(let k in obj){
//         if(obj.hasOwnProperty(k)){
//             const val=obj[k]    
//             newObj[val]=k
                // newobj[key]=val
//         }
//     }
//     return newObj
// }

// console.log(rev(user));



