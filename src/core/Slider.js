import React, {useState} from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

const periodos = [ 2012 , 2013 , 2014, 2015]

const defaultProps = {
	min:0,
	max:10
}

function Slider(props){
const [ value, setValue ] = useState(0); 

  return (
    <RangeSlider
    	{...props}
		value={value}
		tooltipLabel={ (label) => {
			return periodos[label]
		}}
		onChange={changeEvent => {
			let numero =  parseInt(changeEvent.target.value)
			console.log(numero)
			setValue(numero);
			props.funcion(numero)
		}}
    />
  );  
}

Slider.defaultProps = defaultProps;
export default Slider;