export default function TabButton({children, onSelect, isSelected}){
    //document.querySelector('button').addEventListener('click', () =>{}) De esta manera se haria en JavaScript estandar donde dentro de {definiriamos el 
    //accionar del botton} pero en react es mucho mas facil, Ya que react tiene codigo declarativo no como JavaScript que tiene codigo imperativo                                                                       

    
    return( 
    <li>
        <button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>
    </li>
    );
}

//Como vemos en react definimos una funcion y el "escuchador" se define en la linea <button onClick={handleClick}>{children}</button>