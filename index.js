//Write a function that given 3 numbers returns the largest of the 3. 

function returnLargest(num1, num2, num3){
    if(num1> num2){
        if(num1>num3){
            return num1;
        } else{
            return num3;
        }
    }else{
        if (num2> num1){
            if (num2 > num3){
                return num2
            } else{
                return num3
            }
        }
    }
}

console.log(returnLargest(4, 10, 8))