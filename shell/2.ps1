$paramters = @{
  # 按键绑定
  Key = 'Alt+w'
  # 描述
  BriefDescription = '保存历史'
  # 长描述
  LoginDescription = '保存当前行到命令行里是但不执行它'
  # 脚本块
  ScriptBlock = {
    param($key, $arg) # 当前示例忽略具体参数

    # GetBufferState 为我们提供了命令行(带有光标位置)
    $line = $null
    $cursor = $null
    [Microsoft.PowerShell.PSConsoleReadLine]::GetBufferState([ref]$line, [ref]$cursor);

    # AddToHistory 保存历史记录中的行，但不执行它。
    [Microsoft.PowerShell.PSConsoleReadLine]::AddToHistory($line)

     # 回复命令行就像按下退出键一样
     [Microsoft.PowerShell.PSConsoleReadLine]::RevertLine()
  }
}
Set-PSReadLineKeyHandler @paramters;