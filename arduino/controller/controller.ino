#define W5100

#include "SocketIOClient.h"
#include "Ethernet.h"
#include "SPI.h"

SocketIOClient client;

byte mac[] = { 0xAA, 0x00, 0xBE, 0xEF, 0xFE, 0xEE };
byte ip[] = { 192, 168, 1, 143 };
byte dn[] = { 8, 8, 8, 8 };
byte gw[] = { 192, 168, 1 , 1 };
//byte gw[] = { 192, 168, 1 , 10 };

char hostname[] = "homecontrol1.herokuapp.com";
int port = 80;
//char hostname[] = "192.168.1.40";
//int port = 3000;

extern String RID;
extern String Rname;
extern String Rcontent;
extern String Rmsg;

unsigned long previousMillis = 0;
long interval = 10000;
void setup() {
  pinMode(A0, OUTPUT);
  pinMode(A1, OUTPUT);
  pinMode(A2, OUTPUT);

  Serial.begin(9600);

  Ethernet.begin(mac, ip, dn, gw );

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
    Serial.println(RID);
    if (RID == "cmd" && Rname == "on") {
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
    }
  }
}


/*
unsigned long currentMillis = millis();
if(currentMillis - previousMillis > interval)
{
  previousMillis = currentMillis;
  //client.heartbeat(0);
  client.send("atime", "message", "Time please?");
}*/
