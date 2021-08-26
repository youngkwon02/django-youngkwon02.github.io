const thumbnailSizeSet = () => {
  let photoViewThumb = document.querySelectorAll('.photo-view-thumbnail');
  let photoViewThumbWidth = photoViewThumb[0].offsetWidth;
  for(let i=0; i<photoViewThumb.length; i++) {
    photoViewThumb[i].style.height = photoViewThumbWidth + 'px';
  }
}

const imageRendering = (page) => {
  // @FIXME: modify below variable if you want to modify the number of images for each page
  let numberOfImageForEachPage = 8;
  let startIndex = (page-1)*numberOfImageForEachPage;
  let endIndex = (page*numberOfImageForEachPage) - 1;
  let maxIndex = GALLERY_INDEX.length -1;

  if(startIndex > maxIndex){
    location.href = "/gallery/";
  } else if(endIndex > maxIndex){
    endIndex = maxIndex;
  }

  let innerHTML = "";
  for(let i=startIndex; i<=endIndex; i++) {
    innerHTML += '<div class="photo-view-thumbnail">';
    innerHTML += '<img src="/static/image/gallery/' + GALLERY_INDEX[i] + '">';
    innerHTML += '<div class="photo-view-title">' + titleParsing(GALLERY_INDEX[i]) + '</div>';
    innerHTML += '</div>';
  }
  
  document.querySelector('.photo-view-container').innerHTML = innerHTML;
  thumbnailSizeSet();
}

const titleParsing = (name) => {
  return name.split('.')[0];
}