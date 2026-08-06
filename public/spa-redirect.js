const route = location.pathname + location.search + location.hash
location.replace(`/?spa=${encodeURIComponent(route)}`)
