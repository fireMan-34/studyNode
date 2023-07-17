# step1 创建根SSL证书

# step1-1 生成 RSA-2048 密钥
openssl genrsa -des3 -out ./SSL/rootCA.key 2048
# step1-2 创建新的根SSL证书
openssl req -x509 -new -nodes -key ./SSL/rootCA.key -sha256 -days 1024 -out ./SSL/rootCA.pem

