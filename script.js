const btn = document.querySelector('.btn');
btn.addEventListener('click', function onClick()
{
  btn.style.backgroundColor= '#ffac09';
  btn.style.boxshadow='0 0 40px #ffac09';
  box.style.transition= '.5s ease';
})

function getGreeting()
{
  var today = new Date();
  var hour = today.getHours();

  if (hour < 12) {
    alert("Heyy Buddy, Good morning!😁");
  } else if (hour < 18) {
    alert("Heyy Buddy, Good afternoon!😁");
  } else {
    alert("Heyy Buddy, Good evening!😁");
  }

alert(greeting);
}

function calculate()
{
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var result = num1 + num2;
  document.getElementById('result').innerText = "Your Result : " + result;
}



