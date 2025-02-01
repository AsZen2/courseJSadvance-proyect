// drag
// elements -> attribute: draggable (boolean - true, false)
// default draggable -> img; ancle

// events drag

// dragstart - it's gonna run once when some drag begins
// dragend - it's gonna run when some drag stops dragging
// drag - It will be executed while the object is being dragged.

// Object -> dataTransfer manage element's data and has three methods
// setData(type, data) -> type: "text" - "URL" - "text/plain" - "text/html" - "text-uri-list"
// getData()
// clearData()




// events drop
// dragenter
// dragleave
// dragover
// drop


// let lists = document.getElementsByClassName("boxDrag")



// console.dir(boxDrop)

// for (list of lists) {
//     list.addEventListener("dragstart", function(element){

//         let selected = element.target;
//         console.dir(selected)

//         boxDrop[0].addEventListener("dragover", function(element){
//             element.preventDefault();
//         })
        
//         boxDrop[0].addEventListener("drop", function(element){
//             boxDrop[0].appendChild(selected);
//             selected = null
//             // boxDrop[0].draggable = 'true'
//         })


//     })
// }


// let h1 = document.querySelector("#h1")
// h1.draggable = "true"


// boxDrop[0].addEventListener('dragover', function(event) {
//     event.preventDefault();
//     boxDrop[0].style.backgroundColor = 'lightblue'; // Indicamos que está listo para soltar
// });

// boxDrop[0].addEventListener('drop', function(event) {
//     event.preventDefault();
//     boxDrop[0].style.backgroundColor = 'white'; // Restablecemos el estilo
//     console.log('Elemento soltado:', event.dataTransfer.getData('text'));
// });

// h1.addEventListener("dragstart", function(event) {
//     event.dataTransfer.getData("text/plain", 'Este es un elemento arrastrable')
// })





// boxDrag[0].addEventListener("dragend", (e) => {
//     console.log("dragend")
// })

// boxDrag[i].addEventListener("dragstart", (e) => {
//     console.log("dragstart")
// })

// boxDrag[i].addEventListener("drag", (e) => {
//     console.log(dragging)
// })

// boxDrop[0].addEventListener("dragenter", (e) => {
//     console.log("dragenter")
// })

// boxDrop[0].addEventListener("dragleave", (e) => {
//     console.log("dragleave")
// })

// boxDrop[0].addEventListener("dragover", (e) => {
//     e.preventDefault()
//     console.log("dragover")
// })

// boxDrop[0].addEventListener("drop", (e) => {
//     console.log("drop")
//     boxDrop[0].appendChild(boxDrag[0])
// })

let boxDrop = document.getElementsByClassName("boxDrop")
let boxDrag = document.getElementsByClassName("boxDrag")
let restart_button = document.getElementById("buttonResetGame")
let dragging;


for (let i = 0; i < boxDrag.length; i++) {

    boxDrag[i].addEventListener("dragstart", (event) => {
        
        console.log(event.target.id)



        dragging = document.getElementById(event.target.id)


        
    })

}


for (let i = 0; i < boxDrop.length; i++) {


    boxDrop[i].addEventListener('dragover', (event) => {
        
        event.preventDefault()
        
    })


}

for (let i = 0; i < boxDrop.length; i++) {



    boxDrop[i].addEventListener("drop", (event) => {
        event.preventDefault();

        console.log(event.target)
        console.log(boxDrop[i].appendChild(dragging))

    })


}


let game_Zone = document.getElementById('gameID')

function resetDiv() {

    location.reload();

}

restart_button.addEventListener('click', resetDiv)

