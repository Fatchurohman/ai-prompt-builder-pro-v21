// ======================================================
// AI PROMPT BUILDER PRO v2.1
// FINAL SCRIPT
// Developer : fatur62
// ======================================================


// ======================================================
// SMART INSTRUMENT RECOMMENDATION
// ======================================================

const genreInstruments = {

    // ==========================
    // INDONESIAN
    // ==========================

    "Dangdut": [
        "Kendang Jawa",
        "Ketipung",
        "Bass Guitar",
        "Suling Jawa"
    ],

    "Dangdut Koplo": [
        "Kendang Jawa",
        "Kendang Ketipung",
        "Ketipung",
        "Bass Guitar",
        "Suling Jawa",
        "Saxophone"
    ],

    "Dangdut Jawa": [
        "Kendang Jawa",
        "Ketipung",
        "Suling Jawa",
        "Bass Guitar",
        "Gamelan Jawa"
    ],

    "Dangdut Remix": [
        "Kendang Ketipung",
        "Electronic Drums",
        "Synth Bass",
        "Synth Lead",
        "Bass Guitar"
    ],

    "Campursari": [
        "Kendang Jawa",
        "Gamelan Jawa",
        "Gong Ageng",
        "Bonang",
        "Saron",
        "Suling Jawa",
        "Siter"
    ],

    "Keroncong": [
        "Acoustic Guitar",
        "Classical Guitar",
        "Ukulele",
        "Accordion",
        "Violin",
        "Cello"
    ],

    "Keroncong Modern": [
        "Acoustic Guitar",
        "Electric Guitar",
        "Bass Guitar",
        "Violin",
        "Cello",
        "Piano"
    ],

    "Orkes Melayu": [
        "Accordion",
        "Gambus",
        "Violin",
        "Keyboard",
        "Drum Kit",
        "Bass Guitar"
    ],

    "Jaipongan": [
        "Kendang Sunda",
        "Kacapi Sunda",
        "Suling Sunda",
        "Gong Ageng",
        "Calung"
    ],

    "Gambus": [
        "Gambus",
        "Oud",
        "Accordion",
        "Rebana",
        "Violin"
    ],

    "Tarling": [
        "Acoustic Guitar",
        "Electric Guitar",
        "Suling Sunda",
        "Kendang Sunda",
        "Bass Guitar"
    ],

    "Langgam Jawa": [
        "Gamelan Jawa",
        "Kendang Jawa",
        "Suling Jawa",
        "Gender",
        "Siter"
    ],

    "Jaranan": [
        "Kendang Jawa",
        "Gong Ageng",
        "Saron",
        "Bonang",
        "Gamelan Jawa"
    ],


    // ==========================
    // POP / ROCK
    // ==========================

    "Pop": [
        "Piano",
        "Acoustic Guitar",
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Synth Pad"
    ],

    "Pop Indonesia": [
        "Piano",
        "Acoustic Guitar",
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "String Ensemble"
    ],

    "Pop Rock": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Piano",
        "Synth Pad"
    ],

    "Soft Rock": [
        "Acoustic Guitar",
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Piano"
    ],

    "Hard Rock": [
        "Electric Guitar",
        "Lead Guitar",
        "Bass Guitar",
        "Drum Kit"
    ],

    "Alternative Rock": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Synth Pad"
    ],

    "Indie Rock": [
        "Electric Guitar",
        "Acoustic Guitar",
        "Bass Guitar",
        "Drum Kit"
    ],

    "Indie Pop": [
        "Acoustic Guitar",
        "Electric Piano",
        "Synth Pad",
        "Bass Guitar",
        "Drum Kit"
    ],


    // ==========================
    // JAZZ / SOUL
    // ==========================

    "Jazz": [
        "Piano",
        "Double Bass",
        "Drum Kit",
        "Saxophone",
        "Trumpet"
    ],

    "Smooth Jazz": [
        "Electric Piano",
        "Saxophone",
        "Bass Guitar",
        "Drum Kit",
        "Acoustic Guitar"
    ],

    "Jazz Fusion": [
        "Electric Piano",
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Saxophone"
    ],

    "Bossa Nova": [
        "Classical Guitar",
        "Acoustic Guitar",
        "Piano",
        "Bass Guitar",
        "Shaker",
        "Percussion"
    ],

    "Soul": [
        "Electric Piano",
        "Hammond Organ",
        "Bass Guitar",
        "Drum Kit",
        "Trumpet"
    ],

    "Neo Soul": [
        "Electric Piano",
        "Synth Pad",
        "Bass Guitar",
        "Drum Kit",
        "Acoustic Guitar"
    ],

    "Funk": [
        "Electric Guitar",
        "Slap Bass",
        "Drum Kit",
        "Electric Piano",
        "Saxophone"
    ],

    "Disco": [
        "Bass Guitar",
        "Drum Kit",
        "String Ensemble",
        "Electric Piano",
        "Synth Lead"
    ],


    // ==========================
    // ELECTRONIC
    // ==========================

    "EDM": [
        "Synth Lead",
        "Synth Bass",
        "Synth Pad",
        "Electronic Drums"
    ],

    "House": [
        "Synth Bass",
        "Synth Lead",
        "Electronic Drums",
        "Synth Pad"
    ],

    "Deep House": [
        "Synth Bass",
        "Synth Pad",
        "Electric Piano",
        "Electronic Drums"
    ],

    "Progressive House": [
        "Synth Lead",
        "Synth Pad",
        "Synth Bass",
        "Electronic Drums"
    ],

    "Future House": [
        "Synth Bass",
        "Synth Lead",
        "Electronic Drums",
        "Synth Pad"
    ],

    "Future Bass": [
        "Synth Pad",
        "Synth Lead",
        "Synth Bass",
        "Electronic Drums"
    ],

    "Trance": [
        "Synth Lead",
        "Synth Pad",
        "Synth Arpeggio",
        "Electronic Drums"
    ],

    "Techno": [
        "Synth Bass",
        "Electronic Drums",
        "Synth Lead",
        "Synth Arpeggio"
    ],

    "Dubstep": [
        "Synth Bass",
        "Sub Bass",
        "Electronic Drums",
        "Synth Lead"
    ],

    "Drum & Bass": [
        "Sub Bass",
        "Electronic Drums",
        "Synth Bass",
        "Synth Pad"
    ],

    "Drift Phonk": [
        "808 Bass",
        "Electronic Drums",
        "Synth Bass",
        "Synth Lead"
    ],


    // ==========================
    // HIP HOP
    // ==========================

    "Hip Hop": [
        "Drum Kit",
        "Bass Guitar",
        "Synth Bass",
        "Piano"
    ],

    "Trap": [
        "808 Bass",
        "Electronic Drums",
        "Synth Pad",
        "Synth Lead"
    ],

    "Boom Bap": [
        "Drum Kit",
        "Piano",
        "Bass Guitar",
        "Electric Piano"
    ],

    "Rap": [
        "Drum Kit",
        "Bass Guitar",
        "Synth Bass",
        "Piano"
    ],

    "Lo-fi Hip Hop": [
        "Electric Piano",
        "Piano",
        "Drum Kit",
        "Bass Guitar",
        "Synth Pad"
    ],


    // ==========================
    // REGGAE
    // ==========================

    "Reggae": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Organ",
        "Percussion"
    ],

    "Ska": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Trumpet",
        "Trombone",
        "Saxophone"
    ],

    "Dancehall": [
        "Synth Bass",
        "Electronic Drums",
        "Synth Lead",
        "Percussion"
    ],


    // ==========================
    // COUNTRY / FOLK
    // ==========================

    "Country": [
        "Acoustic Guitar",
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Violin"
    ],

    "Folk": [
        "Acoustic Guitar",
        "Classical Guitar",
        "Violin",
        "Cello",
        "Percussion"
    ],

    "Acoustic": [
        "Acoustic Guitar",
        "Classical Guitar",
        "Piano",
        "Violin"
    ],

    "Bluegrass": [
        "Acoustic Guitar",
        "Violin",
        "Double Bass",
        "Banjo"
    ],


    // ==========================
    // CLASSICAL / CINEMATIC
    // ==========================

    "Classical": [
        "Violin",
        "Viola",
        "Cello",
        "Double Bass",
        "Piano"
    ],

    "Orchestral": [
        "Violin",
        "Viola",
        "Cello",
        "Double Bass",
        "French Horn",
        "Flute",
        "Trumpet"
    ],

    "Cinematic": [
        "String Ensemble",
        "French Horn",
        "Piano",
        "Cello",
        "Orchestral Brass"
    ],

    "Epic": [
        "String Ensemble",
        "French Horn",
        "Trumpet",
        "Orchestral Brass",
        "Timpani"
    ],

    "Ambient": [
        "Synth Pad",
        "Piano",
        "String Ensemble",
        "Synth Texture"
    ],


    // ==========================
    // K-POP / J-POP
    // ==========================

    "K-Pop": [
        "Synth Lead",
        "Synth Bass",
        "Synth Pad",
        "Electronic Drums",
        "Electric Piano"
    ],

    "J-Pop": [
        "Electric Guitar",
        "Piano",
        "Bass Guitar",
        "Drum Kit",
        "Synth Pad"
    ],

    "J-Rock": [
        "Electric Guitar",
        "Lead Guitar",
        "Bass Guitar",
        "Drum Kit"
    ],

    "City Pop": [
        "Electric Piano",
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Saxophone",
        "Synth Pad"
    ],


    // ==========================
    // LATIN
    // ==========================

    "Salsa": [
        "Piano",
        "Trumpet",
        "Trombone",
        "Congas",
        "Bongo",
        "Bass Guitar"
    ],

    "Merengue": [
        "Accordion",
        "Tambourine",
        "Bass Guitar",
        "Drum Kit",
        "Percussion"
    ],

    "Bachata": [
        "Acoustic Guitar",
        "Electric Guitar",
        "Bass Guitar",
        "Bongo",
        "Güiro"
    ],


    // ==========================
    // AFRICAN
    // ==========================

    "Afrobeat": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Congas",
        "Trumpet",
        "Saxophone"
    ],

    "Afrobeats": [
        "Synth Bass",
        "Electronic Drums",
        "Electric Guitar",
        "Piano",
        "Percussion"
    ],

    "Amapiano": [
        "Synth Bass",
        "Piano",
        "Electronic Drums",
        "Percussion",
        "Synth Pad"
    ]

};


// ======================================================
// TRACK SMART / MANUAL INSTRUMENTS
// ======================================================

let previousGenreRecommendations = [];

let manuallySelectedInstruments = new Set();


// ======================================================
// GET CHECKBOXES
// ======================================================

function getInstrumentCheckboxes() {

    return document.querySelectorAll(
        ".instrument-check"
    );

}


// ======================================================
// GENRE CHANGE
// ======================================================

function handleGenreChange() {

    const genre =
        document.getElementById("genre").value;


    const recommended =
        genreInstruments[genre] || [];


    const checkboxes =
        getInstrumentCheckboxes();


    // ----------------------------------------------
    // Simpan instrumen yang dipilih manual
    // ----------------------------------------------

    checkboxes.forEach(checkbox => {

        const value = checkbox.value;

        if (
            checkbox.checked &&
            !previousGenreRecommendations.includes(value)
        ) {

            manuallySelectedInstruments.add(value);

        }

    });


    // ----------------------------------------------
    // Lepas rekomendasi genre sebelumnya
    // ----------------------------------------------

    checkboxes.forEach(checkbox => {

        if (
            previousGenreRecommendations.includes(
                checkbox.value
            )
        ) {

            checkbox.checked = false;

        }

    });


    // ----------------------------------------------
    // Centang rekomendasi genre baru
    // ----------------------------------------------

    recommended.forEach(instrument => {

        checkboxes.forEach(checkbox => {

            if (
                checkbox.value === instrument
            ) {

                checkbox.checked = true;

            }

        });

    });


    // ----------------------------------------------
    // Pertahankan pilihan manual
    // ----------------------------------------------

    manuallySelectedInstruments.forEach(
        instrument => {

            checkboxes.forEach(checkbox => {

                if (
                    checkbox.value === instrument
                ) {

                    checkbox.checked = true;

                }

            });

        }
    );


    previousGenreRecommendations =
        [...recommended];

}


// ======================================================
// TRACK MANUAL CHECKBOX
// ======================================================

function trackManualInstrument(event) {

    const checkbox = event.target;

    const value = checkbox.value;


    if (
        checkbox.checked &&
        !previousGenreRecommendations.includes(value)
    ) {

        manuallySelectedInstruments.add(value);

    }


    if (!checkbox.checked) {

        manuallySelectedInstruments.delete(value);

    }

}


// ======================================================
// GENRE CHARACTER
// ======================================================

const genreCharacter = {

    "Pop":
        "catchy melodic hooks, polished modern pop arrangement",

    "Pop Indonesia":
        "emotional Indonesian pop melody, memorable chorus and warm arrangement",

    "Rock":
        "powerful guitars, energetic drums and strong rhythmic drive",

    "Alternative Rock":
        "raw guitar textures, dynamic drums and expressive alternative atmosphere",

    "Indie Pop":
        "dreamy textures, catchy melodies and intimate modern production",

    "RnB":
        "smooth groove, soulful melodies, warm bass and rhythmic vocal phrasing",

    "Soul":
        "deep soulful expression, warm harmonies and emotional vocal delivery",

    "Blues":
        "expressive blues phrasing, emotional guitar tone and organic groove",

    "Jazz":
        "rich jazz harmony, sophisticated chords and expressive improvisation",

    "Funk":
        "tight rhythmic groove, syncopated bass and punchy drums",

    "Disco":
        "danceable four-on-the-floor groove, funky bass and bright strings",

    "EDM":
        "powerful electronic drops, energetic synths and modern dance production",

    "House":
        "four-on-the-floor beat, groovy bassline and uplifting electronic texture",

    "Deep House":
        "deep warm bass, smooth groove and atmospheric electronic textures",

    "Future Bass":
        "wide synth chords, emotional drops and modern bass production",

    "Trance":
        "euphoric synth melodies and driving four-on-the-floor rhythm",

    "Techno":
        "hypnotic electronic groove and repetitive rhythmic patterns",

    "Dubstep":
        "heavy bass drops, aggressive wobble bass and powerful electronic drums",

    "Drum & Bass":
        "fast breakbeats, deep bassline and energetic electronic atmosphere",

    "Drift Phonk":
        "dark distorted bass, aggressive cowbell rhythm and gritty underground atmosphere",

    "Hip Hop":
        "strong hip hop groove, rhythmic beat, punchy bass and confident flow",

    "Trap":
        "heavy 808 bass, sharp hi-hats and dark atmospheric synths",

    "Boom Bap":
        "classic boom bap drums, warm samples and strong hip hop groove",

    "Rap":
        "rhythmic rap delivery, punchy drums, deep bass and confident flow",

    "Reggae":
        "laid-back reggae groove, offbeat guitar skank and deep bass",

    "Ska":
        "upbeat ska rhythm, offbeat guitars and energetic brass section",

    "Country":
        "organic country groove, acoustic guitars and warm storytelling atmosphere",

    "Folk":
        "organic acoustic textures, natural instruments and intimate storytelling",

    "Acoustic":
        "warm acoustic instrumentation, natural dynamics and intimate performance",

    "Bluegrass":
        "fast acoustic picking and traditional string textures",

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
        "Javanese dangdut character, expressive kendang, bamboo flute and traditional atmosphere",

    "Dangdut Remix":
        "modern electronic dangdut groove, powerful bass, energetic percussion and dance production",

    "Campursari":
        "Javanese campursari fusion, gamelan colors, kendang groove and emotional melodic phrasing",

    "Bossa Nova":
        "soft Brazilian groove, nylon guitar, subtle percussion and relaxed sophistication",

    "K-Pop":
        "polished Korean pop production, layered synths, dynamic arrangement and catchy hooks",

    "J-Pop":
        "bright Japanese pop melodies, polished arrangement and catchy vocal hooks",

    "City Pop":
        "retro Japanese urban pop, funky bass, electric piano and sophisticated groove",

    "Afrobeat":
        "African rhythmic groove, layered percussion, melodic bass and energetic horns",

    "Afrobeats":
        "modern African pop groove, syncopated percussion, melodic bass and catchy rhythms",

    "Amapiano":
        "deep log drum bass, South African groove and atmospheric piano textures",

    "Salsa":
        "Latin percussion, rhythmic piano, brass accents and energetic dance groove",

    "Bachata":
        "romantic Latin guitar, syncopated percussion and emotional melodic groove"

};


// ======================================================
// INSTRUMENT CHARACTER
// ======================================================

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
        "deep expressive woodwind color",

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

    "Classical Guitar":
        "warm nylon-string guitar texture",

    "Bass Guitar":
        "deep melodic bass foundation",

    "Electric Bass":
        "tight punchy electric bass groove",

    "Slap Bass":
        "funky percussive bass articulation",

    "Synth Bass":
        "deep modern electronic bass",

    "Sub Bass":
        "deep powerful low-frequency foundation",

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


// ======================================================
// GENERATE PROMPT
// ======================================================

function generatePrompt() {

    const genre =
        document.getElementById("genre").value;

    const mood =
        document.getElementById("mood").value;

    const sound =
        document.getElementById("sound").value;

    const vocal =
        document.getElementById("vocal").value;

    const bpm =
        document.getElementById("bpm").value;


    // ------------------------------------------
    // MULTI INSTRUMENT
    // ------------------------------------------

    const instruments = [];

    document
        .querySelectorAll(
            ".instrument-check:checked"
        )
        .forEach(item => {

            instruments.push(item.value);

        });


    const instrumentText =
        instruments.length > 0
            ? instruments.join(", ")
            : "No instrument selected";


    // ------------------------------------------
    // GENRE CHARACTER
    // ------------------------------------------

    const character =
        genreCharacter[genre] ||
        "balanced musical arrangement with professional modern production";


    // ------------------------------------------
    // INSTRUMENT CHARACTER
    // ------------------------------------------

    const details =
        instruments.map(item => {

            return (
                instrumentCharacter[item] ||
                item
            );

        });


    if (details.length === 0) {

        details.push(
            "balanced professional instrumentation"
        );

    }


    // ------------------------------------------
    // BUILD PROMPT
    // ------------------------------------------

    let prompt =
`Genre: ${genre}

Musical Character:
${character}.

Mood: ${mood}

Instruments:
${instrumentText}

Instrument Character:
${details.join(", ")}.

Sound Character:
${sound}

Vocal Style:
${vocal}

Tempo:
${bpm} BPM

Professional studio production, clear vocal presence, balanced frequency spectrum, deep controlled bass, wide stereo image, natural dynamics, polished radio-ready mastering.`;


    // ------------------------------------------
    // MAX 1000 CHARACTERS
    // ------------------------------------------

    if (prompt.length > 1000) {

        prompt =
            prompt.substring(0, 997) + "...";

    }


    document.getElementById(
        "result"
    ).value = prompt;


    updateCounter();

}


// ======================================================
// COPY
// ======================================================

function copyPrompt() {

    const result =
        document.getElementById("result");


    if (
        result.value.trim() === ""
    ) {

        alert(
            "Please generate a prompt first!"
        );

        return;

    }


    result.select();

    result.setSelectionRange(
        0,
        99999
    );


    navigator.clipboard
        .writeText(result.value)
        .then(() => {

            alert(
                "Prompt copied!"
            );

        })
        .catch(() => {

            alert(
                "Copy failed. Please copy manually."
            );

        });

}


// ======================================================
// CLEAR
// ======================================================

function clearPrompt() {

    document.getElementById(
        "result"
    ).value = "";


    updateCounter();

}


// ======================================================
// EXPORT
// ======================================================

function exportPrompt() {

    const text =
        document.getElementById(
            "result"
        ).value;


    if (
        text.trim() === ""
    ) {

        alert(
            "Please generate a prompt first!"
        );

        return;

    }


    const blob =
        new Blob(
            [text],
            {
                type: "text/plain"
            }
        );


    const link =
        document.createElement(
            "a"
        );


    link.href =
        URL.createObjectURL(
            blob
        );


    link.download =
        "Fatur62_Music_Prompt.txt";


    document.body.appendChild(
        link
    );


    link.click();


    document.body.removeChild(
        link
    );


    URL.revokeObjectURL(
        link.href
    );


    alert(
        "Prompt exported successfully!"
    );

}


// ======================================================
// COUNTER
// ======================================================

function updateCounter() {

    const text =
        document.getElementById(
            "result"
        ).value;


    document.getElementById(
        "counter"
    ).innerHTML =
        text.length +
        " / 1000 characters";

}


// ======================================================
// INITIALIZE
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {


        // --------------------------------------
        // GENRE CHANGE
        // --------------------------------------

        const genreSelect =
            document.getElementById(
                "genre"
            );


        if (genreSelect) {

            genreSelect.addEventListener(
                "change",
                handleGenreChange
            );

        }


        // --------------------------------------
        // INSTRUMENT CHECKBOX
        // --------------------------------------

        document
            .querySelectorAll(
                ".instrument-check"
            )
            .forEach(checkbox => {

                checkbox.addEventListener(
                    "change",
                    trackManualInstrument
                );

            });


        // --------------------------------------
        // BUTTONS
        // --------------------------------------

        const generateBtn =
            document.getElementById(
                "generateBtn"
            );


        const copyBtn =
            document.getElementById(
                "copyBtn"
            );


        const clearBtn =
            document.getElementById(
                "clearBtn"
            );


        const exportBtn =
            document.getElementById(
                "exportBtn"
            );


        if (generateBtn) {

            generateBtn.addEventListener(
                "click",
                generatePrompt
            );

        }


        if (copyBtn) {

            copyBtn.addEventListener(
                "click",
                copyPrompt
            );

        }


        if (clearBtn) {

            clearBtn.addEventListener(
                "click",
                clearPrompt
            );

        }


        if (exportBtn) {

            exportBtn.addEventListener(
                "click",
                exportPrompt
            );

        }


        // --------------------------------------
        // INITIAL COUNTER
        // --------------------------------------

        updateCounter();

    }
);
