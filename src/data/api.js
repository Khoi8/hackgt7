
function api() {
    
    var url = "https://cors-anywhere.herokuapp.com/https://gateway-staging.ncrcloud.com/order/3/orders/1";
    var headers = new Headers ({
    'Access-Control-Allow-Origin': "*",
    'Content-Type': 'application/json',
    'Authorization': 'Basic '+ btoa('ceffc087-ef78-4cae-b9b7-388bc121a699:041298Ad!'),
    'nep-organization':'13f84887ed8146b1ab93fa5256a54040',
    'nep-enterprise-unit':'17ad1b1b8ebd4e7e99ff9d445711f7ca',
    Date: Date.now(),
    });
    
    
    const createOrder = (async (expireAt, comments) => {
        const promise1 = new Promise((resolve, reject) => {
            resolve('Success!');
        });
          
        promise1.then((value) => {
            try {
                const res = fetch (url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({
                        "expireAt": expireAt,
                        "comments": comments
                    })
                })
    
                const result_as_json = res.json();
                return result_as_json
    
            } catch(e) {
                console.log(e);
            }
            console.log(value);
        });
           
    })

    
    
    let data = createOrder("2020-05-08T14:26:48Z", "Good-Morning");
    console.log(data);

}


export default api();
