import requests 
  
# Define endpoint 
endpoint = "https://api.taapi.io/bulk"
  
# Define a JSON body with parameters to be sent to the API 
parameters = {
    "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjJlZjcyNjBmYzVhOGFkZmVjNzdiYzE4IiwiaWF0IjoxNjU5ODU5NTUyLCJleHAiOjMzMTY0MzIzNTUyfQ.um2RSA3l79p4DDit9AtkBEvmef6GV4GulFFnjcXDFQY",
    "construct": {
        "exchange": "binance",
        "symbol": "ETH/USDT",
        "interval": "15m",
        "indicators": [
	    {
                # Relative Strength Index
	        "indicator": "rsi"
	    }
        ]
    }
}
  
# Send POST request and save the response as response object 
response = requests.post(url = endpoint, json = parameters)
  
# Extract data in json format 
result = response.json() 

# Print result
print(result)