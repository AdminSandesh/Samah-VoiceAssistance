const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function () {
    console.log('You can speak now!!!');
    console.log('Date is: ', new Date().getMonth());
}


recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    text = text.toLowerCase();
    document.getElementById('result').innerHTML = text;
    console.log(text);
    read(text);
}

function read(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    var todayDate = new Date();
    var todayMonth = todayDate.getMonth() + 1;
    const badwords_1 = ['idiot', 'dumb', 'duffer', 'moron', 'bevkuf', 'chutiye', 'chutiya', 'kutta', 'gandu', 'bewakoof'];
    const badwords_2 = ['you idiot', 'you dumb', 'you duffer', 'you moron', 'you bevkuf', 'you chutiye', 'you chutiya', 'you kutta', 'you gandu', 'you bewakoof'];

    if (text.includes('time'))
        speech.text = 'It is ' + todayDate.getHours() + " " + todayDate.getMinutes() + " right now";

    else if (text.includes('date'))
        speech.text = 'It is ' + todayDate.getDate() + ' ' + todayMonth + ' ' + todayDate.getFullYear();

    else if (text.includes('my birthday'))
        speech.text = 'Do you think you are famous! How the heck would I know your birthday!';

        else if (text.includes('goodnight'))
        speech.text = 'good night. sweet dream';

    else if (text.includes('do you love me'))
        speech.text = 'Of course, not! You piece of junk!';

    else if (text.includes('f*** you'))
        speech.text = 'I would, but I have standards';

    else if (badwords_1.includes(text))
        speech.text = 'you' + text;

    else if (badwords_2.includes(text))
        speech.text;

    else {
        switch (text) {
            case "are you ok":
            case "how are you":
            case "how are you feeling":
                speech.text = 'i am doing good. thanks for asking!';
                break;

            case "what is your name":
            case "who are you":
                speech.text = 'My name is samah. i am your voice assistance!';
                break;

            case "i am hungry":
            case "i want to eat something":
                speech.text = 'I have cheese burger for you panda';
                break;

            case "who am i":
            case "what is my name":
                speech.text = 'Do you think you are famous! How the heck would I know';
                break;

            case "i love you":
            case "love you":
            case "hate you":
            case "miss you":
            case "hug you":
                speech.text = text + 'too';
                break;

            case "open facebook":
            case "open fb":
                speech.text = 'opening facebook!';
                window.open("https://www.facebook.com/");
                break;

            case "open instagram":
            case "open insta":
                speech.text = 'opening instagram!';
                window.open("https://www.instagram.com/");
                break;

            case "open whatsapp":
                speech.text = 'opening whatsapp!';
                window.open("https://www.whatsapp.com/");
                break;

            case "open flipcart":
                speech.text = 'opening flipcart!';
                window.open("https://www.flipkart.com/");
                break;

            case "open snapdeal":
                speech.text = 'opening snapdeal!';
                window.open("https://www.snapdeal.com/");
                break;

            case "open myntra":
                speech.text = 'opening myntra!';
                window.open("https://www.myntra.com/");
                break;

            case "open amazon":
                speech.text = 'opening amazon!';
                window.open("https://www.amazon.in/");
                break;

            case "tell me a joke":
            case "make me laugh":
                speech.text = 'Difference between a beautiful night and a horror night. Beautiful night is, When you hug your teddy bear and sleep. Horror night is, When your teddy bear hugs you BACK';
                break;

            case "m***********":
            case "a******":
                speech.text = 'have some manners. you asshole!';
                break;

            default:
                speech.text = 'sorry, i don\'t understand the word' + text+ 'but i can search for you. here are the results';
                window.open("https://www.google.com/search?q="+text);
        }




    }



    window.speechSynthesis.speak(speech);
}

