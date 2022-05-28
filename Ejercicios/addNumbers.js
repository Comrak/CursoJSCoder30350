/* Good morning! Here's your coding interview problem for today.
This problem was recently asked by Google.
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
Bonus: Can you do this in one pass? */

let list = [10, 15, 3, 7] 
let number = 17
let result = false

//double loop
// for(let i=0;i<list.length;i++){
//     for(let j=0;j<list.length;j++){
//         if(i!=j){
//             console.log((list[i]+list[j]))
//             if((list[i]+list[j]) == number){
//                 result = true
//                 break
//             }
//         }
//     }
//     if(result){
//         break
//     }
// }

// console.log(result)
for(let i=0;i<list.length;i++){
    if(list.find(numb=>numb == (number-list[i]))){
        console.log(true)
        break
    }
    console.log(false)
}


