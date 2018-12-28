function order(orderId, timeout) {
    console.log("ID Order " + orderId);
    ProsesOrder(orderId,timeout);
}

function ProsesOrder(orderId, timeout) {
    setTimeout(function() {
        console.log("ID Order " + orderId + " Processed");
    }, timeout);
}

order(105,3000);
order(101,1000);
order(108,2000);


