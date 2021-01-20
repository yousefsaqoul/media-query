// font size

let size=document.getElementById("size")
let fonts=document.getElementById("fonts")
let text=document.getElementById("text")
let headline = document.getElementById("headline")
headline.style.fontSize=size.value+"px"
headline.style.fontFamily=fonts.value
function changeFontSize(){
  //console.log(size.value)
  //console.log(fonts.value)
  //console.log(text.value)
  headline.innerHTML=text.value
  headline.style.fontSize=size.value+"px"
  headline.style.fontFamily=fonts.value
}





// farbe waage
console.log(document.getElementById("red").value)
console.log(document.getElementById("green").value)
console.log(document.getElementById("blue").value)
function changeBackground(){
    //console.log(document.getElementById("red").value)
    //console.log(document.getElementById("green").value)
    //console.log(document.getElementById("blue").value)
    let red = document.getElementById("red").value
    let green = document.getElementById("green").value
    let blue = document.getElementById("blue").value
    let rgb="rgb("+red+","+green+","+blue+")"
    //console.log(rgb)
    //document.getElementById("body").style.background=rgb
    document.body.style.background=rgb
  }

// balls 
  function changeBackgroundBalls1 (){
    document.body.style.background='gold'
    document.body.style.color='tomato'
  }
  