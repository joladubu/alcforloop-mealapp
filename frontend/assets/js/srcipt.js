// Modal

var modal = document.getElementById('myModal');
var newModal = document.getElementById('signModal');

var register = document.getElementById('register');

// Get the button that opens the modal
var btn = document.getElementById("signIn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
     modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

register.onclick = function() {
    modal.style.display = "block";
}


const redirect = location => {
    window.location.href = `${location}.html`;
  };

  //Toast Settings
  iziToast.settings({
    timeout: 1500,
    resetOnHover: true,
  });


  const orderMeals = document.querySelectorAll('.orderMeal');
  if (orderMeals !== null) {
    orderMeals.forEach(orderMeal => {
      orderMeals.addEventListener('click', () => {
        overlay.classList.remove('hide');
        iziToast.show({
          color: 'green',
          icon: 'ico-success',
          title: 'Success',
          message: 'Adding to Cart..',
          position: 'center',
          onClosing: () => {
            redirect('login');
          }
        });
      });
    });
  }