const sectionContent = ["r1", "r2", "r3" , "r4"];
let currentSection = sectionContent[0];

const displayContent = (q, area) => {
    document.getElementById(q).classList.add("active");
    document.getElementById(q + "-button").classList.add("tablinks-row-number-active");
    currentSection = sectionContent[area.indexOf(q)];
    const toNone = area.filter(e => e !== q);
    for (i in toNone) {
        document.getElementById(toNone[i]).classList.remove("active");
        document.getElementById(toNone[i] + "-button").classList.remove("tablinks-row-number-active");
    }
    if (sectionContent.indexOf(q) == 0) {
        document.getElementById("previous").classList.remove("tablinks-row-number-active");
        document.getElementById("next").classList.add("tablinks-row-number-active");
    }
    else if (sectionContent.indexOf(q) == sectionContent.length - 1) {
        document.getElementById("previous").classList.add("tablinks-row-number-active");
        document.getElementById("next").classList.remove("tablinks-row-number-active");
    } else {
        document.getElementById("previous").classList.add("tablinks-row-number-active");
        document.getElementById("next").classList.add("tablinks-row-number-active");
    }
}

const displayR1 = () => displayContent("r1", sectionContent);
const displayR2 = () => displayContent("r2", sectionContent);
const displayR3 = () => displayContent("r3", sectionContent);
const displayR4 = () => displayContent("r4", sectionContent);

const displayNext = () => displayContent(sectionContent[sectionContent.indexOf(currentSection) + 1], sectionContent);
const displayPrevious = () => displayContent(sectionContent[sectionContent.indexOf(currentSection) - 1], sectionContent);