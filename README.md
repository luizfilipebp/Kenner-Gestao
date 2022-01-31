# Orientações Básicas

​	Para utilizar a aplicação é necessário possuir o Docker e o Yarn instalado, versão utilizada:

```
- Docker version 20.10.12
- Yarn version 1.22.15
```



# Inicializando o Banco de dados

​	Na pasta raiz da aplicação abra um CLI e utilize o seguinte comando para iniciar o container do banco PostgreSql.

````
docker-compose up
````

​	Informações adicionais do banco de dados:

````
- Porta: 5430
- usuario e senha: postgres
````



​	Após a inicialização do banco utilize o seguinte comando para fazer a migração das tabelas e das relações da aplicação.

````
yarn typeorm migration:run
````

​	

# Inicializando a aplicação

​	Com o container do banco de dados "rodando" e a migração das tabelas feita, utilize o seguinte comando para iniciar a aplicação:

````
yarn dev
````

​	A aplicação será inicializada na porta 3000.



#  Utilizando as rotas

​	Para registar o primeiro usuário da aplicação deixei uma rota sem a necessidade de autenticação. Utilize a rota "/" enviando o seguinte JSON com o método post

````JSON
{
	"name": "NOME",
	"user_name": "USUARIO",
	"password": "SENHA"
}
````

​	

# Login

​	Para fazer a autenticação na aplicação utilize a rota "/login" utilizando o método POST com o seguinte JSON:

````json
{
	"user_name": "USUARIO",
	"password": "SENHA"
}
````

​	Essa rota irá retornar um JSON informando um Token para autenticação. Para fazer a validação nas demais requisições é necessário utilizá-lo . 



# Autenticação

​	Após fazer o Login copie o token gerado. Para utilizar siga os passos abaixo:

````
-Insomnia : No campo "Auth" selecione "Bearer Token". No campo "TOKEN" cole o token gerado na autenticação.

-Postman: No campo "Authorizarion" selecione o "Type" "Bearer Token". No campo "TOKEN"
cole o token gerado na autenticação.
````

​	

# Cadastro de Produtos

​	Para cadastrar um produto é necessário um enviar uma requisição com o método POST para a rota "/produto".

````json
{
	"name": "NOME",
	"description": "DESCRIÇÃO"
}
````



# Listagem de produtos

​	Para listar os produtos cadastrados envie uma requisição com o método GET para a rota "/produto"



# Cadastro de um estoque

​	Para cadastrar um estoque é necessário um enviar uma requisição com o método POST para a rota "/estoque" com o seguinte JSON.

````json
{
	"name": "NOME"
}
````





# Cadastro de movimentações do estoque

​	Com estoque e produto já cadastrado podemos criar as movimentações. 

- Registrar a ENTRADA de um produto:

  ​	Envie um método POST na rota "/estoque/entrada"com o seguinte JSON 

  ````json
  {
  	"estoque_name": "NOMEDOESTOQUE",
  	"produto_id": "IdDOPRODUTO"
  }
  ````

​			Será retornado uma data de entrada o estoque em que o produto está e os dados do produto.



- Registrar a SAÍDA de um produto

  ​	Envie um método POST na rota "/estoque/saida"com o seguinte JSON 

  ````JSON
  {
  	"data_entrada": "DATAdeENTRADAdoPRODUTO"
  }
  ````

​			



# Listagem das movimentações realizadas

​	Para listar as movimentações realizadas envie uma requisição do tipo GET para a rota "/estoque".

​	