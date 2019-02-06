//First Question

let numbers = [3,5,2,6,1,4,10,11,7]

function secondLowestAndGreatest(num){

    console.log(num.sort((a, b) => a - b));
    console.log(`second lowest is ${num.slice(1)[0]} \nsecond greatest is ${num.slice(-2)[0]}`);
    
}

secondLowestAndGreatest(numbers);

//Second Question


function letterOccurrence(string, letter){

    console.log(string);
    console.log((string.match(new RegExp(letter, "g")) || []).length);
    
}

letterOccurrence('abssebbccdd', 'a');


 //Third Question

function notRepeated(string){

    console.log(string);
    
    for(let i = 0; i < string.length; i++){
        
     if(string.indexOf(string[i]) === string.lastIndexOf(string[i])){
 
         console.log(string[i]);
     }
 
    }
 }
 
 notRepeated('abacddbec')
 