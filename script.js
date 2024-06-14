document.addEventListener('scroll', function() {
  const servicesSection = document.querySelector('.services');
  const contactSection = document.querySelector('#contact');

  const servicesRect = servicesSection.getBoundingClientRect();
  const contactRect = contactSection.getBoundingClientRect();

  const isServicesVisible = (servicesRect.top >= 0 && servicesRect.bottom <= window.innerHeight);
  const isContactVisible = (contactRect.top >= 0 && contactRect.bottom <= window.innerHeight);

  if (isServicesVisible) {
      servicesSection.classList.add('visible');
      servicesSection.classList.remove('hidden');
  } else {
      servicesSection.classList.remove('visible');
      servicesSection.classList.add('hidden');
  }

  if (isContactVisible) {
      contactSection.classList.add('visible');
  } else {
      contactSection.classList.remove('visible');
  }
});
