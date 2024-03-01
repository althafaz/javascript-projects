window.addEventListener("load", function() {
    const personalDataForm = document.getElementById('personalData')

    personalDataForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value

        const formData = {
            name:name,
            email:email,
            message:message
        }

        console.log(name,email,message)
        document.getElementById('personalData').reset()
        submitForm(formData)
        getAllMessage()
    })



    function submitForm(formData){
        fetch('https://r31jbh92tk.execute-api.us-east-1.amazonaws.com/dev/submit_message',{
            method:'POST',
            headers: {
                "content-type":"application/json",
            },
            body: JSON.stringify(formData)
        }).then(curr => console.log("success")).catch(err => console.log("failed"))
    }


    function getAllMessage(){
        fetch('https://r31jbh92tk.execute-api.us-east-1.amazonaws.com/dev/get_all_messages')
        .then(response=>response.json())
        .then(data=>console.log(data))  //.map((x,i)=>`${x._id}  ${x.name}  ${x.email}`)
        .catch(error=>console.log('Error:',error))

    }

})