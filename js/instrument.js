const instrumentList = [

"Select Instrument",

// ================================
// MODERN / BAND INSTRUMENTS
// ================================
"Piano",
"Grand Piano",
"Upright Piano",
"Electric Piano",
"Rhodes Piano",
"Acoustic Guitar",
"Classical Guitar",
"Nylon Guitar",
"12-String Guitar",
"Electric Guitar",
"Lead Guitar",
"Rhythm Guitar",
"Slide Guitar",
"Bass Guitar",
"Electric Bass",
"Acoustic Bass",
"Fretless Bass",
"Slap Bass",
"Synth Bass",
"Sub Bass",
"Drum Kit",
"Electronic Drums",
"Synth Pad",
"Synth Lead",
"Synth Pluck",
"Synth Arpeggio",
"Synth Strings",
"Organ",
"Hammond Organ",
"Church Organ",
"Accordion",

// ================================
// ORCHESTRA - STRINGS
// ================================
"Violin",
"Viola",
"Cello",
"Double Bass",
"String Ensemble",
"Chamber Strings",
"Orchestral Strings",
"Solo Violin",
"Solo Cello",
"String Quartet",
"Electric Violin",
"Harpsichord",
"Celesta",
"Harp",

// ================================
// ORCHESTRA - BRASS
// ================================
"Trumpet",
"Flugelhorn",
"Trombone",
"French Horn",
"Tuba",
"Brass Section",
"Orchestral Brass",

// ================================
// ORCHESTRA - WOODWIND
// ================================
"Flute",
"Piccolo",
"Clarinet",
"Oboe",
"English Horn",
"Bassoon",
"Recorder",

// ================================
// SAXOPHONE
// ================================
"Soprano Saxophone",
"Alto Saxophone",
"Tenor Saxophone",
"Baritone Saxophone",
"Saxophone Section",

// ================================
// PERCUSSION
// ================================
"Conga",
"Bongo",
"Timbales",
"Tambourine",
"Shaker",
"Maracas",
"Claves",
"Cowbell",
"Castanets",
"Cajon",
"Hand Percussion",
"Frame Drum",
"Udu",
"Wood Block",
"Triangle",
"Vibraphone",
"Marimba",
"Xylophone",

// ================================
// DRUM & RHYTHM
// ================================
"Kick Drum",
"Snare Drum",
"Hi-Hat",
"Open Hi-Hat",
"Ride Cymbal",
"Crash Cymbal",
"Tom Drums",
"Electronic Percussion",
"808 Drums",
"808 Kick",
"808 Snare",

// ================================
// INDONESIA - JAWA
// ================================
"Kendang Jawa",
"Kendang Ketipung",
"Ketipung",
"Gamelan Jawa",
"Gong Ageng",
"Kempul",
"Kenong",
"Bonang",
"Saron",
"Demung",
"Peking",
"Gender",
"Slenthem",
"Gambang",
"Rebab Jawa",
"Siter",
"Clempung",
"Suling Jawa",

// ================================
// INDONESIA - SUNDA
// ================================
"Angklung",
"Kendang Sunda",
"Kacapi Sunda",
"Suling Sunda",
"Calung",
"Goong Sunda",
"Rebab Sunda",

// ================================
// INDONESIA - BALI
// ================================
"Gamelan Bali",
"Gangsa Bali",
"Rindik Bali",
"Kendang Bali",
"Ceng-ceng",
"Jegog",
"Gender Wayang",

// ================================
// INDONESIA - SUMATERA
// ================================
"Talempong Minangkabau",
"Saluang",
"Gondang Batak",
"Taganing",
"Serunai Melayu",
"Serunai Minang",
"Rabab Minang",

// ================================
// INDONESIA - NUSANTARA
// ================================
"Sasando",
"Tifa Papua",
"Kolintang",
"Rebana",
"Gambus",
"Arumba",
"Fu Papua",

// ================================
// WORLD - INDIA
// ================================
"Sitar India",
"Tabla",
"Dhol",
"Mridangam",
"Tanpura",
"Indian Flute",
"Sarangi",
"Harmonium India",

// ================================
// WORLD - MIDDLE EAST
// ================================
"Oud",
"Duduk",
"Ney",
"Qanun",
"Darabuka",
"Riqq",
"Middle Eastern Percussion",

// ================================
// WORLD - CHINA
// ================================
"Erhu",
"Guzheng",
"Pipa",
"Dizi",
"Yangqin",

// ================================
// WORLD - JAPAN
// ================================
"Shamisen",
"Koto",
"Shakuhachi",
"Taiko",

// ================================
// WORLD - LATIN
// ================================
"Latin Percussion",
"Claves Latin",
"Agogo Bell",
"Guiro",
"Surdo",
"Brazilian Percussion",

// ================================
// WORLD - AFRICA
// ================================
"Djembe",
"Talking Drum",
"Kalimba",
"Mbira",

// ================================
// VOCAL / CHOIR
// ================================
"Choir",
"Male Choir",
"Female Choir",
"Gospel Choir",
"Vocal Ensemble",
"Backing Vocals"

];

const instrumentContainer = document.getElementById("instrumentList");


instrumentList.forEach(item => {

    const label = document.createElement("label");

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.value = item;

    checkbox.className = "instrument-check";

    label.appendChild(checkbox);

    label.appendChild(
        document.createTextNode(" " + item)
    );

    instrumentContainer.appendChild(label);

});
