
////INICIALIZAS EL EVENTO
//window.addEventListener("load", () => {
//    initEventTweets()
//})
//
//
//let isButtonActive = false //esta desactivado_booleano
//let newTweetText = "" //no hay nada escrito_string
//const newTweetButton = document.querySelector(".tweet_button")
//const counter = document.querySelector(".tweet_counter")
//
//
//const initNewTweetEvents = () => {
//    const newTweetTextArea = document.querySelector(".tweet_textarea")
//
//    newTweetButton.addEventListener("click", () => {
//        if (isButtonActive) {
//            createTweetAndUpdate()
//        }
//    })
//    newTweetTextArea.addEventListener("keydown", () => {
//        newTweetText = newTweetTextArea.value
//        checkNewTweetLength()
//    })
//}
//
//const createTweetAndUpdate = () => {
//    const new_tweet = {
//        user_name: "Vito",
//        message: newTweetText,
//        likes: 0, 
//        retweets: 0
//    }
//    tweetsArray.push(new_tweet)
//    renderTweets()
//}
//
//const checkNewTweetLength = () => {
//    if (newTweetText.length == 0) {
//        setTweetButtonOf()
//        hideCounter()
//    } else if (newTweetText.length > 0 && newTweetText.length <= 160) {
//        setTweetButtonOn()
//        showCounter()
//    } else {
//        setTweetButtonOf()
//        showCounter()
//    }
//}
//
//const setTweetButtonOf = () => {
//    newTweetButton.classList.remove("clickable")
//    isButtonActive = false
//}
//
//const setTweetButtonOn = () => {
//    newTweetButton.classList.add("clickable")
//    isButtonActive = true
//}
//
//const hideCounter = () => {
//    counter.classList.remove("visible")
//}
//
//const showCounter = () => {
//    counter.classList.add("visible")
//}
//
//
////renderTweets = () => {} YA ESTÁ DEFINIDO EN *tweetcontroler.js*
//