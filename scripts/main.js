initSlider();
initHandleScrollInSlider();
fixLanguagesLinks();

function initSlider() {
  new Swiper(".swiper-container", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      slidesPerView: 1,
    },
    preloadImages: false,
    lazy: true,
    breakpoints: {
      // when window width is >= 992px
      992: {
        direction: "vertical",
      },
    },
  });
}

function initHandleScrollInSlider() {
  const songListDOMs = Array.from(
    document.getElementsByClassName("songs-list")
  );
  const mobileMedia = window.matchMedia("(max-width: 992px)");

  handleSongsListScroll(mobileMedia);
  mobileMedia.addListener(handleSongsListScroll);

  function handleSongsListScroll(mediaRule) {
    if (mediaRule.matches) {
      songListDOMs.forEach((element) => {
        element.removeEventListener("touchstart", blockSliderSwap);
      });
    } else {
      songListDOMs.map((element) =>
        element.addEventListener("touchstart", blockSliderSwap)
      );
    }
  }
}

function blockSliderSwap(e) {
  e.stopPropagation();
}

function fixLanguagesLinks() {
  const langLinks = Array.from(document.getElementsByClassName("language"));
  let domain = window.location.origin;
  
  switch(window.location.hostname) {
    case 'oleksandr-kopaevich.github.io': domain += '/homepage';
  };

  langLinks.forEach((langLink) => {
    langLink.href = `${domain}/${langLink.dataset.langForLink || ''}`;
  });
}
