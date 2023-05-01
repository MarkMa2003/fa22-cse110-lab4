function sumV(num1,num2,add){
    if(add){
        var result = 0;
        result = num1 + num2;
        console.log('value added: ',result)
    } else return;
    console.log('final result: ',result)
}

sumV(10,10,true);