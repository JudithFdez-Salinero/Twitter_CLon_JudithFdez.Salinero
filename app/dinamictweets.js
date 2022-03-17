//const renderFeed = () => {
//    // selccionar dónde queremos inyectar
//    const FeedTweet = document.querySelector(".Feed")
//
//    // hacemos el string con forma de HTML que queremos inyectar
//    let FeedTweetHTML = ""
//    for (let i = 0; i < tweets.datatweets.length; i++) {
//      FeedTweet += `
//    <div class="wrote">
//        <img href="${tweets.datatweets[i].avatar}" alt="User Icon">
//        <div class="write_text">
//          <div class="user_data">
//            <h4>${tweets.datatweets[i].full_name}</h4>
//            <p>${tweets.datatweets[i].user_name}</p>
//            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="#fcfcfc" viewBox="0 0 256 256">
//              <rect width="256" height="256" fill="none"></rect>
//              <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
//              <circle cx="128" cy="128" r="96" fill="none" stroke="#fcfcfc" stroke-linecap="round"
//                stroke-linejoin="round" stroke-width="16"></circle>
//            </svg>
//            <p>${tweets.datatweets[i].hours}h</p>
//          </div>
//          <div class="publication">
//            <p>${tweets.datatweets[i].tweet}</p>
//            <div class="icons">
//              <div class="icon_number">
//                <i class="ph-chat-circle"></i>
//                <p>${tweets.datatweets[i].coments}</p>
//              </div>
//              <div class="icon_number">
//                <i class="ph-arrows-clockwise"></i>
//                <p>${tweets.datatweets[i].retweet}</p>
//              </div>
//              <div class="icon_number">
//                <i class="ph-heart"></i>
//                <p${tweets.datatweets[i].likes}</p>
//              </div>
//            </div>
//          </div>   
//          `
//    }
//    // inyectar el string en el elemento de HTML (elemento DOM)
//    FeedTweetHTML.innerHTML = FeedTweet
//}
//
//renderFeed()
//
//
////Filtrado de tweets
////const commentsFeed = data.filter(user => user.coments > 20);
////console.log(commentsFeed)
////
////const nameWithR = data.filter(user => user.full_name.charAt(0)=="R");
////console.log(nameWithR)
////
//const mapCommentsLike = data.map(user => user.full_name + ': tiene ' + user.coments + ' comentarios y ' + user.likes + ' likes');
//console.log(mapCommentsLike)
//


