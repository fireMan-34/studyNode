$env:JAVA_TEMP = '12345'
Start-Process -FilePath pwsh -NoNewWindow -ArgumentList '-c', '$env:JAVA_TEMP'