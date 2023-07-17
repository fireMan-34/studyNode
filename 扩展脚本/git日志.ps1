# https://www.qs5.org/Post/713.html 参考
# https://git-scm.com/docs/git-log/zh_HANS-CN

# $PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
# $PSDefaultParameterValues['*:Encoding'] = 'utf8'

# https://rkeithhill.wordpress.com/2010/05/26/handling-native-exe-output-encoding-in-utf8-with-no-bom/
[System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$PRO_MALL = 'D:\Project\pro-mall';

$PRO_MICRO = 'D:\Project\pro-micro-services';

$PRO_MOBILE = 'D:\Project\pro-mobile';

$PRO_APP = 'D:\Project\pro-mobile-app';

$PRO_ADMIE = 'D:\Project\pro-admin';

$ZR_PRO_MICRO = 'D:\Project\zr\front-micro-services';

$ZR_PRO_MALL = 'D:\Project\zr\front-mall';

$ZR_PRO_MOBILE = 'D:\Project\zr\front-app';

$ZR_PRO_APP = 'D:\Project\zr\front-applet';

$TASKS = $PRO_MALL, $PRO_MICRO, $PRO_MOBILE, $PRO_APP, $PRO_ADMIE, $ZR_PRO_MICRO, $ZR_PRO_MALL,$ZR_PRO_MOBILE,$ZR_PRO_APP;

$OUT_FILE = 'D:\Study\nodeStudy\扩展脚本\temp.txt';

Remove-Item $OUT_FILE;

New-Item $OUT_FILE


foreach ($TASK in $TASKS) {
  Set-Location $TASK
  Write-Output "生成路径 ========== $TASK"
  # git --no-pager log --author="maxufeng" --since=24.hours --no-merges --pretty=format:"%B" | Out-File -Encoding utf8 -Path $OUT_FILE;
  git --no-pager log --author="maxufeng" --since=24.hours --no-merges --pretty=format:"%B" | Add-Content -Encoding utf8 -Path $OUT_FILE;
}

"
---------------------------------
写入时间
" | Add-Content -Encoding utf8 -Path $OUT_FILE

Get-Date | Add-Content -Encoding utf8 -Path $OUT_FILE

Write-Output "
  ---------------------------------
  礼乐崩坏，心系羽族，合乎舟礼。666
  ---------------------------------
  今天我做了哪些事情，😊

  问问自己什么是最珍贵的，
  是否有去珍惜，
  莫道离开悔忆恨，
  但愿人生长安久。

  👇👇👇👇👇👇👇👇👇👇👇👇👇👇
"

Get-Content -Path $OUT_FILE