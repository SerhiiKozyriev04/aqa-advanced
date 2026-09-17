function divide(numerator, denominator){
    if (typeof numerator != "number" || 
        typeof denominator != "number"){
            throw new Error ("Both arguments must be numbers");
        }
        if (denominator === 0){
            throw new Error ("Cannot divide by zero");
        }
        return numerator/denominator;
}

try {
    console.log(divide("Q",2));
}catch(error){
    console.log(error.message);
} finally {
    console.log("Work is done");
}

try {
    console.log(divide(20,0));
}catch(error){
    console.log(error.message);
} finally {
    console.log("Work is done");
}

try {
    console.log(divide(0,0));
}catch(error){
    console.log(error.message);
} finally {
    console.log("Work is done");
}

try {
    console.log(divide(13,2));
}catch(error){
    console.log(error.message);
} finally {
    console.log("Work is done");
}