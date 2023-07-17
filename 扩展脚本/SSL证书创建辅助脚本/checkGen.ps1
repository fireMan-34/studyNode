openssl x509 -noout -modules -in './SSL/rootCA.pem' | openssl md5
openssl x509 -noout -modules -in './SSL/server.crt' | openssl md5
openssl x509 -noout -modules -in './SSL/server.key' | openssl md5
openssl x509 -noout -modules -in './SSL/server.csr' | openssl md5
