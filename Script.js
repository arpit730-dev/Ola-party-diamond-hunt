// Initialize with 1 diamond to force first recharge
let userDiamonds = 1;
const FREE_RECHARGE_AMOUNT = 100000;

// Update display
function updateDiamondDisplay() {
  document.getElementById('remaining-diamonds').textContent = 
    userDiamonds.toLocaleString();
}

// Free recharge function
function handleFreeRecharge() {
  if (userDiamonds <= 0) {
    userDiamonds = FREE_RECHARGE_AMOUNT;
    updateDiamondDisplay();
    
    // Show confirmation
    Swal.fire({
      title: 'Recharged!',
      text: `You received ${FREE_RECHARGE_AMOUNT.toLocaleString()} free diamonds!`,
      icon: 'success',
      confirmButtonText: 'Happy Hunting!'
    });
    
    // Track in today's change
    updateTodayChange(FREE_RECHARGE_AMOUNT);
  } else {
    Swal.fire({
      title: 'Not Available',
      text: 'You can only get free diamonds when your balance is zero',
      icon: 'info'
    });
  }
}

// Custom betting
function handleCustomBet() {
  const betAmount = parseInt(document.getElementById('custom-bet-amount').value);
  
  if (isNaN(betAmount) {
    Swal.fire('Error', 'Please enter a valid bet amount', 'error');
    return;
  }
  
  if (betAmount > userDiamonds) {
    Swal.fire('Error', 'You don\'t have enough diamonds', 'error');
    return;
  }
  
  // Process bet...
}

// Event listeners
document.getElementById('free-rc-btn').addEventListener('click', handleFreeRecharge);
document.getElementById('place-bet-btn').addEventListener('click', handleCustomBet);

// Quick bet buttons
document.querySelectorAll('.bet-amount').forEach(btn => {
  btn.addEventListener('click', function() {
    const amount = parseInt(this.dataset.amount);
    document.getElementById('custom-bet-amount').value = amount;
  });
});

// Initialize
updateDiamondDisplay();
