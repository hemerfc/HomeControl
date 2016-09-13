#define W5100

#include "SocketIOClient.h"
#include "Ethernet.h"
#include "SPI.h"

SocketIOClient client;

byte mac[] = { 0xAA, 0x00, 0xBE, 0xEF, 0xFE, 0xEE };
byte ip[] = { 192, 168, 1, 143 };
byte dn[] = { 8, 8, 8, 8 };
byte gw[] = { 192, 168, 1 , 10 };

char hostname[] = "homecontrol1.herokuapp.com";
int port = 80;

extern String RID;
extern String Rname;
extern String Rcontent;

unsigned long previousMillis = 0; 
long interval = 10000; 
void setup() {
        pinMode(13, OUTPUT);  
	pinMode(10, OUTPUT);    //for some ethernet shield on the mega : disables the SD and enables the W5100
	digitalWrite(10, LOW);
	pinMode(4, OUTPUT);
	digitalWrite(4, HIGH);
	Serial.begin(9600);

	Ethernet.begin(mac, ip, dn, gw );

	if (!client.connect(hostname, port))
		Serial.println(F("Not connected."));
	if (client.connected())
	{
		client.send("connection", "message", "Connected !!!!");
	}
	else
	{
		Serial.println("Connection Error");
		while(1);
	}
	delay(1000);
}

void loop()
{
  
  /*
	unsigned long currentMillis = millis();
	if(currentMillis - previousMillis > interval)
	{
	  previousMillis = currentMillis; 
	  //client.heartbeat(0);
	  client.send("atime", "message", "Time please?");
	}*/
	if (client.monitor())
	{
		Serial.println(RID);
		if (RID == "cmd" && Rname == "on") {
                  digitalWrite(13, HIGH);
                  client.send("cmd", "on", "data");
		}
		if (RID == "cmd" && Rname == "off") {
                  digitalWrite(13, LOW);
                  client.send("cmd", "off", "data");
		}
	}
}

