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


module.exports = ClozeCard;