window.setTimeout(function () {
    console.log('HAMMERTIME');
}, 5000);

function hammerTime(time) 
    { window.setTimeout(function () 
        { alert(`${time} is HAMMER TIME!`); 
}); }

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Would you like some tea?", function(answer) {
    console.log(`You said ${answer}`)
})