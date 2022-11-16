// interface hobbies {}

export const shuffledHobbies = ():string[] => {
    const randomHobbies:string[] = [];
    const allHobies = randomHobbies.concat(educationalHobbies, competitiveInDoorHobbies, competitiveOutDoorHobbies, observationIndoorHobbies, observationOutdoorHobbies);
    var currentIndex = allHobies.length, randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [allHobies[currentIndex], allHobies[randomIndex]] = [
        allHobies[randomIndex], allHobies[currentIndex]];
    }
    
    return allHobies;
};

export const educationalHobbies:string[] = [
    "visual art",
    "architecture",
    "astronomy",
    "biology",
    "business",
    "entrepreneurship",
    "finance",
    "history",
    "literature",
    "mathematics",
    "philosophy",
    "phychology",
    "research",
    "sociology",
    "web design",
    "teching",
];

export const competitiveInDoorHobbies:string[] = [
    "baking",
    "bowling",
    "boxing",
    "jujitsu",
    "cooking",
    "dancing",
    "eating",
    "chess",
    "knowledge/word games",
    "poker",
    "material arts",
    "video gaming",
    "vr gaming",
    "web design",
    "teching",
];

export const competitiveOutDoorHobbies:string[] = [
    "football",
    "baseball",
    "basketball",
    "climbing",
    "cycling",
    "fitness",
    "golfing",
    "handball",
    "tennis",
    "skiing",
    "surfing",
    "swimming",
    "ice skating",
    "volleyball",
    "travelling"
];

export const observationIndoorHobbies:string[] = [
    "learning",
    "meditation",
    "reading",
    "research"
];

export const observationOutdoorHobbies:string[] = [
    "hiking",
    "photography",
    "bus spotting",
    "whale watching",
    "birdwatching"
];