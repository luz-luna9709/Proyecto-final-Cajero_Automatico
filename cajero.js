
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

var div = 0;
var papeles = 0;
var resultado = document.getElementById("resultado");
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

var b = document.getElementById("retirar");
b.addEventListener("click", entregarDinero);
function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    if (total >= dinero)
    {
        for(bi of caja)
        {
            if (dinero > 0)
            {
                div = Math.floor(dinero/bi.valor);
                if (div>bi.cantidad)
                {
                    papeles = bi.cantidad;
                }
                else
                {
                    papeles = div;
                }
                    bi.cantidad = bi.cantidad-papeles;
                for (var i = 0; i < papeles; i++)
                {
                }
                dinero -= (bi.valor * papeles);
            }
        }
        if (dinero == 0)
        {
            resultado.innerHTML += "Se ha retirado:" + cantidad + "<br />";
   
             resultado.innerHTML += "<hr />";
        contar();  
        }
        else
        {
            resultado.innerHTML += "No tengo los billetes para esa suma, intenta otro valor <hr />";
        }
    }
    else
    {
        resultado.innerHTML += "No tengo disponible esa cantidad :( <hr />";
    }  
}



 
var boton_saldo = document.getElementById("ver_saldo");
boton_saldo.addEventListener("click", saldo);

function saldo()
{
    var monto = 0;
    for(var v of caja)
    {
        monto = monto + v.valor * v.cantidad;
        total = monto;
        resultado.innerHTML = "Su saldo actual es: " + monto + "<hr />";
    }
}





var boton_depositar = document.getElementById("depositar");
boton_depositar.addEventListener("click", depositar);

function depositar()
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



