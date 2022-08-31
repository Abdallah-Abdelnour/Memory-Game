/* hado homa limzl madarnahomch */
document.querySelector('.control-buttons span').onclick = function(){

    let yourName = window.prompt("Entre your name");

    if(yourName == null || yourName == ""){
        document.querySelector('.name span').innerHTML = "Unknown";
    } else {
        document.querySelector('.name span').innerHTML = yourName ;
    }

    // kanat haka==>document.querySelector('.control-buttons').remove();
    document.querySelector('div').style.display = 'none';
    
    setTimeout(()=>{
        
        document.querySelector('.control-lose').style.cssText="display: block;";
        console.log("lose");
/*Music ta khessara ga3 */


    },1000);//70000

/*te3awad tebda mejdid f start|| kin3essar f button teradni lawal ga3*/
    setTimeout(()=>{
        console.log("aaaa");
        //document.querySelector('.control-lose').remove();
        document.querySelector('.control-lose').style.cssText="display: none;";
        //document.querySelector('.control-buttons').remove();

        //document.querySelector('div').classList.add('control-lose');
        //console.log(document.querySelector('div'));
        document.querySelector('div').style.display = 'block';
    },10000)
/*music khefifa ta kiydkhol yelab*/
}


let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

//let orderRange = [...Array(blocks.length).keys()];
let orderRange = Array.from(Array(blocks.length).keys());

//teradana Array machi messatfa ay tkon 3achwaiiya
shuffle(orderRange);

// temad l kol teswira ra9em moch batartib
blocks.forEach((block,index)=>{

    //terad index ta3 Array messatfin 3achwaiiyan bsh mochkil yet3awdo 9iyam
    //index = Math.round(Math.random()*(blocks.length));
    //block.style.order = orderRange[index];
    block.style.order = orderRange[index];

    //add click event
    block.addEventListener('click',function(){

        //idafat class liybayan teswira 
        flipBlock(block);

    })
});

//
function flipBlock(selectedBlock) {

    // Add Class is-flipped
    selectedBlock.classList.add('is-flipped');

    //3inda na9er 3ela wahad ga3 lokherin yekono mglobin
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));


    //lakano 2 mahlolin 3edna 2 halat ya kifkif ya mch kifkif
    if (allFlippedBlocks.length === 2) {
        //console.log(allFlippedBlocks[0].getAttribute('data-club'));
        //console.log(allFlippedBlocks[1].getAttribute('data-club'));
        //console.log('Two Flipped Blocks Selected');
    
        // matkhalikch tezid thal ketar
        stopClicking();
    

        // lalihalinahom kifkif aw la 
        checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    
    }

}
let aa=0;

// lalihalinahom kifkif aw la 
function checkMatchedBlocks(a, b){

    if(a.getAttribute('data-club')===b.getAttribute('data-club')){

        a.classList.remove('is-flipped');
        b.classList.remove('is-flipped');

        a.classList.add('has-match');
        b.classList.add('has-match');

        document.getElementById('success').play();

        aa+=2;

        if(aa==orderRange.length){
/*music ta kiyerbah*/
            document.getElementById('successG').play();
        }
    } else {
        document.querySelector('.info-container .tries span').textContent++;

        setTimeout(()=>{

            a.classList.remove('is-flipped');
            b.classList.remove('is-flipped');

        },duration);
        
        document.getElementById('fail').play();

    }

}


// matkhalikch tezid thal ketar
function stopClicking(){

    //yedif class hada liyhabas ==> yewali click ta3i maykhedamch
    blocksContainer.classList.add('no-clicking');

    //mor lwa9et lirah mhadad negal3o had class
    setTimeout(()=>{

        blocksContainer.classList.remove('no-clicking');
    
    },duration);

    
}


// nemdolha Array messatfa teraja3ena Array mch messatfa
function shuffle(array) {

    let current = array.length,
        temp,
        random;

    while(current > 0){
        current--;

        random = Math.floor(Math.random() * current);

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;

    }

    return array
}
