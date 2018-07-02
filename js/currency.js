let selected_from,selected_to, converted_value, amount;
function countries(){
    fetch('https://free.currencyconverterapi.com/api/v5/currencies')
    .then(
       successResponse =>{
        console.log("API fetch success")
       return successResponse.json();
        
    },
     errorReponse =>{
        console.log(`${errorReponse} API `);

    })
    .then(
        results =>{
         
        let currency =  results.results;
     
            let selectBoxFrom = document.getElementById('country_currency_from');
            let selectBoxTo = document.getElementById('country_currency_to');
        for(key in currency){
            selectBoxFrom.innerHTML += '<option value='+key+'>'+key+" - "+currency[key].currencyName +'</option>';
            selectBoxTo.innerHTML += '<option value='+key+'>'+key+" - "+currency[key].currencyName +'</option>';          
         }

    })
}

function country_currency_from(){
    selected_from = document.getElementById("country_currency_from").value;
}

function country_currency_to(){
    selected_to = document.getElementById("country_currency_to").value;
}

function convert(){
    amount = document.getElementById("amount").value;
    fetch('https://free.currencyconverterapi.com/api/v5/convert?q='+selected_from+'_'+selected_to)
    .then(
        successResponse =>{
            return(successResponse.json());
        },
        errorReponse =>{
            console.log(errorReponse);
        })
    .then(
        results =>{
            let tax = results.results;
           for(key in tax){
           converted_value = tax[key].val*amount;
           document.getElementById("converted").value = converted_value.toFixed(2)

           }
        }
    )

}