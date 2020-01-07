BASE URL https://dadjokesdb.herokuapp.com

#EndPoints
GET /api/users/
  -Returns all Users
 
GET /api/users/:id
  -Returns user with specific id 
  
POST /api/users/register 
  -input: 
    -username -Required
    -password -Required
  -Returns a success message
  
  POST /api/users/login
    -input: 
      -username -Required
      -password -Required
    -Returns a token
    
    
