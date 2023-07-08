# 设置本地环境变量
Set-Variable OPENSSL_CONFIG  "d:\Tool\OpenSSL-Win64\bin"

# mkdir ssl
Set-Location ./ssl
# Set-Location ./conf
# demo 自己起的名字
# openssl.exe genrsa -des3 -out demo.key 1024 

# 文件 创建csr证书
# openssl.exe req -new -key demo.key -out demo.csr



# Copy-Item "demo.key" -Destination "demo.key.org"
# 生成 crt 证书
# openssl.exe x509 -req -days 365 -in demo.csr -signkey demo.key -out demo.crt

Remove-Item ./ssl
New-Item ./ssl

$Password = 123456

# 生成服务端 key
openssl genrsa -des3 -out lingxi.server.key 2048
# 生成服务端证书
openssl req -x509 -new -nodes -key lingxi.server.key -sha256 -days 1024 -out lingxi.server.pem
# 客户端生成 csr 证书 和 key
openssl req -new -sha256 -nodes -out lingxidev.com.csr -newkey rsa:2048 -keyout lingxidev.com.key -subj "/C=CN/ST=GD/L=GZ/O=LX/OU=Dev/CN=lingxidev.com/emailAddress=fireman34@lingxidev.com"
# 服务端客户端签名
openssl x509 -req -in lingxidev.com.csr -CA lingxi.server.pem -CAkey lingxi.server.key -CAcreateserial -out lingxidev.com.crt -days 500 -sha256 -extensions "authorityKeyIdentifier=keyid,issuer\n basicConstraints=CA:FALSE\n keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment\n subjectAltName=DNS:*.lingxidev.com"