const fetchCat = async (text: string) => {
    const OPEN_API_DOMAIN:string = "https://cataas.com";
    const response:Response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
    const responseJson:any = await response.json();
    return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

export default fetchCat;