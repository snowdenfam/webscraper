





    let element = {
        title,
            link: 'https://amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A03078372WABZ8V6NFP9L&url=%2FSUPERJARE-Mounted-Floating-Shelves-Display%2Fdp%2FB07H4NRT36%2Fref%3Dsr_1_59_sspa%3Fcrid%3D36QNR0DBY6M7J%26dchild%3D1%26keywords%3Dshelves%26qid%3D1627970918%26refresh%3D1%26sprefix%3Ds%252Caps%252C309%26sr%3D8-59-spons%26psc%3D1&qualifier=1627970918&id=3373422987100422&widgetName=sp_btf',
        image,
        link: ``,
        price,
    }

    if (reviews) {
        element.reviews = reviews
    }

    if (stars) {
        element.stars = stars
    }



const axios = require("axios");
const cheerio = require("cheerio");

const fetchShelves = async () => {
   try {
       const response = await axios.get('https://www.amazon.com/s?crid=36QNR0DBY6M7J&k=shelves&ref=glow_cls&refresh=1&sprefix=s%2Caps%2C309');

       const html = response.data;

       const $ = cheerio.load(html);

       const shelves = [];

 $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20').each((_idx, el) => {
           const shelf = $(el)
           const title = shelf.find('span.a-size-base-plus.a-color-base.a-text-normal').text()

           const image = shelf.find('img.s-image').attr('src')

const link = shelf.find('a.a-link-normal.a-text-normal').attr('href')

const reviews = shelf.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').children('span').last().attr('aria-label')

const stars = shelf.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')

const price = shelf.find('span.a-price > span.a-offscreen').text()


    let element = {
    
            title: 'SUPERJARE Wall Mounted Shelves, Set of 2, Display Ledge, Storage Rack for Room/Kitchen/Office - White',
            image: 'https://m.media-amazon.com/images/I/61fTtaQNPnL._AC_UL320_.jpg',
            link: 'https://amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A03078372WABZ8V6NFP9L&url=%2FSUPERJARE-Mounted-Floating-Shelves-Display%2Fdp%2FB07H4NRT36%2Fref%3Dsr_1_59_sspa%3Fcrid%3D36QNR0DBY6M7J%26dchild%3D1%26keywords%3Dshelves%26qid%3D1627970918%26refresh%3D1%26sprefix%3Ds%252Caps%252C309%26sr%3D8-59-spons%26psc%3D1&qualifier=1627970918&id=3373422987100422&widgetName=sp_btf',
            price: '$32.99',
            reviews: '6,171',
            stars: '4.7 out of 5 stars'
    }

    if (reviews) {
        element.reviews = reviews
    }

    if (stars) {
        element.stars = stars
    }
           

           shelves.push(element)
       });

       return shelves;
   } catch (error) {
       throw error;
   }
};

fetchShelves().then((shelves) => console.log(shelves));