# 设置本地 SSL 执行目录 解决找不到变量问题
Set-Variable OPENSSL_CONFIG  "d:\Tool\OpenSSL-Win64\bin"

# mkdir ssl
Set-Location ./ssl
# demo 自己起的名字
openssl.exe genrsa -des3 -out demo.key 1024 
# 文件 创建csr证书
openssl.exe req -new -key demo.key -out demo.csr

Copy-Item "demo.key" -Destination "demo.key.org"
# 生成 crt 证书
openssl.exe x509 -req -days 365 -in demo.csr -signkey demo.key -out demo.crt