# puppeteer_cloud_function
Node function on Google Cloud Platform to take screenshots with headless chrome/puppeteer

HTTP Trigger url:
```https://us-central1-gatsby-stats-site-monitoring.cloudfunctions.net/function-3```

pass the url to take a screenshot of as a GET parameter 

i.e. ```?url=https://example.com&width=1200&height=800``` width and height parameters are expected to be integers 

try copying and pasting this as to get you started: 

```https://us-central1-gatsby-stats-site-monitoring.cloudfunctions.net/function-3?url=https://jacobcavazos.com&width=1200&height=800```
