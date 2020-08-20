
async function registrarPago(){

    var data = {
        payment_id : 123,
        payment_date: 123,
        card_number: 123,
        card_type: 123, 
        currency:123, 
        amount: 123, 
        parking_id: 123,
        reservation_id: 123
    }

    try{
        const resp = await fetch('pagos/registrar', {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: { 'Content-Type': 'application/json'} 
        })  
        console.log(resp);
    }
    catch(error){
        console.log(error);
    }

}