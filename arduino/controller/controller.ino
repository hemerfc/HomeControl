#define W5100

#include "SocketIOClient.h"
#include "Ethernet.h"
#include "SPI.h"

SocketIOClient client;

byte mac[] = { 0xAA, 0x00, 0xBE, 0xEF, 0xFE, 0xEE };
byte ip[] = { 10, 42, 0, 2};
byte dn[] = { 8, 8, 8, 8 };
byte gw[] = { 10, 42, 0, 1 };
//byte gw[] = { 192, 168, 1 , 10 };

char hostname[] = "homecontrol1.herokuapp.com";
int port = 80;
//char hostname[] = "10.42.0.1";
//int port = 3000;

extern String RID;
extern String Rcontent;

unsigned long previousMillis = 0;
long interval = 10000;
void setup() {
  pinMode(A0, OUTPUT);
  pinMode(A1, OUTPUT);
  pinMode(A2, OUTPUT);

  Serial.begin(9600);

  Ethernet.begin(mac, ip, dn, gw );


  Serial.print(F("Connecting to "));  
  Serial.println(hostname);  
  if (!client.connect(hostname, port))
    Serial.println(F("Not connected."));

  if (!client.connected()) {
    Serial.println("Connection Error");
    while (1);
  }
  delay(1000);
}

void loop()
{
  if (client.monitor())
  {   
    String cmd = getValue(Rcontent, ',', 0);
    String port = getValue(Rcontent, ',', 1);
    String val = getValue(Rcontent, ',', 2);
    
    Serial.println("RID="+RID+", cmd="+cmd+", port="+port+", val="+val);
        
    
    if (RID == "cmd" && cmd == "10") {
      int portInt = port.toInt();

      // valid analogic ports on uno from 14 to 19
      if(portInt > 0 && portInt < 6) {
        portInt = portInt + 13;
        
        if(val == "1") {
          digitalWrite(portInt, HIGH);
          client.send("cmd", "data", "3," + port + ",1");
          Serial.println("Send: 3," + port + ",1");
        }
        
        if(val == "0") {
          digitalWrite(portInt, LOW);          
          client.send("cmd", "data", "3," + port + ",0");
          Serial.println("Send: 3," + port + ",0");          
        }
      }
    }
      /*
      if (Rcontent == "1") {
        
        
        digitalWrite(A0, HIGH);
        client.send("cmd", "on", "1");
      }
      if (Rcontent == "2") {
        digitalWrite(A1, HIGH);
        client.send("cmd", "on", "2");
      }
      if (Rcontent == "3") {
        digitalWrite(A2, HIGH);
        client.send("cmd", "on", "3");
      }
    }

    if (RID == "cmd" && Rname == "off") {
      if (Rcontent == "1") {
        digitalWrite(A0, LOW);
        client.send("cmd", "off", "1");
      }
      if (Rcontent == "2") {
        digitalWrite(A1, LOW);
        client.send("cmd", "off", "2");
      }
      if (Rcontent == "3") {
        digitalWrite(A2, LOW);
        client.send("cmd", "off", "3");
      }
    }*/
  }
}

String getValue(String data, char separator, int index)
{
  int found = 0;
  int strIndex[] = {0, -1};
  int maxIndex = data.length()-1;

  for(int i=0; i<=maxIndex && found<=index; i++){
    if(data.charAt(i)==separator || i==maxIndex){
        found++;
        strIndex[0] = strIndex[1]+1;
        strIndex[1] = (i == maxIndex) ? i+1 : i;
    }
  }

  return found>index ? data.substring(strIndex[0], strIndex[1]) : "";
}


/*
unsigned long currentMillis = millis();
if(currentMillis - previousMillis > interval)
{
  previousMillis = currentMillis;
  //client.heartbeat(0);
  client.send("atime", "message", "Time please?");
}*/
