function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click',e=>{
        paragraph.innerHTML = "Houston, we have liftoff!"
    })

    missionAbort.addEventListener('mouseover',e=>{
        e.target.style.backgroundColor = "red"
    })

    missionAbort.addEventListener('mouseout',e=>{
        e.target.style.backgroundColor = ""
    })

    missionAbort.addEventListener('click',e=>{
        if(window.confirm("Are you sure you want to abort the mission?") === true){
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home"
        }
    })
}

window.addEventListener("load", init);
