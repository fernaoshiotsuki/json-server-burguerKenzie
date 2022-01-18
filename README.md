# Api json-server Hamburgueria

Api para simular uma hamburgueria.</br>
base URL:https://json-server-hamburgueriakenzie.herokuapp.com/


# Cadastro

Nessa rota, iremos cadastrar um usuario novo.

Formato da requisição: </br>

Exemplo:</br>

{ </br>
"email": "kakashi@shinobi.com",</br>
"password": "123456",</br>
 "confirmPassowrd": "123456",</br>
"name": "kakashi"</br>
}</br>


Resposta 201 Status 201</br>

{</br>
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtha2FzaGlAc2hpbm9iaS5jb20iLCJpY</br>
  XQiOjE2NDE5OTk4NzUsImV4cCI6MTY0MjAwMzQ3NSwic3ViIjoiNCJ9.v6rjqlaU042Zss7r6dWCqJPvEc7eeXniodC6-SufqrQ",</br>
  "user": {</br>
    "email": "kakashi@shinobi.com",</br>
    "confirmPassowrd": "123456",</br>
    "name": "kakashi",</br>
    "id": 4</br>
  }</br>
}
</br>
Error Bad Request Status 400</br>

 "Email alredy exists"</br>
 
 
# Login</br>

Para entrar na aplicação, precisamos logar.</br>

Formato da requisição: </br>

Exemplo:</br>


{</br></br>
  "email": "kakashi@shinobi.com",</br>
  "password": "123456"</br></br>
}</br>


 
Resposta 201 Status 201</br>

{</br>
  "accessToken":</br> "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imtha2FzaGlAc2hpbm9iaS5jb20iLCJpYXQiOjE2NDI0Nzc2NjUsImV4cCI6MTY0MjQ4MTI2NSwic3ViIjoiNCJ9.RgsbZ4YSQY7QVdb41ab5WBzc7d1Gk950Y_VCED9KkZE",
  "user": {</br></br>
    "email": "kakashi@shinobi.com",</br>
    "name": "kakashi",</br>
    "id": 4</br>
  }</br>
}</br>
 
Error Bad Request Status 400</br>

"Cano not find user"</br>
"Incorrect password"</br>

# Produtos da API

Nessa requisição, iremos obter os produtos oferecidos na hamburgueria</br>

 GET /products</br>
 

Formato da requisição: </br>

Exemplo:</br>


{}</br>
</br></br>
Essa requisição não precisa de corpo.</br>



Resposta 201 Status 201</br>


[</br>
  {</br>
    "name": "Hamburguer",</br>
    "price": "14.00",</br>
    "type": "sanduiche",</br>
    "img": "https://i.ibb.co/fpVHnZL/hamburguer.png"</br>
  },</br>
  {</br>
    "name": "X-burguer",</br>
    "price": "16.00",</br>
    "type": "sanduiche",</br>
    "img": "https://i.ibb.co/djbw6LV/x-burgue.png"</br>
  },</br>
  {</br>
    "name": "Big-Kenzie",</br>
    "price": "18.00",</br>
    "type": "sanduiche",</br>
    "img": "https://i.ibb.co/FYBKCwn/big-kenzie.png"</br>
  },</br>
  {</br>
    "name": "Combo Kenzie",</br>
    "price": "26.00",</br>
    "type": "Combos"</br>
  },</br>
  {</br>
    "name": "Combo Destemido",</br>
    "price": "50.00",</br>
    "type": "Combos"</br></br>
  }</br></br></br>
]


# Cart de produtos</br>

Para trabalhar com o carrinho do usuario, é preciso do userId, assim como o token, adquiridos no login.</br>

Post /cart</br>

 Adicionando items no carrinho</br>
 
Exemplo: 
</br>
  {  </br>
      "name": "Hamburguer",</br>
      "price": "14.00",</br></br>
      "type": "sanduiche",</br>
      "img": "https://i.ibb.co/fpVHnZL/hamburguer.png",</br></br></br>
      "userId": "userId" </br></br>
  
  },</br>
  {</br>
    headers: { Authorization: `Bearer ${token}` },</br>
  }</br>
  
  
  Resposta Status 201</br>
  
  {</br>
  "name": "Fanta Guaraná",</br></br>
  "category": "Bebidas",</br>
  "price": "5.00",</br></br>
  "img": "https://i.ibb.co/cCjqmPM/fanta-guarana.png",</br>
  "userId": 4,</br>
  "id": "TJ0LSbS"</br>
}</br>

Error Status 403</br>
Caso não tenha o id do usuario:</br>
"Private resource creation: request body must have a reference to the owner id"</br>

GET /cart/?userId=${id}</br>
  Pegando lista de items, no carrinho.</br>
Exemplo:</br></br>

 {</br>
  headers: { Authorization: `Bearer ${token}` },</br>
 }
 </br>
 Resposta Status 200</br>
 [</br>
   {</br>
      "name": "Hamburguer",</br>
      "price": "14.00",</br>
      "type": "sanduiche",</br>
      "userId": 2,</br>
      "id": "SUZda6t"</br>
    },</br>
    {</br>
      "name": "Hamburguer",</br>
      "price": "14.00",</br>
      "type": "sanduiche",</br>
      "userId": 2,</br>
      "id": "OwX3Klv"</br>
    }</br>
    ]</br>
    
    
    
    DELETE /cart/${productId}</br>
    
     Deletando items do carrinho</br>
     
    Exemplo:</br>
    url: https://json-server-hamburgueriakenzie.herokuapp.com/cart/{prodId}</br>
    
    Resposta da requisição Status 200</br>
    {}</br>
    

    Error Status 401 </br>
    
    "Cannot read property 'userId' of undefined"</br>



@Shiotsuki-2022



