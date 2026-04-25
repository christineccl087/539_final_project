(function () {
  const places = {
    'o-show': {
      area: 'Bellagio',
      title: 'O by Cirque du Soleil',
      text: 'O is one of the most iconic Las Vegas productions because it combines theater, acrobatics, and a full aquatic stage. It stood out on this trip as a classic Vegas show-night experience.',
      photos: [
        { src: '../images/vegas/day2-o-show-acrobats.jpeg', alt: 'Aerial acrobatics during O by Cirque du Soleil' },
        { src: '../images/vegas/day2-o-show-water-stage.jpeg', alt: 'Performers on the water stage during O by Cirque du Soleil' },
        { src: '../images/vegas/day2-o-show-finale.jpeg', alt: 'Finale scene from O by Cirque du Soleil' }
      ]
    },
    'bellagio-fountains': {
      area: 'Bellagio',
      title: 'Fountains of Bellagio',
      text: 'The Bellagio fountains are one of the most recognizable Las Vegas landmarks. They were a perfect end-of-night stop after dinner and the show because they feel theatrical even from the sidewalk.',
      photos: [
        { src: '../images/vegas/day2-bellagio-fountains-night.jpeg', alt: 'Bellagio fountains at night with the Paris Las Vegas Eiffel Tower behind them' },
        { src: '../images/vegas/day3-bellagio-lake-and-paris.jpeg', alt: 'Bellagio lake with the Paris Las Vegas Eiffel Tower in the background' }
      ]
    },
    venetian: {
      area: 'The Strip',
      title: 'The Venetian',
      text: 'The Venetian is one of those resort stops that feels oversized in the most Las Vegas way. It worked well as part of a Strip day because the architecture, shopping, and atmosphere are all very dramatic.',
      photos: [
        { src: '../images/vegas/day3-venetian-gondola.jpeg', alt: 'Indoor gondola ride at The Venetian' }
      ]
    },
    jabbawockeez: {
      area: 'Las Vegas',
      title: 'Jabbawockeez',
      text: 'Jabbawockeez gave the trip a different kind of show energy from O. It added a more upbeat performance night to balance out the classic Bellagio experience.',
      photos: [
        { src: '../images/vegas/day3-jabbawockeez-stage.jpeg', alt: 'Stage performance during the Jabbawockeez show' }
      ]
    },
    'tacos-el-gordo': {
      area: 'Las Vegas',
      title: 'Tacos El Gordo',
      text: 'Tacos El Gordo is one of the most popular casual food stops in Las Vegas. It stood out because it fit naturally into a late-night Vegas schedule after shows and walking the Strip.',
      photos: [
        { src: '../images/vegas/day3-tacos-el-gordo-exterior.jpeg', alt: 'Tacos El Gordo restaurant exterior at night' },
        { src: '../images/vegas/day3-tacos-el-gordo-menu.jpeg', alt: 'Tacos El Gordo menu board inside the restaurant' },
        { src: '../images/vegas/day3-tacos-el-gordo-tacos.jpeg', alt: 'Tray of tacos from Tacos El Gordo' }
      ]
    },
    narrows: {
      area: 'Zion National Park',
      title: 'The Narrows and Zion Drive',
      text: 'The Zion day trip was one of the biggest nature contrasts to the city part of the trip. Even the drive into the park felt dramatic because the red cliffs kept getting taller with each stop.',
      photos: [
        { src: '../images/vegas/day4-zion-drive-approach.jpeg', alt: 'Road leading toward Zion National Park' },
        { src: '../images/vegas/day4-zion-scenic-drive-01.jpeg', alt: 'Scenic drive view inside Zion National Park' },
        { src: '../images/vegas/day4-zion-canyon-peaks.jpeg', alt: 'Rock peaks seen during the Zion day trip' }
      ]
    },
    fremont: {
      area: 'Downtown Las Vegas',
      title: 'Fremont Street Experience',
      text: 'Fremont Street gave the trip an Old Vegas feeling that is very different from the Strip. The light canopy and classic signs made it one of the clearest nighttime memories from the city.',
      photos: [
        { src: '../images/vegas/day4-fremont-east-sign.jpeg', alt: 'Fremont East District sign at night' },
        { src: '../images/vegas/day4-fremont-welcome-sign.jpeg', alt: 'Welcome to Downtown Las Vegas sign' },
        { src: '../images/vegas/day4-fremont-light-canopy.jpeg', alt: 'Light canopy over Fremont Street Experience' },
        { src: '../images/vegas/day4-binions-sign.jpeg', alt: "Binion's casino sign on Fremont Street" }
      ]
    },
    antelope: {
      area: 'Page, Arizona',
      title: 'Lower Antelope Canyon',
      text: 'Lower Antelope Canyon was one of the most visually dramatic stops on the road trip. Its narrow sandstone walls and changing light made it feel very different from both Vegas and Zion.',
      photos: [
        { src: '../images/vegas/day5-antelope-tours-sign.jpeg', alt: 'Entrance sign for Lower Antelope Canyon tours' },
        { src: '../images/vegas/day5-lower-antelope-canyon-01.jpeg', alt: 'Curving sandstone walls inside Lower Antelope Canyon' },
        { src: '../images/vegas/day5-lower-antelope-canyon-02.jpeg', alt: 'Interior view of Lower Antelope Canyon with stairs' },
        { src: '../images/vegas/day5-lower-antelope-canyon-03.jpeg', alt: 'Slot canyon opening with blue sky above' },
        { src: '../images/vegas/day5-lower-antelope-canyon-04.jpeg', alt: 'Warm orange sandstone inside Lower Antelope Canyon' },
        { src: '../images/vegas/day5-lower-antelope-canyon-05.jpeg', alt: 'Tall canyon walls in Lower Antelope Canyon' },
        { src: '../images/vegas/day5-antelope-canyon-window.jpeg', alt: 'Natural sandstone opening near Lower Antelope Canyon' }
      ]
    },
    horseshoe: {
      area: 'Page, Arizona',
      title: 'Horseshoe Bend',
      text: 'Horseshoe Bend worked as one of the major landscape highlights of the Arizona day trip. The walk in and the overlook both felt wide open after the narrow canyon spaces earlier in the day.',
      photos: [
        { src: '../images/vegas/day5-horseshoe-bend-trail.jpeg', alt: 'Trail leading toward Horseshoe Bend' },
        { src: '../images/vegas/day5-horseshoe-bend-trail-overlook.jpeg', alt: 'Desert overlook near the Horseshoe Bend trail' },
        { src: '../images/vegas/day5-horseshoe-bend-view.jpeg', alt: 'Classic view of Horseshoe Bend from the overlook' },
        { src: '../images/vegas/day5-horseshoe-bend-river-cliffs.jpeg', alt: 'Colorado River winding between cliffs near Horseshoe Bend' }
      ]
    },
    'glen-canyon': {
      area: 'Page, Arizona',
      title: 'Glen Canyon Dam and Page Stops',
      text: 'Glen Canyon Dam and the other Page stops rounded out the Arizona route. The dam overlook, the Page sign, and the desert views made the road trip feel bigger than a single photo stop.',
      photos: [
        { src: '../images/vegas/day5-glen-canyon-dam.jpeg', alt: 'Glen Canyon Dam at sunset' },
        { src: '../images/vegas/day5-page-arizona-sign.jpeg', alt: 'City of Page, Arizona sign' }
      ]
    }
  };

  const buttons = document.querySelectorAll('.map-pin');
  const areaEl = document.getElementById('map-place-area');
  const titleEl = document.getElementById('map-place-title');
  const textEl = document.getElementById('map-place-text');
  const photosEl = document.getElementById('map-place-photos');
  const emptyEl = document.getElementById('map-place-empty');

  if (!buttons.length || !areaEl || !titleEl || !textEl || !photosEl || !emptyEl) {
    return;
  }

  function renderPlace(placeKey) {
    const place = places[placeKey];

    if (!place) {
      return;
    }

    areaEl.textContent = place.area;
    titleEl.textContent = place.title;
    textEl.textContent = place.text;
    photosEl.innerHTML = '';

    place.photos.forEach(function (photo) {
      const image = document.createElement('img');
      image.src = photo.src;
      image.alt = photo.alt;
      image.loading = 'lazy';
      image.tabIndex = 0;
      photosEl.appendChild(image);
    });

    emptyEl.hidden = place.photos.length > 0;

    buttons.forEach(function (button) {
      const isActive = button.dataset.place === placeKey;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      renderPlace(button.dataset.place);
    });
  });
})();
