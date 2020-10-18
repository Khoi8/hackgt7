
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
        try {
            const res = await fetch (url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "expireAt": expireAt,
                    "comments": comments
                })
            })
            .then((result_as_json) => result_as_json.json());
            return res;
        } catch(e) {
            console.log(e);
        }   
    })
    
    console.log(createOrder("2020-05-08T14:26:48Z", "Good-Morning"));

}
export default api();
