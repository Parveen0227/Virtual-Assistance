let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let Voice=document.querySelector("#Voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}


function wishMe(){
    let day=new Date()
   let hours=day.getHours()
   if(hours>=0 && hours<12){
    speak("Good Morning madam")
   }
else if (hours>=12 && hours<16){
    speak("Good Afternoon madam")

}else{
    speak("Good Evening madam")
}
}

window.addEventListener('load', ()=>{
    wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
let currentIndex=event.resultIndex
let transcript=event.results[currentIndex][0].transcript
content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    Voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
Voice.style.display="none"


    if(message.includes("hello")||message.includes("hey")){
        speak("hello mam what can I help you??") 
    }

    else if(message.includes("who are you")){
        speak("I am virtual assistant, created by Roshni Madam")

    }else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/", "_blank")

        }else if(message.includes("open chatgpt")){
        speak("opening chatgpt")
        window.open("https://www.chatgpt.com/", "_blank")


    }else if(message.includes("open Google")){
        speak("opening Google")
        window.open("https://www.google.com/", "_blank")

}else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/", "_blank")

        }else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/", "_blank")

}else if(message.includes("open chrome")){
        speak("opening chrome")
        window.open("https://www.chrome.com/", "_blank")

}else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")

        }else if(message.includes("open linkedin")){
        speak("opening linkedin")
        window.open("https://www.linkedin.com/", "_blank")

}else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("https://web.whatsapp.com/", "_blank")

        }else if(message.includes("time")){
        let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
        
        }else if(message.includes("date")){
        let date=new Date().toLocaleDateString(undefined,{day:"numeric",month:"short"})
        speak(date)
        }
else{
 let finalText="This is what I found on internet regarding" + message.replace("shipra","")||message.replace("shifra","")
  speak(finalText)
  window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
}
}
