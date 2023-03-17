const fs = require("fs");


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
    const cachedData = JSON.parse(fs.readFileSync('./src/data/cache.json', 'utf8'));
    const givenNumber = req.query?.number;

    if(!givenNumber) return {code: 400, errorMessage:"Number is not provided."};
    if(cachedData[givenNumber]) {
        console.log(`Found response in cache for number = ${givenNumber}`);
        return {code: 200, data: cachedData[givenNumber]};
    }
    
    for(let i=1; i<=Number.parseInt(givenNumber); i++){
        responseString = responseString.length > 0 ? `${responseString} ${modifyDigit(i)}` : `${modifyDigit(i)}` ;
    }
    const deepCopyCachedData = JSON.parse(JSON.stringify(cachedData));
    deepCopyCachedData[givenNumber] = responseString;
    fs.writeFileSync('./src/data/cache.json', JSON.stringify(deepCopyCachedData));
    return {
        code: 200,
        data:responseString
    }
}


module.exports = {task1};