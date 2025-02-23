// <!-- top slick start -->
$(document).ready(function () {
    $('.sticker_slick').slick({
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      centerMode: false,
      infinite: false,
      arrows: true,

      nextArrow: '.slick-next',
      prevArrow: '.slick-prev',

      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }

      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
          infinite: false,

        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      }]
    });
  });
// <!-- top slick end -->

// main top slider start 

let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');
const activeSlide = document.querySelector('.active-slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function showSlide() {
  activeSlide.innerHTML = slides[currentIndex].innerHTML;
  slides.forEach(slide => {
    slide.querySelector("img").classList.remove("active");
  });
  slides[currentIndex].querySelector("img").classList.add("active");
}

leftArrow.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide();
});

rightArrow.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  }
  showSlide();
});

slides.forEach(slide => {
  slide.addEventListener("click", () => {
    currentIndex = Array.from(slides).indexOf(slide);
    showSlide();
  });
});

showSlide();

// main top slider end


// youtube start 
  // Load the YouTube API
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
      videoId: 'tsDGFUiNZog', // replace with your video ID
      events: {
        'onReady': onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    // Add an event listener to the custom play/pause button
    document.getElementById("play-pause").addEventListener("click", function () {
      if (player.getPlayerState() == YT.PlayerState.PLAYING) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    });
    // Inject CSS styles into the iframe's document
    var iframe = document.getElementById("video-container");
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var hideButton = iframeDoc.createElement("style");
    hideButton.innerHTML =
      ".ytp-large-play-button { display: none !important; } .ytp-title-text, .ytp-title-channel, .ytp-title-channel a, .ytp-title-display{ display: none !important; }";
    iframeDoc.body.appendChild(hideButton);
  }


    // https://developers.google.com/youtube/iframe_api_reference

  // global variable for the player
  var player;

  // this function gets called when API is ready to use
  function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player("youtube-video", {
      events: {
        // call this function when player is ready to use
        onReady: onPlayerReady
      }
    });
  }

  function onPlayerReady(event) {
    // bind events
    var playButton = document.getElementById("custom-play-button");
    playButton.addEventListener("click", function () {
      player.playVideo();
      playButton.style.display = "none";

    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function () {
      player.pauseVideo();
    });
  }

  // Inject YouTube API script
  var tag = document.createElement("script");
  tag.src = "//www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// youtube end 

const beerLabelList = document.querySelectorAll('.beerLabel_list li');

for (let i = 0; i < beerLabelList.length; i++) {
  beerLabelList[i].addEventListener('click', function () {
    for (let j = 0; j < beerLabelList.length; j++) {
      beerLabelList[j].classList.remove('beerLabel_active');
    }
    this.classList.add('beerLabel_active');
  });
}




// select the target element
  const targetElement = document.querySelector("#target-element");
  // select the button
  const scrollBtn = document.querySelector("#scroll_btn");
  // create the observer
  const observer = new IntersectionObserver((entries) => {
    // check if the target element is intersecting with the viewport
    if (entries[0].isIntersecting) {
      // hide the button
      scrollBtn.style.display = "none";
    } else {
      // show the button
      scrollBtn.style.display = "block";
      if (targetElement.getBoundingClientRect().top < scrollBtn.getBoundingClientRect().top) {
        scrollBtn.style.display = "none";
      }
    }
  });

  // start observing the target element
  observer.observe(targetElement);



  $(document).ready(function () {
    $(window).scroll(function () {
      var makeSticker_btn = $(".makeSticker__btn");
      var makeSticker_btn_top = makeSticker_btn.offset().top;
      var makeSticker_btn_height = makeSticker_btn.height();
      var page_header = $(".page-header");
      var page_header_height = page_header.height();
      var page_header_top = page_header.offset().top;
      var page_header_bottom = page_header_top + page_header_height;
      var beerLabel_fixed = $(".beerLabel_fixed");
      var beerLabel_fixed_height = beerLabel_fixed.height();
      var beerLabel_fixed_top = beerLabel_fixed.offset().top;
      var beerLabel_fixed_bottom = beerLabel_fixed_top + beerLabel_fixed_height;
      var footer = $(".footerWrap");
      var footer_top = footer.offset().top;

      if (page_header_bottom >= (makeSticker_btn_top + (makeSticker_btn_height * 0.5))) {
        // beerLabel_fixed.addClass("sticky");
        $(".beerLabel_fixed").fadeIn(200);
      } else {
        $(".beerLabel_fixed").fadeOut(200);
      }

    });
  });



  $(window).on("scroll", function () {
    var footerPosition = $(".footerWrap").offset().top;
    var currentScroll = $(this).scrollTop();
    if (currentScroll >= footerPosition) {
      $(".beerLabel_fixed").addClass("footer-sticky");
    } else {
      $(".beerLabel_fixed").removeClass("footer-sticky");
    }
  });



  $(document).ready(function() {
    var quoteCalculator = $('._quote_calculator');
    var diecutSlider = $('._diecut_Slider');
    var quoteCalculatorTop = quoteCalculator.offset().top;
    var quoteCalculatorBottom = quoteCalculatorTop + quoteCalculator.outerHeight();
  
    $(window).scroll(function() {
      var scrollPosition = $(this).scrollTop();
      var windowHeight = $(window).height();
  
      if (scrollPosition >= quoteCalculatorTop && scrollPosition + windowHeight < quoteCalculatorBottom) {
        diecutSlider.addClass("_diecut_Slider_fixed");
      } else if (diecutSlider.hasClass("_diecut_Slider_fixed")) {
        diecutSlider.removeClass("_diecut_Slider_fixed");
        diecutSlider.css("top", "0");
      }
    });
  });