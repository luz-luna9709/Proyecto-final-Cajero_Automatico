
var cuentas =[
    {nombre:"Pedro",saldo:350},
    {nombre:"Karla",saldo:400},
    {nombre:"Mauricio",saldo:600} 
];

var billetes = [];
billetes=["100"];
billetes=["50"];
billetes=["20"];
billeteses=["10"];

class Billete
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;
	}
}

var caja = [];
caja.push( new Billete(100, 3) );
caja.push( new Billete(50, 3) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 5) );

contar();

var div = 0;
var papeles = 0;

var boton_depositar = document.getElementById("deposito");
boton_depositar.addEventListener("click", deposito);

function deposito()
{
	var monto = prompt("Indica el valor a depositar: Billetes 100, 50, 20 y 10", "100");
	if(monto == 100 || monto == 50 ||  monto == 20 || monto == 10 )
	{
		if(monto == 100)
		{
			var cant_cien = prompt("Indica la cantidad", 1);
			while(isNaN(cant_cien))
			{
				cant_cien = prompt(cant_cien + "No es un valor correcto, Porfavor no este jugando que hay cola");
			}
			caja[0].cantidad = caja[0].cantidad + parseInt(cant_cien);
			resultado.innerHTML += "Se ha depositado " + cant_cien + " Billetes de: $" + monto + "<hr />";
		}

		if(monto == 50)
		{
			var cant_cincuenta = prompt("Indica la cantidad", 1);
			while(isNaN(cant_cincuenta))
			{
				cant_cincuenta = prompt(cant_cincuenta + "No es un valor correcto, Porfavor no este jugando que hay cola");
			}
			caja[1].cantidad = caja[1].cantidad + parseInt(cant_cincuenta);
			resultado.innerHTML += "Se ha depositado " + cant_cincuenta + " Billetes de: $" + monto + "<hr />";
		}

		if(monto == 20)
		{
			var cant_veinte = prompt("Indica la cantidad", 1);
			while(isNaN(cant_veinte))
			{
				cant_veinte = prompt(cant_veinte + "No es un valor correcto, Porfavor no este jugando que hay cola");
			}
			caja[2].cantidad = caja[2].cantidad + parseInt(cant_veinte);
			resultado.innerHTML += "Se ha depositado " + cant_veinte + " Billetes de: $" + monto + "<hr />";
		}

		if(monto == 10)
		{
			var cant_diez = prompt("Indica la cantidad", 1);
			while(isNaN(cant_diez))
			{
				cant_diez = prompt(cant_diez + "No es un valor correcto, Porfavor no este jugando que hay cola");
			}
			caja[3].cantidad = caja[3].cantidad + parseInt(cant_diez);
			resultado.innerHTML += "Se ha depositado " + cant_diez + " Billetes de: $" + monto + "<hr />";
		}

	}
	else
	{
		resultado.innerHTML = ("Por favor ingrese valores correctos o su tarjeta quedara retenida" + "<hr />");
	}
}
function contar()
{
	total = 0
	for (var tot of caja)
	{
		total = total + tot.valor * tot.cantidad;
	}
	console.log(total);
}



