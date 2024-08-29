import client from "./contenful";

export const getRichImage =async(assetId)=>{
try {
    let a= await client.getAsset(assetId)  // need assest id
    console.log(a)
    let url=a.fields.file.url
    return url
    
} catch (error) {
    console.log(error)
    
}

}