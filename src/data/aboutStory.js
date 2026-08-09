export const aboutStories = {
  en: {
    lead: "Born in Mumbai, raised across Manchester, moved to Umeå, and now found home in Uppsala, I grew up learning that identity can be expansive and rarely ever so fixed.",
    background: "Moving between India, England, and Sweden made adaptation and learning part of everyday life. It also made community matter: wherever I landed, I wanted to understand the place, contribute to it, and help people feel included.",
    education: "I completed upper-secondary school two years early, graduating at 17. That same appetite for challenge (and sheer curiosity) led me to Engineering Physics, at Uppsala University where I'm reading at an accelerated courseload and towards applied mathematics, computational physics, and software engineering.",
    placesLabel: "Places that shaped me",
    places: [
      { period: "2007", name: "Mumbai, India", description: "Where I was born." },
      { period: "2010 - 2016", name: "Manchester, UK", description: "Where I grew up for a few years and learned how to be aggressively polite." },
      { period: "2016 - 2021", name: "Umeå, Sweden", description: "Where Sweden started to feel like home, and realized I like it here." },
      { period: "2021 - Present", name: "Uppsala, Sweden", description: "Where I found home and became who I am. Also where I study, work and chill too" },
    ],
    beyondLabel: "Beyond the formal CV",
    beyondTitle: ["Serious about the work.", "Not solemn about life."],
    life: "I like watching sports, talking trash and drink beer and making admittedly questionable rap songs with friends, and watching far too many episodes of How I Met Your Mother. I'm happiest around people who are both ambitious and able to laugh at themselves c'est la vie - play hard work harder .",
    workStyle: "That combination shapes how I work: learn quickly, take responsibility, communicate clearly, and make enough room for other people to enjoy building alongside me.",
    photoAlt: "Abhay Mishra during a UTNARM work weekend in Uppsala",
    photoCaption: "UTNARM work weekend · Uppsala - Credit: @arvid_westberg_",
  },
  sv: {
    lead: "Född i Mumbai, uppvuxen till stor del i Manchester, vidare till Umeå och numera hemma i Uppsala. Jag växte upp med insikten att identitet kan vara ganska bred och sällan särskilt fast.",
    background: "Att flytta mellan Indien, England och Sverige gjorde anpassning och lärande till en naturlig del av vardagen. Det gjorde också gemenskap viktig för mig: vart jag än hamnade ville jag förstå platsen, bidra till den och hjälpa andra att känna sig inkluderade.",
    education: "Jag tog studenten två år tidigare än vanligt, vid 17 års ålder. Samma vilja att utmana mig själv (och en hel del ren nyfikenhet) ledde mig vidare till teknisk fysik vid Uppsala universitet, där jag läser i ett högre studietempo, och mot tillämpad matematik, beräkningsfysik och mjukvaruutveckling.",
    placesLabel: "Platser som format mig",
    places: [
      { period: "2007", name: "Mumbai, Indien", description: "Där jag föddes." },
      { period: "2010 - 2016", name: "Manchester, Storbritannien", description: "Där jag växte upp under några år och lärde mig konsten att vara nästan överdrivet artig." },
      { period: "2016 - 2021", name: "Umeå, Sverige", description: "Där Sverige började kännas som hemma, och jag insåg att jag faktiskt trivs ganska bra här." },
      { period: "2021 - idag", name: "Uppsala, Sverige", description: "Där jag hittade hem och blev mycket av den jag är idag. Också där jag pluggar, jobbar och tar det lugnt emellanåt." },
    ],
    beyondLabel: "Utanför det formella CV:t",
    beyondTitle: ["Tar arbetet på allvar.", "Men inte livet på för stort allvar."],
    life: "Jag gillar att kolla på sport, snacka skit och bärsa och göra tveksamma raplåtar med vänner, och jag har sett alldeles för många avsnitt av How I Met Your Mother. Jag trivs bäst bland människor som både är ambitiösa och kan skratta åt sig själva. C'est la vie - Play hard, work harder.",
    workStyle: "Den kombinationen präglar också hur jag arbetar: jag lär mig snabbt, tar ansvar, kommunicerar tydligt och försöker skapa utrymme för att andra också ska ha kul medan vi bygger något tillsammans.",
    photoAlt: "Abhay Mishra under en UTNARM-arbetshelg i Uppsala",
    photoCaption: "UTNARM-arbetshelg · Uppsala - Foto: @arvid_westberg_",
  },
}

const pairs = []
const add = (en, sv) => { if (en && !pairs.some((entry) => entry.key === en)) pairs.push({ key: en, en, sv }) }
for (const field of ['lead', 'background', 'education', 'placesLabel', 'beyondLabel', 'life', 'workStyle', 'photoAlt', 'photoCaption']) add(aboutStories.en[field], aboutStories.sv[field])
aboutStories.en.places.forEach((place, index) => Object.keys(place).forEach((field) => add(place[field], aboutStories.sv.places[index][field])))
aboutStories.en.beyondTitle.forEach((value, index) => add(value, aboutStories.sv.beyondTitle[index]))
export const aboutStoryCatalogue = pairs
