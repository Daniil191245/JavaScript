// BOM
// простий спосіб як перевірити мову користовача.
const language = navigator.language || navigator.userAgent;
console.log(language);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { longtitide, latidude } = position.coords;
    },
    (error) => {
      console.log(error.message);
    }
  );
} else {
  console.log("Геолокація не підтримується");
}

const browserInfo = `Браузер${navigator.appCodeName}, ${navigator.appVersion}`;

console.log(browserInfo);


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
        const{longtitide, latidude} = position.coords;
    }, 
(error)=>{
    console.log(error.message)
})
}else{
    console.log("Геолокація не підтримується")
}
// events
// --submit
// --change
