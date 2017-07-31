var inquirer = require('inquirer');
var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var fs = require('fs');

var basicList;

inquirer.prompt([
    {
        type: 'list',
        name: 'userInput',
        message: "What kind of card do you want?",
        choices: ['basic','cloze']
    }
]).then(function(cardType){
    if(cardType.userInput === 'basic'){
        //console.log('Basic');
        generateBasic();   
    
    }else{
        //console.log('Cloze');
        generateCloze();
    }
});

function generateBasic(){
    inquirer.prompt([
        {
        type: 'text',
        name: 'frontText',
        message: 'What should be on the front?'
        },
        {
        type: 'text',
        name: 'backText',
        message: 'What should be on the back?'
        }
    ]).then(function(info){
        if(!info){
            console.log('Nada');
        }else{
            //console.log('Basic Works');
            //console.log(info.frontText);
            //console.log(info.backText);

            var newBasicCard = new BasicCard(info.frontText,info.backText);
            //console.log(newBasicCard);

            fs.readFile('basicCard.txt','UTF8',function(err, data){
                if(err){
                    throw err;

                    
                }else if(!data){
                    //console.log(data);
                    basicList = {
                        cards: []
                    };
                    basicList.cards.push(newBasicCard);
                    //console.log('No Data: ' + JSON.stringify(basicList));

                    logData('basicCard.txt',JSON.stringify(basicList,null,2));
                 }
                else{
                    //console.log(data);
                    
                    basicList = JSON.parse(data);
                    basicList.cards.push(newBasicCard);
                    //console.log('Data Exists: ' + basicList.cards);

                    logData('basicCard.txt',JSON.stringify(basicList,null,2));
                }
            });
        }
    });
}

function logData(file, newData){
    fs.writeFile(file,newData,function(err){
        if(err){
            throw err;
        }
    });
}
 
function generateCloze(){
    inquirer.prompt([
        {
        type: 'text',
        name: 'fullText',
        message: 'What is the full text?'
        },
        {
        type: 'text',
        name: 'cloze',
        message: 'What is the cloze?'
        }
    ]).then(function(info){
        if(!info){
            console.log('Nada');
        }else{
            

            var newClozeCard = new ClozeCard(info.fullText, info.cloze);

            var card = {
                fullText: newClozeCard.fullText,
                cloze: newClozeCard.cloze,
                partial: newClozeCard.partial
            };

            fs.readFile('clozeCard.txt','UTF8',function(err, data){
                if(err){
                    throw err;

                    
                }else if(!data){
                    //console.log(data);
                    clozeList = {
                        cards: []
                    };
                    clozeList.cards.push(card);
                    //console.log('No Data: ' + JSON.stringify(clozeList));

                    logData('clozeCard.txt',JSON.stringify(clozeList,null,2));
                 }
                else{
                    console.log(data);
                    
                    //clozeList = JSON.parse(data);
                    clozeList.cards.push(card);
                    console.log('Data Exists: ' + clozeList.cards);

                    logData('clozeCard.txt',JSON.stringify(clozeList,null,2));
                }
            });


           


        }
    });
}