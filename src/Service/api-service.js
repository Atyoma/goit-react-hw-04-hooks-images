function fetchPicture(picture, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '25171903-77720667295a00af61497589c';
  const PerPage = 12;
  return fetch(
    `${BASE_URL}?q=${picture}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${PerPage}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    Promise.reject(new Error('Something went wrong!!!'));
  });
}

const api = {
  fetchPicture,
  PerPage: 12,
};

export default api;
