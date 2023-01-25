const music = new Audio('Trees.mp3')


//Create Array

const songs = [
    {
        id: '1',
        songName: `Palm Trees <br>
        <div class="subtitle">Flatbush Zombies</div>`,
        poster: "img/1.jpg"
    },
    {
        id: '2',
        songName: `Laugh Now Cry Later <br>
        <div class="subtitle">Drake</div>`,
        poster: "img/2.jpg"
    },
    {
        id: '3',
        songName: `Palm Trees
        <div class="subtitle">Justin Bieber</div>`,
        poster: "img/3.jpg"
    },
    {
        id: '4',
        songName: `Laugh Now Cry Later <br>
        <div class="subtitle">Mariah Carey</div>`,
        poster: "img/4.jpg"
    },
    {
        id: '5',
        songName: `Laugh Now Cry Later <br>
        <div class="subtitle">Future</div>`,
        poster: "img/5.jpg"
    },
    {
        id: '6',
        songName: `Laugh Now Cry Later <br>
        <div class="subtitle">Kanye West</div>`,
        poster: "img/6.jpg"
    },
    {
        id: '7',
        songName: `Laugh Now Cry Later <br>
        <div class="subtitle">Kendrick Lamar</div>`,
        poster: "img/7.jpg"
    },
    {
        id: '8',
        songName: `Laugh Now Cry Later <br>
        <div class="subtitle">Ludacris</div>`,
        poster: "img/8.jpg"
    },
    {
        id: '9',
        songName: `Laugh Now Cry Later <br>
        <div class="subtitle">Eminem</div>`,
        poster: "img/9.jpg"
    },
    {
        id: '10',
        songName: `Laugh Now Cry Later <br>
        <div class="subtitle">Pop Smoke</div>`,
        poster: "img/10.jpg"
    },
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})