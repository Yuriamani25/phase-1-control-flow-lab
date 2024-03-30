function scuberGreetingForFeet(feet){
  // Write your code here!
  let charges
  if(feet <= 400){
      charges = 'This one is on me!' 
    }
    else if (feet > 400 && feet < 2000) {
      charges = 'That will be twenty bucks.';
    }else if (feet >= 2000 && feet <2500) {
      charges = 'I will gladly take your thirty bucks.'
    }else {
      charges = 'No can do.'
    }
    
  return charges
  
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
        return 'Thank you so much.'
        break;
    case 'not as generous':
        return 'Thank you.'
        break;
    default:
        return 'Bye.'
}
}