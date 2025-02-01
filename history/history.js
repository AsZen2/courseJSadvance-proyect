

// buttons-video

let btn_play = document.querySelector('#play')
let btn_pause = document.querySelector('#pause')
let video_article = document.querySelector('.article-video')
let final_duration = document.querySelector(".final-duration")
let icon_volume = document.querySelector("#icon-high-volume")
let icon_no_audio = document.querySelector("#icon-no-audio")
let current_time = document.querySelector(".current-time")
let volume = document.querySelector(".volumen")
let icon_medium_volume = document.querySelector("#icon-medium-volume") 
let center_pause = document.querySelector(".center_pause")
let center_play = document.querySelector(".center_play")

// btn play

let interval;

let play_img = () => {
    btn_play.style.display = 'none'
    btn_pause.style.display = 'block'
    center_play.style.display = 'none'
    center_pause.style.display = 'block'
}

// time duration



let become_duration = (duration_time) => {
    
    // console.log("Duration: " + duration_time)

    if (duration_time < 60) {
        
        if (duration_time > 0 && duration_time < 10)
            return '00:0' + parseInt(duration_time)

        else{
            return '00:' + parseInt(duration_time)
        }
    }

    else {

        let min_time_duration = parseInt(duration_time / 60);
        let sec_time_duration = parseInt(duration_time - min_time_duration * 60);

        return ' / ' + min_time_duration + ':' + sec_time_duration
        
    }

}



btn_play.addEventListener('click', () => {

    clearInterval(interval); // Detener intervalos previos si existen

    interval = setInterval(()=> {
        
        current_time.innerText = become_duration(video_article.currentTime)
        console.log(video_article.currentTime)

    },1000)

    video_article.play()
    play_img()

})




// btn pause

let pause_img = () => {
    btn_play.style.display = 'block'
    btn_pause.style.display = 'none'
    center_play.style.display = 'block'
    center_pause.style.display = 'none'
}

btn_pause.addEventListener('click', () => {
    video_article.pause()
    pause_img()
    clearInterval(interval)
})











// final_duration


video_article.addEventListener("loadedmetadata", () => {

    final_duration.innerText = become_duration(video_article.duration)

})




// checking if video is muted or not


// function to change icons and on/off audio

let high_audio = () => {
    video_article.muted = false
    icon_no_audio.style.display = 'none'
    icon_volume.style.display = 'block'
    icon_medium_volume.style.display = 'none'
}

let no_audio = () => {
    video_article.muted = true
    icon_medium_volume.style.display = 'none'
    icon_no_audio.style.display = 'block'
    icon_volume.style.display = 'none'
}


// checking

if (video_article.muted) {
    no_audio()
}

else {
    high_audio()
}



// muted function

icon_volume.addEventListener('click', () => {
    no_audio()
})

icon_no_audio.addEventListener('click', () => {
    high_audio()
})



// volumen by input range

volume.addEventListener('input', ()=>{
    if (volume.value == 0) {
        no_audio()
    }

    else if (volume.value > 0 && volume.value <= 0.5) {
        icon_medium_volume.style.display = 'block'
        icon_no_audio.style.display = 'none'
        icon_volume.style.display = 'none'
    }

    else if (volume.value > 0.5){
        high_audio()
    }

    video_article.volume = event.target.value
})



// pause or play by clicking on video


video_article.addEventListener('click', ()=>{
    if (video_article.paused){
        video_article.play()
        play_img()
    }
    else {
        video_article.pause()
        pause_img()
    }
})

let superposition_video = document.querySelector("#superposition_video_id")

video_article.addEventListener('mouseover', ()=> {
    if (video_article.paused == false) {
        superposition_video.style.display = 'flex'
        superposition_video.classList.remove("superposition_video_out")     
    }  
})

video_article.addEventListener('mouseout', ()=> {
    if (video_article.paused == false) {
        superposition_video.style.display = 'none'
        superposition_video.classList.add("superposition_video_out")    
    }
})

console.dir(video_article)
