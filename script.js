
	const PrecioTotal = () => 
    {
		let precioCamara = 0;
		let precioAlarma = 0;
		let precioCerco = 0;

		let precioFinal;
     
        
        let valorCamara = parseInt(document.getElementById("Camara-Opcion").value);
        let valorAlarma = parseInt(document.getElementById("Alarma-Opcion").value);
        let valorCerco = parseInt(document.getElementById("Cerca-Opcion").value);


        console.log(valorCamara);
		console.log(valorAlarma);
		console.log(valorCerco);

		
		switch(valorCamara)
		{
			case 1 : precioCamara = 0;
			break;
			case 2: precioCamara = 2000;
			break;
			case 3: precioCamara = 3000;
			break;
		}
		switch(valorAlarma)
		{
			case 1 : precioAlarma = 0;
			break;
			case 2 : precioAlarma = 1000;
			break;
			case 3: precioAlarma = 2500;
			break;
		}
		switch(valorCerco)
		{
			case 1 : precioCerco = 0;
			break;
			case 2 : precioCerco = 2100;
			break;
			case 3: precioCerco = 3200;
			break;
		}

		PrecioFinal = precioCamara + precioAlarma + precioCerco;
        document.getElementById("precio").innerHTML = " $  : " + PrecioFinal;
		
    }
	