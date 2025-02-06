import { useState } from 'react';
import { Calculator, Container, Row } from './style';
import Button from './components/Button';
import Display from './components/Display';


function App() {
  const [displayValue, setDisplayValue] = useState('0');

  function handleNumericButtonClick(num) {
    return () => {
      setDisplayValue(prev => `${prev == '0'? '': prev}${num}`)
    }
  }
  function handleClear() {
    setDisplayValue('0');
  }

  function handleOperator(op) {
    return () => {
      setDisplayValue(prev => /[\d\)]+$/.test(prev) ? `${prev}${op}` : prev);
    }
  }

  function handleResult() {
    let result;
    try {
      result = eval(displayValue);
    } catch (error) {
      result = 'Expressão inválida';
    }
    setDisplayValue(result);
  }

  function handleDelete() {
    setDisplayValue(displayValue.slice(0, displayValue.length-1))
  }

  return (
    <Container>
      <Calculator>
        <Display value={displayValue} />
        <Row>
          <Button label="C" onClick={handleClear}/>
          <Button label="(" onClick={handleNumericButtonClick('(')}/>
          <Button label=")" onClick={handleNumericButtonClick(')')}/>
          <Button label="/" onClick={handleNumericButtonClick('/')}/>
        </Row>

        <Row>
          <Button label="7" onClick={handleNumericButtonClick('7')}/>
          <Button label="8" onClick={handleNumericButtonClick('8')}/>
          <Button label="9" onClick={handleNumericButtonClick('9')}/>
          <Button label="*" onClick={handleOperator('*')}/>
        </Row>
        
        <Row>
          <Button label="4" onClick={handleNumericButtonClick('4')}/>
          <Button label="5" onClick={handleNumericButtonClick('5')}/>
          <Button label="6" onClick={handleNumericButtonClick('6')}/>
          <Button label="-" onClick={handleOperator('-')}/>
        </Row>
        
        <Row>
          <Button label="1" onClick={handleNumericButtonClick('1')}/>
          <Button label="2" onClick={handleNumericButtonClick('2')}/>
          <Button label="3" onClick={handleNumericButtonClick('3')}/>
          <Button label="+" onClick={handleOperator('+')}/>
        </Row>
        
        <Row>
          <Button label="del" onClick={handleDelete}/>
          <Button label="0" onClick={handleNumericButtonClick('0')}/>
          <Button label="." onClick={handleOperator('.')}/>
          <Button label="=" onClick={handleResult}/>
        </Row>
      </Calculator>
    </Container>
  )
}

export default App
