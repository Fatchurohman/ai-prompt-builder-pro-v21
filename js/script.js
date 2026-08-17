// ======================================================
// AI PROMPT BUILDER PRO v2.1.1
// TEST SCRIPT
// Developer : fatur62
// ======================================================


// ======================================================
// GENRE DNA
// ======================================================

const genreDNA = {

    "Musik Tradisional Jawa": {
        style:
            "authentic traditional Javanese music, traditional gamelan-based arrangement, Javanese rhythmic patterns, organic acoustic performance",
        avoid:
            "modern pop elements, drum kit, electronic drums, EDM, modern synths, western pop rhythm"
    },

    "Dangdut": {
        style:
            "authentic Indonesian dangdut groove, expressive kendang rhythm, melodic bass and bamboo flute",
        avoid:
            "heavy rock arrangement, EDM dominance"
    },

    "Dangdut Koplo": {
        style:
            "energetic authentic dangdut koplo, highly expressive kendang and ketipung patterns, strong bass groove and lively dance rhythm",
        avoid:
            "rock drum dominance, EDM dominance, excessive pop arrangement"
    },

    "Dangdut Jawa": {
        style:
            "Javanese dangdut with expressive kendang, bamboo flute, traditional Javanese melodic colors and emotional vocal phrasing",
        avoid:
            "heavy western pop arrangement, EDM dominance"
    },

    "Dangdut Remix": {
        style:
            "modern electronic dangdut remix with energetic kendang percussion, powerful bass and dance-oriented production",
        avoid:
            "excessive orchestral arrangement"
    },

    "Campursari": {
        style:
            "Javanese campursari fusion combining traditional gamelan colors with tasteful modern accompaniment",
        avoid:
            "aggressive EDM, excessive electronic effects, rock-dominant arrangement"
    },

    "Langgam Jawa": {
        style:
            "authentic Javanese langgam style, elegant traditional melody, gamelan colors and refined Javanese musical phrasing",
        avoid:
            "modern pop rhythm, EDM, drum kit dominance"
    },

    "Jaranan": {
        style:
            "traditional Javanese jaranan music with energetic gamelan percussion, kendang and gong accents",
        avoid:
            "modern pop, EDM, electronic drums"
    },

    "Pop": {
        style:
            "modern polished pop production with catchy melodic hooks and balanced contemporary arrangement",
        avoid:
            "excessive distortion, overly aggressive experimental textures"
    },

    "Pop Indonesia": {
        style:
            "emotional Indonesian pop with memorable melody, polished arrangement and expressive vocal delivery",
        avoid:
            "excessive EDM, overly aggressive rock elements"
    },

    "Rock": {
        style:
            "powerful rock arrangement with electric guitars, energetic drums and strong rhythmic drive",
        avoid:
            "soft acoustic-only arrangement"
    },

    "Alternative Rock": {
        style:
            "dynamic alternative rock with expressive guitars, organic drums and atmospheric textures",
        avoid:
            "overly commercial dance-pop arrangement"
    },

    "Indie Pop": {
        style:
            "dreamy indie pop with intimate vocals, melodic hooks and organic modern textures",
        avoid:
            "heavy metal distortion, aggressive EDM"
    },

    "RnB": {
        style:
            "smooth contemporary R&B groove with soulful melodies, warm bass and rhythmic vocal phrasing",
        avoid:
            "aggressive rock, extreme EDM"
    },

    "Soul": {
        style:
            "deep soulful expression, warm harmonies, expressive vocals and organic groove",
        avoid:
            "heavy electronic production"
    },

    "Blues": {
        style:
            "expressive blues phrasing, organic groove, emotional guitar tone and traditional blues feel",
        avoid:
            "EDM, modern dance-pop"
    },

    "Jazz": {
        style:
            "sophisticated jazz harmony, expressive improvisation, organic rhythm section and rich musical interaction",
        avoid:
            "EDM, modern pop production"
    },

    "Smooth Jazz": {
        style:
            "smooth sophisticated jazz with warm electric piano, expressive saxophone and relaxed groove",
        avoid:
            "aggressive rock, heavy EDM"
    },

    "Funk": {
        style:
            "tight funky groove, syncopated bass, rhythmic guitar and punchy percussion",
        avoid:
            "slow ambient arrangement"
    },

    "Disco": {
        style:
            "danceable disco groove with funky bass, four-on-the-floor rhythm and bright string textures",
        avoid:
            "dark ambient arrangement"
    },

    "Bossa Nova": {
        style:
            "soft Brazilian bossa nova groove, nylon-string guitar, subtle percussion and relaxed sophistication",
        avoid:
            "aggressive drums, EDM, heavy rock"
    },

    "EDM": {
        style:
            "modern electronic dance production with powerful synths, energetic rhythm and dynamic drops",
        avoid:
            "pure acoustic-only arrangement"
    },

    "House": {
        style:
            "four-on-the-floor house groove, groovy bassline and polished electronic textures",
        avoid:
            "traditional orchestral arrangement"
    },

    "Deep House": {
        style:
            "deep warm bass, smooth four-on-the-floor groove and atmospheric electronic textures",
        avoid:
            "aggressive rock, acoustic folk arrangement"
    },

    "Future Bass": {
        style:
            "wide emotional synth chords, melodic bass and modern energetic electronic production",
        avoid:
            "traditional acoustic arrangement"
    },

    "Trance": {
        style:
            "euphoric trance atmosphere with driving four-on-the-floor rhythm and melodic synth layers",
        avoid:
            "organic folk arrangement"
    },

    "Techno": {
        style:
            "hypnotic techno groove, repetitive rhythmic patterns and precise electronic production",
        avoid:
            "traditional acoustic instrumentation"
    },

    "Dubstep": {
        style:
            "heavy bass drops, aggressive electronic bass design and powerful rhythmic production",
        avoid:
            "soft acoustic arrangement"
    },

    "Drum & Bass": {
        style:
            "fast breakbeats, deep bassline and energetic electronic atmosphere",
        avoid:
            "slow traditional rhythm"
    },

    "Drift Phonk": {
        style:
            "dark distorted bass, aggressive cowbell rhythm and gritty underground atmosphere",
        avoid:
            "bright orchestral pop production"
    },

    "Hip Hop": {
        style:
            "strong hip hop groove, punchy drums, deep bass and rhythmic vocal delivery",
        avoid:
            "excessive orchestral arrangement"
    },

    "Trap": {
        style:
            "heavy 808 bass, sharp hi-hats, deep sub bass and dark atmospheric production",
        avoid:
            "traditional acoustic arrangement"
    },

    "Boom Bap": {
        style:
            "classic boom bap drums, warm sample textures, deep bass and strong hip hop groove",
        avoid:
            "EDM-style drops"
    },

    "Rap": {
        style:
            "rhythmic rap delivery, punchy beat, deep bass and confident vocal flow",
        avoid:
            "excessive orchestral arrangement"
    },

    "Lo-fi Hip Hop": {
        style:
            "laid-back lo-fi groove, mellow drums, dusty textures and warm intimate atmosphere",
        avoid:
            "aggressive EDM, heavy rock"
    },

    "Reggae": {
        style:
            "laid-back reggae groove, offbeat guitar skank, deep bass and relaxed rhythm",
        avoid:
            "aggressive EDM, heavy rock"
    },

    "Ska": {
        style:
            "upbeat ska rhythm, offbeat guitar, energetic bass and bright brass section",
        avoid:
            "slow ambient arrangement"
    },

    "Country": {
        style:
            "organic country groove, acoustic guitar, warm storytelling atmosphere and natural instrumentation",
        avoid:
            "EDM, heavy electronic production"
    },

    "Folk": {
        style:
            "organic folk arrangement, acoustic textures, natural dynamics and intimate storytelling",
        avoid:
            "EDM, heavy electronic production"
    },

    "Acoustic": {
        style:
            "warm acoustic instrumentation, natural dynamics and intimate live performance",
        avoid:
            "heavy electronic production, EDM"
    },

    "Classical": {
        style:
            "elegant classical composition with acoustic orchestration, expressive dynamics and refined harmony",
        avoid:
            "drum kit, EDM, modern pop rhythm"
    },

    "Orchestral": {
        style:
            "rich orchestral arrangement with expressive strings, brass, woodwinds and cinematic dynamics",
        avoid:
            "drum kit dominance, EDM, modern pop rhythm"
    },

    "Cinematic": {
        style:
            "dramatic cinematic orchestration with evolving dynamics, emotional strings and atmospheric depth",
        avoid:
            "commercial pop rhythm, EDM dominance"
    },

    "Epic": {
        style:
            "massive cinematic orchestration, powerful percussion, heroic brass and dramatic dynamics",
        avoid:
            "light pop arrangement, EDM dominance"
    },

    "Ambient": {
        style:
            "spacious atmospheric soundscape, slow evolving textures and immersive sonic depth",
        avoid:
            "aggressive drums, dance-pop rhythm"
    },

    "K-Pop": {
        style:
            "polished Korean pop production with layered synths, dynamic arrangement and catchy hooks",
        avoid:
            "traditional-only arrangement unless specifically requested"
    },

    "J-Pop": {
        style:
            "bright Japanese pop melody, polished arrangement, expressive vocals and catchy hooks",
        avoid:
            "heavy dark electronic production"
    },

    "City Pop": {
        style:
            "retro Japanese urban pop with funky bass, electric piano, sophisticated chords and smooth groove",
        avoid:
            "aggressive EDM, heavy metal"
    },

    "Bollywood": {
        style:
            "cinematic Indian musical arrangement with expressive melodies, rhythmic percussion and colorful orchestration",
        avoid:
            "western-only arrangement"
    },

    "Nasheed": {
        style:
            "spiritual devotional atmosphere with uplifting melodic vocal expression and restrained arrangement",
        avoid:
            "club EDM, aggressive rock, inappropriate dance rhythm"
    },

    "Qawwali": {
        style:
            "devotional South Asian qawwali with expressive vocals, rhythmic hand clapping and traditional melodic phrases",
        avoid:
            "EDM, modern pop drum kit dominance"
    },

    "Afrobeat": {
        style:
            "African rhythmic groove with layered percussion, melodic bass, guitar and energetic horn accents",
        avoid:
            "static electronic-only arrangement"
    },

    "Afrobeats": {
        style:
            "modern African pop groove with syncopated percussion, melodic bass and catchy rhythmic patterns",
        avoid:
            "heavy rock arrangement"
    },

    "Amapiano": {
        style:
            "South African amapiano groove with deep log-drum bass, atmospheric piano and rhythmic percussion",
        avoid:
            "traditional orchestral arrangement"
    },

    "Salsa": {
        style:
            "energetic Latin salsa groove with rhythmic piano, percussion and expressive brass",
        avoid:
            "EDM dominance"
    },

    "Bachata": {
        style:
            "romantic Latin bachata with expressive guitars, syncopated percussion and emotional melodic groove",
        avoid:
            "EDM dominance"
    }

};


// ======================================================
// SMART INSTRUMENT RECOMMENDATIONS
// ======================================================

const smartInstruments = {

    "Musik Tradisional Jawa": [
        "Gamelan Jawa",
        "Kendang Jawa",
        "Gong Ageng",
        "Bonang",
        "Saron",
        "Gender",
        "Suling Jawa"
    ],

    "Dangdut": [
        "Kendang Jawa",
        "Bass Guitar",
        "Suling Jawa"
    ],

    "Dangdut Koplo": [
        "Kendang Jawa",
        "Kendang Ketipung",
        "Bass Guitar",
        "Suling Jawa",
        "Saxophone"
    ],

    "Dangdut Jawa": [
        "Kendang Jawa",
        "Bass Guitar",
        "Suling Jawa",
        "Gamelan Jawa"
    ],

    "Dangdut Remix": [
        "Kendang Ketipung",
        "Synth Bass",
        "Synth Lead",
        "Bass Guitar"
    ],

    "Campursari": [
        "Gamelan Jawa",
        "Kendang Jawa",
        "Gong Ageng",
        "Bonang",
        "Saron",
        "Suling Jawa"
    ],

    "Langgam Jawa": [
        "Gamelan Jawa",
        "Kendang Jawa",
        "Suling Jawa",
        "Gender"
    ],

    "Jaranan": [
        "Gamelan Jawa",
        "Kendang Jawa",
        "Gong Ageng",
        "Bonang",
        "Saron"
    ],

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

    "Rock": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit"
    ],

    "Alternative Rock": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Synth Pad"
    ],

    "Indie Pop": [
        "Acoustic Guitar",
        "Electric Piano",
        "Synth Pad",
        "Bass Guitar",
        "Drum Kit"
    ],

    "RnB": [
        "Electric Piano",
        "Bass Guitar",
        "Drum Kit",
        "Synth Pad"
    ],

    "Soul": [
        "Electric Piano",
        "Organ",
        "Bass Guitar",
        "Drum Kit",
        "Trumpet"
    ],

    "Blues": [
        "Electric Guitar",
        "Piano",
        "Bass Guitar",
        "Drum Kit"
    ],

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
        "Drum Kit"
    ],

    "Funk": [
        "Electric Guitar",
        "Bass Guitar",
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

    "Bossa Nova": [
        "Acoustic Guitar",
        "Piano",
        "Bass Guitar",
        "Shaker"
    ],

    "EDM": [
        "Synth Lead",
        "Synth Bass",
        "Synth Pad"
    ],

    "House": [
        "Synth Bass",
        "Synth Lead",
        "Synth Pad"
    ],

    "Deep House": [
        "Synth Bass",
        "Synth Pad",
        "Electric Piano"
    ],

    "Future Bass": [
        "Synth Pad",
        "Synth Lead",
        "Synth Bass"
    ],

    "Trance": [
        "Synth Lead",
        "Synth Pad",
        "Synth Bass"
    ],

    "Techno": [
        "Synth Bass",
        "Synth Lead",
        "Synth Pad"
    ],

    "Dubstep": [
        "Synth Bass",
        "Synth Lead",
        "Synth Pad"
    ],

    "Drum & Bass": [
        "Synth Bass",
        "Synth Pad"
    ],

    "Drift Phonk": [
        "Synth Bass",
        "Synth Lead",
        "Bass Guitar"
    ],

    "Hip Hop": [
        "Drum Kit",
        "Bass Guitar",
        "Piano"
    ],

    "Trap": [
        "Synth Bass",
        "Synth Pad",
        "Synth Lead"
    ],

    "Boom Bap": [
        "Piano",
        "Bass Guitar",
        "Drum Kit"
    ],

    "Rap": [
        "Drum Kit",
        "Bass Guitar",
        "Piano"
    ],

    "Lo-fi Hip Hop": [
        "Electric Piano",
        "Piano",
        "Drum Kit",
        "Bass Guitar"
    ],

    "Reggae": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Organ"
    ],

    "Ska": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Trumpet",
        "Saxophone"
    ],

    "Country": [
        "Acoustic Guitar",
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Violin"
    ],

    "Folk": [
        "Acoustic Guitar",
        "Violin",
        "Cello",
        "Piano"
    ],

    "Acoustic": [
        "Acoustic Guitar",
        "Classical Guitar",
        "Piano",
        "Violin"
    ],

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
        "Cello"
    ],

    "Epic": [
        "String Ensemble",
        "French Horn",
        "Trumpet",
        "Piano"
    ],

    "Ambient": [
        "Synth Pad",
        "Piano",
        "String Ensemble"
    ],

    "K-Pop": [
        "Synth Lead",
        "Synth Bass",
        "Synth Pad",
        "Electric Piano"
    ],

    "J-Pop": [
        "Electric Guitar",
        "Piano",
        "Bass Guitar",
        "Drum Kit",
        "Synth Pad"
    ],

    "City Pop": [
        "Electric Piano",
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Saxophone"
    ],

    "Bollywood": [
        "Tabla",
        "Sitar India",
        "Dhol",
        "Violin"
    ],

    "Nasheed": [
        "Rebana",
        "Hand Percussion"
    ],

    "Qawwali": [
        "Harmonium",
        "Tabla",
        "Hand Percussion"
    ],

    "Afrobeat": [
        "Electric Guitar",
        "Bass Guitar",
        "Drum Kit",
        "Congas",
        "Trumpet",
        "Saxophone"
    ],

    "Afrobeats": [
        "Bass Guitar",
        "Electric Guitar",
        "Piano",
        "Hand Percussion"
    ],

    "Amapiano": [
        "Piano",
        "Synth Bass",
        "Hand Percussion",
        "Synth Pad"
    ],

    "Salsa": [
        "Piano",
        "Trumpet",
        "Congas",
        "Bongo",
        "Bass Guitar"
    ],

    "Bachata": [
        "Acoustic Guitar",
        "Electric Guitar",
        "Bass Guitar",
        "Bongo"
    ]

};


// ======================================================
// STATE
// ======================================================

let previousAutoInstruments = [];

let manualInstruments = new Set();


// ======================================================
// CHECKBOX HELPER
// ======================================================

function getInstrumentChecks() {

    return document.querySelectorAll(
        ".instrument-check"
    );

}


// ======================================================
// SMART GENRE CHANGE
// ======================================================

function applySmartInstruments() {

    const genreElement =
        document.getElementById("genre");

    if (!genreElement) return;

    const genre =
        genreElement.value;

    const recommendations =
        smartInstruments[genre] || [];

    const checkboxes =
        getInstrumentChecks();


    // ------------------------------------------
    // Detect manual selections
    // ------------------------------------------

    checkboxes.forEach(checkbox => {

        const value =
            checkbox.value;

        if (
            checkbox.checked &&
            !previousAutoInstruments.includes(value)
        ) {

            manualInstruments.add(value);

        }

    });


    // ------------------------------------------
    // Remove previous automatic selections
    // ------------------------------------------

    checkboxes.forEach(checkbox => {

        if (
            previousAutoInstruments.includes(
                checkbox.value
            )
        ) {

            checkbox.checked = false;

        }

    });


    // ------------------------------------------
    // Apply new automatic selections
    // ------------------------------------------

    recommendations.forEach(instrument => {

        checkboxes.forEach(checkbox => {

            if (
                checkbox.value === instrument
            ) {

                checkbox.checked = true;

            }

        });

    });


    // ------------------------------------------
    // Restore manual selections
    // ------------------------------------------

    manualInstruments.forEach(instrument => {

        checkboxes.forEach(checkbox => {

            if (
                checkbox.value === instrument
            ) {

                checkbox.checked = true;

            }

        });

    });


    previousAutoInstruments =
        [...recommendations];

}


// ======================================================
// MANUAL INSTRUMENT TRACKING
// ======================================================

function trackManualInstrument(event) {

    const checkbox =
        event.target;

    const value =
        checkbox.value;


    if (
        checkbox.checked &&
        !previousAutoInstruments.includes(value)
    ) {

        manualInstruments.add(value);

    }


    if (
        !checkbox.checked &&
        !previousAutoInstruments.includes(value)
    ) {

        manualInstruments.delete(value);

    }

}


// ======================================================
// GET SELECTED INSTRUMENTS
// ======================================================

function getSelectedInstruments() {

    const instruments = [];

    getInstrumentChecks().forEach(
        checkbox => {

            if (checkbox.checked) {

                instruments.push(
                    checkbox.value
                );

            }

        }
    );

    return instruments;

}


// ======================================================
// BUILD PROMPT
// ======================================================

function buildPrompt() {

    const genre =
        document.getElementById(
            "genre"
        ).value;

    const mood =
        document.getElementById(
            "mood"
        ).value;

    const sound =
        document.getElementById(
            "sound"
        ).value;

    const vocal =
        document.getElementById(
            "vocal"
        ).value;

    const bpm =
        document.getElementById(
            "bpm"
        ).value;


    const instruments =
        getSelectedInstruments();


    const dna =
        genreDNA[genre];


    const style =
        dna
            ? dna.style
            : "professional musical arrangement matching the selected genre";


    const avoid =
        dna
            ? dna.avoid
            : "avoid elements that conflict with the selected genre";


    const instrumentText =
        instruments.length
            ? instruments.join(", ")
            : "No instrument selected";


    // ------------------------------------------
    // Important:
    // Avoid section is placed BEFORE production
    // ------------------------------------------

    let prompt =
`Genre: ${genre}

Style: ${style}.

Mood: ${mood}

Instruments: ${instrumentText}

Sound Character: ${sound}

Vocal Style: ${vocal}

Tempo: ${bpm} BPM

Avoid: ${avoid}.

Professional studio recording, clear vocal presence, balanced frequency spectrum, controlled bass, natural dynamics and polished mastering.`;


    return prompt;

}


// ======================================================
// SMART 1000 CHARACTER LIMIT
// ======================================================

function generatePrompt() {

    let prompt =
        buildPrompt();


    // ------------------------------------------
    // Keep prompt <= 1000 characters
    // ------------------------------------------

    if (
        prompt.length > 1000
    ) {

        prompt =
            prompt.substring(
                0,
                997
            ) + "...";

    }


    const result =
        document.getElementById(
            "result"
        );


    if (result) {

        result.value =
            prompt;

    }


    updateCounter();

}


// ======================================================
// COPY
// ======================================================

function copyPrompt() {

    const result =
        document.getElementById(
            "result"
        );


    if (
        !result ||
        result.value.trim() === ""
    ) {

        alert(
            "Please generate a prompt first!"
        );

        return;

    }


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(
                result.value
            )
            .then(() => {

                alert(
                    "Prompt copied!"
                );

            })
            .catch(() => {

                fallbackCopy(
                    result
                );

            });

    } else {

        fallbackCopy(
            result
        );

    }

}


// ======================================================
// FALLBACK COPY
// ======================================================

function fallbackCopy(
    element
) {

    element.select();

    element.setSelectionRange(
        0,
        99999
    );


    try {

        document.execCommand(
            "copy"
        );

        alert(
            "Prompt copied!"
        );

    } catch (error) {

        alert(
            "Copy failed. Please copy manually."
        );

    }

}


// ======================================================
// CLEAR
// ======================================================

function clearPrompt() {

    const result =
        document.getElementById(
            "result"
        );


    if (result) {

        result.value =
            "";

    }


    updateCounter();

}


// ======================================================
// EXPORT
// ======================================================

function exportPrompt() {

    const result =
        document.getElementById(
            "result"
        );


    if (
        !result ||
        result.value.trim() === ""
    ) {

        alert(
            "Please generate a prompt first!"
        );

        return;

    }


    const blob =
        new Blob(
            [result.value],
            {
                type:
                    "text/plain;charset=utf-8"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    link.href =
        url;


    link.download =
        "fatur62_music_prompt.txt";


    document.body.appendChild(
        link
    );


    link.click();


    document.body.removeChild(
        link
    );


    URL.revokeObjectURL(
        url
    );


    alert(
        "Prompt exported successfully!"
    );

}


// ======================================================
// COUNTER
// ======================================================

function updateCounter() {

    const result =
        document.getElementById(
            "result"
        );


    const counter =
        document.getElementById(
            "counter"
        );


    if (
        !result ||
        !counter
    ) {

        return;

    }


    counter.textContent =
        result.value.length +
        " / 1000 characters";

}


// ======================================================
// INITIALIZE
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // --------------------------------------
        // GENRE
        // --------------------------------------

        const genre =
            document.getElementById(
                "genre"
            );


        if (genre) {

            genre.addEventListener(
                "change",
                applySmartInstruments
            );

        }


        // --------------------------------------
        // INSTRUMENTS
        // --------------------------------------

        getInstrumentChecks()
            .forEach(
                checkbox => {

                    checkbox.addEventListener(
                        "change",
                        trackManualInstrument
                    );

                }
            );


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
