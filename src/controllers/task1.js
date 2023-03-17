const modifyDigit = (number) => {
    switch(true){
        case number%3 === 0 && number%5 === 0:
            return "FizBuz";
        case number%3 === 0:
            return "Fiz";
        case number%5 === 0:
            return "Buz";
        default:
            return number;
    }
}

const task1 = (req) =>{
    let responseString = '';
    const givenNumber = req.query?.number;
    if(!givenNumber) return {code: 400, errorMessage:"Number is not provided."};

    for(let i=1; i<=Number.parseInt(givenNumber); i++){
        responseString = responseString.length > 0 ? `${responseString} ${modifyDigit(i)}` : `${modifyDigit(i)}` ;
    }
    return {
        code: 200,
        data:responseString
    }
}


module.exports = {task1};