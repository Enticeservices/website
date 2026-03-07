#!/bin/bash

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

# Install xmltodict inside venv
pip install --upgrade pip
pip install requests xmltodict

# Run Python code
python3 - << 'EOF'
import requests
import xmltodict
import json

rss_url = "https://blog.hubspot.com/marketing/rss.xml"

response = requests.get(rss_url)
response.raise_for_status()

rss_dict = xmltodict.parse(response.text)

with open("public/hubspot_marketing_rss.json", "w", encoding="utf-8") as f:
    json.dump(rss_dict, f, indent=4, ensure_ascii=False)

print("RSS feed saved as hubspot_marketing_rss.json")
EOF