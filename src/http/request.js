const gitHubMaster = 'thegrevling'

const getPosts = async () => {
    return await fetch(`https://boolean-api-server.fly.dev/${gitHubMaster}/post`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        console.error('error fetching posts: ', error)
    })
}

const getContactById = async (id) => {
    return await fetch (`https://boolean-api-server.fly.dev/${gitHubMaster}/contact/${id}`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        console.error('error fetching contacts: ', error)
    })
}

const postContentToList = async (body) => {
    return await fetch(`https://boolean-api-server.fly.dev/${gitHubMaster}/post`, { 
    method: "POST", 
    body: JSON.stringify(body),
    headers: {"Content-Type":"application/json"},
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        console.error('error posting post', error)
    })
}


const getPostById = async (id) => {
    return await fetch(`https://boolean-api-server.fly.dev/${gitHubMaster}/post/${id}`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        console.error('could not fetch post by id', error)
    }) 

}

const getCommentsOnPost = async (postId) => {
    return await fetch(`https://boolean-api-server.fly.dev/${gitHubMaster}/post/${postId}/comment`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        console.error('could not fetch a posts comments', error)
    })
}

const commentPost = async (postId, body) => {
    return await fetch(`https://boolean-api-server.fly.dev/${gitHubMaster}/post/${postId}/comment`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {"Content-Type":"application/json"},
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        console.error('error commenting post', error)
    })
}

const getContacts = async () => {
    return await fetch(`https://boolean-api-server.fly.dev/${gitHubMaster}/contact`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data
    })
    .catch((error) => {
        console.error('could not fetch a contacts', error)
    })
}

export {getPosts, getContactById, postContentToList, commentPost, getCommentsOnPost, getPostById, getContacts}