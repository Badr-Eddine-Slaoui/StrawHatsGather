import { add_worker_btn, add_worker_modal } from "./globalVariables";

add_worker_btn.addEventListener("click", () => {
    add_worker_modal.classList.remove("hidden");
    add_worker_modal.classList.add("flex");
});