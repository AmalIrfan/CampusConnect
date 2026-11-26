
const params = new URLSearchParams(window.location.search);

const selectedEvent = params.get("event");
const selectedClub = params.get("club");

const interestType = document.getElementById("interestType");
const interestItem = document.getElementById("interestItem");

const events = [
    "Tech Fest",
    "Arts Day",
    "Sports Meet",
    "Workshop",
    "Seminar"
];

const clubs = [
    "Coding Club",
    "Photography Club",
    "Music Club",
    "Arts Club",
    "Sports Club"
];

function updateOptions(type, selected = "") {

    const items = type === "event" ? events : clubs;

    interestItem.innerHTML =
        '<option value="">Choose your interest</option>';

    items.forEach(item => {
        const option = document.createElement("option");

        option.value = item;
        option.textContent = item;

        if (item === selected) {
            option.selected = true;
        }

        interestItem.appendChild(option);
    });
}

interestType.addEventListener("change", () => {
    updateOptions(interestType.value);
});

// Automatically select the item from the URL

if (selectedEvent) {
    interestType.value = "event";
    updateOptions("event", selectedEvent);
}

if (selectedClub) {
    interestType.value = "club";
    updateOptions("club", selectedClub);
}

// Form submission

document.getElementById("InterestForm")
.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const item = interestItem.value;

    if (!item) {
        alert("Please select an event or club.");
        return;
    }

    document.getElementById("SuccessMessage").textContent =
        `Thank you, ${name}! Your interest in ${item} has been noted.`;

    this.reset();
    interestItem.innerHTML =
        '<option value="">Choose an event or club</option>';
});
