
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from '../enums/numeric-keys.enum';

describe('CalculatorModel', (): void => {

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();

    expect(calculator).toBeDefined();

  });

<<<<<<< HEAD
  it('should display `1` when the `1` key is pressed', (): void => {

    // Assemble
    const calculator: ICalculatorModel = new CalculatorModel();
  
    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();
  
    // Assert
    expect(displayValue).toEqual('1');
  
=======
  it('should have an empty display on init', (): void => {

    // Assemble
    const calculator: ICalculatorModel = new CalculatorModel();

    // Act
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('');

>>>>>>> 463bd6eadfd42dcfb17613867592cc4095663dca
  });

});
