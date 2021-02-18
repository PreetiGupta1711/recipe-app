import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://instagram-facebook-media-downloader.p.rapidapi.com/api',
  params: {igurl: 'https://www.instagram.com/p/BvJyyOhoYvJ'},
  headers: {
    'x-rapidapi-key': 'undefined',
    'x-rapidapi-host': 'instagram-facebook-media-downloader.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});