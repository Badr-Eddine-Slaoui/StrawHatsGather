export let available_roles = [
    "it",
    "security",
    "manager",
    "cleaner",
    "visiter",
    "receptionist"
];


export let worker_list = document.getElementById("worker-list");
export let no_worker_in_list = document.getElementById("no-worker-in-list");
export let add_worker_btn = document.getElementById("add-worker-btn");
export let add_worker_modal = document.getElementById("add-worker-modal");
export let close_add_worker_modal = add_worker_modal.querySelector("#close-modal");
export let add_worker_form = document.getElementById("add-worker-form");
export let add_experience_btn = document.getElementById("add-experience-btn");
export let experiences = document.getElementById("experiences");