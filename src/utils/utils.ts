export const createToken: (length: number) => string = (length) => {
    const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    const b = [];  
    for (let i=0; i<length; i++) {
        const j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[+j];
    }
    return b.join("");
}

export const numberAsCurrency = (number: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MXN',
    });

    return formatter.format(number)
}