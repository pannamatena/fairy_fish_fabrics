import React from 'react';
import Lightbox from 'react-images';

const ImageViewer = (props) => {
  const formatGallery = currentGallery => (
      props.galleries[currentGallery] ? props.galleries[currentGallery].map(img => (
          { src: img.url }
      )) : []
  );

  return (
      <Lightbox
          currentImage={props.currentImage}
          images={formatGallery(props.currentGallery)}
          isOpen={props.isImageViewerOpen}
          onClickImage={() => props.goToNextImage(props.currentGallery)}
          onClickNext={() => props.goToNextImage(props.currentGallery)}
          onClickPrev={props.goToPrevImage}
          onClickThumbnail={props.goToSelectedImage}
          onClose={props.closeImageViewer}
          showThumbnails
          showImageCount={false}
      />
  );
};

export default ImageViewer;
