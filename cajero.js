
class Monedero
{
	constructor(v, c)
	{
		this.valor = v;
		this.cantidad = c;	
	}
}

let caja = [];
caja.push( new Monedero(100, 3) );
caja.push( new Monedero(50, 3) );
caja.push( new Monedero(20, 5) );
caja.push( new Monedero(10, 5) );

contar();

let resultado = document.getElementById("resultado");
let boton_saldo = document.getElementById("ver_saldo");
boton_saldo.addEventListener("click", saldo);
let boton_depositar = document.getElementById("depositar");
boton_depositar.addEventListener("click", deposito);

function deposito() {
	let monto = prompt("Por favor indique el valor a depositar de $: 100, 50, 20");
	if (monto == 100 || monto == 50 || monto == 20 ) {
	  if (monto == 100) {
		let cien = prompt("Indíque la cantidad");
		while (isNaN(cien)) {
		  cien = prompt(cien + " No es un valor correcto, Por favor indíque un valor correcto");
		}
		caja[0].cantidad = caja[0].cantidad + parseInt(cien);
		actualizar();
		resultado.innerHTML += "Se ha depositado " + cien + " Billetes de: $" + monto;
	  }
	  if (monto == 50) {
		let cincuenta = prompt("Indíque la cantidad");
  
		while (isNaN(cincuenta)) {
		  cincuenta = prompt(cincuenta + " No es un valor correcto, Por favor indíque un valor correcto");
		}
  
		caja[1].cantidad = caja[1].cantidad + parseInt(cincuenta);
		actualizar();
		resultado.innerHTML += "Se ha depositado " + cincuenta + " Billetes de: $" + monto + "<hr />";
	  }
  
	  if (monto == 20) {
		let veinte = prompt("Indíque la cantidad");
  
		while (isNaN(cant_veinte)) {
		  veinte = prompt(veinte + " No es un valor correcto, Por favor indíque un valor correcto");
		}
  
		caja[2].cantidad = caja[2].cantidad + parseInt(veinte);
		actualizar();
		resultado.innerHTML += "Se ha depositado " + veinte + " Billetes de: $" + monto;
	  }
	}
	else {
	  resultado.innerHTML = ("Valor no valido, por favor indicar los valores correspondientes para depositar");
	}
  }


function saldo()
{
	var saldo = 0
  for (const v of caja) {
    saldo += v.valor * v.cantidad;
    resultado.innerHTML = "Su saldo es: $" + saldo + "<hr />";
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