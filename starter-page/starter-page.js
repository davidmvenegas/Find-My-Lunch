const API_KEY = 'e1p_jXV2v5Fek2nMXFeAbAiV0B-UzUwGotKlkdAbekB4Xlezb8cR6G2xTDb3OeDp00beT3UV_rwDEaDJn_j5i2PvuDKBeJnHMXLnCbCMFTLTc-5edmmw47Yvjr52YXYx'
const CLIENT_ID = '1_rXgo7_WfltmZhQVB9Mzw'


getYelpData('restaurants','1,2,3,4', 700)


function getYelpData(term, price, radius = 700, stars = 0) {
    let loader = document.querySelector('.loader')
    loader.style.opacity = 1
    navigator.geolocation.getCurrentPosition((yourLocation) => {
        let {latitude, longitude} = yourLocation.coords
        let limit = 50

        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&radius=${radius}&term=${term}&limit=${limit}&price=${price}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-requested-with': 'xmlhttprequest',
                'Access-Control-Allow-Origin':'*',
                'Authorization': `Bearer e1p_jXV2v5Fek2nMXFeAbAiV0B-UzUwGotKlkdAbekB4Xlezb8cR6G2xTDb3OeDp00beT3UV_rwDEaDJn_j5i2PvuDKBeJnHMXLnCbCMFTLTc-5edmmw47Yvjr52YXYx`,
            }
        })
        .then(res => res.json())
        .then(data => {
            loader.style.opacity = 0
            for (let element in data.businesses){
                if (data.businesses[element].rating >= stars)
                {
                    makeYelpElement(data.businesses[element], latitude, longitude)
                }
            }
        })
        .catch(error => {
            console.log('Error: '+ error)
        })
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    let termSearch = 'restaurants'
    let price = '1,2,3,4'
    let pizza = document.getElementById('food-type-pizza')
    let all = document.getElementById('food-type-all')
    let burger = document.getElementById('food-type-burger')
    let chinese = document.getElementById('food-type-chinese')
    let burrito = document.getElementById('food-type-burrito')
    let coffee = document.getElementById('food-type-coffee')
    let salad = document.getElementById('food-type-salad')
    let bar = document.getElementById('food-type-beer')
    let distance = 805
    let starsChecked = 0
    all.addEventListener('click', ()=>{
        termSearch = 'restaurants'
        reloadElements(termSearch, price, distance, starsChecked)
    })
    pizza.addEventListener('click',()=>{
        termSearch = 'pizza'
        reloadElements(termSearch, price, distance, starsChecked)
    }
    )
    salad.addEventListener('click',()=>{
        termSearch = 'salad'
        reloadElements(termSearch, price, distance, starsChecked)
    }
    )
    burger.addEventListener('click',()=>{
        termSearch = 'burger'
        reloadElements(termSearch, price, distance, starsChecked)
    }
    )
    chinese.addEventListener('click',()=>{
        termSearch = 'chinese'
        reloadElements(termSearch, price, distance, starsChecked)
    }
    )
    burrito.addEventListener('click',()=>{
        termSearch = 'burrito'
        reloadElements(termSearch, price, distance, starsChecked)
    }
    )
    coffee.addEventListener('click',()=>{
        termSearch = 'coffee'
        reloadElements(termSearch, price, distance, starsChecked)

    }
    )
    bar.addEventListener('click',()=>{
        termSearch = 'bar'
        reloadElements(termSearch, price, distance, starsChecked)

    }
    )
    


    let toggleButton = document.querySelector('.menu-toggle-btn')
    let toggleButtonUp = document.querySelector('.menu-toggle-btn-up')
    let toggleMenu = document.querySelector('.sidebar')
    let cardsContainer = document.querySelector('.card-container')
    let byeByeButton = document.querySelector('.menu-toggle-btn')

    toggleButton.addEventListener('click', ()=>{
        toggleMenu.classList.toggle('active')
        byeByeButton.classList.toggle('bye-bye')
    })
    toggleButtonUp.addEventListener('click', ()=>{
        toggleMenu.classList.toggle('active')
        byeByeButton.classList.toggle('bye-bye')
    })

    let submitButton = document.getElementById('submit-button')
    let priceOne = document.getElementById('price-checkbox-1')
    let priceTwo = document.getElementById('price-checkbox-2')
    let priceThree = document.getElementById('price-checkbox-3')
    let priceFour = document.getElementById('price-checkbox-4')
    let distanceSelected = document.getElementById('distanceSlider')
    submitButton.addEventListener('click',()=>{
        toggleMenu.classList.toggle('active')
        byeByeButton.classList.toggle('bye-bye')
        price = ''
        let twoSelected
        let threeSelected
        let fourSelected
        let allSelected = (priceOne.checked && priceTwo.checked && priceThree.checked && priceFour.checked)
        let noneSelected = (!priceOne.checked && !priceTwo.checked && !priceThree.checked && !priceFour.checked)


        // giving price filter functionality
        if (allSelected || noneSelected){
          price = '1,2,3,4'
      }
        else { 
                if (priceOne.checked){
                    price += '1'
                }
                else if (priceTwo.checked){
                    price += '2'
                    twoSelected = true
                }
                else if (priceThree.checked){
                    price += '3'
                    threeSelected = true
                }
                else if (priceFour.checked){
                    price += '4'
                    fourSelected = true
                }
            for (let i = 0; i< 2; i++ ){
                if (price) {
                if (!twoSelected && priceTwo.checked){
                    price += ',2'
                    twoSelected = true
                }
                else if (!threeSelected && priceThree.checked){
                    price += ',3'
                    threeSelected = true
                }
                else if (!fourSelected && priceFour.checked){
                    price += ',4'
                    fourSelected = true
                }
            }}

        }
        let ratingFive = document.getElementById('rating-checkbox-5')
        let ratingFour = document.getElementById('rating-checkbox-4')
        let ratingThree = document.getElementById('rating-checkbox-3')
        let ratingTwo = document.getElementById('rating-checkbox-2')
        let ratingOne = document.getElementById('rating-checkbox-1')

        if (ratingFive.checked){
             starsChecked = 5
         }
         else if (ratingFour.checked){
             starsChecked = 4
        }
        else if (ratingThree.checked){
            starsChecked = 3
        }
        else if (ratingTwo.checked){
            starsChecked = 2
        }
        else if (ratingOne.checked){
            starsChecked = 1
        }
        distance = parseInt(distanceSelected.value * 70)
        
        reloadElements(termSearch, price, distance, starsChecked)
        console.log(termSearch, price, distance, starsChecked)

    })

})





function makeYelpElement(element, latitude, longitude) {
    let div = document.createElement('div');
    div.classList.add('card')
    let stars 
    if (element.rating == 4){
        stars = '/starter-page/star_images/regular_4.png'
    }
    else{
        stars = '/starter-page/star_images/regular_0.png'
    }

    switch(element.rating){
        case 5:
            stars = '/starter-page/star_images/regular_5.png';
            break;
        case 4.5:
            stars = '/starter-page/star_images/regular_4_half.png';
            break;
        case 4:
            stars = '/starter-page/star_images/regular_4.png';
            break;
        case 3.5:
            stars = '/starter-page/star_images/regular_3_half.png';
            break;
        case 3:
            stars = '/starter-page/star_images/regular_3.png';
            break;
        case 2.5:
            stars = '/starter-page/star_images/regular_2_half.png';
            break;
        case 2:
            stars = '/starter-page/star_images/regular_2.png';
            break;
        case 1.5:
            stars = '/starter-page/star_images/regular_1_half.png';
            break;
        case 1:
            stars = '/starter-page/star_images/regular_1.png';
            break;
        case 0:
            stars = '/starter-page/star_images/regular_0.png';
            break;
    }

    let restImg 
    if(element['image_url']){
        restImg = element['image_url']
    }
    else{
        // restImg = 'SET IMAGE TO DEFAULT IMAGE'
    }

    div.innerHTML = 
    `
    <header></header>
        <a class="card-top" href=${element.url} target="_blank">
            <div class="card" id="card-2">
                <div class="card-image-wrapper">
                    <img src='${restImg}'>
                </div>
                <div class="card-content">
                    <h2>${element.name}</h2>
                    <p>
                    Approximately 
                    ${parseInt(distance(latitude, longitude, element.coordinates.latitude, element.coordinates.longitude))} 
                    FT ~ 
                    ${(parseInt(distance(latitude, longitude, element.coordinates.latitude, element.coordinates.longitude))/264).toFixed(1)} 
                    blocks
                    </p>
                    <img src = ${stars}>
                    <h4>${element.price}</h4>
                </div>
            </div>
        </a>
        <footer></footer>
    `
    document.querySelector('.card-container').appendChild(div)
}

function distance(lat1, lon1, lat2, lon2){
    const R = 6371e3;
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    return d * 3.28084
}

function createLoader(){
    let div = document.createElement('div');
    div.classList.add('loader')
    document.querySelector('.card-container').appendChild(div)
}
function reloadElements(termSearch,price, distance, starsChecked){
    document.querySelector('.card-container').replaceChildren()
        createLoader()
        getYelpData(termSearch, price, distance, starsChecked)
        console.log(distance)
}