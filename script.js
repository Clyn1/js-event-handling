// 1. Event Handling
document.getElementById('magicBtn').addEventListener('click', () => {
    alert("🎩 Magic Happened!");
  });
  
  // Hover effect
  const hoverText = document.getElementById('hoverText');
  hoverText.addEventListener('mouseenter', () => {
    hoverText.textContent = "🎉 You're hovering!";
  });
  hoverText.addEventListener('mouseleave', () => {
    hoverText.textContent = "Hover over me!";
  });
  
  // Keypress detection
  document.addEventListener('keydown', (e) => {
    document.getElementById('keyOutput').textContent = e.key;
  });
  
  // Double-click secret
  document.getElementById('secretBtn').addEventListener('dblclick', () => {
    document.getElementById('secretMessage').classList.remove('hidden');
  });
  
  // 2. Image Gallery
  let images = [
    "https://placekitten.com/200/200",
    "https://placebear.com/200/200",
    "https://place-puppy.com/200x200"
  ];
  let currentIndex = 0;
  
  function updateImage() {
    document.getElementById('galleryImg').src = images[currentIndex];
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }
  
  // 3. Accordion
  document.querySelector('.accordion-toggle').addEventListener('click', () => {
    const content = document.querySelector('.accordion-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
  
  // 4. Form Validation
  const form = document.getElementById('signupForm');
  const password = document.getElementById('password');
  const hint = document.getElementById('passwordHint');
  const msg = document.getElementById('formMsg');
  
  password.addEventListener('input', () => {
    if (password.value.length < 8) {
      hint.textContent = "Password must be at least 8 characters.";
    } else {
      hint.textContent = "";
    }
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (password.value.length < 8) {
      msg.textContent = "❌ Fix errors before submitting.";
    } else {
      msg.textContent = "✅ Form submitted successfully!";
      form.reset();
    }
  });
  