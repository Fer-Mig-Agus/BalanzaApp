//variables del nav
const inicioNav = document.querySelector('#inicioNav');
const precioNav = document.querySelector('#precioNav');
const gramosNav = document.querySelector('#gramosNav');

//variables de lo contenedores
const contentPrecio = document.querySelector('#content-precio');
const contentPeso = document.querySelector('#content-peso');
const contentImage = document.querySelector('#content-image');


//variables de los inputs
const precioPrecio = document.querySelector('#precioPrecio');
const montoPrecio = document.querySelector('#montoPrecio');
const precioGramos = document.querySelector('#precioGramos');
const montoGramos = document.querySelector('#montoGramos');


//variables de los botones calcular
const calcularPrecio = document.querySelector('#calcularPrecio');
const calcularPeso = document.querySelector('#calcularPeso');

//variables de los avisos
const avisoPrecio = document.querySelector('#avisoPrecio');
const avisoPeso = document.querySelector('#avisoPeso');

//variables del total
const totalPrecio = document.querySelector('#totalPrecio');
const totalGramos = document.querySelector('#totalGramos');


function addEventListenerNav() {

    inicioNav.addEventListener('click', ()=> {
        resetForm();
        contentImage.style.display = 'block';
        contentPrecio.style.display = 'none';
        contentPeso.style.display = 'none';
    })

    precioNav.addEventListener('click', ()=> {
        contentImage.style.display = 'none';
        contentPrecio.style.display = 'block';
        contentPeso.style.display = 'none';
    })

    gramosNav.addEventListener('click', ()=> {
        contentImage.style.display = 'none';
        contentPrecio.style.display = 'none';
        contentPeso.style.display = 'block';
    })

}

addEventListenerNav();

function addEventListenerInput() {
    precioPrecio.addEventListener('blur', verificarInputPrecio);
    montoPrecio.addEventListener('blur', verificarInputPrecio);
    precioGramos.addEventListener('blur', verificarInputPeso);
    montoGramos.addEventListener('blur', verificarInputPeso);
}


addEventListenerInput();


function verificarInputPrecio(event) {
    const value = event.target.value;
    if (value === '') {
        avisoPrecio.innerHTML = 'Campo vacio';
        avisoPrecio.className = 'failed'
        calcularPrecio.disabled = true;

    } else {
        if (isNaN(value)) {

            avisoPrecio.innerHTML = 'Debe ser un Numero';
            avisoPrecio.className = 'failed'
            calcularPrecio.disabled = true;
        } else {
            avisoPrecio.innerHTML = 'Campo Correcto';
            avisoPrecio.className = 'success'
            calcularPrecio.disabled = false;

        }
    }
    setTimeout(()=> {
        avisoPrecio.innerHTML = '';
        avisoPrecio.className = 'success';
    }, 2000);


}


function verificarInputPeso(event) {
    const value = event.target.value;
    if (value === '') {
        avisoPeso.innerHTML = 'Campo vacio';
        avisoPeso.className = 'failed'
    } else {
        if (isNaN(value)) {

            avisoPeso.innerHTML = 'Debe ser un Numero';
            avisoPeso.className = 'failed'
        } else {
            avisoPeso.innerHTML = 'Campo Correcto';
            avisoPeso.className = 'success'

        }
    }
    setTimeout(()=> {
        avisoPeso.innerHTML = '';
        avisoPeso.className = 'success';

    }, 2000);

}



function resetForm() {
    precioPrecio.value = '';
    montoPrecio.value = '';
    precioGramos.value = '';
    montoGramos.value = '';
    totalPrecio.innerHTML = '';
    totalGramos.innerHTML = '';
}


calcularPrecio.addEventListener('click', (event)=> {

    const evento = event.target;

    if (evento.textContent === 'Calcular') {

        const totalCalculado = calcularTotalPrecio();
    

        if (totalCalculado !== 'undefined' && !isNaN(totalCalculado)) {

            totalPrecio.innerHTML = totalCalculado;
            evento.innerHTML = 'Limpiar';

        } else {
            avisoPrecio.innerHTML = 'Verifique parametros';
            avisoPrecio.className = 'failed'
        }

        setTimeout(()=> {
            avisoPrecio.innerHTML = '';
            avisoPrecio.className = 'success';

        }, 2000);


    } else {
        resetForm();
        evento.innerHTML = 'Calcular';

    }




})


function calcularTotalPrecio() {
    const kilo = precioPrecio.value;
    const monto = montoPrecio.value;
    if (kilo !== '' && monto !== '') {
        total = (monto*1000)/kilo;
        return Math.floor(total);
    }
    return 'undefined';
}






calcularPeso.addEventListener('click', (event)=> {

    const evento = event.target;

    if (evento.textContent === 'Calcular') {

        const totalCalculado = calcularTotalPeso();

        if (totalCalculado !== 'undefined' && !isNaN(totalCalculado) ) {

            totalGramos.innerHTML = totalCalculado;
            evento.innerHTML = 'Limpiar';

        } else {
            avisoPrecio.innerHTML = 'Verifique parametros';
            avisoPrecio.className = 'failed'
        }

        setTimeout(()=> {
            avisoPrecio.innerHTML = '';
            avisoPrecio.className = 'success';

        }, 2000);


    } else {
        resetForm();
        evento.innerHTML = 'Calcular';

    }




})


function calcularTotalPeso() {
    const kilo = precioGramos.value;
    const gramos = montoGramos.value;
    if (kilo !== '' && gramos !== '') {
        total = (gramos*kilo)/1000;
        return Math.floor(total);
    }
    return 'undefined';
}