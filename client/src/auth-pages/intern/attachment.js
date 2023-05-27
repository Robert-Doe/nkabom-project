import $ from "jquery"

$("path").on("click", function () {
    // handle click event
    var pathId = $(this).attr("id");
    console.log("Clicked path with id: " + pathId);
});

const allRegions = {
    "GHUW": {
        "short": "GHUW",
        "name": "Upper West",
        "nc": 28,
    },
    "GHUE": {
        "short": "GHUE",
        "name": "Upper East",
        "nc": 28,
    },
    "GHNE": {
        "short": "GHNE",
        "name": "North East",
        "nc": 28,
    },
    "GHSV": {
        "short": "GHSV",
        "name": "Savannah",
        "nc": 29,
    },
    "GHNP": {
        "short": "GHNP",
        "name": "Northern",
        "nc": 23
    },
    "GHOT": {
        "short": "GHOT",
        "name": "Oti",
        "nc": 21
    },
    "GHBE": {
        "short": "GHBE",
        "name": "Bono East",
        "nc": 74
    },
    "GHBO": {
        "short": "GHBO",
        "name": "Bono",
        "nc": 23,
    },
    "GHAF": {
        "short": "GHAF",
        "name": "Ahafo",
        "nc": 52
    },
    "GHAH": {
        "short": "GHAH",
        "name": "Ashanti",
        "nc": 25
    },
    "GHTV": {
        "short": "GHTV",
        "name": "Volta",
        "nc": 34
    },
    "GHEP": {
        "short": "GHEP",
        "name": "Eastern",
        "nc": 63
    },
    "GHAA": {
        "short": "GHAA",
        "name": "Greater Accra",
        "nc": 55
    },
    "GHCP": {
        "short": "GHCP",
        "name": "Central",
        "nc": 32
    },
    "GHWN": {
        "short": "GHWN",
        "name": "Western North",
        "nc": 24
    },
    "GHWP": {
        "short": "GHWP",
        "name": "Western",
        "nc": 46
    },
}

export function showTooltip(event) {
    // Clear any existing tooltips
    $("div.desc").remove()
    console.log("Presseed")
    // Get the clicked element and its position
    var element = $(event.target);
    //var position = element.offset();
    var pathId = element.attr("id");
    const selectedRegion=allRegions[pathId.toString().toUpperCase()];

    // Get the ID of the clicked path

    var pathName = element.attr("name");
    var codeName = selectedRegion['short']
    var numOfCompanies= selectedRegion['nc']

    // Create the tooltip element with the path ID as its content
    var tooltip = $("<div class='desc'> Name: " + pathName + "<br/> " +
                           "Code: "+ codeName + "<br/> " +
                           "Companies: "+ numOfCompanies +"</div>");

    // Set the tooltip position to the clicked point
    tooltip.css({
        "background-color": "#fff",
        "border": "1px solid #ccc",
        "padding": "1.5em 1em",
        "display": "block",
        "position": "absolute",
        "z-index": 9999,
        "left": event.pageX,
        "color": "black",
        "height": "auto",
        "top": event.pageY
    });

    console.log(tooltip)
    // Add the tooltip to the page
    $("body").append(tooltip);
}

export function hideTooltips(event) {
    //$("span").remove()
}