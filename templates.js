export const list_worker = (worker) => {
    return `
        <div id="remove-worker" class="absolute top-1 right-1 rounded-md w-[2vh] h-[2vh] bg-orange-400 text-white flex justify-center items-center font-extrabold text-[.8rem] cursor-pointer">x</div>
        <img src="${worker.photo}" alt="${worker.name}" class="w-[5vh] h-[5vh] rounded-full"></img>
        <div>
            <p class="text-slate-500 w-[25vh] text-[1.2rem] font-bold truncate overflow-hidden text-ellipsis capitalize">${worker.name}</p>
            <p class="text-[1rem] font-bold truncate overflow-hidden text-ellipsis capitalize">${worker.role}</p>
        </div>
        <div id="edit-worker" class="absolute bottom-1 right-1 rounded-md w-[5vh] h-[2vh] bg-orange-400 text-white flex justify-center items-center font-extrabold text-[.8rem] cursor-pointer">Edit</div>
    `
}

export const experience_template = (index) => {
  return `
        <div id="close-experience-${index}" class="absolute top-1 right-1 rounded-md w-[3vh] h-[3vh] bg-orange-400 text-white flex justify-center items-center font-extrabold text-[1rem] cursor-pointer">x</div>
        <div class="w-full flex justify-between items-center">
            <div class="w-[40%] flex flex-col gap-y-2">
                <label for="title-${index}" class="text-[1.2rem] font-bold text-slate-500">Title:</label>
                <input type="text" name="title-${index}" id="title-${index}" class="border border-slate-500 rounded-md p-2">
                <p id="title_err_${index}" class="text-red-500 text-[1rem] hidden"></p>
            </div>
            <div class="w-[40%] flex flex-col gap-y-2">
                <label for="company-${index}" class="text-[1.2rem] font-bold text-slate-500">Company:</label>
                <input type="text" name="company-${index}" id="company-${index}" class="border border-slate-500 rounded-md p-2">
                <p id="company_err_${index}" class="text-red-500 text-[1rem] hidden"></p>
            </div>
        </div>
        <div class="w-full flex justify-between items-center">
            <div class="w-[40%] flex flex-col gap-y-2">
                <label for="start-date-${index}" class="text-[1.2rem] font-bold text-slate-500">Start Date:</label>
                <input type="datetime-local" name="start-date-${index}" id="start-date-${index}" class="border border-slate-500 rounded-md p-2">
                <p id="start_date_err_${index}" class="text-red-500 text-[1rem] hidden"></p>
            </div>
            <div class="w-[40%] flex flex-col gap-y-2">
                <label for="end-date-${index}" class="text-[1.2rem] font-bold text-slate-500">End Date:</label>
                <input type="datetime-local" name="end-date-${index}" id="end-date-${index}" class="border border-slate-500 rounded-md p-2">
                <p id="end_date_err_${index}" class="text-red-500 text-[1rem] hidden"></p>
            </div>
        </div>
    `;
}

export const profile = (worker) => {
    return `
        <div class="w-1/2 h-[90vh] bg-white rounded-lg flex flex-col items-center gap-y-5 overflow-y-scroll relative">
            <div id="close-modal" class="absolute top-1 right-1 rounded-lg w-[5vh] h-[5vh] bg-red-500 text-white flex justify-center items-center font-extrabold text-[1.5rem] cursor-pointer">x</div>
            <h1 class="text-[2rem] text-center mt-10 mb-5 font-extrabold text-orange-400">Worker Profile</h1>
            <div class="w-[90%] flex items-center gap-x-5">
                <img src="${worker.photo}" alt="${worker.name}" class="w-[15vh] h-[15vh] rounded-full"></img>
                <div class="flex flex-col gap-y-2">
                    <p class="text-slate-500 text-[1.5rem] font-bold">${worker.name}</p>
                    <p class="text-[1.2rem]">
                        <span>${worker.age} years</span> - <span>${worker.role}</span>
                    </p>
                </div>
            </div>
            <div class="w-[90%] flex justify-between items-center text-[1.2rem]">
                <div class="w-full flex gap-x-2 text-[1.2rem]">
                    <p class="font-bold text-slate-500">Email:</p>
                    <p>${worker.email}</p>
                </div>
                <div class="w-full flex gap-x-2 text-[1.2rem]">
                    <p class="font-bold text-slate-500">Phone:</p>
                    <p>${worker.phone}</p>
                </div>
            </div>
            <div class="w-[90%] flex justify-between items-center text-[1.2rem]">
                <div class="w-full flex gap-x-2 text-[1.2rem]">
                    <p class="font-bold text-slate-500">Start Date:</p>
                    <p>${new Date(worker.enter_date).toLocaleDateString("en-US")}</p>
                </div>
                <div class="w-full flex gap-x-2 text-[1.2rem]">
                    <p class="font-bold text-slate-500">End Date:</p>
                    <p>${new Date(worker.leave_date).toLocaleDateString("en-US")}</p>
                </div>
            </div>
            ${
                worker.experiences_arr.length > 0 ? `
                    <div class="w-[90%] border-t border-slate-500 flex flex-col gap-y-5">
                        <h2 class="text-[2rem] mt-10 mb-5 font-extrabold text-orange-400 text-center">Experiences</h2>
                        ${
                            worker.experiences_arr.map(experience => {
                                return `
                                    <div class="w-full flex flex-col gap-y-5 border-b border-slate-500 pb-5">
                                        <div class="w-full flex justify-between items-center text-[1.2rem]">
                                            <div class="w-full flex gap-x-2 text-[1.2rem]">
                                                <p class="font-bold text-slate-500">Title:</p>
                                                <p>${experience.title}</p>
                                            </div>
                                            <div class="w-full flex gap-x-2 text-[1.2rem]">
                                                <p class="font-bold text-slate-500">Company:</p>
                                                <p>${experience.company}</p>
                                            </div>
                                        </div>
                                        <div class="w-full flex justify-between items-center text-[1.2rem]">
                                            <div class="w-full flex gap-x-2 text-[1.2rem]">
                                                <p class="font-bold text-slate-500">Start Date:</p>
                                                <p>${new Date(experience.start_date).toLocaleDateString("en-US")}</p>
                                            </div>
                                            <div class="w-full flex gap-x-2 text-[1.2rem]">
                                                <p class="font-bold text-slate-500">End Date:</p>
                                                <p>${new Date(experience.end_date).toLocaleDateString("en-US")}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join("")
                        }
                    </div>
                `
                : ""
            }
        </div>
    `
}