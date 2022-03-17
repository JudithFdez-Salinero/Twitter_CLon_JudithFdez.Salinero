window.addEventListener("load", () => {
    renderTweets()
    initSearchEvents()
})


let tweets = []           // ARRAY JSON[{}, {}, {}]
let searchString = ""     // string
let fiteredTweets = []    // array[{}, {}, {}]


//RENDERIZADO DE TWEETS. ES UN RENDER EVENT LOOP 
const renderTweets = () => {
    //
    //
    initEventTweets()
}

const initEventTweets = () => {
    //
    //
    document.addEventListener("click", () => {
        updateTweets()
    })
}

const updateTweets = () => {
    renderTweets()
}


//BUSCADOR DE TWEETS. REUTILIZAS LAS FUNCIONES ANTERIORES 
const initSearchEvents = () => {
    //
    //
    document.addEventListener("click", () => {
        if (3 > 2) {
            filterTweets()
        } else {
            renderTweets()
        }
    })
}

const filterTweets = () => {
    // tweets.filter()....
    if (3 > 2) {
        renderFilteredTweets()
    } else {
        renderEmpty()
    }
}

const renderEmpty = () => {

}

const renderFilteredTweets = () => {
    //
    //
    //
    initEventTweets()
}









