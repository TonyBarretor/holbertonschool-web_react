export function getFullYear() {
    return new Date().getFullYear();
  }
  
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLastestNotification() {
  return {__html: '<strong>Urgent requirement</strong> - complete by EOD'}
}
//se puede importar 2 a la vez, buscar despues