//########################################################
//########################################################

// Click Functions for the intro slider of astrophysicists

function rightClick(){// right arrow button
    
    var slide = document.getElementById("active");
    var slide2 = document.getElementById("passive");
    var slide3 = document.getElementById("intermediate");
    slide.id = "passive";
    slide3.id = "active";
    slide2.id = "intermediate";

}

function leftClick(){// left arrow button
    var slide = document.getElementById("active");
    var slide2 = document.getElementById("passive");
    var slide3 = document.getElementById("intermediate");
    slide.id = "intermediate";
    slide3.id = "passive";
    slide2.id = "active";
}
//########################################################
//########################################################