
//checks given strings are anagram or not

function isAnagram(str1,str2){
            
    if (str1.length!==str2.length) {
        return false;
    }
    let counter={}
    for(let letter of str1){
       
        counter[letter]= (counter[letter]  || 0)+1;
       
        console.log(counter[letter]);

    }


    for (let items of str2){

        if (!counter[items]) {
             return false
        }

        counter[items]-=1;

    }

    return true;


}
const res=isAnagram('akshay','Ramtek')
console.log(res);