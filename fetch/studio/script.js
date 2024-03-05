//TODO: Add Your Code Below
window.addEventListener("load", function(){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(res=>{
        if(res.ok){
            res.json().then((data)=>{
                data.sort((a, b)=>{
                   if(a.hoursInSpace < b.hoursInSpace) {
                        return-1
                    }
                    if (a.hoursInSpace > b.hoursInSpace) {
                        return 1
                    } 
                    if (a.hoursInSpace === b.hoursInSpace) {
                        return 0
                    }
                })
                const container = document.getElementById("container")
                let listAstronut = ''
                data.forEach(el => {
                    listAstronut += `
                                <div class="astronaut">
                                    <div class="bio">
                                        <h3>${el.firstName +' '+ el.lastName} </h3>
                                            <ul>
                                                <li>Hours in space: ${el.hoursInSpace}</li>
                                                ${el.active ? '<li class="active">is active</li>' :
                                                '<li>is not active</li>'}
                                                <li>Skills: ${el.skills}</li>
                                            </ul>
                                    </div>
                                    <img class="avatar" src=${el.picture}>
                                </div>`
                    console.log(el)
                })
                container.innerHTML = listAstronut
            })
        }
    })

})