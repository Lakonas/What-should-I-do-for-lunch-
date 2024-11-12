function whatToDoForLunch(hungry, availableTime) {
  
  hungry = true;
  if (hungry){
    
  }if(availableTime < 20){
      console.log("pick up a snack or grab something you have ready at home.")
    
  }else if(availableTime >= 20 && availableTime <=30){
      console.log("you've been working hard and are ahead of schedule),you deserve a break and should take time to cook a tasty meal.")
  }else if(availableTime > 30){
      console.log("this is an intense program after all and you should probably reconsider.")
    }else console.log("wait until you're hungry")
  }
  


whatToDoForLunch(true,19);
whatToDoForLunch(true,25);
whatToDoForLunch(true,45);
whatToDoForLunch(false);