/* ======= first way using XMLHttpRequest =========*/

// function getPosts(userId) {

//     let request = new XMLHttpRequest()
//     request.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+userId)
//     request.responseType = "json"
//     request.send()

//     request.onload = function(){

//         if (request.status >= 200 && request.status < 300) {

//             let posts = request.response
//             document.getElementById("posts").innerHTML = ""

//             for(post of posts){
//                 let content = `
//                 <div class="post">
//                     <h3 class="post__title">
//                         ${post.title}
//                     </h3>
//                     <p class="post__description">
//                         ${post.body}
//                     </p>
//                 </div>
//                 `

//                 document.getElementById("posts").innerHTML += content
//             }
            
//         }else{
//             alert("error" + this.status)
//         }
//     }
    
// }


//  function getUsers() {

//     let request = new XMLHttpRequest()
//     request.open("GET","https://jsonplaceholder.typicode.com/users")
//     request.responseType = "json"
//     request.send()

//     request.onload = function(){

//         if (request.status >= 200 && request.status < 300) {

//             let users = request.response
//             document.getElementById("users").innerHTML = ""

//             for(user of users){
//                 let content = `
//                 <div class="user" onclick="userClicked(${user.id},this)">
//                 <h3 class="user__name">
//                     ${user.name}
//                 </h3>
//                 <h4 class="user__email">
//                     ${user.email}
//                 </h4>
//             </div>
//                 `

//                 document.getElementById("users").innerHTML += content
//             }
            
//         }else{
//             alert("error" + this.status)
//         }
//     }
    
// }

// getPosts(1)
// getUsers() 

// function userClicked(id,el) {
//     getPosts(id)
//     let selectedElements = document.getElementsByClassName('selected')
//     for(element of selectedElements){
//         element.classList.remove('selected')
//     }
//     el.classList.add("selected")
    
// }




/*===== second  way using fetch ========*/

// function getUsers(){
//     return new Promise((resolve, reject) =>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {
//             if(response.ok){
//                 return response.json() 
//             }else{
//                 reject("error")
//             }
//         })
//         .then((users) => {

//             document.getElementById("users").innerHTML = ""

//                 for(user of users){
//                     let content = `
//                     <div class="user" onclick="userClicked(${user.id},this)">
//                     <h3 class="user__name">
//                         ${user.name}
//                     </h3>
//                     <h4 class="user__email">
//                         ${user.email}
//                     </h4>
//                 </div>
//                     `

//                     document.getElementById("users").innerHTML += content
//                 }
//                 resolve()
//         })
//     })
    
// }

// function getPosts(userId) {

//     fetch("https://jsonplaceholder.typicode.com/posts?userId="+userId)
//     .then((response) => {
//         if(response.ok){
//             return response.json()
//         }
//     })
//     .then((posts) => {
//         document.getElementById("posts").innerHTML = ""
    
//         for(post of posts){
//             let content = `
//             <div class="post">
//                 <h3 class="post__title">
//                     ${post.title}
//                 </h3>
//                 <p class="post__description">
//                     ${post.body}
//                 </p>
//             </div>
//             `

//             document.getElementById("posts").innerHTML += content
//         }
//     });   
//     }
    

// getUsers().then(() =>{
//     getPosts(1)
// }).catch((error) =>{
//     console.log(error)
// })


// function userClicked(id,el) {
//     getPosts(id)
//     let selectedElements = document.getElementsByClassName('selected')
//     for(element of selectedElements){
//         element.classList.remove('selected')
//     }
//     el.classList.add("selected")
    
// }


/* ===== Third Way Using Axios ========*/ 

function getUsersUsingAxios() {
    return new Promise((resolve,reject) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {

            let users = response.data
            document.getElementById("users").innerHTML = ""

            for(user of users){
                let content = `
                <div class="user" onclick="userClicked(${user.id},this)">
                <h3 class="user__name">
                    ${user.name}
                </h3>
                <h4 class="user__email">
                    ${user.email}
                </h4>
            </div>
                `

            document.getElementById("users").innerHTML += content
            }
            resolve()
                
        }).catch(error => {
            alert(error)
            reject(error)
        })
    })
    
}

 function getPostUsingAxios(userId){

    let url = "https://jsonplaceholder.typicode.com/posts?userId="+userId 
    axios.get(url)
    .then((response) =>{

        let posts = response.data
        document.getElementById("posts").innerHTML = ""
        for(post of posts){
            let content = `
            <div class="post">
                <h3 class="post__title">
                    ${post.title}
                </h3>
                <p class="post__description">
                    ${post.body}
                </p>
            </div>
            `

            document.getElementById("posts").innerHTML += content
        }
    }).catch(error => {
        alert(error)
    })
 }

getUsersUsingAxios().then(() =>{
    getPostUsingAxios(1)
}).catch(error => {
    alert(error)
})



function userClicked(id,el) {
    getPostUsingAxios(id)
    let selectedElements = document.getElementsByClassName('selected')
    for(element of selectedElements){
        element.classList.remove('selected')
    }
    el.classList.add("selected")
    
}