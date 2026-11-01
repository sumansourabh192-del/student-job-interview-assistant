 let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

displayJobs();

function addJob() {

    let company = document.getElementById("company").value;
    let role = document.getElementById("role").value;
    let status = document.getElementById("status").value;

    if(company === "" || role === "") {
        alert("Please fill all fields");
        return;
    }

    jobs.push({
        company,
        role,
        status
    });

    localStorage.setItem("jobs", JSON.stringify(jobs));

    displayJobs();

    document.getElementById("company").value = "";
    document.getElementById("role").value = "";
}

function displayJobs() {

    let jobList = document.getElementById("jobList");

    jobList.innerHTML = "";

    document.getElementById("totalJobs").innerText = jobs.length;

    jobs.forEach((job,index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <b>${job.company}</b> - ${job.role}
            <br>
            Status: ${job.status}
            <br><br>
            <button onclick="deleteJob(${index})">Delete</button>
        `;

        jobList.appendChild(li);
    });
}

function deleteJob(index) {

    jobs.splice(index,1);

    localStorage.setItem("jobs", JSON.stringify(jobs));

    displayJobs();
}