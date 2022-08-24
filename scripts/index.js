
let track_arr = [
    {
        heading: "Track time",
        para: "Get the complete picture of your work day with zero effort.",
        anchor: "Automate time tracking"
    },
    {
        heading: "Track Projects",
        para: "Monitor budgets, hours and activities in real time.",
        anchor: "Run smarter projects"
    },
    {
        heading: "Track teams",
        para: "Get a complete overview of your team’s time and performance.",
        anchor: "Lead happier teams"
    },
]
display()
function display() {
    track_arr.forEach((elem, index) => {
        let div = create("div")

        let head = create("h4")
        head.innerText = elem.heading;

        let para = create("p");
        para.innerText = elem.para;

        let anchor = create("a");
        anchor.innerText = elem.anchor
        anchor.href = "/"

        div.append(head, para, anchor)

        document.querySelector(".track").append(div)
    })
}
function create(x) {
    return document.createElement(x);
}


let img_arr = [
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399507178afec0_622f69e00c9cf281783c6e63_60b773d26388125af692655e_zoom.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995db068afecb_622f69e00c9cf2a3aa3c6e5c_60b773d26388128ce29265e3_zapier.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995d48d8afec2_622f69e00c9cf228763c6e5f_60b773d263881212a3926561_trello.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39959cb08b0389_622f69e00c9cf20e073c75c5_toggl.svg"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399551b88afec9_622f69e00c9cf211c53c6e61_60b773d26388125fe3926566_todois.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39952c128afec1_622f69e00c9cf20fcd3c6e5d_60b773d2638812c090926634_quickbooks_logo.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995f1728afec3_622f69e00c9cf219633c6e62_60b773d26388126112926555_outlook.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a3995366e8afec5_622f69e00c9cf23dd63c6e5b_60b773d2638812391092655c_office365.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39955cba8afec8_622f69e00c9cf266013c6e5e_60b773d263881204bd92656c_jira.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399594708afead_622f69e00c9cf215b73c6e44_60b773d2638812a08e92656f_harvest.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399543808afeae_622f69e00c9cf22e8d3c6e48_60b773d26388128342926559_calendar.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399530e28afebb_622f69e00c9cf223073c6e4c_60b773d2638812105d926556_gmail.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399545b18afea6_622f69e00c9cf271b93c6e46_60b773d26388129bba926569_github.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a39954a888afeac_622f69e00c9cf27e7c3c6e43_60b773d263881215e6926573_azuread.png"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a399501d48af28d/6257f2528a399535d98afeaf_622f69e00c9cf262c83c6e47_60b773d2638812deaf926564_asana.png"
    },

]

function appendImage(img_arr) {
    img_arr.forEach((elem, index) => {

        let list = create("li")

        let anchor = create("a")
        anchor.href = "/";

        let image = create("img");
        image.src = elem.image;

        anchor.append(image)
        list.append(anchor)

        document.querySelector(".fifth-list").append(list);
    });
};
appendImage(img_arr)


let part_7_arr = [
    {
        image: "fa-solid fa-user-tie",
        para: "Specialist departments in corporates",
    },
    {
        image: "fa-solid fa-globe",
        para: "International firms and agency groups",
    },
    {
        image: "fa-solid fa-rocket",
        para: "Small businesses and startups",
    },
    {
        image: "fa-solid fa-circle-user",
        para: "Consultants and freelancers",
    },
    {
        image: "fa-solid fa-handshake-simple",
        para: "Inter-organizational partnership",
    },
]


part_7(part_7_arr)
function part_7(part_7_arr) {
    part_7_arr.forEach((elem, index) => {
        let div = create("div")

        let image = create("i");
        image.innerHTML = `<i class='${elem.image}'></i>`

        let para = create("p")
        para.innerText = elem.para;

        div.append(image, para)

        document.querySelector("#part-7").append(div)
    })

}


let part_9_arr = [
    {
        image: "https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fd96ad4e0c44915ed_TimeTracking_MostImplementable_Total.svg"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b36657dfae2feee178fee9_TimeTracking_MomentumLeader_Leader.svg"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fc9eb5ab5b7d8536c_TimeTracking_Leader_Leader.svg"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995b0a08af4da_loveus.svg"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3668136276388dc2815e8_TimeTracking_HighPerformer_Mid-Market_HighPerformer.svg"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdb7877357a9300c3_TimeTracking_BestUsability_Total.svg"
    },
    {
        image: "https://assets-global.website-files.com/6257f2528a39952d4e8af286/62b3651fdfae2ff62378f39f_TimeTracking_BestRelationship_Total.svg"
    },

];

part_9(part_9_arr)

function part_9(part_9_arr){
    part_9_arr.forEach((elem,index)=>{

        let div = create("div")


        let image = create("img");
        image.src = elem.image;

        div.append(image)

        document.querySelector("#part-9").append(div);
    })
}