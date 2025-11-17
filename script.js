import { add_experience_btn, add_worker_btn, add_worker_modal } from "./globalVariables.js";
import { add_experience } from "./helpers.js";

add_worker_btn.addEventListener("click", () => {
    add_worker_modal.classList.remove("hidden");
    add_worker_modal.classList.add("flex");
});

add_experience_btn.addEventListener("click", () => {
    let experiences_arr = document.querySelectorAll(".experience");
    add_experience(experiences_arr, experiences, "experience");
});