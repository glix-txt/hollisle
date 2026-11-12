/*
  HOLLISDLE DATA

  Drop files in covers/ and audio/, then run `npm run scan` — it matches files to the titles
  below by name (case, spaces, dots, "2hollis - ", track numbers, "(Official Audio)",
  "_spotdown.org" etc. are ignored) and auto-detects each song's hook into assets.js.

  releases: what you guess in COVER mode   (type: "album" | "mixtape" | "ep" | "single")
  songs:    what you guess in SONG mode    (release = id, used for the yellow "same project" hint)
  starts:   optional manual clip start overrides in seconds, e.g. { "poster boy": 31.5 }

  Tracklists from Wikipedia, 2hollis Fandom wiki, AllMusic, Discogs, Deezer (Nov 2026).
  Older EPs/mixtapes (Game World, Tree, Meta, As Within So Without, Lost Files, The Jarl,
  Finally Lost, Crashsite) aren't listed yet — the scanner will flag any files for them.
*/
window.FENG_DATA = {
  artist: "2hollis",
  game: "hollisle",
  icon: "star",          // which release's cover becomes the browser tab icon

  releases: [
    { id: "tiger",     title: "White Tiger", type: "album", year: 2022 },
    { id: "two",       title: "2",           type: "album", year: 2023 },
    { id: "boy",       title: "boy",         type: "album", year: 2024 },
    { id: "star",      title: "star",        type: "album", year: 2025 },
    { id: "pirouette", title: "Pirouette",   type: "album", year: 2026 },

    // singles that are also on albums (cover mode only — the songs stay on their album)
    { id: "s-safety", title: "safety", type: "single", year: 2022 },
    { id: "s-light",  title: "light",  type: "single", year: 2024 },
    { id: "s-crush",  title: "crush",  type: "single", year: 2024 },
    { id: "s-hurt",   title: "hurt",   type: "single", year: 2026 },
    { id: "s-sex",    title: "sex",    type: "single", year: 2026 },

    { id: "s-wc",       title: "whiplash / cliche", type: "single", year: 2023 },
    { id: "s-jeans",    title: "jeans",    type: "single" },
    { id: "s-trauma",   title: "trauma",   type: "single", year: 2024 },
    { id: "s-gold",     title: "gold",     type: "single" },
    { id: "s-afraid",   title: "afraid",   type: "single", year: 2025 },
    { id: "s-style",    title: "style",    type: "single", year: 2025 },
    { id: "s-ltr",      title: "left to right", type: "single", year: 2025 },
  ],

  songs: [
    // White Tiger (2022)
    { title: "gate",                 release: "tiger" },
    { title: "king of the darkness", release: "tiger" },
    { title: "give it up",           release: "tiger" },
    { title: "i do",                 release: "tiger" },
    { title: "actor",                release: "tiger" },
    { title: "white tiger",          release: "tiger" },
    { title: "the light upon the surface that beckoned deep into the moment and the tiger stepped forth", release: "tiger" },
    { title: "raise",                release: "tiger" },
    { title: "safety",               release: "tiger" },
    { title: "i always questioned it", release: "tiger" },

    // 2 (2023)
    { title: "all 2s",                   release: "two" },
    { title: "poster boy",               release: "two" },
    { title: "GOD",                      release: "two" },
    { title: "trust",                    release: "two" },
    { title: "FORFEIT",                  release: "two" },
    { title: "nothing2 lose",            release: "two" },
    { title: "blackbirds",               release: "two" },
    { title: "fame runner",              release: "two" },
    { title: "2 u",                      release: "two" },
    { title: "PLASTER",                  release: "two" },
    { title: "it will never be the same", release: "two" },

    // boy (2024)
    { title: "you once said my name for the first time", release: "boy" },
    { title: "two bad",                 release: "boy" },
    { title: "sister",                  release: "boy" },
    { title: "crush",                   release: "boy" },
    { title: "i saw it flash before me", release: "boy" },
    { title: "say it",                  release: "boy" },
    { title: "say it again",            release: "boy" },
    { title: "teenage soldier",         release: "boy" },
    { title: "lie",                     release: "boy" },
    { title: "promise",                 release: "boy" },
    { title: "3",                       release: "boy" },
    { title: "light",                   release: "boy" },
    { title: "mountain",                release: "boy" },

    // star (2025)
    { title: "beginning",        release: "star" },
    { title: "flash",            release: "star" },
    { title: "cope",             release: "star" },
    { title: "you",              release: "star" },
    { title: "tell me",          release: "star" },
    { title: "destroy me",       release: "star" },
    { title: "burn",             release: "star" },
    { title: "girl",             release: "star" },
    { title: "dream rain sports", release: "star" },
    { title: "nice",             release: "star" },
    { title: "nerve",            release: "star" },
    { title: "ego",              release: "star" },
    { title: "sidekick",         release: "star" },
    { title: "eldest child",     release: "star" },
    { title: "safe",             release: "star" },

    // Pirouette (2026)
    { title: "spring (love me)",  release: "pirouette" },
    { title: "skin",              release: "pirouette" },
    { title: "the lady in red",   release: "pirouette" },
    { title: "pressure",          release: "pirouette" },
    { title: "human after all",   release: "pirouette" },
    { title: "sophie",            release: "pirouette" },
    { title: "sex",               release: "pirouette" },
    { title: "hurt",              release: "pirouette" },
    { title: "eyes wide closed",  release: "pirouette" },
    { title: "betrayal",          release: "pirouette" },
    { title: "i2i",               release: "pirouette" },
    { title: "warhorse",          release: "pirouette" },
    { title: "today",             release: "pirouette" },
    { title: "heaven speaker",    release: "pirouette" },
    { title: "my one and only",   release: "pirouette" },
    { title: "daisy",             release: "pirouette" },

    // standalone singles
    { title: "whiplash",      release: "s-wc" },
    { title: "cliche",        release: "s-wc" },
    { title: "jeans",         release: "s-jeans" },
    { title: "trauma",        release: "s-trauma" },
    { title: "gold",          release: "s-gold" },
    { title: "afraid",        release: "s-afraid" },
    { title: "style",         release: "s-style" },
    { title: "left to right", release: "s-ltr" },
  ],

  starts: {},
};
