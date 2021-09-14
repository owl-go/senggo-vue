export function base64_encode(str){
    let buffer=Buffer.from(str);
    return buffer.toString('base64');
}