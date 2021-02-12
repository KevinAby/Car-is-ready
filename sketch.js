var Zenia , wall1, Zspeed,Zweight,Zdeformation;
var Tourus , wall2, Tspeed,Tweight,Tdeformation;


function setup() {
  createCanvas(1200,800);
   Zenia =createSprite(300, 150, 30, 30);
   Zenia.shapeColor="white"

   wall1 =createSprite(900,150,30,80)
   wall1.shapeColor = "white"

    Zspeed=random(50,70)
    Zweight=random(500,1600)

    Zenia.velocityX = Zspeed


    Zdeformation= 0.5*Zweight*Zspeed*Zspeed/22500
    
    Tourus =createSprite(300, 350, 30, 30);
   Tourus.shapeColor="white"

   wall2 =createSprite(900,350,30,80)
   wall2.shapeColor = "white"

    Tspeed=random(50,70)
    Tweight=random(500,1600)

    Tourus.velocityX = Tspeed


    Tdeformation= 0.5*Tweight*Tspeed*Tspeed/22500
}


function draw() {
  background(10);  
  
   if (Zenia.velocityX<1){
    if (Zdeformation>140 ){

      Zenia.shapeColor="red"
    }
    if (Zdeformation<140 && Zdeformation>80 ){

      Zenia.shapeColor="yellow"
    }
    if (Zdeformation<80 && Zdeformation>40  ){

      Zenia.shapeColor="green"
    }
    if ( Zdeformation<40  ){

      Zenia.shapeColor="lime"
    }
   }

   if (Tourus.velocityX<1){
    if (Tdeformation>140 ){

      Tourus.shapeColor="red"
    }
    if (Tdeformation<140 && Tdeformation>80 ){

      Tourus.shapeColor="yellow"
    }
    if (Tdeformation<80 && Tdeformation>40  ){

      Tourus.shapeColor="green"
    }
    if ( Tdeformation<40  ){

      Tourus.shapeColor="lime"
    }
   }






  console.log(Zdeformation)

  col1()





  
  
  col2() 
    
    

  
  
  
  
  
  
  
  drawSprites();
}

function col1(){

  if(Zenia.x-wall1.x<wall1.width/2+Zenia.width/2 
    && wall1.x-Zenia.x<wall1.width/2+Zenia.width/2 
     ){
    Zenia.velocityX=0
  }
}

function col2(){

  if(Tourus.x-wall2.x<wall2.width/2+Tourus.width/2 
    && wall2.x-Tourus.x<wall2.width/2+Tourus.width/2 
     ){
    Tourus.velocityX=0
  }
}
