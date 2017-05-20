// var front = process.argv[2];
// var back = process.argv[3];

// var BasicCard = function (front,back){
//     this.front = function(){
//         var front = process.argv[2];
//         var question = process.argv[3];
//         console.log(question);
//     };
//     this.back = function(){
//         var back = process.argv[2];
//         var answer = process.argv[3];
//         console.log(answer);
//     };
// }

var BasicCard = function(front,back){
    // this.front = process.argv[2];
    // this.back = process.argv[3];

    this.front = front;
    this.back = back;

    // console.log(BasicCard.front);
    // console.log(BasicCard.back);

    console.log(this.front);
    console.log(this.back);
}

var newFlashCard = new BasicCard("Who was the first president?","George Washington");


// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze("This doesn't work", "oops"); 