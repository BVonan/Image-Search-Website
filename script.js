// event listeners
document.querySelector("button").addEventListener("click", displayImages);
displayBackgroundImage();



//display the three images with lkes and description;
async function displayImages(){
    let keyword = document.querySelector("#keyword").value;
    console.log(keyword);

 if (keyword.length < 3){
    document.querySelector("#less3").innerHTML = "The keyword typed by the user must have at least 3 characters";
    document.querySelector("#less3").style.color = "red";
     document.querySelector("#less3").style.backgroundColor = "white";
    return
    }
  
    
let orientation = document.querySelector("input[name=q1]:checked"); 
    
     console.log("displaying background image");

  // console.log(orientation.value);
    let url = `https://api.unsplash.com/photos/random/?client_id=II-q0Key9nKyewCE7NVEluCUHB3fghDwVIxGKlwz3ho&featured=true&query=${keyword}&orientation=landscape&count=3&content_filter=high`

    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data[0].urls.small);

    document.querySelector("#image1").innerHTML = 
    `<div>
    Likes: ${data[0].likes} <br><img src="${data[0].urls.small}"> <br> ${data[0].urls.description} 
    </div>`;

      document.querySelector("#image2").innerHTML = 
    `<div>
    Likes: ${data[1].likes} <br><img src="${data[1].urls.small}"> <br> ${data[1].urls.description} 
    </div>`;

      document.querySelector("#image3").innerHTML = 
    `<div>
    Likes: ${data[2].likes} <br><img src="${data[2].urls.small}"> <br> ${data[2].urls.description} 
    </div>`;
}

// background image
async function displayBackgroundImage(){

    console.log("displaying background image");

    let backgroundKeywordList = ["flowers", "forest", "animals", "snow", "trees"];
let bKindex = 0;
  backgroundKeywordList= _.shuffle(backgroundKeywordList);
////
    
// bKindex = (bKindex + 1) % backgroundKeywordList.length;
let backgroundKeyword = backgroundKeywordList[bKindex];
    
    let url = `https://api.unsplash.com/photos/random/?client_id=1QJtZcK_1xc92_nGsN1OSYUjaeYT-YVEG837GmLq60A&featured=true&query=${backgroundKeyword}&orientation=landscape&count=1&content_filter=high`

console.log(backgroundKeyword);
    let response = await fetch(url);
    let data = await response.json();
    console.log(data[0].urls.full);
    document.querySelector("body").style.backgroundImage = `url(${data[0].urls.full})`;

    document.querySelector("body").style.backgroundSize = "cover";
}

let q1Choices = ["landscape", "portrait", "squarish"];

    for (let i = 0; i < q1Choices.length; i++) {
        let radioButton = document.createElement("input");

        radioButton.type = "radio";
        radioButton.name = "q1";
        radioButton.value = q1Choices[i];

        let buttonLabel = document.createElement("label");
        buttonLabel.innerHTML = q1Choices[i];
        buttonLabel.prepend(radioButton);

        document.querySelector("#q1Choices").appendChild(buttonLabel);
        let lineBreak = document.createElement("br");
        document.querySelector("#q1Choices").appendChild(lineBreak);
    }


 

