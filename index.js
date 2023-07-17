

let rideCost;

function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    rideCost = 'This one is on me!';

  } else if (ride > 400 && ride <= 2000) {
    rideCost = 'That will be twenty bucks.'

    } else if (ride > 2000 && ride <= 2500) {
    rideCost = 'I will gladly take your thirty bucks.'

  } else if (ride > 2500) {
    rideCost = 'No can do.'
  }
return rideCost;
}

function ternaryCheckCity(city){
  let city1;
  city === 'NYC' ? (city1 = "Ok, sounds good.") : (city1 = "No go.")
  return city1;
}

function switchOnCharmFromTip(tip){
  let tipAmount;
  switch (tip) {
    case 'generous':
      tipAmount = 'Thank you so much.'
      break;

    case 'not as generous':
      tipAmount = 'Thank you.'
      break;

    default:
      tipAmount = 'Bye.'
  }
  return tipAmount;
}