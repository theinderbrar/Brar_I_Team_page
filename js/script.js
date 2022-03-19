////////////////// Member Arrays
const memberDp = [`inderpal.jpg`, `jerome-niederberger-VjoWum0vCZc-unsplash.jpg`];
const memberName = ['Inderpal Singh Brar', 'Isabella Ellery'];
const memberDescription = [
  `I’m currently a student of Fanshawe college pursuing Interactive Media Design, also called IDP3. The course all based on web development and designing the content. However, my hobbies are singing, composition and writing.`,
  `I’m currently an international student of Fanshawe college pursuing Culinary and I love making food and discovering new recipes. I generally love photography and to have photo sessions, I want to work in the movies and working hard on it.`,
];

let currentMember = 0;

////////////////// HTML Elements

// Buttons
const previousButton = document.querySelector('.previous-member');
const nextButton = document.querySelector('.next-member');
// COntainers
const nameContainer = document.querySelector('.member__name');
const descriptionContainer = document.querySelector('.member__description');
const imageContainer = document.querySelector('.member__dp img');

////////////////// Starting Changes

imageContainer.src = '/img/team/' + memberDp[currentMember];
nameContainer.textContent = memberName[currentMember];
descriptionContainer.textContent = memberDescription[currentMember];

////////////////// Event Listeners

// Previous Button
previousButton.addEventListener('click', function (e) {
  currentMember = currentMember - 1;
  if (currentMember < 0) {
    currentMember = memberName.length - 1;
  }
  imageContainer.src = '/img/team/' + memberDp[currentMember];
  nameContainer.textContent = memberName[currentMember];
  descriptionContainer.textContent = memberDescription[currentMember];
});
// Next Button
nextButton.addEventListener('click', function (e) {
  currentMember = currentMember + 1;
  if (currentMember > memberName.length - 1) {
    currentMember = 0;
  }
  imageContainer.src = '/img/team/' + memberDp[currentMember];
  nameContainer.textContent = memberName[currentMember];
  descriptionContainer.textContent = memberDescription[currentMember];
});
