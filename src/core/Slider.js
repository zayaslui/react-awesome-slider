import React, {useState} from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const periodos = [ 2013 , 2014 , 2015, 2016]

const defaultProps = {
	min:0,
	max:10
}

function Slider(props){
const [ value, setValue ] = useState(0);
	React.useEffect( () => {
		if(props.indice || props.indice===0)
		setValue(props.indice)
	},[props.indice])

  return (
    <RangeSlider
    	{...props}
		value={value}
		tooltipLabel={ (label) => {
			return periodos[label]
		}}
		onChange={changeEvent => {
			let numero =  parseInt(changeEvent.target.value)
			setValue(numero);
			props.funcion(numero)
		}}
    />
  );  
}

Slider.defaultProps = defaultProps;
export default Slider;