// ==========================================
// AI PROMPT BUILDER PRO v2.1
// Fatur Sky
// ==========================================


// ==========================================
// GENERATE PROMPT
// ==========================================

function generatePrompt() {

    const genre = document.getElementById("genre").value;
    const mood = document.getElementById("mood").value;
    const sound = document.getElementById("sound").value;
    const vocal = document.getElementById("vocal").value;
    const bpm = document.getElementById("bpm").value;

    // Ambil semua instrumen yang dicentang
    let instruments = [];

    document.querySelectorAll(".instrument-check:checked")
        .forEach(item => {
            instruments.push(item.value);
        });

    let instrumentText = instruments.length > 0
        ? instruments.join(", ")
        : "No instrument selected";


    // ======================================
    // KARAKTER GENRE
    // ======================================

    const genreCharacter = {

        "Pop":
        "catchy melodic hooks, polished modern pop arrangement",

        "Pop Indonesia":
        "emotional Indonesian pop melody, memorable chorus, warm arrangement",

        "Rock":
        "powerful guitars, energetic drums, strong rhythmic drive",

        "Alternative Rock":
        "raw guitar textures, dynamic drums, expressive alternative atmosphere",

        "Indie Pop":
        "dreamy textures, catchy melodies, intimate modern production",

        "RnB":
        "smooth groove, soulful melodies, warm bass and rhythmic vocal phrasing",

        "Soul":
        "deep soulful expression, warm harmonies, emotional vocal delivery",

        "Blues":
        "expressive blues phrasing, emotional guitar tone, organic groove",

        "Jazz":
        "rich jazz harmony, sophisticated chords, expressive improvisation",

        "Funk":
        "tight rhythmic groove, syncopated bass, punchy drums",

        "Disco":
        "danceable four-on-the-floor groove, funky bass and bright strings",

        "EDM":
        "powerful electronic drops, energetic synths and modern dance production",

        "House":
        "four-on-the-floor beat, groovy bassline, uplifting electronic texture",

        "Deep House":
        "deep warm bass, smooth groove, atmospheric electronic textures",

        "Future Bass":
        "wide synth chords, emotional drops, sidechain movement and modern bass",

        "Trance":
        "euphoric synth melodies, driving four-on-the-floor rhythm",

        "Techno":
        "hypnotic electronic groove, repetitive rhythmic patterns, dark club energy",

        "Dubstep":
        "heavy bass drops, aggressive wobble bass and powerful electronic drums",

        "Drum & Bass":
        "fast breakbeats, deep bassline and energetic electronic atmosphere",

        "Drift Phonk":
        "dark distorted bass, aggressive cowbell rhythm, gritty underground atmosphere",

        "Hip Hop":
        "strong hip hop groove, rhythmic beat, punchy bass and confident flow",

        "Trap":
        "heavy 808 bass, sharp hi-hats, dark atmospheric synths",

        "Boom Bap":
        "classic boom bap drums, warm samples, strong hip hop groove",

        "Rap":
        "rhythmic rap delivery, punchy drums, deep bass and confident flow",

        "Reggae":
        "laid-back reggae groove, offbeat guitar skank and deep bass",

        "Ska":
        "upbeat ska rhythm, offbeat guitars, energetic brass section",

        "Country":
        "organic country groove, acoustic guitars, warm storytelling atmosphere",

        "Folk":
        "organic acoustic textures, natural instruments and intimate storytelling",

        "Acoustic":
        "warm acoustic instrumentation, natural dynamics and intimate performance",

        "Bluegrass":
        "fast acoustic picking, banjo-inspired rhythm and traditional string texture",

        "Classical":
        "elegant classical harmony, expressive dynamics and acoustic orchestration",

        "Orchestral":
        "rich orchestral arrangement, cinematic dynamics and expressive strings",

        "Cinematic":
        "dramatic cinematic atmosphere, evolving orchestration and emotional dynamics",

        "Epic":
        "massive orchestration, powerful percussion and dramatic heroic atmosphere",

        "Ambient":
        "spacious atmospheric textures, slow evolution and immersive soundscape",

        "Lo-fi Hip Hop":
        "laid-back lo-fi groove, dusty textures, mellow drums and warm atmosphere",

        "Bollywood":
        "colorful Indian melodies, rhythmic percussion and cinematic dance energy",

        "Nasheed":
        "spiritual melodic atmosphere, uplifting vocal expression and restrained arrangement",

        "Qawwali":
        "devotional South Asian vocal energy, rhythmic clapping and expressive melodic phrases",

        "Dangdut":
        "authentic dangdut groove, expressive kendang rhythm, melodic bass and bamboo flute",

        "Dangdut Koplo":
        "energetic koplo groove, highly expressive kendang patterns, strong bass and lively dance rhythm",

        "Dangdut Jawa":
        "Javanese dangdut character, expressive kendang, bamboo flute and melodic traditional atmosphere",

        "Dangdut Remix":
        "modern electronic dangdut groove, powerful bass, energetic percussion and dance production",

        "Campursari":
        "Javanese campursari fusion, gamelan colors, kendang groove and emotional melodic phrasing",

        "Pop Rock":
        "catchy pop melodies combined with energetic rock guitars and powerful drums",

        "Soft Rock":
        "smooth rock arrangement, warm guitars and melodic emotional atmosphere",

        "Hard Rock":
        "powerful distorted guitars, heavy drums and aggressive rock energy",

        "Progressive Rock":
        "complex rhythmic structures, evolving arrangements and virtuosic instrumentation",

        "Blues Rock":
        "expressive electric guitar, blues phrasing and powerful rock rhythm",

        "Folk Rock":
        "organic folk instruments combined with energetic rock arrangement",

        "Country Rock":
        "country guitar textures with driving rock rhythm",

        "Indie Rock":
        "raw guitar textures, organic drums and alternative indie atmosphere",

        "Punk Rock":
        "fast aggressive drums, distorted guitars and energetic rebellious atmosphere",

        "Pop Punk":
        "catchy melodies, energetic punk guitars and youthful vocal delivery",

        "Post Rock":
        "slow-building guitar layers, atmospheric dynamics and expansive instrumental textures",

        "Smooth Jazz":
        "smooth saxophone, warm chords, relaxed groove and sophisticated atmosphere",

        "Jazz Fusion":
        "complex jazz harmony, fusion grooves and virtuosic instrumental interplay",

        "Latin Jazz":
        "Latin percussion, sophisticated jazz harmony and syncopated rhythms",

        "Bossa Nova":
        "soft Brazilian groove, nylon guitar, subtle percussion and relaxed sophistication",

        "Swing":
        "classic swing rhythm, walking bass and lively jazz instrumentation",

        "Big Band":
        "powerful brass section, swing rhythm and rich orchestral jazz arrangement",

        "Neo Soul":
        "smooth soulful groove, rich harmony and warm modern production",

        "Motown":
        "classic soul groove, melodic bass, rhythmic guitars and vintage character",

        "Electro Funk":
        "funky bass groove, electronic synths and tight rhythmic production",

        "Contemporary R&B":
        "modern R&B groove, smooth vocal phrasing, deep bass and atmospheric production",

        "Alternative R&B":
        "experimental R&B textures, atmospheric synths and emotional vocal expression",

        "Eurodance":
        "energetic dance beat, bright synth hooks and uplifting club atmosphere",

        "Electro House":
        "powerful electronic bass, punchy four-on-the-floor beat and festival energy",

        "Progressive House":
        "evolving synth layers, melodic progression and atmospheric dance groove",

        "Tech House":
        "minimal groovy bassline, tight percussion and modern club rhythm",

        "Tropical House":
        "relaxed tropical atmosphere, bright plucks and smooth dance groove",

        "Future House":
        "modern bass house groove, bright synths and energetic drops",

        "Hardstyle":
        "powerful distorted kick drums, energetic synth melodies and festival intensity",

        "Hardcore":
        "extreme electronic energy, aggressive kick drums and intense rhythmic patterns",

        "Reggaeton":
        "Latin urban groove, dembow rhythm, deep bass and danceable percussion",

        "Dancehall":
        "Caribbean dance groove, syncopated rhythm and deep bass",

        "Dub":
        "deep bass, spacious effects, echoing percussion and atmospheric production",

        "Afrobeat":
        "African rhythmic groove, layered percussion, melodic bass and energetic horns",

        "Afrobeats":
        "modern African pop groove, syncopated percussion, melodic bass and catchy rhythms",

        "Amapiano":
        "deep log drum bass, South African groove and atmospheric piano textures",

        "Salsa":
        "Latin percussion, rhythmic piano, brass accents and energetic dance groove",

        "Merengue":
        "fast Caribbean rhythm, energetic percussion and lively melodic arrangement",

        "Bachata":
        "romantic Latin guitar, syncopated percussion and emotional melodic groove",

        "Flamenco":
        "expressive Spanish guitar, rhythmic hand claps and passionate performance",

        "J-Pop":
        "bright Japanese pop melodies, polished arrangement and catchy vocal hooks",

        "K-Pop":
        "polished Korean pop production, layered synths, dynamic arrangement and catchy hooks",

        "C-Pop":
        "modern Chinese pop melody, polished production and expressive vocal arrangement",

        "City Pop":
        "retro Japanese urban pop, funky bass, electric piano and sophisticated groove",

        "J-Rock":
        "energetic Japanese rock guitars, dynamic drums and melodic hooks",

        "Anime Music":
        "dramatic melodic hooks, cinematic textures and energetic Japanese pop-rock influence",

        "Game Music":
        "dynamic thematic melodies, layered instrumentation and immersive production",

        "Vaporwave":
        "dreamy retro synth textures, nostalgic atmosphere and slowed electronic character",

        "Synthwave":
        "retro analog synths, driving electronic drums and nostalgic 1980s atmosphere",

        "Retrowave":
        "vintage synthesizers, pulsing bass and cinematic retro atmosphere",

        "Darkwave":
        "dark synth textures, atmospheric bass and melancholic electronic mood",

        "Chillout":
        "relaxed electronic textures, smooth groove and spacious atmosphere",

        "Downtempo":
        "slow relaxed groove, atmospheric textures and deep warm sound",

        "Chillwave":
        "dreamy synth textures, nostalgic atmosphere and relaxed electronic groove",

        "New Age":
        "peaceful atmospheric textures, gentle melodies and immersive soundscape",

        "Keroncong":
        "traditional Indonesian keroncong rhythm, warm plucked strings and nostalgic melodic character",

        "Keroncong Modern":
        "modern keroncong fusion with traditional Indonesian string textures and contemporary production",

        "Orkes Melayu":
        "Malay orchestra character, melodic percussion, strings and expressive vocal style",

        "Jaipongan":
        "energetic Sundanese rhythm, kendang patterns and traditional melodic instruments",

        "Gambus":
        "Middle Eastern and Malay melodic colors, oud-like strings and rhythmic percussion",

        "Tarling":
        "West Java tarling character, guitar-based melody and traditional rhythmic groove",

        "Langgam Jawa":
        "Javanese melodic character, gamelan colors and elegant traditional atmosphere",

        "Jaranan":
        "energetic Javanese traditional rhythm, gamelan percussion and powerful kendang patterns"

    };


    // Ambil karakter genre
    const character =
        genreCharacter[genre] ||
        "balanced musical arrangement with professional modern production";


    // ======================================
    // KARAKTER INSTRUMEN
    // ======================================

    const instrumentCharacter = {

        "Kendang Jawa":
        "expressive Javanese kendang patterns",

        "Kendang Ketipung":
        "fast energetic ketipung and kendang accents",

        "Ketipung":
        "punchy Indonesian dangdut percussion",

        "Suling Jawa":
        "melodic Javanese bamboo flute phrases",

        "Gamelan Jawa":
        "rich Javanese gamelan tonal colors",

        "Gong Ageng":
        "deep resonant gong accents",

        "Bonang":
        "bright metallic Javanese melodic percussion",

        "Saron":
        "clear metallic gamelan melodic patterns",

        "Gender":
        "delicate shimmering Javanese melodic texture",

        "Angklung":
        "bright organic bamboo ensemble texture",

        "Kacapi Sunda":
        "delicate Sundanese zither melodies",

        "Suling Sunda":
        "soft expressive Sundanese bamboo flute",

        "Sasando":
        "distinctive Indonesian plucked string texture",

        "Tifa Papua":
        "deep tribal hand drum rhythm",

        "Kolintang":
        "bright Indonesian wooden percussion melodies",

        "Sitar India":
        "ornamental Indian string melodies",

        "Tabla":
        "complex Indian hand percussion patterns",

        "Oud":
        "warm Middle Eastern plucked string texture",

        "Duduk":
        "deep expressive Armenian woodwind color",

        "Erhu":
        "expressive Chinese bowed string melodies",

        "Shamisen":
        "bright Japanese plucked string attack",

        "Taiko":
        "powerful Japanese festival drums",

        "Grand Piano":
        "rich acoustic piano tone",

        "Electric Guitar":
        "expressive amplified guitar textures",

        "Acoustic Guitar":
        "warm natural acoustic guitar texture",

        "Bass Guitar":
        "deep melodic bass foundation",

        "Electric Bass":
        "tight punchy electric bass groove",

        "Slap Bass":
        "funky percussive bass articulation",

        "Synth Bass":
        "deep modern electronic bass",

        "808 Bass":
        "deep sub-heavy 808 bass",

        "Drum Kit":
        "tight professional acoustic drum performance",

        "Electronic Drums":
        "precise modern electronic percussion",

        "Violin":
        "expressive melodic violin lines",

        "Cello":
        "deep emotional cello textures",

        "String Ensemble":
        "rich layered orchestral strings",

        "Trumpet":
        "bright expressive brass accents",

        "Saxophone":
        "smooth expressive saxophone melodies",

        "Flute":
        "clear airy melodic flute phrases"

    };


    // Buat deskripsi instrumen
    let instrumentDetails = instruments.map(item => {

        return instrumentCharacter[item] || item;

    });


    if (instrumentDetails.length === 0) {

        instrumentDetails.push(
            "balanced professional instrumentation"
        );

    }


    // ======================================
    // SUSUN PROMPT
    // ======================================

    let prompt =
`Genre: ${genre}

Musical Character:
${character}.

Mood: ${mood}

Instruments:
${instrumentText}

Instrument Character:
${instrumentDetails.join(", ")}.

Sound Character:
${sound}

Vocal Style:
${vocal}

Tempo:
${bpm} BPM

Professional studio production, clear vocal presence, balanced frequency spectrum, deep controlled bass, wide stereo image, natural dynamics, polished radio-ready mastering.`;


    // ======================================
    // BATAS 1000 KARAKTER
    // ======================================

    if (prompt.length > 1000) {

        prompt =
            prompt.substring(0, 997) + "...";

    }


    document.getElementById("result").value = prompt;

    updateCounter();

}


// ==========================================
// COPY PROMPT
// ==========================================

function copyPrompt() {

    const result =
        document.getElementById("result");

    if (result.value.trim() === "") {

        alert("Please generate a prompt first!");

        return;

    }

    result.select();

    result.setSelectionRange(
        0,
        99999
    );

    navigator.clipboard.writeText(
        result.value
    );

    alert("Prompt copied!");

}


// ==========================================
// CLEAR PROMPT
// ==========================================

function clearPrompt() {

    document.getElementById("result").value = "";

    updateCounter();

}


// ==========================================
// EXPORT PROMPT
// ==========================================

function exportPrompt() {

    const text =
        document.getElementById("result").value;


    if (text.trim() === "") {

        alert("Please generate a prompt first!");

        return;

    }


    const blob =
        new Blob(
            [text],
            { type: "text/plain" }
        );


    const link =
        document.createElement("a");


    link.href =
        URL.createObjectURL(blob);


    link.download =
        "FaturSky_Music_Prompt.txt";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);


    alert(
        "Prompt exported successfully!"
    );

}


// ==========================================
// CHARACTER COUNTER
// ==========================================

function updateCounter() {

    const text =
        document.getElementById("result").value;


    document.getElementById("counter").innerHTML =
        text.length + " / 1000 characters";

}


// ==========================================
// EVENT LISTENERS
// ==========================================

document
    .getElementById("generateBtn")
    .addEventListener(
        "click",
        generatePrompt
    );


document
    .getElementById("copyBtn")
    .addEventListener(
        "click",
        copyPrompt
    );


document
    .getElementById("clearBtn")
    .addEventListener(
        "click",
        clearPrompt
    );


document
    .getElementById("exportBtn")
    .addEventListener(
        "click",
        exportPrompt
    );


// ==========================================
// INITIAL COUNTER
// ==========================================

updateCounter();
