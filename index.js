document.addEventListener("keydown",  (event)=>{
  if(event.keyCode === 13){
  sendMess();
  }
});

function sendMess(){
  
  const inputText = document.querySelector("#input").value;
 
 inputText.toLowerCase();
  
  const textSect = document.querySelector("#main");
  
  
  
  var words = {
    "hello": "hi",
    "good day": "xup?",
    "i'm cool": "okay",
    "what is your name": "my name is Xpress, how was your day?",
    "its cool": "wow",
    "it was good": "nice",
    "are you a robot": "nope, i'm as human as you are",
    "what is the meaning of life": "its a philosophical view, but i didn't learn of it in school",
    "did you go to school": "kinda",
    "how many languages do you speak": "English, Pidgin and A little Igbo",
    "how you dey": "i bam wella, how area nah?",
    "area dey": "okay na",
    "xpress": "yes, how may i be of help?",
    "thanks Xpress": "you're welcome",
  }
  
  var greet = {
    "good morning": "good morning, how are you",
    "i'm fine": "thats good",
    "i am fine": "okay",
    "am fine": "nice",
    "good evening": "good evening dear, how are you?",
    "good afternoon": "good afternoon, how are you?",
    "you are brilliant": "thanks",
    "you are intelligent": "really?",
    "yeah": "thanks",
    "yes": "wow"
  }
  
  var sub_def = {
    "define biology": "its the study of plant and human life, which is sub-divided into two parts, BOTANY and ZOOLOGY",
    "what is biology": "its the study of plant and human life, which is sub-divided into two parts, BOTANY and ZOOLOGY",
    "define physics": "its the study of MATTER and its COMPOSITIONS",
    "what is physics": "its the study of MATTER and its composites",
    "define chemistry": "its the study of CHEMICALS, ATOMS, ELEMENTS and COMPOUNDS",
"what is chemistry": "its the study of CHEMICALS, ATOMS, ELEMENTS and COMPOUNDS"
  }
  
  var emotions = {
    "i love you xpress": "i love you too",
    "do you love fruits": "i lobe Apples, Oranges and Mangoes",
    "do you have friends": "yes, you, you are my best friend",
    
  }
  
  var compliments = {
    "thanks": "you are welcome",
    "i'm so happy": "its good to be happy"
  }
 
 var time = new Date();
 var h = time.getHours();
 var m = time.getMinutes();
 var s = time.getSeconds();
 
 var say = h + " " + "hours" + " " + m + " " + "minutes";
 
  var time_val = {
    "what says the time": say
  }
  
  if(inputText in words){
    
    var user = document.createElement('div');
    
    user.setAttribute('id', 'user');
    
    textSect.appendChild(user);
    
    
    user.innerHTML = inputText;
    
    var elem = document.createElement('div');
    
    elem.setAttribute('id', 'mess');
    
    textSect.appendChild(elem);
    
    
    elem.innerHTML = words[inputText];
    
  
  }
  
  if(inputText in greet){
   var user = document.createElement('div');
    
    user.setAttribute('id', 'user');
    
    textSect.appendChild(user);
    
    
    user.innerHTML = inputText;
    
    var elem = document.createElement('div');
    
    elem.setAttribute('id', 'mess');
    
    textSect.appendChild(elem);
    
    
    elem.innerHTML = greet[inputText];
    
    
  }
  
  if(inputText in sub_def){
    
    var user = document.createElement('div');
    
    user.setAttribute('id', 'user');
    
    textSect.appendChild(user);
    
    
    user.innerHTML = inputText;
    
    var elem = document.createElement('div');
    
    elem.setAttribute('id', 'mess');
    
    textSect.appendChild(elem);
    
    
    elem.innerHTML = sub_def[inputText];
    
  
  }
  
if(inputText in emotions){
    
    var user = document.createElement('div');
    
    user.setAttribute('id', 'user');
    
    textSect.appendChild(user);
    
    
    user.innerHTML = inputText;
    
    var elem = document.createElement('div');
    
    elem.setAttribute('id', 'mess');
    
    textSect.appendChild(elem);
    
    
    elem.innerHTML = emotions[inputText];
    
    
  }
  
if(inputText in compliments){
    
    var user = document.createElement('div');
    
    user.setAttribute('id', 'user');
    
    textSect.appendChild(user);
    
    
    user.innerHTML = inputText;
    
    var elem = document.createElement('div');
    
    elem.setAttribute('id', 'mess');
    
    textSect.appendChild(elem);
    
    
    elem.innerHTML = compliments[inputText];
    
    
  }
  
  if(!inputText){
    
    var user = document.createElement('div');
    
    user.setAttribute('id', 'user');
    
    textSect.appendChild(user);
    
    
    user.innerHTML = inputText;
    
    var elem = document.createElement('div');
    
    elem.setAttribute('id', 'mess');
    
    textSect.appendChild(elem);
    
    
    elem.innerHTML = "i do not understand you";
  
  }
  
if(inputText in time_val){
    
    var user = document.createElement('div');
    
    user.setAttribute('id', 'user');
    
    textSect.appendChild(user);
    
    
    user.innerHTML = inputText;
    
    var elem = document.createElement('div');
    
    elem.setAttribute('id', 'mess');
    
    textSect.appendChild(elem);
    
    
    var say = elem.innerHTML = time_val[inputText];
    
}  
if(inputText == "open my browser please"){
  window.open("https://google.com");
}
    var speech = new SpeechSynthesisUtterance(elem.innerHTML);
    speech.pitch = 1;
    speechSynthesis.speak(speech);
  
}