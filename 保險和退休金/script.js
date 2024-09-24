document.getElementById('dataForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const birthdate = new Date(document.getElementById('birthdate').value);
  const insuranceStartDate = new Date(document.getElementById('insuranceStartDate').value);
  const insuranceEndDate = new Date(document.getElementById('insuranceEndDate').value);
  const desiredPension = parseFloat(document.getElementById('desiredPension').value);
  
  const today = new Date();
  const lifeExpectancy = 100 * 365; // 100 years in days
  
  // 計算到生命預計還有多少天
  const daysLived = Math.floor((today - birthdate) / (1000 * 60 * 60 * 24));
  const daysLeftToLive = lifeExpectancy - daysLived;
  const yearsLeftToLive = Math.floor(daysLeftToLive / 365);
  const remainingDaysLeftToLive = daysLeftToLive % 365;
  
  // 計算保險從業時間到目前為止總共多少天
  const daysWorked = Math.floor((today - insuranceStartDate) / (1000 * 60 * 60 * 24));
  const yearsWorked = Math.floor(daysWorked / 365);
  const remainingDaysWorked = daysWorked % 365;
  
  // 計算目前時間到退休日還有多少天
  const daysUntilRetirement = Math.floor((insuranceEndDate - today) / (1000 * 60 * 60 * 24));
  const yearsUntilRetirement = Math.floor(daysUntilRetirement / 365);
  const remainingDaysUntilRetirement = daysUntilRetirement % 365;
  
  // 計算退休金每天要存多少錢才可以在退休日順利退休
  const totalDays = Math.floor((insuranceEndDate - insuranceStartDate) / (1000 * 60 * 60 * 24));
  const dailySavings = desiredPension / totalDays;
  const yearlySavings = dailySavings * 365;
  
  document.getElementById('yearsLeftToLive').textContent = yearsLeftToLive;
  document.getElementById('daysLeftToLive').textContent = remainingDaysLeftToLive;
  document.getElementById('yearsWorked').textContent = yearsWorked;
  document.getElementById('daysWorked').textContent = remainingDaysWorked;
  document.getElementById('yearsUntilRetirement').textContent = yearsUntilRetirement;
  document.getElementById('daysUntilRetirement').textContent = remainingDaysUntilRetirement;
  document.getElementById('dailySavings').textContent = dailySavings.toFixed(2);
  document.getElementById('yearlySavings').textContent = yearlySavings.toFixed(2);
});