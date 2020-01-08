Dad Jokes API
===

BASE URL: https://dadjokesdb.herokuapp.com
===

#EndPoints

POST /user/register
---

    `-input: 
      -username -Required
      -password -Required
      
    -Returns a success message`
  
POST /user/login
---
  
    `-input: 
      -username -Required
      -password -Required
      
    -Returns a token`
    
GET /user/
---

  `-Returns all Users`
 
GET /user/:id
---

  `-Returns user with specific id `
  
GET /jokes/
  ---
      `-Returns all jokes`
      
GET /jokes/:id
---

      `-Returns jokes by user id`
  
POST /jokes/:id/add-joke
  ---
  
    `-input: 
        -question -Required
        -punchline -Required
        -public -Required
        
        -Requires token
      -Returns a success message`
      
PUT /jokes/:id/edit-joke
---

    `-input: 
        -question -Required
        -punchline -Required
        -public -Required
        
        -Requires token
      -Returns a success message`
  
DELETE /jokes/:id/delete-joke
---

      `-Requires Token
      -Returns success message`
  
  
