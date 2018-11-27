export const endpoint = ''

export const get = (url) => {
    return fetch(`${endpoint}/${url}`)
        .then(data => data.json())
        .then(response => response)
}