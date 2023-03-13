import time
import board
import adafruit_dht
#Initial the dht device, with data pin connected to:
dhtDevice = adafruit_dht.DHT11(board.D4)
while True:
    try:
        # Print the values to the serial port
        temperature_c = dhtDevice.temperature
        temperature_f = temperature_c * (9 / 5) + 32
        humidity = dhtDevice.humidity
        f = open("data.json", "w")
        f.write("{{ \"temperature_c\":{:.2f},\"temperature_f\":{:.2f}, \"humidity\":{} }}".format(temperature_c, temperature_f, humidity))
    except RuntimeError as error:
        print(error.args[0])
    time.sleep(2.0)