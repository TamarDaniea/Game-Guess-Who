let i=0;
let close=0;
let t;
let point=100;
let countAnswer=0;
let  currentUser=localStorage.getItem('currentUser');
currentUser=JSON.parse(currentUser);


let flagCheck=true;
const imagesArr =
   ["דמויות2/יעל.png",
    "דמויות2/אבי.png",
    "דמויות2/שירה.png",
    "דמויות2/יונתן.png",
    "דמויות2/יהודה.png",
    "דמויות2/מיכל.png",
    "דמויות2/הלל.png",
    "דמויות2/אפרת.png",
    "דמויות2/שני.png",
    "דמויות2/יאיר.png",
    "דמויות2/טליה.png",
    "דמויות2/מתן2.png",
    "דמויות2/איתמר.png",
    "דמויות2/אילה.png",
    "דמויות2/דניאל.png",
    "דמויות2/תמר.png"];

    const randomIndex = Math.floor(Math.random() * imagesArr.length);
    const randomCard = imagesArr[randomIndex];

    let qarr = ["האם יש לו שיער חום  " ,
        "   האם יש לו חולצה בעלת צווארון  ",
        "האם יש לו משקפיים",
        "האם יש לו עיניים ירוקות" ,
        "האם יש לו שיער אסוף",
        "האם יש לו עיניים חומות",
        "    האם יש לו חולצה בגווני אדום",
        "האם יש לו שיער ג'נגי",
        "    האם חולצתו בעלת צבעים שונים",
        "האם יש לו עגילים"];

        let yael = ["yes", "yes", "yes", "no", "no", "yes", "yes", "no", "yes", "yes"];
        let avi = ["no", "yes", "yes", "yes", "no", "no", "no", "no", "no", "no"];
        let shira = ["no", "no", "no", "no", "no", "yes", "no", "yes", "yes", "no"];
        let yonatan = ["no", "no", "no", "yes", "no", "no", "yes", "yes", "no", "no"];
        let yehuda = ["no", "yes", "no", "yes", "no", "no", "no", "no", "no", "no"];
        let michal = ["yes", "no", "no", "no", "yes", "yes", "no", "no", "yes", "yes"];
        let hilel = ["yes", "no", "no", "no", "no", "no", "no", "no", "yes", "no"];
        let efrat = ["yes", "yes", "no", "no", "no", "yes", "no", "no", "no", "no"];
        let shani = ["no", "yes", "no", "no", "no", "yes", "no", "yes", "yes", "no"];
        let yair = ["yes", "yes", "yes", "no", "no", "no", "no", "no", "no", "no"];
        let talya = ["yes", "no", "yes", "no", "yes", "yes", "no", "no", "no", "yes"];
        let matan = ["yes", "no", "no", "yes", "no", "no", "no", "no", "no", "no"];
        let itamar = ["yes", "no", "no", "no", "no", "yes", "yes", "no", "no", "no"];
        let ayala = ["yes", "no", "no", "no", "yes", "yes", "no", "no", "no", "yes"];
        let daniel = ["yes", "no", "no", "yes", "no", "no", "no", "no", "yes", "no"];
        let tamar = ["yes", "no", "no", "no", "no", "yes", "no", "no", "yes", "yes"];



//תמונת רקע לדף
document.body.style.backgroundImage = "url('img/backGround.jpg')"; 
document.body.style.backgroundSize = "cover"; 
document.body.style.backgroundPosition = "center"; 
document.body.style.backgroundRepeat = "no-repeat";

// \ הבלוק עץ
let choose = document.createElement('img'); 
choose.src = 'כפתורים/choose.jpg'; 
choose.id="choose";
document.body.appendChild(choose);

//קלף עם סימן שאלה של המחשב
let cardQ = document.createElement('img'); 
cardQ.src = 'img/q.png'; 
cardQ.id="cardQ";
document.body.appendChild(cardQ);

//תמונת רקע שנייה שממורכזת באמצע הדף
let imageContainer = document.getElementById('image-container');
let img = document.createElement('img'); // יצירת אלמנט תמונה
img.src = 'img/background2.jpg'; 
img.alt = 'תמונה קטנה'; // תיאור התמונה
imageContainer.appendChild(img); // הוספת התמונה למיכל

//יצירת מיכל לכרטיסים
let cardsContainer = document.createElement('div'); 
cardsContainer.id="cardsContainer";
imageContainer.appendChild(cardsContainer); 

//סיום משחק
//במקרה של ניצחון
let win = document.createElement('div'); 
win.id="win";
document.body.appendChild(win);



//במקרה שלא ניצח
let notwin = document.createElement('div'); 
notwin.id="notwin";  
document.body.appendChild(notwin);

let pGameOver = document.createElement('p'); 
pGameOver.id="pGameOver";
pGameOver.innerText="game over"
notwin.appendChild(pGameOver); 


//חזרה לבית במקרה  ניצח
let again = document.createElement('img'); 
again.src = 'img/home.png'; 
again.id="again";
again.addEventListener("click",()=>{ window.open('/גלרייה/gallery.html', '_self');  })
again.style.cursor="pointer";
notwin.appendChild(again);
//חזרה לבית במקרה שלא ניצח
let againWin = document.createElement('img'); 
againWin.src = 'img/home.png'; 
againWin.id="againWin";
againWin.addEventListener("click",()=>{ window.open('/גלרייה/gallery.html', '_self');  })
againWin.style.cursor="pointer";
win.appendChild(againWin);

//פונקציה שלא ניצח 
const gameover=()=>
  {
      clearInterval(t);//עצירת סטופר
      document.getElementById("notwin").setAttribute("style", "display:block;");
      currentUser.game2="0";
      localStorage.setItem("currentUser", JSON.stringify( currentUser ));
  }
  
  const audio = new Audio('audio/good.WAV');
//סגירת תמונה
const changePic=(event)=>{
    let press=event.target.id;
    let cardPress =document.getElementById(event.target.id);
    audio.play();
    if (!cardPress.src.includes("img/q.png"))
    {
        cardPress.src="img/q.png";  
        close++;
        if(press==randomIndex+1)
            flagCheck=false;
    }
    else{
        close--;
        if(press==randomIndex+1)
            flagCheck=true;
        cardPress.src=imagesArr[press-1];  
        point-=5;
    }
    if(close==15)
        {
          cardQ.src =randomCard;
          if(flagCheck==true)//אם ניצח
          {
             clearInterval(t);//עצירת הסטופר
             document.getElementById("win").setAttribute("style", "display:block;");
            currentUser.game2=point;
          
            localStorage.setItem("currentUser", JSON.stringify( currentUser ));   
            let pwow = document.createElement('p'); 
            pwow.id="pwow";
            pwow.innerText=`wow🥳
             you won ${point} points`;
            win.appendChild(pwow); 
            win.appendChild(againWin);


          }  
          else
          {
            gameover();
            currentUser.game2=point;
             localStorage.setItem("currentUser", JSON.stringify( currentUser ));
          }
        }
  
   

  }
//יצירת כרטיסים
imagesArr.forEach((pic,index) => {
    let picDmut = document.createElement('img'); // יצירת אלמנט תמונה
    picDmut.src = imagesArr[index]; // שימוש בתמונה מהמארח לפי האינדקס
    picDmut.alt = `תמונה של כרטיס ${index + 1}`; // תיאור התמונה
    picDmut.classList.add("card");
    picDmut.id=index+1;
     picDmut.addEventListener("click",changePic);
    cardsContainer.appendChild(picDmut)
  });

  
//כפתורים
let button = document.createElement('img'); 
button.src = 'כפתורים/button.png'; 
button.id="button";
document.body.appendChild(button);

//שאלות
let questions = document.createElement('div'); 
questions.id="questions";
questions.innerText=qarr[0];
document.body.appendChild(questions);


//הוספת כיתוב כן לא
let yes = document.createElement('p'); 
yes.id="yes";

yes.innerText="Yes";
document.body.appendChild(yes);
let no = document.createElement('p'); 
no.id="no";

no.innerText="No";
document.body.appendChild(no);


// פונקצית הזזה
const movLeft=()=>{
  if(i>0)
     questions.innerText=qarr[--i];
  else
  {
    i=10;
    questions.innerText=qarr[--i];
  }

}
const movRight=()=>{

  if(i<10)
      questions.innerText=qarr[++i];
 else
 {
  i=0;
  questions.innerText=qarr[++i];
 }

}


//חץ שמאל
let buttonLeft = document.createElement('img'); 
buttonLeft.src = 'כפתורים/left.png'; 
buttonLeft.id="buttonL";
buttonLeft.addEventListener("click",movLeft);
document.body.appendChild(buttonLeft);

//חץ ימין
let buttonRight = document.createElement('img'); 
buttonRight.src = 'כפתורים/right.png'; 
buttonRight.id="buttonR";
buttonRight.addEventListener("click",movRight);
document.body.appendChild(buttonRight);




//עונה תשובה בלחיתה על הכפתור
let answer="";
const checkRandom=()=>{
  countAnswer++;
  if(countAnswer>3)
     point-=5;
  switch (randomIndex) {
    case 0:
        answer = yael[i];
        break;
    case 1:
        answer = avi[i];
        break;
    case 2:
        answer = shira[i];
        break;
    case 3:
        answer = yonatan[i];
        break;
    case 4:
        answer = yehuda[i];
        break;
    case 5:
        answer = michal[i];
        break;
    case 6:
        answer = hilel[i];
        break;
    case 7:
        answer = efrat[i];
        break;
    case 8:
        answer = shani[i];
        break;
    case 9:
        answer = yair[i];
        break;
    case 10:
        answer = talya[i];
        break;
    case 11:
        answer = matan[i];
        break;
    case 12:
        answer = itamar[i];
        break;
    case 13:
        answer = ayala[i];
        break;
    case 14:
        answer = daniel[i];
        break;
    case 15:
        answer = tamar[i];
        break;

}

console.log(randomCard)
console.log(answer) 
if (answer == "yes") {

  document.getElementById("yes").classList.add('active');
  setTimeout(function () { document.getElementById("yes").classList.remove('active'); }, 2000);
}
if (answer == "no") {

  document.getElementById("no").classList.add('active');
  setTimeout(function () { document.getElementById("no").classList.remove('active'); }, 2000);

}
}



//timer
let clock = document.createElement('div');
clock.id = "clock";
document.body.appendChild(clock);

// יצירת כפתור לעצירה
let stopButton = document.createElement('button');
stopButton.innerHTML = 'Stop';
document.body.appendChild(stopButton);

// משתנים לטיימר
let second = 0;
let minutes = 3;
let isPaused = false;
let tt;

// פונקציה לטיימר
const timer = () => {
    tt = setInterval(function () {
        if (!isPaused) {
            if (second === 0) {
                if (minutes > 0) {
                    second = 59;
                    minutes--;
                } else {
                    clearInterval(tt); // עצירת הטיימר כאשר זמן נגמר
                    alert('Game Over!'); // הודעה בסיום המשחק
                }
            }

            // עדכון תצוגת הטיימר
            document.getElementById('clock').innerHTML = 
                minutes + ":" + (second < 10 ? "0" + second : second);
            second--;
        }
    }, 1000);
};

// פונקציה לעיכוב המשחק
stopButton.addEventListener('click', () => {
    if (!isPaused) {
        isPaused = true; // שינוי מצב ההפסקה
        clearInterval(tt); // עצירת הטיימר

        // הצגת שכבת מסך שחור עם כפתור להמשך
        let overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // רקע כהה שחצי שקוף
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        document.body.appendChild(overlay);

        // כפתור להמשך המשחק (בצורת עיגול)
        let continueButton = document.createElement('button');
        continueButton.innerHTML = 'להמשך משחק';
        continueButton.style.width = '100px'; // רוחב הכפתור
        continueButton.style.height = '150px'; // גובה הכפתור
        continueButton.style.borderRadius = '75px'; // עיגול
        continueButton.style.fontSize = '24px'; // גודל טקסט גדול
        continueButton.style.backgroundColor = 'red'; // צבע אדום
        continueButton.style.color = 'white'; // טקסט לבן
        continueButton.style.border = 'none'; // ללא גבול
        continueButton.style.cursor = 'pointer'; // יד על עכבר
        continueButton.style.marginRight="40%"
        overlay.appendChild(continueButton);

        // פונקציה להמשך המשחק
        continueButton.addEventListener('click', () => {
            isPaused = false; // שינוי מצב ההפסקה
            timer(); // חידוש הטיימר
            document.body.removeChild(overlay); // הסרת שכבת המסך השחור
        });
    }
});

// התחלת הטיימר
timer();




questions.addEventListener("click",checkRandom);

    //פונקציית פתיחה וסגירה
    const openNav=()=> {
        document.getElementById("mySidebar").style.width = "250px";
    }
    
    const closeNav=()=> {
        document.getElementById("mySidebar").style.width = "0";
    }    

    //סרגל צד
    let divAllIcons = document.createElement('div');
    divAllIcons.classList.add ('divAllIcons');
    document.body.appendChild(divAllIcons);

    //home
    let home = document.createElement('img'); 
    home.src = 'img/home.png'; 
    home.id="home";
    home.addEventListener("click",()=>{ window.open('/גלרייה/gallery.html', '_self');  })
    home.style.cursor="pointer";
    divAllIcons.appendChild(home);

    
    //סימן שאלה
    let openBtn = document.createElement('img');
    openBtn.classList.add('open-btn');
    openBtn.src = 'img/כפתורסימןשאלה.png';
    openBtn.alt = '';
    openBtn.addEventListener("click",openNav); 
    divAllIcons.appendChild(openBtn) 

    //סרגל
    let sidebar = document.createElement('div');
    sidebar.id = 'mySidebar';
    sidebar.classList.add ('sidebar');
   //האיקס
   let closeLink = document.createElement('a');
   closeLink.href = 'javascript:void(0)';
   closeLink.addEventListener("click",closeNav);
   closeLink.innerText = 'x'; 
   sidebar.appendChild(closeLink);
    //פסקה
    let p = document.createElement('p');
     p.innerHTML = `
    <h1> הוראות המשחק</h1><br>
    <h2>איך משחקים?</h2><br>
    בתהליך של שאלות ותשובות מנסים לגלות כמה שיותר מהר מי הדמות המסתורית שנבחרה על ידי המחשב.<br>
    המחשב בוחר דמות מבין הדמיות המופיעות על המסך, דמות זו נשארת מוסתרת עד לסיום המשחק.<br>
    על השחקן לבחור בכל פעם שאלה אחת מבין השאלות הנמצאות בתחתית המסך ולפי תשובת המחשב למחוק את הדמיות המתאימות.<br>
    <h2>מטרת המשחק:</h2><br>
    מטרת המשחק היא לגלות את הדמות שהמחשב בחר.<br>
    המשחק מוגבל בזמן, כאשר נגמר הזמן המשחק נגמר. במקרה שיותר מדמות אחת נשארת גלויה על המסך, השחקן מפסיד.<br>
    ובמקרה שנשארה דמות אחת, אם היא הדמות שבחר המחשב השחקן מנצח ואם לא, השחקן מפסיד.<br>
    <strong>בהצלחה!!!</strong>`;
   
    p.style.textAlign = 'center'; 
    p.style.direction="rtl";
    p.style.color='white';
    // הוספת הפסקה לסיידבר
    sidebar.appendChild(p);
    divAllIcons.appendChild(sidebar);


  //פונקציית פתיחה וסגירה
  const openNav2=()=> {
    document.getElementById("mySidebar2").style.width = "250px";
}

const closeNav2=()=> {
    document.getElementById("mySidebar2").style.width = "0";
}    







//סרגל
let sidebar2 = document.createElement('div');
sidebar2.id = 'mySidebar2';
sidebar2.classList.add ('sidebar2');
//האיקס
let closeLink2 = document.createElement('a');
closeLink2.href = 'javascript:void(0)';
closeLink2.addEventListener("click",closeNav2);
closeLink2.innerText = 'x'; 
sidebar2.appendChild(closeLink2);
divAllIcons.appendChild(sidebar2);




let p2 = document.createElement('p');
     p2.innerHTML = `
     <h2>  להחלפת הרקע:</h2>`;
    p2.style.textAlign = 'center'; 
    p2.style.direction="rtl";
    p2.style.color='white';
    // הוספת הפסקה לסיידבר
    sidebar2.appendChild(p2);
    divAllIcons.appendChild(sidebar2);



// יצירת ארבע תמונות
const images = [
    'img/vi1.png',
    'img/vi2.png',
    'img/vi3.png',
    'img/vi4.png'
];

// יצירת אלמנט div שבו נציג את התמונות
let divBackGroundImg = document.createElement('div');
divBackGroundImg.style.display = 'grid';
divBackGroundImg.style.marginTop = '20px';
divBackGroundImg.style.gap = '20px';
divBackGroundImg.style.gridTemplateColumns = 'repeat(1, 1fr)'; // שתי תמונות בכל שורה

// הוספת התמונות לדף
images.forEach(imageSrc => {
    const imgWrapper = document.createElement('div');
    let img = document.createElement('img');
    img.id="backImg"
    img.src = imageSrc;
    img.style.cursor = 'pointer'; // שינוי העכבר לאצבע
    img.addEventListener('click', () => {
        document.body.style.backgroundImage = `url(${imageSrc})`;
        document.body.style.backgroundSize = 'cover'; // כיסוי מלא של הרקע
    });
    divBackGroundImg.appendChild(img);
});

// הוספת ה-div לדף
sidebar2.appendChild(divBackGroundImg);


let musicToggle = document.createElement('input');
musicToggle.type = 'checkbox';
musicToggle.id = 'musicToggle';
musicToggle.id="labalButtonMusic";
musicToggle.name = 'music';

let label = document.createElement('label');

label.htmlFor = 'musicToggle';
label.textContent = ' הפעל/הפסק מנגינה ';
label.style.color='white';

// הוספת הכפתור והתגית לגוף הדף
sidebar2.appendChild(label);
sidebar2.appendChild(musicToggle);

let backgroundMusic = document.getElementById('backgroundMusic');

musicToggle.addEventListener('change', () => {
    if (musicToggle.checked) {
        backgroundMusic.play(); // נגן את המוזיקה
    } else {
        backgroundMusic.pause(); // הפסק את המוזיקה
        backgroundMusic.currentTime = 0; // החזר את המוזיקה להתחלה
    }
});


//סימן מדלייה
let medlya = document.createElement('img');
medlya.classList.add('medlya');
medlya.src = 'img/כפתורמדליה.png';
medlya.addEventListener("click",openNav2); 
divAllIcons.appendChild(medlya) 

//סימן הפעלה
let playAgain = document.createElement('img');
playAgain.classList.add('playAgain');
playAgain.src = 'img/כפתורתחילתמשחק.png';
playAgain.addEventListener("click",()=>{ 
    window.open('game.html', '_self');
})
divAllIcons.appendChild(playAgain) 

