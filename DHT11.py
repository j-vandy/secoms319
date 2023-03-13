import time
import board
import adafruit_dht
import os
dhtDevice = adafruit_dht.DHT11(board.D4)
while True:
    try:
        temperature_c = dhtDevice.temperature
        temperature_f = temperature_c * (9 / 5) + 32
        humidity = dhtDevice.humidity
        f = open(os.path.dirname(os.path.abspath(__file__)) + "/data.json", "w")
        f.write("{{ \"temperature_c\":{:.2f},\"temperature_f\":{:.2f}, \"humidity\":{} }}".format(temperature_c, temperature_f, humidity))
        print("{{ \"temperature_c\":{:.2f},\"temperature_f\":{:.2f}, \"humidity\":{} }}".format(temperature_c, temperature_f, humidity))
    except RuntimeError as error:
        print(error.args[0])
    time.sleep(2.0)