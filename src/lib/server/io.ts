export async function blobToBase64(file: File) {
    const buffer = Buffer.from(await file.arrayBuffer());
    return buffer.toString('base64url')
}