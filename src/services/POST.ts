const POST = async (url: string, body: string) => {

    const response = await fetch(url, {method: 'POST', credentials: "include", body: body, headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }})
        .then(res => res.json())
        .then(res => { return res })
        .catch(error => { throw new Error(error) })

    return response    
}

export default POST