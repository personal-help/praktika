#include <Adafruit_GFX.h>
#include <Adafruit_PCD8544.h>
Adafruit_PCD8544 display = Adafruit_PCD8544(13,12,11,10,9);


String massMenu[3] = {"MENU","ONE","TWO"};

int massMoney[4] = {10,20,50,100};

int curs=18;

int one=100;
int two=130;

int price=100;

void setup() {
  Serial.begin(9600);
  pinMode(5,OUTPUT);
  pinMode(6,INPUT);
  pinMode(7,INPUT);
  pinMode(8,INPUT);

  digitalWrite(5,LOW);
    
    display.begin();
    display.clearDisplay();
    display.display();
    
    display.setContrast(50); // установка контраста
    display.setTextSize(1);  // установка размера шрифта
    display.setTextColor(BLACK); // установка цвета текста
}

void menu(){

    display.setCursor(30,0); 
    display.print(massMenu[0]);
    display.setCursor(0,7); 
    display.print("--------------");
    
    display.setCursor(15,18); 
    display.print(massMenu[1]);   

    display.setCursor(15,33); 
    display.print(massMenu[2]);

    display.setCursor(0,43); 
    display.print("--------------");

    display.display();

    Cursor();
}

void Cursor(){
  
    display.fillRect(0, curs, 10, 8, BLACK);

   if(digitalRead(8)==HIGH){
     display.setCursor(0,curs); 

    display.fillRect(0, curs, 90, 8, WHITE);
    display.setTextColor(BLACK);
         
     curs = 33;
   }

   if(digitalRead(6)==HIGH){
     display.setCursor(3,curs); 
    
    display.fillRect(0, curs, 90, 8, WHITE);
    display.setTextColor(BLACK);
         
     curs = 18;
   }
}

void check(){
  if(digitalRead(7)==HIGH){

    switch(curs){
      case 18:

       display.clearDisplay();
      display.display();
    
      display.setContrast(50); 
      display.setTextSize(1);  
      display.setTextColor(BLACK); 


        display.setCursor(45,18); 
       display.print(">>");   
 
       display.setCursor(60,18); 
       display.print(one);   
       
       price = one;
   
      break;

      case 33:

         display.clearDisplay();
      display.display();
    
      display.setContrast(50); 
      display.setTextSize(1);  
      display.setTextColor(BLACK); 

      display.setCursor(45,33); 
       display.print(">>");  
        
        display.setCursor(60,33);
        display.print(two); 

        price = two;
       
      break;
    }      
  }  
}

void out(){
   for(int i=0;i<100;i++){
    digitalWrite(5,HIGH);
    delayMicroseconds(40);
    digitalWrite(5,LOW);  
    delay(20);
   }
}

int j=0;

void money(){
 if(price>1){
  int  mon=analogRead(0);

  if(mon>50){
    Serial.println(mon);
    
    j++;    
  }

  else{ if(j>0){Serial.println(j);} 
  
if(j==4){
      price = price-100; 
    
     display.clearDisplay();
      display.display();
    
      display.setContrast(50); 
     
      display.setCursor(45,33); 
       display.print(">>");  
        
        display.setCursor(60,33);
        display.print(price);  

        display.setCursor(0,0);
        display.print(100);
        delay(200);
    }

if(j==3){
      price = price-50; 
    
     display.clearDisplay();
      display.display();
    
      display.setContrast(50); 
     
      display.setCursor(45,33); 
       display.print(">>");  
        
        display.setCursor(60,33);
        display.print(price);
        
        display.setCursor(0,0);
        display.print(50);
        delay(200);  
}

    if(j==1 && mon<69){
      price = price-20; 
    
     display.clearDisplay();
      display.display();
    
      display.setContrast(50); 
      
      display.setCursor(45,33); 
       display.print(">>");  
        
        display.setCursor(60,33);
        display.print(price);
        
        display.setCursor(0,0);
        display.print(20);
        delay(200);  
        
    }

  if(j==2){
      price = price-50; 
    
     display.clearDisplay();
      display.display();
    
      display.setContrast(50); 
      
      display.setCursor(45,33); 
       display.print(">>");  
        
        display.setCursor(60,33);
        display.print(price);

        display.setCursor(0,0);
        display.print(10);
        delay(200);  
    }
  
  j=0;}
  
    
 }

 if(price<1){
     out(); 
    price = 100;
 }
}

void loop() {  
  menu();
  check();
   money();
}
