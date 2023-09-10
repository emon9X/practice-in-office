const videoData = async (id) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await response.json();
    const videoCards = data.data;
    cards(videoCards);
    // console.log(id);
    return id
}
const cards = (videoCards) => {
    const videoDiv = document.getElementById('video-cards-container');
    const videoDiv2 = document.getElementById('container-2')
    videoDiv.textContent = '';
    videoDiv2.textContent = '';
    if (videoCards.length !== 0) {
        videoCards.forEach(video => {
            const verificationStatus = video?.authors[0]?.verified;
            const publishedTime = parseFloat(video?.others?.posted_date);
            const dateDiv = document.createElement('div')
            const x = parseFloat(publishedTime);
            if (x / (60 * 60 * 24) >= 1 && x / (60 * 60 * 24) < 2) {
                dateDiv.innerHTML = `
                <div id="publishing-time" class="flex justify-center items-center w-[160px] h-[32px] bg-[#171717] rounded p-1 text-white">
                <p>${Math.floor(x / (60 * 60 * 24))} day ago</p>
                </div>`
            }
            else if (x / (60 * 60 * 24) > 1) {
                dateDiv.innerHTML = `
                <div id="publishing-time" class="flex justify-center items-center w-[160px] h-[32px] bg-[#171717] rounded p-1 text-white">
                <p>${Math.floor(x / (60 * 60 * 24))} days ago</p>
                </div>`
            }
            else if (x / (60 * 60) >= 1 && (x % (60 * 60)) / 60 >= 1) {
                dateDiv.innerHTML = `
                <div id="publishing-time" class="flex justify-center items-center w-[160px] h-[32px] bg-[#171717] rounded p-1 text-white">
                <p>${Math.floor(x / (60 * 60))} hrs ${Math.floor((x % (60 * 60)) / 60)} mins ago</p>
                </div>`
            }
            else if (x / (60 * 60) >= 1 && (x % (60 * 60)) / 60 < 1) {
                dateDiv.innerHTML = `
                <div id="publishing-time" class="flex justify-center items-center w-[160px] h-[32px] bg-[#171717] rounded p-1 text-white">
                <p>${Math.floor(x / (60 * 60))} hrs ago</p>
                </div>`
            }
            else if (x / 60 >= 1) {
                dateDiv.innerHTML = `
                <div id="publishing-time" class="flex justify-center items-center w-[160px] h-[32px] bg-[#171717] rounded p-1 text-white">
                <p>${Math.floor(x / 60)} mins ago</p>
                </div>`
            }
            else {
                dateDiv.textContent = '';
            }

            const badge = document.createElement('div');
            if (verificationStatus === true) {
                badge.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_13_960)">
                  <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                  <path d="M12.7094 7.20637L9.14065 10.7751L7.29065 8.92669C6.88909 8.52512 6.23752 8.52512 5.83596 8.92669C5.4344 9.32825 5.4344 9.97981 5.83596 10.3814L8.43127 12.9767C8.8219 13.3673 9.45627 13.3673 9.8469 12.9767L14.1625 8.66106C14.5641 8.2595 14.5641 7.60794 14.1625 7.20637C13.761 6.80481 13.111 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
                </g>
                <defs>
                  <clipPath id="clip0_13_960">
                    <rect width="20" height="20" fill="white"/>
                  </clipPath>
                </defs>
              </svg>`
            }
            else {
                badge.textContent = ''
            }
            const div = document.createElement('div');
            div.classList = `card card-compact bg-base-100 rounded-xl pt-10`;
            div.innerHTML = `
            <div class="relative w-full h-[300px]">
            <div><img class="rounded-xl w-full h-[300px]" src="${video?.thumbnail}" alt="img" />
            </div>
            <div class="absolute bottom-3 right-4">${dateDiv.innerHTML}
            </div>
        </div>
    
    
        <div class="flex gap-3 my-4">
            <div class="w-10 h-10 rounded-full"><img class="rounded-full w-full h-full" src="${video?.authors[0]?.profile_picture}"
                    alt="img">
            </div>
            <div class="text-left grow">
                <h2 class="card-title text-base font-bold">${video.title}</h2>
                <div class="flex gap-2 my-2 items-center">
                    <p class="font-normal">${video?.authors[0]?.profile_name}</p>
                    <div id="badge">${badge.innerHTML}
                    </div>
                </div>
                <div class="font-normal"><span id="views">${video?.others?.views}</span> views</div>
            </div>
        </div>
        `
            videoDiv.appendChild(div);
        });
    }
    else {
        const div = document.createElement('div');
        div.classList = `mx-auto h-[700px] flex flex-col items-center justify-center gap-4`;
        div.innerHTML = `
        <div><img src="./icons/Icon.png" alt="img"></div>
        <p class="text-center text-4xl">Oops!! Sorry, There is no <br> content here</p>
        `
        videoDiv2.appendChild(div);
    }
}

let x = videoData(1001)
videoData(1000);

const sort = (videoCards) => {
    for(let i = 0; i < videoCards.length; i++) {
        for (let j = 0; j < videoCards.length - i - 1; j++) {
            if (parseFloat(videoCards[j]?.others?.views) < parseFloat(videoCards[j+1]?.others?.views)) {
                [videoCards[j],videoCards[j+1]] = [videoCards[j+1], videoCards[j]]
            }
        }
    }
    console.log(videoCards);
}

const sorted = () => {
console.log(1)
}
document.getElementById('sorted').addEventListener("click", sorted)
 

