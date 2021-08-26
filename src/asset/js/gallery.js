window.onload = () => {
  let photoViewThumb = document.querySelectorAll('.photo-view-thumbnail');
  let photoViewThumbWidth = photoViewThumb[0].offsetWidth;
  for(let i=0; i<photoViewThumb.length; i++) {
    photoViewThumb[i].style.height = photoViewThumbWidth + 'px';
  }
}