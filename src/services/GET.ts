const GET = async (url: string) => {

    const response = await fetch(url, {method: 'GET', credentials: "include"})
        .then(res => res.json())
        .then(res => { return res })
        .catch(error => { throw new Error(error) })

    return response    
}

export default GET