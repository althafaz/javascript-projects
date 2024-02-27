// Write your JavaScript code here.

function init () {

    const btnTakeOff = document.getElementById("takeoff")
    const LabelflightStatus = document.getElementById('flightStatus')
    const ObjShuttleBackground = document.getElementById('shuttleBackground')
    const ParaSpaceShuttleHeight = document.getElementById('spaceShuttleHeight')

    const btnLanding = document.getElementById("landing")
    const btnmissionAbort = document.getElementById("missionAbort")

    const btnControlPosiition = document.querySelectorAll('.center-block button')
    const imgRocket = document.getElementById('rocket')

    btnTakeOff.addEventListener('click',e =>{
        if(window.confirm("The shuttle is landing. Landing gear engaged.")) {
            LabelflightStatus.innerHTML = "Shuttle in flight."
            ObjShuttleBackground.style.backgroundColor = "blue"
            ParaSpaceShuttleHeight.innerText = "10,000 Miles"
        }
    })


    btnLanding.addEventListener('click', e=>{
        if(window.alert("Confirm that you want to abort the mission.")) {
            LabelflightStatus.innerHTML = "The shuttle has landed."
            ObjShuttleBackground.style.backgroundColor = "green"
            ParaSpaceShuttleHeight.innerText = "0"
        }

    })

    btnmissionAbort.addEventListener('click',e=>{
        if(window.confirm("Confirm that you want to abort the mission.")) {
            LabelflightStatus.innerHTML = "Mission aborted."
            ObjShuttleBackground.style.backgroundColor = "green"
            ParaSpaceShuttleHeight.innerText = "0"
        }
    })


    for (i of btnControlPosiition) {
        i.addEventListener('click',e=>{
            if(e.target.id === "up"){
                let margin = imgRocket.style.marginTop
                margin = margin.substring(0,margin.length-2)
                margin = parseInt(margin)
                if(isNaN(margin)){
                    margin = 0
                }
                imgRocket.style.marginTop = margin + 10 + 'PX'
            }

            if(e.target.id === "down"){
                let margin = imgRocket.style.marginBottom
                margin = margin.substring(0,margin.length-2)
                margin = parseInt(margin)
                if(isNaN(margin)){
                    margin = 0
                }
                imgRocket.style.marginBottom = margin - 10 + 'PX'
            }

            if(e.target.id === "left"){
                let margin = imgRocket.style.marginLeft
                margin = margin.substring(0,margin.length-2)
                margin = parseInt(margin)
                if(isNaN(margin)){
                    margin = 0
                }
                imgRocket.style.marginLeft = margin + 10 + 'PX'
            }


            if(e.target.id === "right"){
                let margin = imgRocket.style.marginRight
                margin = margin.substring(0,margin.length-2)
                margin = parseInt(margin)
                if(isNaN(margin)){
                    margin = 0
                }
                imgRocket.style.marginRight = margin + 10 + 'PX'
            }


        })
    }


}

// Remember to pay attention to page loading!
window.addEventListener("load", init);