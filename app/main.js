import "modern-css-reset";
import "./../assets/styles/tailwind.css";
import "./../assets/styles/style.sass";
import "phosphor-icons";
import "bootstrap";
import { tweets } from "./tweets.js";
// import "./tweetcontroller.js";
// import "./writetweet.js";
// import "./dinamictweets.js";

window.addEventListener("load", () => {
  renderFeed()
})

//  RENDERIZADO DE FEED

const renderFeed = () => {
  // selccionar dónde queremos inyectar
  const FeedTweet = document.querySelector(".wrote_elements")

  // hacemos el string con forma de HTML que queremos inyectar
  let FeedTweetHTML = ""
  for (let i = 0; i < tweets.datatweets.length; i++) {
    FeedTweetHTML += `  
      <div class="wrote">
        <img src="${tweets.datatweets[i].avatar}" alt="User Icon">
        <div class="write_text">
          <div class="user_data">
            <h4>${tweets.datatweets[i].full_name}</h4>
            <p>${tweets.datatweets[i].user_name}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="#fcfcfc" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
              <circle cx="128" cy="128" r="96" fill="none" stroke="#fcfcfc" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="16"></circle>
            </svg>
            <p>${tweets.datatweets[i].hours}h</p>
          </div>
          <div class="publication">
            <p>${tweets.datatweets[i].tweet}</p>
            <div class="icons">
              <div class="icon_number">
                <i class="ph-chat-circle ${tweets.datatweets[i].hasbeenrecommentbyme && "white"}"></i>
                <p>${tweets.datatweets[i].coments}</p>
              </div>
              <div class="icon_number">
                <i class="ph-arrows-clockwise"></i>
                <p>${tweets.datatweets[i].retweet}</p>
              </div>
              <div class="icon_number">
                <i class="ph-heart ${tweets.datatweets[i].hasbeenlikebyme && "red"}"></i>
                <p>${tweets.datatweets[i].likes}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      `
  }
  // inyectar el string en el elemento de HTML (elemento DOM)
  FeedTweet.innerHTML = FeedTweetHTML

  initEventTweets()
}

//Aumentar los retweets, likes y comentarios.

const initEventTweets = () => {
  const tweetsDom = document.querySelectorAll(".wrote")
  //CORAZONES
  tweetsDom.forEach((tD, i) => {
    const heart = tD.querySelector(".ph-heart")
    heart.addEventListener("click", (ev) => {
      if (!tweets.datatweets[i].hasbeenlikebyme) {
        tweets.datatweets[i].likes++
        // heart.classList.add("red")
        tweets.datatweets[i].hasbeenlikebyme = true
        console.log("hola")
      } else {
        tweets.datatweets[i].likes--
        // heart.classList.replace("ph-heart-fill", "ph-heart")
        tweets.datatweets[i].hasbeenlikebyme = false
        console.log("hola")
      }


      renderFeed()
    })
  }),
  //flechitas
    tweetsDom.forEach((tD, i) => {
      const retweets = tD.querySelector(".ph-arrows-clockwise")
      retweets.addEventListener("click", (ev) => {
        if (!tweets.datatweets[i].hasbeenretweetbyme) {
          tweets.datatweets[i].retweet++
          // heart.classList.add("red")
          tweets.datatweets[i].hasbeenretweetbyme = true
          console.log("hola")
        } else {
          tweets.datatweets[i].retweet--
          // heart.classList.replace("ph-heart-fill", "ph-heart")
          tweets.datatweets[i].hasbeenretweetbyme = false
          console.log("hola")
        }
        renderFeed()
      })
    }),
    //CHAT
    tweetsDom.forEach((tD, i) => {
      const comments = tD.querySelector(".ph-chat-circle")
      comments.addEventListener("click", (ev) => {
        if (!tweets.datatweets[i].hasbeenrecommentbyme) {
          tweets.datatweets[i].coments++
          // heart.classList.add("red")
          tweets.datatweets[i].hasbeenrecommentbyme = true
          console.log("hola")
        } else {
          tweets.datatweets[i].coments--
          // heart.classList.replace("ph-heart-fill", "ph-heart")
          tweets.datatweets[i].hasbeenrecommentbyme = false
          console.log("hola")
        }
        renderFeed()
      })
    })
  }


    //Filtrado de tweets
    //const commentsFeed = data.filter(user => user.coments > 20);
    //console.log(commentsFeed)
    //
    //const nameWithR = data.filter(user => user.full_name.charAt(0)=="R");
    //console.log(nameWithR)
    //
    //const mapCommentsLike = data.map(user => user.full_name + ': tiene ' + user.coments + ' comentarios y ' + user.likes + ' likes');
    //console.log(mapCommentsLike)
    //



    // INICIALIZAR EVENTO DE TWEET

    window.addEventListener("load", () => {
      initSearchEvents(),
        renderFeed()
    })


  let filterSearch = []

  const renderfiltered = () => {
    const FeedTweet = document.querySelector(".wrote_elements")
    // hacemos el string con forma de HTML que queremos inyectar
    let FeedTweetHTML = ""
    for (let i = 0; i < filterSearch.length; i++) {
      FeedTweetHTML += `  
        <div class="wrote">
          <img src="${tweets.datatweets[i].avatar}" alt="User Icon">
          <div class="write_text">
            <div class="user_data">
              <h4>${tweets.datatweets[i].full_name}</h4>
              <p>${tweets.datatweets[i].user_name}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="#fcfcfc" viewBox="0 0 25
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
                <circle cx="128" cy="128" r="96" fill="none" stroke="#fcfcfc" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="16"></circle>
              </svg>
              <p>${tweets.datatweets[i].hours}h</p>
            </div>
            <div class="publication">
              <p>${tweets.datatweets[i].tweet}</p>
              <div class="icons">
                <div class="icon_number">
                  <i class="ph-chat-circle ${tweets.datatweets[i].hasbeenrecommentbyme && "white"}"></i>
                  <p>${tweets.datatweets[i].coments}</p>
                </div>
                <div class="icon_number">
                  <i class="ph-arrows-clockwise"></i>
                  <p>${tweets.datatweets[i].retweet}</p>
                </div>
                <div class="icon_number">
                  <i class="ph-heart ${tweets.datatweets[i].hasbeenlikebyme && "red"}"></i>
                  <p>${tweets.datatweets[i].likes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
    }
    // inyectar el string en el elemento de HTML (elemento DOM)
    FeedTweet.innerHTML = FeedTweetHTML
    initEventTweets()
  }

  const noResults = document.querySelector(".no_results")
  //BUSCADOR DE TWEETS. REUTILIZAS LAS FUNCIONES ANTERIORES 
  const initSearchEvents = () => {
    const searchsDom = document.querySelector(".search_input")
    searchsDom.addEventListener("keyup", (ev) => {
      if (searchsDom.value.length > 3) {
        filterSearch = tweets.datatweets.filter(t => {
          return t.tweet.includes(searchsDom.value)
        });
        if (filterSearch.length > 0) {
          noResults.classList.remove("visible")
          renderfiltered()
        } else {
          noResults.classList.add("visible")
          //renderFeed()
        }
      }
    })
  }

  //if (filterSearch.length > 0) {
  //  renderfiltered()
  //  noResults.classList.add("remove")
  //} else (filterSearch.length < 0) {
  //  noResults.classList.add("visible")
  //  renderFeed()
  //}

  //INICIALIZAS EL EVENTO
  window.addEventListener("load", () => {
    initEventTweets()
    initNewTweetEvents()
  })


  let isButtonActive = false //esta desactivado_booleano
  let newTweetText = "" //no hay nada escrito_string
  const newTweetButton = document.querySelector(".twitea")
  const counter = document.querySelector(".tweet_counter")
  const newTweetTextArea = document.querySelector(".write_here")

  const initNewTweetEvents = () => {
    newTweetButton.addEventListener("click", () => {
      if (isButtonActive) {
        hideCounter()
        createTweetAndUpdate()
      }
    })
    newTweetTextArea.addEventListener("keydown", () => {
      newTweetText = newTweetTextArea.value
      checkNewTweetLength()
      counterTweets()
    })
  }

  const createTweetAndUpdate = () => {
    newTweetText = newTweetTextArea.value
    const new_tweet = {
      avatar: "../assets/images/user.png",
      full_name: "Perico Palotes",
      user_name: "@eldelospalotes",
      tweet: newTweetText,
      hours: 0,
      coments: 0,
      retweet: 0,
      likes: 0
    }
    tweets.datatweets.unshift(new_tweet)
    console.log("frbtbth")
    renderFeed()
  }
  const counterTweets = () => {
    counter.innerHTML = 280 - newTweetTextArea.value.length
    if (newTweetTextArea.value.length >= 260) { counter.style.color = "red" }
    else {
      counter.style.color = "blue"
    }
  }

  const checkNewTweetLength = () => {
    if (newTweetText.length == 0) {
      setTweetButtonOf()
      hideCounter()
    } else if (newTweetText.length > 0 && newTweetText.length <= 280) {
      setTweetButtonOn()
      showCounter()
    } else {
      setTweetButtonOf()
      showCounter()
    }
  }

  const setTweetButtonOf = () => {
    isButtonActive = false
    newTweetButton.classList.remove("twitear")

  }

  const setTweetButtonOn = () => {
    isButtonActive = true
    newTweetButton.classList.add("twitear")
  }

  const showCounter = () => {
    counter.classList.add("visible")
  }

  const hideCounter = () => {
    counter.classList.remove("visible")
  }



  //renderTweets = () => {} YA ESTÁ DEFINIDO EN *tweetcontroler.js*

  //ABRIR LA VENTANA MODAL
  window.addEventListener("load", () => {
    openOWindow()
    closeOWindow()
  })



  const modalWindow = document.querySelector(".modal_window")
  const windowButton = document.querySelector(".menu_tweet_button")
  const clickOut = document.querySelector(".close_button")


  const openOWindow = () => {
    clickOut.addEventListener("click", () => {
      closewindow()
    })
  }
  const closeOWindow = () => {
    windowButton.addEventListener("click", () => {
      openWindow()
    })
  }

  const openWindow = () => {
    modalWindow.classList.add("visible")
  }

  const closewindow = () => {
    modalWindow.classList.remove("visible")
  }


  //TWITEAR DESDE VENTANA MODAL 

  window.addEventListener("load", () => {
    initEventTweets()
    initNewTweetEventsModal()
  })


  let isButtonModalActive = false //esta desactivado_booleano
  let newTweetModalText = "" //no hay nada escrito_string
  const newTweetModalButton = document.querySelector(".tweet_button")
  const Modalcounter = document.querySelector(".modal_counter")
  const ModalnewTweetTextArea = document.querySelector(".tweet_textarea")

  const initNewTweetEventsModal = () => {
    newTweetModalButton.addEventListener("click", () => {
      if (isButtonModalActive) {
        hideModalCounter()
        createTweetAndUpdateInModal()
      }
    })
    ModalnewTweetTextArea.addEventListener("keydown", () => {
      newTweetModalText = ModalnewTweetTextArea.value
      checkNewTweetModalLength()
      counterModalTweets()
    })
  }

  const createTweetAndUpdateInModal = () => {
    const new_tweet = {
      avatar: "../assets/images/user.png",
      full_name: "Perico Palotes",
      user_name: "@eldelospalotes",
      tweet: newTweetModalText,
      hours: 0,
      coments: 0,
      retweet: 0,
      likes: 0
    }
    tweets.datatweets.unshift(new_tweet)
    console.log("frbtbth")
    renderFeed()
  }
  const counterModalTweets = () => {
    Modalcounter.innerHTML = 280 - ModalnewTweetTextArea.value.length
    if (ModalnewTweetTextArea.value.length >= 260) { Modalcounter.style.color = "red" }
    else {
      Modalcounter.style.color = "blue"
    }
  }

  const checkNewTweetModalLength = () => {
    if (newTweetModalText.length == 0) {
      setModalTweetButtonOf()
      hideModalCounter()
    } else if (newTweetModalText.length > 0 && newTweetModalText.length <= 280) {
      setModalTweetButtonOn()
      showModalCounter()
    } else {
      setModalTweetButtonOf()
      showModalCounter()
    }
  }

  const setModalTweetButtonOf = () => {
    isButtonModalActive = false
    newTweetModalButton.classList.remove("twitear")

  }

  const setModalTweetButtonOn = () => {
    isButtonModalActive = true
    newTweetModalButton.classList.add("twitear")
  }

  const showModalCounter = () => {
    Modalcounter.classList.add("visible")
  }

  const hideModalCounter = () => {
    Modalcounter.classList.remove("visible")
  }


  //TRENDING TOPIC
  window.addEventListener("load", () => {
    rendertrend
    initRederFeed()
  })



  let trendingfiltered = []

  const rendertrend = () => {
    const trendTweet = document.querySelector(".box_trending")
    // hacemos el string con forma de HTML que queremos inyectar
    let FeedTrendHTML = ""
    for (let i = 0; i < trendingfiltered.length; i++) {
      FeedTrendHTML += `  
    <div class="terms">
      <div class="term">
        <i class="ph-hash-straight"></i>
        <p>${trendingfiltered[i].tweet}</p>
      </div>
    </div>`
    }
    // inyectar el string en el elemento de HTML (elemento DOM)
    trendTweet.innerHTML = FeedTrendHTML
    initEventTweets()
  }

  const initRederFeed = () => {
    const renderDom = document.querySelector(".box_trending")
    renderDom.addEventListener("load", (ev) => {
      if (renderDom.value.length > 3) {
        trendingfiltered = tweets.datatweets.tweet.filter(t => {
          return t.tweet.includes(renderDom.value)
        });
        if (filterSearch.length > 0){
          rendertrend()
        }
    }
  })
}
