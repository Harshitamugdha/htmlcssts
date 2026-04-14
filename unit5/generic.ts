export{}

function identity<T>(value: T):T{
    return value;
}

let numResult: number= identity<number>(100);

let strResult: string=identity<string>("Hello this is TS");