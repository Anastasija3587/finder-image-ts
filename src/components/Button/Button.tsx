import React from 'react';

type props = {
  clickMore: () => void;
};

const Button = ({ clickMore }: props): JSX.Element => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
  return (
    <button onClick={clickMore} className="Button" type="button">
      Load more
    </button>
  );
};

export default Button;
