const redirect = sessionStorage.getItem('spa-redirect')

if (redirect) {
  sessionStorage.removeItem('spa-redirect')
  history.replaceState(null, '', redirect)
}
