$("button").on("mousedown", function () {
    tetra
        .service({
            service: 'local.transaction.Bridge',
            namespace: 'monetplus.sample'
        })
        .reset()
        .connect()
        .call('GetValue', {
            hide: true,
            data: {
                message: "Veskery odpor Je zbytecny.",
            }
        })
        .success(function (e) {


            // SUCCESS HANDLER
            // $("body, button").toggleClass("success");
            // $('button').html('<img src="img/checked.png"/> Buy another ');
            alert(e.message)
            console.log(e.message);


        })
        .error(function (e) {

            // ERROR HANDLER
            // $("body, button").toggleClass("error");
            // $('button').html('<img src="img/error.png"/> Payment failed, retry ');
            alert(e.message)
            console.log(e.message);
        })
        .disconnect()
});