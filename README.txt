HOW TO RUN:

- Extract zipped folder to '/home/username'
- In the command line put in the command:
	$ python3 ./secoms319-main/DHT11.py
- The previous command updates the data.json file with current readings of DHT11 sensor
- End the execution with 'Crt + C'
- In the command line put in the command:
	$ python3 -m http.server 8888
- In a web browser, go to the following web address:
	http://0.0.0.0:8888/secoms319/index.html
