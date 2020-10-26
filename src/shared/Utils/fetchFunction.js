export const fetchFunction = async (url, config) => {

    const resp = await fetch(url, config);
    const responseData = await resp.json();

    return responseData

}

