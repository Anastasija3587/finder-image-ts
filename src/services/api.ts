/* eslint-disable max-len */
import axios from 'axios';

const keyAPI = '14824365-e6696933d91165e226b0fb92a';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getItems = (searchQuery = '', page = 1): Promise<any> =>
  axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${keyAPI}&image_type=photo&orientation=horizontal&per_page=12`,
  );

export const w = (): unknown => null;
