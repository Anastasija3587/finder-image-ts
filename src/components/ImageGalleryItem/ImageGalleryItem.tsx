import React from 'react';

interface Item {
  [key: string]: string;
}

interface Props {
  item: Item;
  clickImg: (id?: string | undefined) => void;
}

const ImageGalleryItem = ({
  item: { webformatURL, id },
  clickImg,
}: Props): JSX.Element => (
  <li
    className="ImageGalleryItem"
    onClick={(): void => clickImg(id)}
    role="presentation"
  >
    <img id={id} src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;
