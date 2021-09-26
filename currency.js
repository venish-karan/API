 function Converted(R, N) {
                const convertedNum = R * N;

                return convertedNum;
            }
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.form-convert').onsubmit = function() {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=046332fa75656e2f25e274b982ff6b07')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                const currency = document.querySelector('#input-currency').value.toUpperCase();
                const rate = data.rates[currency];
                if(rate !== undefined) {
                document.querySelector('#result-1').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}`;
                } else {
                        document.querySelector('#result-1').innerHTML = `INVALID CURRENCY.`
                    }
       
            }).catch(error => {
        console.log('Error:', error);
    });
    // .then(response => {
    //     return response.json()
    // })
        return false;
    }
   
    document.querySelector('.form-history').onsubmit = function() {
        fetch('http://api.exchangeratesapi.io/v1/latest?access_key=046332fa75656e2f25e274b982ff6b07')
        .then(response => response.json())
        .then(data => {
            const numCurr = document.querySelector('.input-number').value;
            const currency = document.querySelector('.input-history').value.toUpperCase();
            const rate = data.rates[currency];
           
            if(rate !== undefined) {
                // document.querySelector('#result-2').innerHTML = `${numCurr} EUR is equal to ${conversion(rate, numCurr).toFixed(3)} ${currency}`;
                                document.querySelector('#result-2').innerHTML = `${numCurr} EUR is equal to ${Converted(rate, numCurr)} ${currency}`;
                } else {
                        document.querySelector('#result-2').innerHTML = `INVALID CURRENCY.`
                    }
        })
        .catch(error => {
                console.log('Error:', error);
           });
    return false;
    }
    
    
});