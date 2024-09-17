
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';
  private _memory: string[] = [];

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._memory.push(this._buffer);
    this._buffer = '';
    this._memory.push(key);
  }

  public pressActionKey(key: ActionKeys): void {
    this._memory.push(this._buffer);
    this._buffer = '';
    if(key === '=') {
      let left_val = parseInt(this._memory.shift());
      while(this._memory.length > 0) {
        let op = this._memory.shift();
        let right = parseInt(this._memory.shift());
        if(op === '+') {
          left_val = left_val + right;
        } 
        else if(op === '-') {
          left_val = left_val - right;
        }
      }
      this._buffer = left_val.toString();
    }
  }

  public display(): string {
    return this._buffer;
  }

}
