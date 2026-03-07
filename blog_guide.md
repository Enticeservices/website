## Fetching HubSpot Blog RSS Feed

This project includes a small automation script that fetches the HubSpot Marketing RSS feed and converts it into a JSON file that the frontend can consume.

The script downloads the RSS XML, converts it to JSON, and stores it inside the `public` folder so it can be served directly by the Vite application.

---

## Requirements

Make sure the following are installed on your system.

* **Python 3.9+**
* **pip**

Check versions:

```
python3 --version
pip --version
```

---

## Python Dependencies

Create a `requirements.txt` file in the project root.

```
requests==2.32.3
xmltodict==0.13.0
```

These libraries are used for:

* **requests** → fetching the RSS feed
* **xmltodict** → converting XML to JSON

---

## Step 1 — Create a Virtual Environment

Navigate to the project root and create a virtual environment.

```
python3 -m venv venv
```

This creates a `venv` folder that isolates Python dependencies for the project.

---

## Step 2 — Activate the Virtual Environment

Mac / Linux:

```
source venv/bin/activate
```

After activation your terminal prompt will look like:

```
(venv) user@machine project %
```

---

## Step 3 — Install Python Dependencies

Install the required libraries.

```
pip install --upgrade pip
pip install -r requirements.txt
```

---

## Step 4 — Run the Fetch Script

The project contains a shell script called:

```
fetch_blogs.sh
```

First make it executable.

```
chmod +x fetch_blogs.sh
```

Then run it:

```
./fetch_blogs.sh
```

---

## What the Script Does

The script performs the following steps:

1. Creates a Python virtual environment
2. Installs required Python libraries
3. Fetches the HubSpot Marketing RSS feed
4. Converts XML to JSON
5. Saves the output file inside the `public` folder

Source RSS feed:

```
https://blog.hubspot.com/marketing/rss.xml
```

Generated file:

```
public/hubspot_marketing_rss.json
```

---

## Output

After running the script you will see:

```
RSS feed saved as hubspot_marketing_rss.json
```

And the file will be available at:

```
public/hubspot_marketing_rss.json
```

Since the file is inside the `public` folder, it will be served directly by the Vite dev server and production build.

Example URL during development:

```
http://localhost:5173/hubspot_marketing_rss.json
```

---

## Running the Script Manually (Optional)

If you prefer to run the Python script directly instead of the shell script:

```
source venv/bin/activate
python update_json.py
```

---

## Notes

* The script can be scheduled using **cron** if periodic updates are required.
* The JSON file is static after generation and will update only when the script runs.
* The frontend reads the JSON file from the `public` directory.
