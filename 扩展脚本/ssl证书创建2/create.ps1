$Yes = 'y'
$isResetRootCA = Read-Host -Prompt "是否需要重新生成根证书, 是则输入 y"
$DomainName = Read-Host -Prompt "需要生成的服务域名"

# https://blog.51cto.com/walkerqt/946122
# https://blog.csdn.net/benben_2015/article/details/80633073
# https://webpack.docschina.org/configuration/dev-server/#devserverserver
# https://nginx.p2hp.com/en/docs/http/configuring_https_servers.html

# 注意配置是指 conf 的文件地址
# 注意默认是有安装的openSSL ，我们只需要添加 config 的文件路径到全局环境变量就可以了

if ($isResetRootCA -eq $Yes) {
  # 不涉及域名
  # 生成自签名根证书
  Write-Output "生成自签名证书-密钥"

  openssl genrsa -aes256 -out rootCA.key 2048

  Write-Output "生成自签名证书-根证书"

  openssl  req -new -x509 -days 1024 -key rootCA.key -subj "/C=CN/ST=GD/L=GZ/O=LX/OU=Dev/CN=maXuFeng/emailAddress=524915379@qq.com" -out rootCA.crt
}

Write-Output "生成服务器-私钥"

openssl genrsa -out "$DomainName.server.key" 2048

Write-Output "生成服务器证书-请求文件"

openssl req -new -key "$DomainName.server.key" -subj "/C=CN/ST=GD/L=GZ/O=LX/OU=Dev/CN=$DomainName/emailAddress=524915379@qq.com" -out "$DomainName.server.csr"

Write-Output "根证书給服务器-签名"

openssl ca -config './openssl.cnf' -in "$DomainName.server.csr" -cert rootCA.crt -keyfile rootCA.key -out "$DomainName.server.crt"

Write-Output "生成客户端-私钥"

openssl genrsa -out "$DomainName.client.key" 2048

Write-Output "生成客户端证书-请求文件"

openssl req -new -key "$DomainName.client.key" -subj "/C=CN/ST=GD/L=GZ/O=LX/OU=Dev/CN=fireman34/emailAddress=524915379@qq.com" -out "$DomainName.client.csr"

Write-Output "根证书给客户端-签名"

openssl ca -config './openssl.cnf' -in "$DomainName.client.csr"  -cert rootCA.crt -keyfile rootCA.key -out "$DomainName.client.crt"

