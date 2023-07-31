function getCheckChanDaoId() {
  return Array.from(document.querySelectorAll('.checked>.c-id>.checkbox-primary>input')).map(item => item.value).join(' ');
}