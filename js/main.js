
// adding event listener to the two buttons
document.getElementById("lowercount").addEventListener("click", lowercount);
document.getElementById("addcount").addEventListener("click", addcount);

// function to decrement
function lowercount() {
    let lower = document.getElementById("count").innerHTML;
    let lower1 = parseInt(lower);
    if(lower1 > 0) {
      let lower2 = lower1 - 1;
       document.getElementById("count").innerHTML = lower2;
    }
    
}

// function to imcrement
function addcount() {
    let higher = document.getElementById("count").innerHTML;
    let higher1 = parseInt(higher);
    if(higher1 >= 0) {
      let higher2 = higher1 + 1;
       document.getElementById("count").innerHTML = higher2;
       if(higher2 >= 50) {
        document.getElementById("count").innerHTML = 50;

       }
    }  
}
