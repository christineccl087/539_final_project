(function () {
  const places = {
    dazaifu: {
      area: 'Dazaifu',
      title: 'Dazaifu Tenmangu',
      text: 'Dazaifu Tenmangu is dedicated to Sugawara Michizane, who is worshipped as Tenjin, the deity of learning, culture, and the arts. Many students visit to pray for academic success, and the shrine is strongly connected to plum blossoms.',
      photos: [
        { src: '../images/fukuoka/road_to_dazaifu_shrine.jpeg', alt: 'Shopping street leading toward Dazaifu Tenmangu Shrine' },
        { src: '../images/fukuoka/entrance_of_dazaifu_shrine.jpeg', alt: 'Entrance area at Dazaifu Tenmangu Shrine with visitors walking toward the shrine' },
        { src: '../images/fukuoka/dazaifu_shrine.jpeg', alt: 'Dazaifu Tenmangu Shrine surrounded by trees' },
        { src: '../images/fukuoka/door_dazaifu_shrine.jpeg', alt: 'Decorative wooden door detail at Dazaifu Tenmangu Shrine' },
        { src: '../images/fukuoka/wind_bell_dazaifu_shrine.jpeg', alt: 'Wind bells hanging at Dazaifu Tenmangu Shrine' }
      ]
    },
    umegae: {
      area: 'Dazaifu',
      title: 'Umegae Mochi',
      text: 'Umegae Mochi is a toasted rice cake filled with sweet red bean paste and stamped with a plum blossom. It is a Dazaifu specialty connected to a legend about Michizane receiving mochi on a plum branch during exile.',
      photos: [
        { src: '../images/fukuoka/umegae_mochi.jpeg', alt: 'Freshly grilled Umegae Mochi served with matcha at a cafe' },
        { src: '../images/fukuoka/icebar_dazaifu.jpeg', alt: 'Frozen cafe treat near Dazaifu Tenmangu Shrine' }
      ]
    },
    ichiran: {
      area: 'Dazaifu',
      title: 'Ichiran at Dazaifu',
      text: 'The Dazaifu Sando Ichiran serves special exam success ramen. The noodles are extra long and the bowl has five sides, both wordplay references to passing exams.',
      photos: [
        { src: '../images/fukuoka/ichiran.jpeg', alt: 'Ichiran ramen served in the special Dazaifu bowl' }
      ]
    },
    kiwamiya: {
      area: 'Hakata',
      title: 'Kiwamiya',
      text: 'Kiwamiya is known for hamburger steak served rare so diners can finish grilling each bite on a hot stone. The Hakata location highlights Kyushu beef and a dramatic self-grill experience.',
      photos: [
        { src: '../images/fukuoka/kiwamiya.jpeg', alt: 'Kiwamiya hamburger steak served with sides' }
      ]
    },
    kushida: {
      area: 'Hakata',
      title: 'Kushida-Jinja',
      text: 'Kushida-Jinja is an important Hakata shrine and is closely tied to the Hakata Gion Yamakasa festival. It is a good stop for seeing how local shrine culture connects with Fukuoka city identity.',
      photos: [
        { src: '../images/fukuoka/entrance_kushida-jinja.jpeg', alt: 'Entrance gate of Kushida-Jinja Shrine' },
        { src: '../images/fukuoka/kushida-jinja.jpeg', alt: 'Kushida-Jinja Shrine grounds with traditional shrine buildings' },
        { src: '../images/fukuoka/kushida-jinja-2.jpeg', alt: 'Close view of a shrine building at Kushida-Jinja' },
        { src: '../images/fukuoka/kushida-jinja-3.jpeg', alt: 'Decorative shrine detail at Kushida-Jinja in Hakata' },
        { src: '../images/fukuoka/shimekake_inari_shrine.jpeg', alt: 'Small red Shimekake Inari Shrine beside Kushida-Jinja' }
      ]
    },
    dacomecca: {
      area: 'Hakata',
      title: 'dacomecca',
      text: 'dacomecca is a popular Fukuoka bakery with a playful, almost theatrical bread display. The shop emphasizes creative breads, from savory items to sweet pastries and rustic loaves.',
      photos: [
        { src: '../images/fukuoka/dacomecca-1.jpeg', alt: 'Bakery display at dacomecca in Fukuoka' },
        { src: '../images/fukuoka/dacomecca-2.jpeg', alt: 'Bread and pastries from dacomecca bakery' }
      ]
    },
    sushi: {
      area: 'Yakuin',
      title: 'Sushi Shiro',
      text: 'Sushi Shiro is a counter-style omakase restaurant in Fukuoka. The restaurant highlights Edomae sushi, carefully prepared rice, selected fish, and sake options, including local Kyushu sake.',
      photos: [
        { src: '../images/fukuoka/otoro_nigiri.jpeg', alt: 'Otoro nigiri served during the Sushi Shiro omakase meal' },
        { src: '../images/fukuoka/otoro_roll.jpeg', alt: 'Otoro roll course served at Sushi Shiro' },
        { src: '../images/fukuoka/assorted_fish_roll.jpeg', alt: 'Assorted fish roll served during the omakase meal' },
        { src: '../images/fukuoka/crab.jpeg', alt: 'Crab course served during the Sushi Shiro omakase meal' },
        { src: '../images/fukuoka/roasted_unagi.jpeg', alt: 'Roasted unagi course served at Sushi Shiro' },
        { src: '../images/fukuoka/unagi.jpeg', alt: 'Piece of unagi sushi served during the omakase meal' },
        { src: '../images/fukuoka/unagi_plate.jpeg', alt: 'Unagi served on a plate at Sushi Shiro' },
        { src: '../images/fukuoka/uni.jpeg', alt: 'Uni course served during the Sushi Shiro omakase meal' },
        { src: '../images/fukuoka/uni_roll.jpeg', alt: 'Uni roll served during the Sushi Shiro omakase meal' },
        { src: '../images/fukuoka/uni_tofu.jpeg', alt: 'Uni tofu course served during the omakase meal' }
      ]
    },
    train: {
      area: 'Hakata to Yufuin',
      title: 'Yufuin no Mori',
      text: 'Yufuin no Mori is a JR Kyushu sightseeing train to Yufuin. Its warm wooden interior, lounge space, and mountain scenery make the ride feel like part of the destination.',
      photos: [
        { src: '../images/fukuoka/yufuin_no_mori.jpeg', alt: 'Green Yufuin no Mori sightseeing train at the platform' },
        { src: '../images/fukuoka/inside_yufuin_no_mori.jpeg', alt: 'Wooden interior seating inside the Yufuin no Mori train' }
      ]
    },
    yufuin: {
      area: 'Yufuin',
      title: 'Yufuin',
      text: 'Yufuin is a hot spring town surrounded by nature. Lake Kinrin is famous for misty views because fresh water and hot springs flow into the lake, keeping the water warm.',
      photos: [
        { src: '../images/fukuoka/lunch_yufuin.jpeg', alt: 'Lunch dish served at a local restaurant in Yufuin' },
        { src: '../images/fukuoka/lake_kinrin.jpeg', alt: 'Lake Kinrin in Yufuin with trees reflected in the water' },
        { src: '../images/fukuoka/yufuin_floral_village.jpeg', alt: 'Entrance to Yufuin Floral Village' },
        { src: '../images/fukuoka/yufuin.jpeg', alt: 'Street view in Yufuin with shops and mountain scenery' },
        { src: '../images/fukuoka/yufuin.jpeg', alt: 'Another Yufuin street view with small shops and visitors' }
      ]
    },
    benjamin: {
      area: 'Yakuin and Kego',
      title: 'Yakiniku Benjamin',
      text: 'Yakiniku Benjamin focuses on premium yakiniku in the Yakuin and Kego area. The famous Wagyu platter is special because it lets you compare different cuts of Japanese beef at the table grill.',
      photos: [
        { src: '../images/fukuoka/yakiniku_benjamin.jpeg', alt: 'Wagyu beef platter at Yakiniku Benjamin before grilling' }
      ]
    }
  };

  const buttons = document.querySelectorAll('.map-pin');
  const areaEl = document.getElementById('map-place-area');
  const titleEl = document.getElementById('map-place-title');
  const textEl = document.getElementById('map-place-text');
  const photosEl = document.getElementById('map-place-photos');

  if (!buttons.length || !areaEl || !titleEl || !textEl || !photosEl) {
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
