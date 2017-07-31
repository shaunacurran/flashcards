var ClozeCard = function(text,cloze){
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze,'').trim();
    //Throw or log error if Cloze deletion does not appear in the input text

    this.checkError = function(){
        if(text.indexOf(cloze) === -1){
            throw "Cloze is not in full text";
        }
    }

    this.checkError();

};

// function addCloze(text,cloze){

// }

// var sentence = 'Gge Washington is the first President';
// var cloze = 'George Washington'
// var clozeLen = cloze.length

// var value = sentence.indexOf(cloze);
// console.log(clozeLen);
// console.log(value);
// console.log(sentence.replace(cloze,'').trim());

// var card1 = new ClozeCard('dinosaurs once roamed this earth', 'dinosaurs');

// console.log(card1);
module.exports = ClozeCard;