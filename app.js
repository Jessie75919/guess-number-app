const numberInput = document.getElementById('number');
const btn = document.getElementById('btn');
const randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);

btn.addEventListener('click', function () {
  const userVal = parseInt(numberInput.value, 10);

  if (userVal === randomNumber) {
    Swal.fire({
      title: 'Awesome!!!',
      text: 'You are Right',
      icon: 'success',
      confirmButtonText: 'Cool',
    });
    return;
  }

  if (userVal > randomNumber) {
    Swal.fire({
      title: 'Error!',
      text: 'smaller!!',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
    return;
  }

  if (userVal < randomNumber) {
    Swal.fire({
      title: 'Error!',
      text: 'larger!!',
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  }
});
