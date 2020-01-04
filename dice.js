function rollthedice () { 

    var ifirst = Math.floor((Math.random()*6)+1); 
    var isecond = Math.floor((Math.random()*6)+1);

if (ifirst === 1) { 
    document.getElementById("first").src = "images/dice1.png"; 
  }
  
  if (isecond === 1) { 
    document.getElementById("second").src = "images/dice1.png"; 
  }
  
  if (ifirst === 2) { 
    document.getElementById("first").src = "images/dice2.png"; 
  }
  
  if (isecond === 2) { 
    document.getElementById("second").src = "images/dice2.png"; 
  }
   
  if (ifirst === 3) { 
    document.getElementById("first").src = "images/dice3.png"; 
  }
  
  if (isecond === 3) { 
    document.getElementById("second").src = "images/dice3.png"; 
  }
  
  if (ifirst === 4) { 
    document.getElementById("first").src = "images/dice4.png"; 
  }
  
  if (isecond === 4) { 
    document.getElementById("second").src = "images/dice4.png"; 
  }
  
  if (ifirst === 5) { 
    document.getElementById("first").src = "images/dice5.png"; 
  }
  
  if (isecond === 5) { 
    document.getElementById("second").src = "images/dice5.png"; 
  }
  
  if (ifirst === 6) { 
    document.getElementById("first").src = "images/dice6.png"; 
  }
  
  if (isecond === 6) { 
    document.getElementById("second").src = "images/dice6.png"; 
  }

//  Determining the winner  

  if (ifirst > isecond) {  
    document.querySelector(".displaywinner").innerHTML = "Player 1 Wins"
} 

if (ifirst < isecond) { 
    document.querySelector(".displaywinner").innerHTML = "Player 2 Wins"
}

if (ifirst === isecond) { 
    document.querySelector(".displaywinner").innerHTML = "It is a draw" 
}
}  
    

   




