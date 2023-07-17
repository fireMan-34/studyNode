openssl req -new -sha256 -nodes -out ./SSL/server.csr -newkey rsa:2048 -keyout ./SSL/server.key -config ./server.csr.cnf

openssl x509 -req -in ./SSL/server.csr -CA ./SSL/rootCA.pem -CAkey ./SSL/rootCA.key -CAcreateserial -out ./SSL/server.crt -days 500 -sha256 -extfile ./v3.ext
