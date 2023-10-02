const baseHeaders = { 'Content-Type': 'application/json' }
const authHeaders = {
  ...baseHeaders,
}

export async function fetcher(url, method, headers = {}, body = {}) {

  try {
    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body)
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
  return fetcher(url, 'GET', baseHeaders)
}

fetcher.post = function (url, data) {
  return fetcher(url, 'POST', baseHeaders, data)
}

fetcher.delete = function(url, data = {}, headers = baseHeaders) {
  return fetcher(url, 'DELETE', headers, data);
}
