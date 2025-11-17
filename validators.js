import { available_roles } from "./globalVariables.js";

export const validate_name = (name, id) => {
    let name_err = document.getElementById(id);
    console.log(name_err);
    
    let name_regex = /^[a-zA-Z\s]{3,}$/;
    if (!name) {
        name_err.classList.remove("hidden");
        name_err.textContent = "Name is required";
        return false;
    } else {
        if (!name_regex.test(name)) {
            name_err.classList.remove("hidden");
            name_err.textContent =
            "Name must contain just letters, spaces, and at least 3 characters";
            return false;
        } else {
            name_err.classList.add("hidden");
            return true;
        }
    }
}