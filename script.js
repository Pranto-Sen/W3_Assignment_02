document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar-list");
  const modals = document.querySelectorAll(".modal");
  const closeBtns = document.querySelectorAll(".close");
  let searchBtn = document.getElementById("search-region");

  // Open modal when clicking navbar items
  ["anywhere", "anyweek", "addguests"].forEach((id) => {
    navbar.querySelector(`#${id}`).onclick = function () {
      openModal(`modal-${id}`);
    };
  });

  // Handle section switching within modals
  modals.forEach((modal) => {
    const modalSections = modal.querySelectorAll(".modal-header h3");
    modalSections.forEach((section, index) => {
      section.onclick = function () {
        showSection(modal, index);
      };
    });
  });

  // Close button functionality
  closeBtns.forEach((btn) => {
    btn.onclick = function () {
      closeAllModals();
    };
  });

  // Close modal when clicking outside
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      closeAllModals();
    }
  };
});

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  showSection(modal, 0)
}

function showSection(modal, index) {
  const sections = modal.querySelectorAll(".modal-body .section");
  sections.forEach((section, i) => {
    section.style.display = i === index ? "block" : "none";
  });
}

function closeAllModals() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
}

function searchRegion() {
  const searchRegion = document.getElementById("search-region");
  const regionOne = document.getElementById("regionOne");

  regionOne.appendChild(searchRegion);

  document.getElementById("choose-dates").style.display = "none";
  document.getElementById("searchregionInner").style.display = "block";

  document.getElementById("add-guests").style.display = "none";
}


///For week

function searchRegion2() {
  const searchRegion = document.getElementById("search-region");
  const regionOne = document.getElementById("regionTwo");

  regionOne.appendChild(searchRegion);

  document.getElementById("choose-dates").style.display = "none";
  document.getElementById("searchregionInner").style.display = "block";

  document.getElementById("add-guests").style.display = "none";
}

function searchRegion3() {
  const searchRegion = document.getElementById("search-region");
  const regionOne = document.getElementById("regionThree");

  regionOne.appendChild(searchRegion);

  document.getElementById("choose-dates").style.display = "none";
  document.getElementById("searchregionInner").style.display = "block";

  document.getElementById("add-guests").style.display = "none";
}

function dateSet() {
  const searchRegion = document.getElementById("search-region");
  const regionOne = document.getElementById("regionOne");

  regionOne.appendChild(searchRegion);

  document.getElementById("searchregionInner").style.display = "none";
  document.getElementById("choose-dates").style.display = "block";

  document.getElementById("add-guests").style.display = "none";
}

function dateSet2() {
  const searchRegion = document.getElementById("search-region");
  const regionOne = document.getElementById("regionTwo");

  regionOne.appendChild(searchRegion);

  document.getElementById("searchregionInner").style.display = "none";
  document.getElementById("choose-dates").style.display = "block";

  document.getElementById("add-guests").style.display = "none";
}

function dateSet3() {
  const searchRegion = document.getElementById("search-region");
  const regionOne = document.getElementById("regionThree");

  regionOne.appendChild(searchRegion);

  document.getElementById("searchregionInner").style.display = "none";
  document.getElementById("choose-dates").style.display = "block";

  document.getElementById("add-guests").style.display = "none";
}

function addGuests() {
  const searchRegion = document.getElementById("search-region");
  const regionOne = document.getElementById("regionOne");

  regionOne.appendChild(searchRegion);

  document.getElementById("searchregionInner").style.display = "none";
  document.getElementById("choose-dates").style.display = "none";
  document.getElementById("add-guests").style.display = "block";
}

function addGuests2() {
  const searchRegion = document.getElementById("search-region");
  const regionOne = document.getElementById("regionTwo");

  regionOne.appendChild(searchRegion);

  document.getElementById("searchregionInner").style.display = "none";
  document.getElementById("choose-dates").style.display = "none";
  document.getElementById("add-guests").style.display = "block";
}
function addGuests3() {
  const searchRegion = document.getElementById("search-region");
  const regionOne = document.getElementById("regionThree");

  regionOne.appendChild(searchRegion);

  document.getElementById("searchregionInner").style.display = "none";
  document.getElementById("choose-dates").style.display = "none";
  document.getElementById("add-guests").style.display = "block";
}

function updateDecrementButton(input) {
  const decrementButton = input.previousElementSibling;
  if (parseInt(input.value) <= 0) {
    decrementButton.disabled = true;
    decrementButton.style.opacity = 0.5;
  } else {
    decrementButton.disabled = false;
    decrementButton.style.opacity = 1;
  }
}

document.querySelectorAll('.increment').forEach(button => {
  button.addEventListener('click', () => {
    const input = button.previousElementSibling;
    input.value = parseInt(input.value) + 1;
    updateDecrementButton(input);
  });
});

document.querySelectorAll('.decrement').forEach(button => {
  button.addEventListener('click', () => {
    const input = button.nextElementSibling;
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
      updateDecrementButton(input);
    }
  });
});

// Initial check to set the state of decrement buttons on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.counter input').forEach(input => {
    updateDecrementButton(input);
  });
});


// search-destination

document.addEventListener("DOMContentLoaded", function () {

  var regionItems = document.querySelectorAll('.region-item');

  regionItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var destination = item.querySelector('p').textContent;
      document.getElementById('search-destination').value = destination;
      document.getElementById('search-destination-2').value = destination;
      document.getElementById('search-destination-3').value = destination;
    });
  });
});



// date picker from Choose your dates

document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#calendar-container1", {
    inline: true,
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "F j, Y",
    defaultDate: new Date(),
    minDate: "2023-01-01",
    maxDate: "2024-12-31",
    onChange: function (selectedDates, dateStr, instance) {
      var inputField = document.getElementById("selected-date-1");
      var inputField2 = document.getElementById("selected-date-2");
      if (inputField.value != "") {
        if (inputField.value > dateStr) {
          //alert("Please select after a date to check in");
        } else {
          inputField2.value = dateStr;
        }
      } else {
        inputField.value = dateStr;
      }

      ///For Anyweek


      var inputField3 = document.getElementById("selected-date-3");
      var inputField4 = document.getElementById("selected-date-4");
      if (inputField3.value != "") {
        if (inputField3.value > dateStr) {
          //alert("Please select after a date to check in");
        } else {
          inputField4.value = dateStr;
        }
      } else {
        inputField3.value = dateStr;
      }


      ///For Guest


      var inputField5 = document.getElementById("selected-date-5");
      var inputField6 = document.getElementById("selected-date-6");
      if (inputField5.value != "") {
        if (inputField6.value > dateStr) {
          //alert("Please select after a date to check in");
        } else {
          inputField6.value = dateStr;
        }
      } else {
        inputField5.value = dateStr;
      }


    }
  });
  var date = new Date();
  flatpickr("#calendar-container2", {
    inline: true,
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "F j, Y",
    defaultDate: new Date(date.setMonth(date.getMonth() + 1)),
    minDate: "2023-01-01",
    maxDate: "2024-12-31",
    onChange: function (selectedDates, dateStr, instance) {
      var inputField = document.getElementById("selected-date-1");
      var inputField2 = document.getElementById("selected-date-2");
      if (inputField.value != "") {
        if (inputField.value > dateStr) {
          //alert("Please select after a date to check in");
        } else {
          inputField2.value = dateStr;
        }

      } else {
        inputField.value = dateStr;
      }


      ///For ANyweek

      var inputField3 = document.getElementById("selected-date-3");
      var inputField4 = document.getElementById("selected-date-4");
      if (inputField3.value != "") {
        if (inputField3.value > dateStr) {
          //alert("Please select after a date to check in");
        } else {
          inputField4.value = dateStr;
        }
      } else {
        inputField3.value = dateStr;
      }


      ///For Guest


      var inputField5 = document.getElementById("selected-date-5");
      var inputField6 = document.getElementById("selected-date-6");
      if (inputField5.value != "") {
        if (inputField5.value > dateStr) {
          //alert("Please select after a date to check in");
        } else {
          inputField6.value = dateStr;
        }
      } else {
        inputField5.value = dateStr;
      }

    }
  });
});


// add guest to increment and decrement

const updateGuestCount = () => {
  const adults = parseInt(document.getElementById('adults').value, 10);
  const children = parseInt(document.getElementById('children').value, 10);
  const infants = parseInt(document.getElementById('infants').value, 10);
  const pets = parseInt(document.getElementById('pets').value, 10);

  const guestSummary = (adults + children) + " guests, " + infants + " infants, " + pets + " pets";

  document.getElementById('guestId').value = guestSummary;
  document.getElementById('guestId-2').value = guestSummary;
  document.getElementById('guestId-3').value = guestSummary;
};

const updateCounter = (input, increment) => {
  const value = parseInt(input.value);
  if (input == '-') {
    input.value = increment ? value - 1 : 0;
  }
  input.value = increment ? value : 0;

  updateGuestCount();
};

document.querySelectorAll('.increment').forEach(button => {
  button.addEventListener('click', function (event) {
    event.stopPropagation(); 
    const target = document.getElementById(this.dataset.target);
    updateCounter(target, true);
  });
});

document.querySelectorAll('.decrement').forEach(button => {
  button.addEventListener('click', function (event) {
    event.stopPropagation(); 
    const target = document.getElementById(this.dataset.target);
    updateCounter("-", false);
  });
});

// Galary to show all images

document.addEventListener('DOMContentLoaded', function () {
  var showAllPhotosBtn = document.querySelector('.overlay-text');
  var galleryModal = createGalleryModal();
  var currentPhotoIndex = 0;
  var photos = [];

  // Get all image sources from the slider
  var images = document.querySelectorAll('.slider img');
  for (var i = 0; i < images.length; i++) {
    photos.push(images[i].src);
  }

  showAllPhotosBtn.addEventListener('click', openGallery);

  function createGalleryModal() {
    var modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML =
      '<div class="gallery-modal-content">' +
      '<span class="gallery-close-btn">&times;</span>' +
      '<img class="gallery-image" src="" alt="Gallery image">' +
      '<button class="prev">&lt;</button>' +
      '<button class="next">&gt;</button>' +
      '<div class="photo-counter"></div>' +
      '</div>';
    document.body.appendChild(modal);

    modal.querySelector('.gallery-close-btn').addEventListener('click', closeGallery);
    modal.querySelector('.prev').addEventListener('click', showPreviousPhoto);
    modal.querySelector('.next').addEventListener('click', showNextPhoto);

    return modal;
  }

  function openGallery() {
    currentPhotoIndex = 0;
    updateGalleryView();
    galleryModal.style.display = 'block';
  }

  function closeGallery() {
    galleryModal.style.display = 'none';
  }

  function showPreviousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    updateGalleryView();
  }

  function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    updateGalleryView();
  }

  function updateGalleryView() {
    var img = galleryModal.querySelector('.gallery-image');
    img.src = photos[currentPhotoIndex];
    galleryModal.querySelector('.photo-counter').textContent = (currentPhotoIndex + 1) + '/' + photos.length;
  }
});


// Share option functionality

const customShareButton = document.querySelector('.custom-share-button');
const customModal = document.getElementById('customShareModal');
const customCloseButton = document.querySelector('.custom-modal-close');
const customCopyLinkButton = document.getElementById('customCopyLink');

customShareButton.onclick = function () {
  customModal.style.display = "block";
}

customCloseButton.onclick = function () {
  customModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == customModal) {
    customModal.style.display = "none";
  }
}

// Copy link button

customCopyLinkButton.onclick = function () {
  const dummyUrl = window.location.href;
  navigator.clipboard.writeText(dummyUrl).then(() => {
    alert("Link copied to clipboard!");
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

// save button to toggol color

const loveButton = document.getElementById('loveButton');

function updateLoveButtonState() {
  const isLoved = localStorage.getItem('isLoved') === 'true';
  loveButton.classList.toggle('loved', isLoved);
}

loveButton.addEventListener('click', function () {
  const isLoved = loveButton.classList.toggle('loved');
  localStorage.setItem('isLoved', isLoved);
});
updateLoveButtonState();
