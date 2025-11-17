import { experience_template } from "./templates.js";

export const add_experience = (arr, parent, class_name) => {

    if(arr.length === 0) {
        parent.classList.toggle("hidden");
        parent.classList.toggle("flex");
    }

    let index = arr.length + 1;

    let experience = document.createElement("div");
    experience.className = class_name + " w-full flex flex-col gap-y-5 py-5 border-b border-slate-500 relative";

    experience.innerHTML = experience_template(index);

    let remove_experience = experience.querySelector(`#close-experience-${index}`);

    remove_experience.addEventListener("click", () => {
        experience.remove();
        if(document.querySelectorAll(`.${class_name}`).length === 0) {
            parent.classList.toggle("flex");
            parent.classList.toggle("hidden");
        }
    });

    parent.appendChild(experience);
}