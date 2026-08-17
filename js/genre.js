const genreList = [

    "Select Genre",

    // ================================
    // POP / ROCK
    // ================================

    "Pop",
    "Pop Indonesia",
    "Pop Rock",
    "Soft Rock",
    "Hard Rock",
    "Alternative Rock",
    "Progressive Rock",
    "Blues Rock",
    "Folk Rock",
    "Country Rock",
    "Indie Rock",
    "Indie Pop",
    "Punk Rock",
    "Pop Punk",
    "Post Rock",

    // ================================
    // R&B / SOUL / BLUES / JAZZ
    // ================================

    "RnB",
    "Contemporary R&B",
    "Alternative R&B",
    "Neo Soul",
    "Soul",
    "Motown",
    "Blues",
    "Jazz",
    "Smooth Jazz",
    "Jazz Fusion",
    "Latin Jazz",
    "Funk",
    "Electro Funk",
    "Funk Rock",
    "Disco",
    "Swing",
    "Big Band",
    "Bossa Nova",

    // ================================
    // EDM / ELECTRONIC
    // ================================

    "EDM",
    "House",
    "Deep House",
    "Progressive House",
    "Tech House",
    "Electro House",
    "Future House",
    "Tropical House",
    "Melodic House",
    "Future Bass",
    "Trance",
    "Techno",
    "Dubstep",
    "Drum & Bass",
    "Breakbeat",
    "Hardstyle",
    "Hardcore",
    "Electro",
    "Eurodance",
    "Drift Phonk",

    // ================================
    // HIP HOP / RAP
    // ================================

    "Hip Hop",
    "Trap",
    "Boom Bap",
    "Rap",
    "Cloud Rap",
    "West Coast Hip Hop",
    "East Coast Hip Hop",
    "Alternative Hip Hop",
    "Lo-fi Rap",
    "Lo-fi Hip Hop",

    // ================================
    // REGGAE / CARIBBEAN
    // ================================

    "Reggae",
    "Ska",
    "Dancehall",
    "Dub",
    "Reggaeton",

    // ================================
    // COUNTRY / FOLK
    // ================================

    "Country",
    "Folk",
    "Acoustic",
    "Bluegrass",

    // ================================
    // LATIN
    // ================================

    "Latin Pop",
    "Salsa",
    "Merengue",
    "Bachata",
    "Flamenco",

    // ================================
    // AFRICAN
    // ================================

    "Afrobeat",
    "Afrobeats",
    "Amapiano",
    "Highlife",

    // ================================
    // CLASSICAL / CINEMATIC
    // ================================

    "Classical",
    "Orchestral",
    "Cinematic",
    "Epic",
    "Ambient",
    "New Age",
    "Drone",

    // ================================
    // CHILL / ALTERNATIVE ELECTRONIC
    // ================================

    "Chillout",
    "Downtempo",
    "Chillwave",
    "Vaporwave",
    "Synthwave",
    "Retrowave",
    "Darkwave",

    // ================================
    // ASIA
    // ================================

    "K-Pop",
    "J-Pop",
    "J-Rock",
    "C-Pop",
    "City Pop",
    "Anime Music",
    "Game Music",
    "Bollywood",
    "Indian Classical",
    "Indian Pop",

    // ================================
    // RELIGIOUS / SPIRITUAL
    // ================================

    "Nasheed",
    "Qawwali",
    "Gregorian Chant",
    "Christian Gospel",
    "Spiritual",

    // ================================
    // MIDDLE EASTERN
    // ================================

    "Arabic Pop",
    "Arabic Classical",
    "Middle Eastern",

    // ================================
    // INDONESIA
    // ================================

    "Dangdut",
    "Dangdut Koplo",
    "Dangdut Jawa",
    "Dangdut Remix",
    "Campursari",
    "Keroncong",
    "Keroncong Modern",
    "Orkes Melayu",
    "Jaipongan",
    "Gambus",
    "Tarling",
    "Langgam Jawa",
    "Jaranan",
    "Musik Tradisional Jawa",
    "Musik Tradisional Sunda",
    "Musik Tradisional Bali"

];


// ==========================================
// LOAD GENRE TO SELECT
// ==========================================

const genreSelect = document.getElementById("genre");


genreList.forEach(item => {

    const option =
        document.createElement("option");

    option.value = item;

    option.textContent = item;

    genreSelect.appendChild(option);

});
