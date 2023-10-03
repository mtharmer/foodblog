const baseHeaders = { "Content-Type": "application/json" }

function getAuthHeaders (auth) {
  return {
    ...baseHeaders,
    "uid": auth.user.uid,
    "client": auth.token.client,
    "access-token": auth.token.token
  }
}

export async function fetcher(url, method, headers = baseHeaders, body = null) {
  try {
    const res = await fetch(url, {
      method,
      headers,
      body: (body) ? JSON.stringify(body) : null
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  } catch(err) {
    return Promise.reject(err.message);
  }
}

fetcher.get = function (url) {
  return fetcher(url, "GET")
}

fetcher.post = function (url, data) {
  return fetcher(url, "POST", baseHeaders, data)
}

fetcher.authGet = function (url, auth) {
  return fetcher(url, "GET", getAuthHeaders(auth));
}

fetcher.authPost = function (url, data, auth) {
  return fetcher(url, "POST", getAuthHeaders(auth), data);
}

fetcher.authDelete = function(url, auth) {
  return fetcher(url, "DELETE", getAuthHeaders(auth));
}
