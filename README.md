Dad Jokes API
===

BASE URL: https://dadjokesdb.herokuapp.com
===

#EndPoints

POST /api/user/register

  `-input: 
    -username -Required
    -password -Required
  -Returns a success message`
  
  POST /api/user/login
  
    `-input: 
      -username -Required
      -password -Required
    -Returns a token`
    
GET /api/user/

  `-Returns all Users`
 
GET /api/user/:id

  `-Returns user with specific id `
  

  
  
