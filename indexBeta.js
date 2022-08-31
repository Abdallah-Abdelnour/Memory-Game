/* hado homa limzl madarnahomch */
/*khasni had Array tkon mahfoda f Local Storage */
let myScore = 0;
let timeStart;
let timeEnd = Date.now();;


// window.localStorage.setItem("myObject", JSON.stringify(myJeure));
// console.log("myObject");
// console.log(JSON.parse(window.localStorage.getItem("myObject")));


let myJeure = [
    //{id:1, name:"Noury5", score:100},
    // {id:2, name:"Noury3", score:200},
    // {id:3, name:"Noury1", score:300},
    // {id:4, name:"Noury2", score:220},
    {id:5, name:"Noury4", score:150}
];




if ("myObject" in localStorage) {
    console.log('yes');
    myJeure=JSON.parse(window.localStorage.getItem("myObject"));

} else {
    console.log('no');
}


/*mochkil --> khasni newali nesavardi chehal men la3ib mchi ghi wahad lihowa tali*/ 
creatJeureInArray();

let yourName;


document.querySelector('.control-buttons span').onclick = function(){

    shuffle(orderRange);

    /*DONE === mochekil ---> khas nwali nekhalat array ta3i kiyekhessar*/ 

    let a = document.querySelector(".memory-game-blocks");

    let blockss = Array.from(a.children);
    blockss.forEach((block,index)=>{
        block.style.order=orderRange[index];
        //console.log(block.style.order)
    });
    
    yourName = window.prompt("Entre your name");

    if(yourName == null || yourName == ""){
        document.querySelector('.name span').innerHTML = "Unknown";
        yourName = "Unknown";
    } else {
        document.querySelector('.name span').innerHTML = yourName ;
    }

    timeStart = Date.now();

    document.querySelector('.control-buttons').style.cssText = 'display:none';
    
/****************************************************************/
/*DONE === khasni bach n affichi ghi 3adad mo3ayan brk (ni dayar 3 brk) hadi f badya */
    sortArray(myJeure);

    myJeure.forEach((index,i)=>{
        creatJeure(index,i);
        if(i===2){
            myJeure.length = 3;
            window.localStorage.setItem("myObject", JSON.stringify(myJeure));
        }
    })
/****************************************************************/

    setTimeout(()=>{
        if(aa<20){
            window.localStorage.setItem('name',`${yourName}`);
            window.localStorage.setItem('score',`${myScore}`);

            document.querySelector('.control-lose').style.cssText="display: block;";
            
            /**************************************************/
            //temerki siyad likhessar f Array ==>myJeure

            creatJeureInArray();
            /*DONE === khasni bach n affichi ghi 3adad mo3ayan brk (ni dayar 3 brk) hadi kiyekamal w yekhessar */
            sortArray(myJeure);
            myJeure.forEach((index,i)=>{
                creatJeure(index,i);
                if(i===2){
                    myJeure.length = 3;
                }
            })
            
            console.log("lose");
            
        }

/*Music ta khessara ga3 */

    },7000);//70000


/*DONE === te3awad tebda mejdid f start || kin3essar f button teradni lawal ga3*/
/*****DONE ===mochkil kon heta rbah raha tatla3 bli khessar****/
    setTimeout(()=>{
        console.log("redemare");
        
        document.querySelector('.control-lose').style.cssText="display: none;";

        document.querySelector('.control-buttons').style.cssText = 'display:block';

        aa=0;
        myScore=0;
        document.querySelector('.info-container .tries span').textContent=0;
        
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].classList.remove('is-flipped');
            blocks[i].classList.remove('has-match');
        }
        //khas orderRangea ==> nekhawiwha awd ne3amroha b blocks[i].style.order

/********************Local Storage*********************/



/*****************************************/


/*nchof hal khor badal relead or nedir lhal ta locale storage */
/****************************************************************/
/***************************mochekil*****************************/
/****************************************************************/

        //location.reload();

/****************************************************************/
/***************************mochekil*****************************/
/****************************************************************/

    },10000);

/*music khefifa ta kiydkhol yelab*/

}



/*DONE === tanchaa 3anassir taht plaque ta la3eba */
//arr hiya ma3lomatah / i hiya id 

function creatJeure(arr,i){
    let myFirst = document.createElement('div');
    myFirst.setAttribute('class',`firs`);

    let mySpanName = document.createElement('span');
    mySpanName.setAttribute('class',`nameO a${i}`); 

    let mySpanScore = document.createElement('span');
    mySpanScore.setAttribute('class',`score b${i}`); 

    myFirst.appendChild(mySpanName);
    myFirst.appendChild(mySpanScore);
    document.querySelector('.jeures').appendChild(myFirst);

    document.querySelector(`.a${i}`).innerHTML = `${i+1} - Name : ${arr.name}`;
    document.querySelector(`.b${i}`).innerHTML = `Score : ${arr.score}`;

}


/*DONE === khasni newali ne3amar Array b issem w score dynamique mchi statique */
/*****************************************************/
function creatJeureInArray(){
    //console.log(myJeure);

    myJeure.push({id:6, name:window.localStorage.getItem('name'), score:window.localStorage.getItem('score')});
    //console.log(window.localStorage.getItem('name'));
    //console.log(window.localStorage.getItem('score'));


}
/*****************************************************/


/*DONE === khasni function nemdlha Array mch messatfa w hiya tessatfhomli 3ela hessab score */
function sortArray(arrr){
    let i,a,b;
    for (let index = 0; index < arrr.length; index++) {
        for (let j = 0; j < arrr.length; j++) {
            if(arrr[index].score > arrr[j].score){
                i = arrr[j].score;
                a = arrr[j].name;
                b = arrr[j].id;

                arrr[j].score = arrr[index].score;
                arrr[j].name = arrr[index].name;
                arrr[j].id = arrr[index].id;

                arrr[index].score = i;
                arrr[index].name = a;
                arrr[index].id = b;
            }
        }
    }
}
/****************************************************/


let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

//let orderRange = [...Array(blocks.length).keys()];
let orderRange = Array.from(Array(blocks.length).keys());

//teradana Array machi messatfa ay tkon 3achwaiiya

// temad l kol teswira ra9em moch batartib
blocks.forEach((block,index)=>{

    block.style.order = orderRange[index];

    //add click event
    block.addEventListener('click',function(){

        //idafat class liybayan teswira 
        flipBlock(block);

    })
});



function flipBlock(selectedBlock) {

    // Add Class is-flipped
    selectedBlock.classList.add('is-flipped');

    //3inda na9er 3ela wahad ga3 lokherin yekono mglobin
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    //lakano 2 mahlolin 3edna 2 halat ya kifkif ya mch kifkif
    if (allFlippedBlocks.length === 2) {

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
            window.localStorage.setItem('name',`${yourName}`);
            window.localStorage.setItem('score',`${myScore}`);
            /*****************************************************/
            //temerki siyad lirbah f Array ==> myJeure
            creatJeureInArray();
            /*DONE === khasni bach n affichi ghi 3adad mo3ayan brk (ni dayar 3 brk) */
            sortArray(myJeure);
            myJeure.forEach((index,i)=>{
                creatJeure(index,i);
                if(i===2){
                    myJeure.length = 3;
                }
            })
            /*****************************************************/

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
    timeEnd=Date.now();

    /****************************************/
    //DONE ===== Score yenhssab haka
    myScore = aa*25 + Math.floor((70000-(timeEnd-timeStart))/140); 
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
    console.log("Done")
    return array;
}
