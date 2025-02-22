
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { searchImage } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import { renderMoreImages } from "./js/render-functions.js";


const form = document.querySelector(".formImage");
const btnSearch = document.querySelector(".btn_search");
const input = document.querySelector(".inputImage");
const gallery = document.querySelector(".gallery");

const loader = document.querySelector(".loader");

const btnLoadMore = document.querySelector(".btn-load-more");

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function showBtn() {
  btnLoadMore.style.display = "block";
}

function hideBtn() {
  btnLoadMore.style.display = "none";
}

function checkBtnStatus() {
    console.log(params.total);
    console.log(params.perPage);
    const maxPage = Math.ceil(params.total / params.perPage);
    console.log(maxPage);
    if (params.page >= maxPage) {
        hideBtn();
        iziToast.info({
            title: 'info',
            position: 'topRight',
            message: "We're sorry, but you've reached the end of search results.",
        });
        console.log("We're sorry, but you've reached the end of search results.");
    } else {
        showBtn();
    }
}


const params = {
    userValue: '',
    page: 1,
    total: 0,
    perPage: 40,
}

hideLoader()
hideBtn()
form.addEventListener('submit', ev => {
    ev.preventDefault();

    params.userValue = input.value.trim()
    console.log(params.userValue);
    params.page = 1;

    if (params.userValue === "") {
        gallery.innerHTML = "";
        iziToast.error({
            title: 'Error',
            message: 'Please, full the field!',
        });
        return;
    } else {
        console.log('make HTTP request');
        showLoader();
        async function fetchAndRenderImages() {
            try {
                const res = await searchImage(params.userValue, params.page);
                params.total = res.total;
                renderImages(res.hits);
                checkBtnStatus();
        
            }
            catch (error) { console.log(error); }
        finally {
                hideLoader();
            }
        }
        fetchAndRenderImages();
        ev.target.reset();
    }
    
})

btnLoadMore.addEventListener('click', ev => {
    params.page += 1;
    showLoader();
        async function fetchAndRenderImages() {
            try {
                const res = await searchImage(params.userValue, params.page);
                renderMoreImages(res.hits);
                checkBtnStatus();
            }
            catch (error) { console.log(error); }
        finally {
                hideLoader();
            }
        }
        fetchAndRenderImages();
        ev.target.reset();
})





            

        
    
