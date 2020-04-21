import React, { Component } from 'react';

interface Item {
  [key: string]: string;
}

interface MyProps {
  clickImg: (id?: string | undefined) => void;
  items: Array<Item>;
  idForImage: string | undefined;
}

class Modal extends Component<MyProps, {}> {
  state = {};

  componentDidMount(): void {
    window.addEventListener('keydown', this.closeImg);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.closeImg);
  }

  closeImg = (e: KeyboardEvent): void => {
    const { clickImg } = this.props;
    if (e.code !== 'Escape') return;
    clickImg();
  };

  handleCloseImg = (e: React.MouseEvent): void => {
    const { clickImg } = this.props;
    const overlay = e.target as HTMLInputElement;
    if (overlay.className !== 'Overlay') return;
    clickImg();
  };

  render(): JSX.Element {
    const { items, idForImage } = this.props;
    const itemImage = items.find((item: Item) => item.id === idForImage);
    return (
      <div
        onClick={this.handleCloseImg}
        className="Overlay"
        role="presentation"
      >
        <div className="Modal">
          <img src={itemImage && itemImage.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
