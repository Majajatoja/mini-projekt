const story = {
  start: {
    name: "Narrator",
    text: "Budzisz się w lesie. Nie pamiętasz niczego.",
    bg: "images/bg_forest.jpg",
    left: null,
    center: null,
    right: null,
    active: null,
    choices: [
      { text: "Rozejrzyj się", next: "look" },
      { text: "Krzyknij", next: "shout" },
    ],
  },

  shout: {
    name: "Ty",
    text: "Halo?!",
    bg: "images/bg_forest.jpg",
    left: "images/player.png",
    center: null,
    right: null,
    active: "left",
    choices: [{ text: "Nasłuchuj", next: "voice" }],
  },

  voice: {
    name: "Strażniczka",
    text: "Nie powinieneś tu być.",
    bg: "images/bg_forest.jpg",
    left: "images/player.png",
    center: "images/stranger2.png",
    right: null,
    active: "center",
    choices: [{ text: "Kim jesteś?", next: "meet" }],
  },

  look: {
    name: "Ty",
    text: "Las jest nienaturalnie cichy.",
    bg: "images/bg_forest.jpg",
    left: "images/player.png",
    center: null,
    right: null,
    active: "left",
    choices: [{ text: "Idź dalej", next: "deep" }],
  },

  deep: {
    name: "Narrator",
    text: "Mgła gęstnieje. Ktoś cię obserwuje.",
    bg: "images/bg_deepforest.jpg",
    left: "images/player.png",
    center: null,
    right: null,
    active: "left",
    choices: [{ text: "Podejdź", next: "meet" }],
  },

  meet: {
    name: "Nieznajomy",
    text: "W końcu się obudziłeś.",
    bg: "images/bg_deepforest.jpg",
    left: "images/player.png",
    center: null,
    right: "images/stranger.png",
    active: "right",
    choices: [
      { text: "Co to miejsce?", next: "explain" },
      { text: "Odejdź!", next: "run" },
    ],
  },

  explain: {
    name: "Strażniczka",
    text: "To miejsce testuje ludzi.",
    bg: "images/bg_deepforest.jpg",
    left: "images/player.png",
    center: "images/stranger2.png",
    right: "images/stranger.png",
    active: "center",
    choices: [{ text: "Jak wyjść?", next: "gate" }],
  },

  gate: {
    name: "Strażniczka",
    text: "Jest brama w środku lasu. Ale nie każdy przechodzi.",
    bg: "images/bg_cabin.jpg",
    left: "images/player.png",
    center: "images/stranger2.png",
    right: "images/stranger.png",
    active: "center",
    choices: [
      { text: "Zaufaj", next: "good" },
      { text: "Zdradź", next: "bad" },
    ],
  },

  run: {
    name: "Narrator",
    text: "Biegniesz, ale las się nie kończy.",
    bg: "images/bg_deepforest.jpg",
    left: "images/player.png",
    center: null,
    right: null,
    active: "left",
    choices: [{ text: "Kontynuuj", next: "bad" }],
  },

  good: {
    name: "Narrator",
    text: "Uciekasz z lasu. Udało się!",
    bg: "images/bg_forest.jpg",
    left: null,
    center: null,
    right: null,
    active: null,
    choices: [{ text: "Restart", next: "start" }],
  },

  bad: {
    name: "Narrator",
    text: "Las cię pochłania...",
    bg: "images/bg_deepforest.jpg",
    left: null,
    center: null,
    right: null,
    active: null,
    choices: [{ text: "Restart", next: "start" }],
  },
};
