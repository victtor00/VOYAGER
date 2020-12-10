var screen = 1;
var menu;
var fonte;
var prof;
var aluno;
var instructions;
var credits;
var level1;
var level2;
var level3;
var level4;
var level5;
var level6;
var endgame;
var theme;
var slider;

function preload() {
  theme = loadSound('VoyagerThemeSong.mp3');
}

function setup() {
  createCanvas(400, 400);
  menu = loadImage('wallpaper.jpg');
  gameover = loadImage('buraco.jpg');
  prof = loadImage('Aquiles2.jpg');
  aluno = loadImage('Foto.jpeg');
  fonte = loadFont('airstrike.ttf');
  credits = loadImage ('pluto.jpeg');
  instructions = loadImage ('uranus.jpeg');
  level1 = loadImage ('sun.jpg');
  level2 = loadImage ('venussurface.png');
  level3 = loadImage ('solar.png');
  level4 = loadImage ('earth.png');
  level5 = loadImage ('cosmos.JPG');
  level6 = loadImage ('titan.jpg');
  endgame = loadImage ('astronaut.jpg');
  theme.loop();
  theme.setVolume(0.5);
  slider = createSlider (0, 1, 0.5, 0.01);
}

function draw() {
  theme.setVolume(slider.value());
  
  if (screen == 1) {
    background(menu);
    textFont(fonte);
    textSize(55);
    textAlign(CENTER);
   
    fill(248, 248, 255);
    text("VOYAGER", 200, 100);
    textSize(25);
    text("PLAY", 200, 200);
    text("INSTRUCTIONS", 200, 225);
    text("CREDITS", 200, 250);
  
  
   if (mouseX <= 236 && mouseX >= 170 && mouseY >= 187 && mouseY <= 198) {
    fill('#33ccff');
    text("PLAY", width/2, 200);
      if (mouseIsPressed) {
      screen = 2;
    }
 }
      else if (mouseX <= 300 && mouseX >= 108 && mouseY >= 208 && mouseY <= 223) {
    fill('#33ccff');
    text("INSTRUCTIONS", width/2, 225);
      if (mouseIsPressed) {
      screen = 3;
    }  
  }
      else if (mouseX <= 235 && mouseX >= 170 && mouseY >= 235 && mouseY <= 249) {
    fill('#33ccff');
    text("CREDITS", width/2, 250);
      if (mouseIsPressed) {
      screen = 4;
    }
 }
  }
  else if(screen==2){
    background(level1);
    textFont(fonte);
    textSize(55);
    textAlign(CENTER);
   
    fill(248, 248, 255);
    text("LEVEL 1", 200, 100);
    textSize(25)
    text("Qual é o planeta", 200, 150);
    text("mais próximo do Sol?", 200, 175);
    text("Mercúrio",100, 250);
    text("Vênus", 100, 300);
    text("Terra", 300, 250);
    text("Marte", 300, 300);
    textSize(15)
    text("Pressione ESC para voltar para o menu inicial", width/2, 400);
    
      if (keyIsDown(ESCAPE)) {
      screen = 1
    }
       else if (mouseX <= 161 && mouseX >= 38 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("Mercúrio", 100, 250);
         if (mouseIsPressed) {
      screen = 5;
    }
       }
      else if (mouseX <= 161 && mouseX >= 38 && mouseY >= 280 && mouseY <= 297) {
    fill('#33ccff');
    textSize(25)
    text("Vênus", 100, 300);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
      else if (mouseX <= 341 && mouseX >= 261 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("Terra", 300, 250);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
    else if (mouseX <= 341 && mouseX >= 261 && mouseY >= 280 && mouseY <= 297) {
    fill('#33ccff');
    textSize(25)
    text("Marte", 300, 300);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
  }
   else if(screen==10){
    background(gameover);
    textFont(fonte);
    textSize(40);
    textAlign(CENTER);
   
    fill(248, 248, 255);
    text("RESPOSTA ERRADA", width/2, 100);
    textSize(15)
    text("Você caiu em um buraco negro e perdeu",width/2, 200);
    text("contato com a sonda VOYAGER e a Terra", width/2, 225);
    textSize(15)
    text("Pressione ESC para voltar para o menu inicial", width/2, 350);
    
      if (keyIsDown(ESCAPE)) {
      screen = 1
    }
   }
      else if(screen==5){
    background(level2);
    textFont(fonte);
    textSize(55);
    textAlign(CENTER);
   
    fill(248, 248, 255);
    text("LEVEL 2", 200, 100);
    textSize(25)
    text("Qual é o planeta mais", 200, 150);
    text("quente do Sistema Solar?", 200, 175);
    text("Mercúrio",100, 250);
    text("Vênus", 100, 300);
    text("Júpter", 300, 250);
    text("Marte", 300, 300);
    textSize(15)
    text("Pressione ESC para voltar para o menu inicial", width/2, 400);
    
      if (keyIsDown(ESCAPE)) {
      screen = 1
    }
        else if (mouseX <= 146 && mouseX >= 61 && mouseY >= 279 && mouseY <= 298) {
    fill('#33ccff');
    textSize(25)
    text("Vênus", 100, 300);
         if (mouseIsPressed) {
      screen = 6;
    }
       }
         else if (mouseX <= 161 && mouseX >= 38 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("Mercúrio", 100, 250);
       }
        else if (mouseX <= 341 && mouseX >= 261 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("Júpter", 300, 250);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
    else if (mouseX <= 341 && mouseX >= 261 && mouseY >= 280 && mouseY <= 297) {
    fill('#33ccff');
    textSize(25)
    text("Marte", 300, 300);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
      }
        
  else if(screen==6){
    background(level3);
    textFont(fonte);
    textSize(55);
    textAlign(CENTER);
   
    fill(248, 248, 255);
    text("LEVEL 3", 200, 100);
    textSize(25)
    text("Quantos planetas existem", 200, 150);
    text("no Sistema Solar?", 200, 175);
    text("3",100, 250);
    text("10", 100, 300);
    text("8", 300, 250);
    text("12", 300, 300);
    textSize(15)
    text("Pressione ESC para voltar para o menu inicial", width/2, 400);
    
      if (keyIsDown(ESCAPE)) {
      screen = 1
    }
       else if (mouseX <= 311 && mouseX >= 294 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("8", 300, 250);
         if (mouseIsPressed) {
      screen = 7;
    }
       }
    else if (mouseX <= 110 && mouseX >= 91 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("3", 100, 250);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
           else if (mouseX <= 110 && mouseX >= 91 && mouseY >= 283 && mouseY <= 297) {
    fill('#33ccff');
    textSize(25)
    text("10", 100, 300);
       }
    else if (mouseX <= 311 && mouseX >= 294 && mouseY >= 283 && mouseY <= 297) {
    fill('#33ccff');
    textSize(25)
    text("12", 300, 300);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
  }
  else if(screen==7){
    background(level4);
    textFont(fonte);
    textSize(55);
    textAlign(CENTER);
   
    fill(248, 248, 255);
    text("LEVEL 4", 200, 100);
    textSize(20)
    text("Qual é aproximadamente a idade", 200, 150);
    text("(em anos) do Planeta Terra?", 200, 175);
    textSize(25)
    text("2020",100, 250);
    text("2 mil", 100, 300);
    text("13 milhões", 300, 250);
    text("4 bilhões", 300, 300);
    textSize(15)
    text("Pressione ESC para voltar para o menu inicial", width/2, 400);
    
      if (keyIsDown(ESCAPE)) {
      screen = 1
    }
       else if (mouseX <= 358 && mouseX >= 246 && mouseY >= 282 && mouseY <= 298) {
    textSize(25)
    fill('#33ccff');
    text("4 bilhões", 300, 300);
         if (mouseIsPressed) {
      screen = 8;
    }
       }
else if (mouseX <= 124 && mouseX >= 74 && mouseY >= 279 && mouseY <= 298) {
    fill('#33ccff');
    textSize(25)
    text("2 mil", 100, 300);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
         else if (mouseX <= 161 && mouseX >= 38 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("2020", 100, 250);
           if (mouseIsPressed){
             screen = 10;
           }
       }
        else if (mouseX <= 356 && mouseX >= 246 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("13 milhões", 300, 250);
       }
  }
  else if(screen==8){
    background(level5);
    textFont(fonte);
    textSize(55);
    textAlign(CENTER);
   
    fill(248, 248, 255);
    text("LEVEL 5", 200, 100);
    textSize(25)
    text("Qual é o maior planeta", 200, 150);
    text("do sistema solar?", 200, 175);
    text("Saturno",100, 250);
    text("Urano", 100, 300);
    text("Júpter", 300, 250);
    text("Netuno", 300, 300);
    textSize(15)
    text("Pressione ESC para voltar para o menu inicial", width/2, 400);
    
      if (keyIsDown(ESCAPE)) {
      screen = 1
    }
       else if (mouseX <= 349 && mouseX >= 252 && mouseY >= 231 && mouseY <= 248) {
    textSize(25)
    fill('#33ccff');
    text("Júpter", 300, 250);
         if (mouseIsPressed) {
      screen = 9;
    }
       }
 else if (mouseX <= 161 && mouseX >= 43 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("Saturno", 100, 250);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
      else if (mouseX <= 142 && mouseX >= 58 && mouseY >= 280 && mouseY <= 297) {
    fill('#33ccff');
    textSize(25)
    text("Urano", 100, 300);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
    else if (mouseX <= 350 && mouseX >= 251 && mouseY >= 280 && mouseY <= 297) {
    fill('#33ccff');
    textSize(25)
    text("Netuno", 300, 300);
       }
  }
   else if(screen==9){
    background(level6);
    textFont(fonte);
    textSize(55);
    textAlign(CENTER);
   
    fill(248, 248, 255);
    text("LEVEL 6", 200, 100);
    textSize(15)
    text("Qual das seguintes luas pertece a Saturno", 200, 150);
    text("e possui uma atmosfera densa como a Terra?", 200, 175);
    textSize(25)
    text("Plutão",100, 250);
    text("Europa", 100, 300);
    text("Tritão", 300, 250);
    text("Titã", 300, 300);
    textSize(15)
    text("Pressione ESC para voltar para o menu inicial", width/2, 400);
    
      if (keyIsDown(ESCAPE)) {
      screen = 1
    }
       else if (mouseX <= 349 && mouseX >= 252 && mouseY >= 231 && mouseY <= 248) {
    textSize(25)
    fill('#33ccff');
    text("Tritão", 300, 250);
       }
    else if (mouseX <= 327 && mouseX >= 277 && mouseY >= 280 && mouseY <= 299) {
    fill('#33ccff');
    textSize(25)
    text("Titã", 300, 300);
         if (mouseIsPressed) {
      screen = 11;
    }
       }
      else if (mouseX <= 149 && mouseX >= 49 && mouseY >= 231 && mouseY <= 247) {
    fill('#33ccff');
    textSize(25)
    text("Plutão", 100, 250);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
      else if (mouseX <= 152 && mouseX >= 51 && mouseY >= 280 && mouseY <= 297) {
    fill('#33ccff');
    textSize(25)
    text("Europa", 100, 300);
         if (mouseIsPressed) {
      screen = 10;
    }
       }
   }
  else if(screen==11){
    background(endgame);
    textFont(fonte);
    textSize(40);
    textAlign(CENTER);
    
    fill(248, 248, 255);
    text("PARABÉNS", width/2, 100);
    textSize(15);
    text("Você completou todas as suas missões", width/2, 200);
    text("e assim você chegou ao fim da sua jornada", width/2, 225);
    text("Pressione ESC para voltar para o menu inicial", width/2, 350);
    if (keyIsDown(ESCAPE)) {
      screen = 1
    }
  }
  else if(screen==3){
    background(instructions);
    textFont(fonte);
    textSize(40);
    textAlign(CENTER);
  
   
    fill(248, 248, 255);
    text("INSTRUCTIONS", 200, 75);
    textSize(20);
    text("Em 1977, duas sondas gêmeas", width/2, 150);
    text("eram enviadas para os confins", width/2, 175);
    text("do Sistema solar (região que", width/2, 200);
    text("jamais havia sido explorada", width/2, 225);
    text("antes), com o objetivo de entender", width/2, 250);
    text("quem somos nos no universo.", width/2, 275);
    text("CONTINUAR", 300, 325);
    textSize(15);
    text("Pressione ESC para voltar para o menu inicial", width/2, 375);

    
    if (mouseX <= 357 && mouseX >= 243 && mouseY >= 312 && mouseY <= 323){
    fill('#33ccff');
    textSize(20)
    text("CONTINUAR", 300, 325);
      if (mouseIsPressed){
      screen = 12
      }
    }
    if (keyIsDown(ESCAPE)) {
      screen = 1
    }
  }
    else if(screen==12){
    background(instructions);
    textFont(fonte);
    textSize(40);
    textAlign(CENTER);
    fill(248, 248, 255);
    text("INSTRUCTIONS", 200, 75);
    textSize(15);
    text("A nossa estrela mãe, o Sol, surgiu há,", width/2, 150);
    text("aproximadamente 5 bilhões de anos.", width/2, 175);
    text("Mais ou menos 1 bilhão de anos antes", width/2, 200);
    text("do que o nosso planeta natal.", width/2, 225);
    textSize(15);
    text("Pressione ESC para voltar para o menu inicial", width/2, 375);
    textSize(20);
    text("CONTINUAR", 100, 325);
      
    if (mouseX <= 157 && mouseX >= 40 && mouseY >= 312 && mouseY <= 323){
    fill('#33ccff');
    textSize(20)
    text("CONTINUAR", 100, 325);
      if (mouseIsPressed){
      screen = 13
      }
    }
    if (keyIsDown(ESCAPE)) {
      screen = 1
    }
  }
   else if(screen==13){
    background(instructions);
    textFont(fonte);
    textSize(40);
    textAlign(CENTER);
    fill(248, 248, 255);
    text("INSTRUCTIONS", 200, 75);
    textSize(15);
    text("O nosso sistema possui 8 planetas,", width/2, 150);
    text("sendo eles, respectivamente: Mercúrio.", width/2, 175);
    text("Vênus (o mais quente), Terra, Marte", width/2, 200);
    text("Júpter (o maior), Saturno, Urano e Netuno.", width/2, 225);
    textSize(15);
    text("Pressione ESC para voltar para o menu inicial", width/2, 375);
    textSize(20);
    text("CONTINUAR", 300, 325);
      
    if (mouseX <= 357 && mouseX >= 243 && mouseY >= 312 && mouseY <= 323){
    fill('#33ccff');
    textSize(20)
    text("CONTINUAR", 300, 325);
      if (mouseIsPressed){
      screen = 14
      }
    }
    if (keyIsDown(ESCAPE)) {
      screen = 1
    }
  }
  else if(screen==14){
    background(instructions);
    textFont(fonte);
    textSize(40);
    textAlign(CENTER);
    fill(248, 248, 255);
    text("INSTRUCTIONS", 200, 75);
    textSize(15);
    text("Agora é com você! Viaje pelo Sistema,", width/2, 150);
    text("Solar mostrando seus conhecimentos", width/2, 175);
    text("a respeito dos corpos celestes que", width/2, 200);
    text("orbitam perto de nós.", width/2, 225);
    textSize(15);
    text("Pressione ESC para voltar para o menu inicial", width/2, 375);
    textSize(40);
    text("PLAY", width/2, 325);
      
    if (mouseX <= 261 && mouseX >= 152 && mouseY >= 312 && mouseY <= 323){
    fill('#33ccff');
    textSize(40)
    text("PLAY", width/2, 325);
      if (mouseIsPressed){
      screen = 2
      }
    }
    if (keyIsDown(ESCAPE)) {
      screen = 1
    }
  }
   else if(screen==4){
    background(credits);
    textFont(fonte);
    textSize(55);
    textAlign(CENTER);
   
    fill(248, 248, 255);
    text("CREDITS", 200, 100);
    textSize(15)
    text("Aluno: Pedro Victor Cavalcante de Araújo", width/2, 150);
    text("Turma 1C", width/2, 175);
    text("Professor: Aquiles Burlamaqui", width/2, 200);
    textSize(20);
    text("FOTO ALUNO", 300, 350);
    text("FOTO PROFESSOR", 100, 350);
    textSize(15);
    text("Pressione ESC para voltar para o menu inicial", width/2, 400);
     
   if (mouseX <= 359 && mouseX >= 240 && mouseY >= 339 && mouseY <= 347){
    fill('#33ccff');
    textSize(20)
    text("FOTO ALUNO", 300, 350);
      if (mouseIsPressed){
      screen = 15
      }
    }
      if (mouseX <= 193 && mouseX >= 11 && mouseY >= 339 && mouseY <= 347){
    fill('#33ccff');
    textSize(20)
    text("FOTO PROFESSOR", 100, 350);
      if (mouseIsPressed){
      screen = 16
      }
    }
       if (keyIsDown(ESCAPE)) {
      screen = 1
    }
   }
  else if(screen==15){
    background(aluno);
    textFont(fonte);
    fill(248, 248, 255);
    textSize(55);
    textSize(15);
    text("Pressione SETA DA ESQUERDA para voltar", width/2, 25);
       if (keyIsDown(LEFT_ARROW)) {
      screen = 4
    }
   }
   else if(screen==16){
    background(prof);
    textFont(fonte);
    fill(248, 248, 255);
    textSize(15);
    text("Pressione SETA DA ESQUERDA para voltar", width/2, 25);
       if (keyIsDown(LEFT_ARROW)) {
      screen = 4
    }
   }
 }