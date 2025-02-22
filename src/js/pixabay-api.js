import axios from 'axios';
import iziToast from "izitoast";

const gallery = document.querySelector(".gallery");


export async function searchImage(userValue, page) {
    try {
        const BASE_URL = 'https://pixabay.com';
        const END_POINT = '/api/';

        const params = new URLSearchParams({
            key: '48801957-4c351c0f3a606f3cba9240365',
            q: userValue,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 40,
            page: page,
        });

        const url = `${BASE_URL}${END_POINT}?${params}`;
        const res = await axios.get(url);
        console.log(res.data.hits.length);
        
        if (res.data.hits.length !== 0) {
            // return res.data.hits;
            return res.data;
        
        } else {
            gallery.innerHTML = "";
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return Promise.reject('No images found');
        }
    }
          catch (er) {
          console.error("Fetch error:", er);
          iziToast.error({
              title: "Error",
              message: "Something went wrong. Please try again later.",
          });
          throw er;
      }
}