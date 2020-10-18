const CryptoJS = require("crypto-js");
// function api() {
    
//     var url = "https://cors-anywhere.herokuapp.com/https://gateway-staging.ncrcloud.com/order/3/orders/1";
//     var headers = new Headers ({
//     'Access-Control-Allow-Origin': "*",
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic '+ btoa('ceffc087-ef78-4cae-b9b7-388bc121a699:041298Ad!'),
//     'nep-organization':'13f84887ed8146b1ab93fa5256a54040',
//     'nep-enterprise-unit':'17ad1b1b8ebd4e7e99ff9d445711f7ca',
//     Date: Date.now(),
//     });
    
    
//     const createOrder = (async (expireAt, comments) => {
//         const promise1 = new Promise((resolve, reject) => {
//             resolve('Success!');
//         });
          
//         promise1.then((value) => {
//             try {
//                 const res = fetch (url, {
//                     method: 'POST',
//                     headers: headers,
//                     body: JSON.stringify({
//                         "expireAt": expireAt,
//                         "comments": comments
//                     })
//                 })
//                 // console.log('res');
//                 // console.log(res);
//                 const result_as_json = res.json();
//                 return result_as_json
    
//             } catch(e) {
//                 console.log(e);
//             }
//             console.log(value);
//         });
           
//     })
//     let data = createOrder("2020-05-08T14:26:48Z", "Good-Morning");
//     console.log(data);

// }
// export default api();
let env = {
    //Services for products should be added here
    "site-service": "https://gateway-staging.ncrcloud.com/site" ,
    "security-service": "https://gateway-staging.ncrcloud.com/security" ,
    "order-service": "https://gateway-staging.ncrcloud.com/order/3/orders/1" ,
    "tdm-service": "https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents" ,
    "cdm-service": "https://gateway-staging.ncrcloud.com/cdm" ,
    "catalog-items-service": "https://gateway-staging.ncrcloud.com/catalog/items" ,
    "selling-service":"https://gateway-staging.ncrcloud.com/emerald/selling-service/v1/carts" ,
    "selling-configuration-service":"https://gateway-staging.ncrcloud.com/emerald/selling-service/c1" ,
    "catalog-service":"https://gateway-staging.ncrcloud.com/catalog/2" ,
    // //My environment
    //  "catalog-price-item", "https://gateway-staging.ncrcloud.com/catalog/item-prices/" ,

    // Any required fields for a call should be added here
    "bsp-organization": "69602ae95c0747f09d37af522a7915c2" ,
    "bsp-site-id": "fb90d63d2296476c810eb225c447415b" ,
    "bsp-shared-key": "15ad09a5ab7e4277a66cf4b56ddc4029" ,
    "bsp-secret-key": "f999f42996654d568898f59ac22cf5c5",
}
// Ensures any content has variables substituted; supports recursive
// resolution (environment variable that references environment/global variables)
const convertVariables = function(templateContent) {
    const regexPattern = /({{(.*?)}})/g;
    let convertedContent = templateContent;
    let matchedVar = new RegExp(regexPattern).exec(convertedContent);
    while (matchedVar !== null) {
        const variableReplacement = matchedVar[1];
        const variableName = matchedVar[2];
        const variableValue = env[variableName];
        convertedContent = convertedContent.replace(variableReplacement, variableValue);
        matchedVar = new RegExp(regexPattern).exec(convertedContent);
    }
    return convertedContent;
}
// Extracts the signable content from the request
const signableContent = function(request) {
    const requestPath = convertVariables(request.url.trim()).replace(/^https?:\/\/[^\/]+\//, '/');
    const params = [
        request.method,
        requestPath,
        request.headers['content-type'],
        request.headers['content-md5'],
        convertVariables(request.headers['nep-organization'])
    ];
    return params.filter(p => p && p.length > 0).join('\n');
}
// Generates a unique date-based signing key
const uniqueKey = function(date) {
    const nonce = date.toISOString().slice(0, 19) + '.000Z';
    return env['bsp-secret-key'] + nonce;
}
// Calculates the HMAC signature
const calculateSignature = function() {
    const date = new Date();
     env['date']= date.toGMTString();
    const key = uniqueKey(date);
    const sc = signableContent();
    const hmac = CryptoJS.HmacSHA512(sc, key);
    return CryptoJS.enc.Base64.stringify(hmac);
}
function NCRRequest(path, body, headers, method) {
    const date = new Date();
    const varpath = convertVariables(path);
    headers.append("Date", date.toGMTString());
    headers.append("Origin", varpath);

    let requestOptions = {
        method: method,
        headers: headers,
        body: convertVariables(body),
        redirect: 'follow',
        url: varpath,
        mode: 'cors',
    };

    let req = new Request(requestOptions.url, requestOptions);

    // Stores the generated HMAC signature under the access key
    const signature = calculateSignature(req);
    const sharedKey = env['bsp-shared-key'];
    env['bsp-access-key'] = `AccessKey ${sharedKey}:${signature}`;

    console.log(env['bsp-access-key']);
    requestOptions.headers.append("Authorization", env['bsp-access-key']);

    return new Promise((resolve, reject) => {
        fetch(req)
            .then(response => resolve(response))
            .catch(error => reject(error));
    });

}
export default NCRRequest;