function generateLottery() {
    const numbers = [];
  
    while (numbers.length < 30) {
      const randomNumber = Math.floor(Math.random() * 60) + 1;
  
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
  
    const lotteryTable = document.getElementById("lottery");
    let lotteryHtml = "";
  
    for (let i = 0; i < 5; i++) {
      lotteryHtml += "<tr>";
  
      for (let j = 0; j < 6; j++) {
        const numberIndex = i * 6 + j;
        const number = numbers[numberIndex];
        lotteryHtml += `<td>${number}</td>`;
      }
  
      lotteryHtml += "</tr>";
    }
  
    lotteryTable.innerHTML = lotteryHtml;
  }
  