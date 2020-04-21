import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

interface Item {
  [key: string]: string;
}

interface Props {
  items: Array<Item>;
  clickImg: () => void;
}

const ImageGallery = ({ items, clickImg }: Props): JSX.Element => (
  <ul className="ImageGallery">
    {items.map((item: Item) => (
      <ImageGalleryItem key={item.id} item={item} clickImg={clickImg} />
    ))}
  </ul>
);

export default ImageGallery;
