export const endpoint = 'https://2013.deolhonasmetas.org.br/'

export const get = (url) => {
    return fetch(`${endpoint}/${url}`)
        .then(data => data.json())
        .then(response => response)
}