/* header toogle */
$(document).ready(function(){
    $('#menubtn').click(function(){
        $('ul').toggleClass('show');
        this.classList.toggle('fa-xmark')
    });
});







// add to cart and favourtie
$(document).ready(function() {
    
    let cartCount = 0;
    let favoritesCount = 0;

    // Add to Cart
    $(".add-to-cart").click(function() {
        cartCount++;
        updateNavbarCounts();
        alert("Item added to cart!");
    });

    // Add to Favorites
    $(".add-to-favorites").click(function() {
        favoritesCount++;
        updateNavbarCounts();
        alert("Item added to favorites!");
    });

    // Navbar Counts Update
    function updateNavbarCounts() {
        $(".cart-count").text(cartCount);
        $(".favorites-count").text(favoritesCount);
    }

    // Cart Icon Click
    $(".fa-shopping-cart").click(function() {
        displayModal("cart");
    });

    // Favorites Icon Click
    $(".fa-heart").click(function() {
        displayModal("favorites");
    });

});











//container scroll images
const duration = 10; // in seconds
const speed = 100; // in pixels

const imageContainer = document.querySelector('.image-container');

function scrollImages() {
  const containerHeight = imageContainer.offsetHeight;
  const totalHeight = imageContainer.scrollHeight;
  const distance = containerHeight / (duration * 60) * speed;
  
  let position = imageContainer.scrollTop;
  
  position += distance;
  if (position >= totalHeight) {
    position = 0;
  }
  
  imageContainer.scrollTop = position;
}

setInterval(scrollImages, 1000 / 30);



//fashion-carousel
function showPhoto(index, postId) {
    const carousel = document.getElementById(postId);
    const photos = carousel.querySelectorAll('.photo');
    const buttons = carousel.querySelectorAll('.radius-btn');

    photos.forEach(photo => photo.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));

    const currentPhoto = photos[index - 1];
    const currentButton = buttons[index - 1];

    currentPhoto.classList.add('active');
    currentButton.classList.add('active');
}






//contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validate form values (you can add more validation as needed)
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Send the form data to the server (here we're simulating it with a console log)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);

    // Display confirmation message
    document.getElementById('confirmationMessage').classList.remove('hidden');
});