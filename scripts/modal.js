const projects = [
  {
    // all of these links are just placeholders, as i dont have any projects to link
    title: "Company website",
    details: "A django company website",
    link_text: "View Project",
    href: "https://github.com/ConnorKopp/Company-web",
  },
  {
    title: "Weather App",
    details:
      "A weather application that provides real-time forecasts, temperature updates, and location-based weather conditions. Designed with a simple and intuitive UI for quick access to daily forecasts.",
    link_text: "View Project",
    href: "https://connorkopp.github.io/Kopp-csci181-weather/",
  },
  {
    title: "Planner",
    details:
      "A digital planner that helps users organize schedules, deadlines, and daily tasks. Features a clean interface focused on productivity and easy task management.  THIS IS A PLACEHOLDER",
    link_text: "View Project",
    href: "#projects",
  },
  {
    title: "Task Manager",
    details:
      "A task management application that allows users to create, edit, and track progress on tasks. Designed to improve productivity with a structured and organized workflow system.  THIS IS A PLACEHOLDER",
    link_text: "View Project",
    href: "#projects",
  },
];

const modal = document.querySelector("#project-modal");
const modal_title = modal.querySelector(".modal-title");
const modal_details = modal.querySelector(".modal-details");
const modal_link = modal.querySelector(".modal-link");
const modal_close = modal.querySelector(".modal-close");

const card_buttons = document.querySelectorAll(".project-card");

function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal_link.href = project.href;

  // Opens the modal dialog.
  modal.showModal();

  // Disables background scrolling while the modal is open.
  document.body.style.overflow = "hidden";

  //Focus the modal when it opens)
  modal.focus();
}

// This is what you should call in your click event handler for cards
// It contains some things we haven't talked about yet, so it is provided for you
function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const index = Number(clicked_card.dataset.index);
  openModalByIndex(index);
}

for (let i = 0; i < card_buttons.length; i++) {
  card_buttons[i].addEventListener("click", onCardClicked);
}

modal_close.addEventListener("click", function () {
  modal.close();
});

// Always restore body scroll when the modal is closed (no matter how it closes)
// NOTE: This line requires that you define the modal variable above.
modal.addEventListener("close", function () {
  document.body.style.overflow = "";
});
