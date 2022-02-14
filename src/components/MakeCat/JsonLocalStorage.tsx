const jsonLocalStorage = {
    setItem: (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key: string | null) => {
        // @ts-ignore
        return JSON.parse(localStorage.getItem(key));
    },
};

export default jsonLocalStorage;