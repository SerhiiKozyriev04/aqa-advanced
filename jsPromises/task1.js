function saySmth(phrase, time) {
    setTimeout(() => {
        console.log(phrase);
    }, time);
}

saySmth("Who is John Gold?", 3000);