export function getFullYear() {
    return new Date().getFullYear();
  }
  
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

//se puede importar 2 a la vez, buscar despues