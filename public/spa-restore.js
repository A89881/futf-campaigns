const redirect = new URLSearchParams(location.search).get('spa')

if (redirect?.startsWith('/') && !redirect.startsWith('//')) {
  history.replaceState(null, '', redirect)
}
