
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
