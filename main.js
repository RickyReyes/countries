/* bling js */
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

const endpoint = 'https://restcountries.com/v3.1/all';
let countries = [];
let borderCodesArr = [];
let flags;
let borders = [];
let dark = false;
const ul = $('ul');
const select = $('select');
const searchBar = $('.search');
const detailPage = $('.detail-page');
const backBtn = $('.back-btn');

searchBar.addEventListener('input', search);
select.addEventListener('change', filterCountries);
backBtn.addEventListener('click', () => {
    detailPage.style.visibility = 'hidden';
    document.body.style.overflowY = 'scroll';
})

async function fetchCountries() {
    const response = await fetch(endpoint);
    countries = await response.json();
    renderCountries(countries);
    ul.addEventListener('click', handleDetailClick);
}

fetchCountries();

function renderCountries(arr) {
    /*  sort countries by name */
    arr.sort((a, b) => {
        if (a.name.common > b.name.common) return 1;
        if (a.name.common < b.name.common) return -1;
        return 0;
      });

    let html = arr.map(country => `
    <li class="country ${dark ? 'dark' : ''}">
        <div class="flag" style="background-image: url(${country.flags.png})"></div>
        <div class="name-and-info-container">
            <h2 class="name">${country.name.common}</h2>
            <ul class="info-container">
                <li class="info-item">
                <span class="info-title">Population</span>: ${numberWithCommas(country.population)}
                </li>
                <li class="info-item">
                <span class="info-title">Region</span>: ${country.region}
                </li>
                <li class="info-item">
                <span class="info-title">Capital</span>: ${country.capital ? country.capital : 'No capital'}
                </li>
            </ul>
            </div>
            </li>
    `).join('');
    ul.innerHTML = html;
}
            
/* from stack overflow */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* functionality for filter by region */
function filterCountries() {
    if (this.value == 'all') {
        renderCountries(countries);
        return;
    }
    let filtered = countries.filter(country => {
        return country.region.toLowerCase() == this.value;
    })
    renderCountries(filtered);
}

/* search bar functionality */
function search(e) {
    let str = e.target.value.toLowerCase();
    let matches = countries.filter(country => {
        let name = country.name.common.toLowerCase();
        return name.includes(str);
    });
    renderCountries(matches);
}

/* passes the correct country to renderDetails, based on either flag click OR
border country click */
function handleDetailClick(e) {
    if (!e.target.classList.contains('flag') &&
        !e.target.classList.contains('border-country')) return; /* not a flag  or border country */
    if (e.target.classList.contains('flag')) {
        let country = countries.filter(country => {
            return `url("${country.flags.png}")` == e.target.style.backgroundImage;
        })[0];
        renderDetails(country);
    }
    if (e.target.classList.contains('border-country')) {
        if (e.target.textContent == 'None')return;
        let name = this.textContent.toLowerCase();
        let country = countries.filter(country => 
            country.name.common.toLowerCase() == name
        )[0];
        renderDetails(country);
    }
}
/* render the countries details */
function renderDetails(country) {
    /* we will map information into these
    DOM elements */
    let flag = $('.det-flag');
    let name = $('.det-name');
    let nativeName = $('.det-native-name');
    let pop = $('.det-pop');
    let region = $('.det-region');
    let subRegion = $('.det-sub-region');
    let capital = $('.det-capital');
    let tld = $('.det-tld');
    let currencies = $('.det-currencies');
    let languages = $('.det-languages');
    let bordersUl = $('.border-countries-flex');
    
    flag.src = `${country.flags.png}`;
    name.textContent = country.name.common;
    nativeName.textContent = country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'None';
    pop.textContent = numberWithCommas(country.population);
    region.textContent = country.region;
    subRegion.textContent = country.subregion ? country.subregion : 'None';
    capital.textContent = country.capital ? country.capital[0] : 'None';
    tld.textContent = country.tld[0];
    currencies.textContent = country.currencies ? Object.values(Object.values(country.currencies)).map(currency => currency.name).join(', ') : 'None';
    languages.textContent = country.languages ? Object.values(country.languages).join(', ') : 'None';

    let filteredBorderCodes = country.borders ? country.borders.filter(border => border !== "UNK") : [];

    borderCodesArr = country.borders ? filteredBorderCodes.map(code => {
        let codeToCountry = countries.filter(country => country.cca3 == code);
        return codeToCountry[0].name.common;
    }) : ['None'];

    let bordersHtml = borderCodesArr.map(country => `<li class="border-country ${dark ? 'dark' : ''}">${country}</li>`
    ).join('');

    bordersUl.innerHTML = bordersHtml;
    borders = $$('.border-country');
    borders.forEach(border => border.addEventListener('click', handleDetailClick));
    detailPage.style.visibility = 'visible';
    document.body.style.overflowY = 'hidden'
}

/* dark mode */
const darkElements = [
    $('header'),
    $('h1'), 
    $('.mode'), 
    $('body'), 
    $('.search-container'), 
    $('.search'), 
    $('.fa-search'), 
    $('select'), 
    $('.arrow-container'),
    $('.detail-page'),
    $('.back-btn'),
    $('.det-flag')
];

const moon = $('.fa-moon');
$('.mode-flex').addEventListener('click', toggleMode);
function toggleMode() {
    dark = !dark;
    darkElements.forEach(elem => {
        elem.classList.toggle('dark');
    });

    $$('.country').forEach(country => country.classList.toggle('dark'));
    $$('.border-country').forEach(country => country.classList.toggle('dark'));
    moon.classList.toggle('fas');
    moon.classList.toggle('far');
}

