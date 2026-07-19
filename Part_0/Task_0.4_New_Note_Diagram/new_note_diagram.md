```mermaid
  sequenceDiagram
    participant browser
    participant server@{ "type": "database" }

    note right of browser: When clicked, submit. The browser sends the "text" to /new_note
    note right of browser: The process of sending the data is handled by the form
    browser ->> server: POST: https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: The  server creates a new object to hold the data and adds it to the array 'notes'
    server -->> browser: status code 302
    deactivate server
    Note left of server:  status code 302 is a URL redirect, aka the server tells the browser to reload!

```

  
    
