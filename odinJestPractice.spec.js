import {capitalize, reverseString, calc, caesarCipher, analyzeArray} from './odinJestPractice';

describe('Capitalize Function', () => {
  test('it should capitalize first letter', () => {
    const input = 'norman';
    const output = 'Norman';
    expect(capitalize(input)).toEqual(output);
  });

  test('it should throw with numeric input', () => {
    expect(() => capitalize(1)).toThrow(Error);
  });

  test('it should throw when string is empty', () => {
    expect(() => capitalize('')).toThrow(Error);
  });
});

describe('reverseString Function', () => {
  test('it should reverse the string', () => {
    const input = 'skipper';
    const output = 'reppiks';
    expect(reverseString(input)).toEqual(output);
  });

  test('it should reverse the string with mixed content', () => {
    const input = '1234tyu'
    const output = 'uyt4321'
    expect (reverseString(input)).toEqual(output);
  });

  test('it should throw with numeric input', () => {
    expect(() => reverseString(1)).toThrow(Error);
  });

  test('it should throw when string is empty', () => {
    expect(() => reverseString('')).toThrow(Error);
  });  
});

describe('calculate Function', () => {
  test('it should add two numbers', () => {
    expect(calc.add(2, 5)).toEqual(7);
  });

  test('it should subtract two numbers', () => {
    expect(calc.subtract(2, 5)).toEqual(-3);
  });

  test('it should divide two numbers', () => {
    expect(calc.divide(10, 2)).toEqual(5);
  });

  test('it should multiply two numbers', () => {
    expect(calc.multiply(10, 2)).toEqual(20);
  });  
});

describe('Cipher Function', () => {
  test('it should shift each character by a shift factor', () => {
    expect(caesarCipher('xyz',3)).toEqual('abc');
    });

  test('takes into account uppercase', () => {
    expect(caesarCipher('ABC',1)).toEqual('BCD');
  });

  test('takes into account punctuation', () => {
    expect(caesarCipher(`!@#$%&*()+-*/,./<>?;':" This is the end of NYC, not really.`,1))
    .toEqual(`!@#$%&*()+-*/,./<>?;':" Uijt jt uif foe pg OZD, opu sfbmmz.`);
  });
})

  describe('Analyze Array Function', () => {

    test('if input is an array it should return true', () => {
      expect(analyzeArray.check([1,2,3, 'a'])).toBeTruthy ();
    });

    test('if input is not an array it should return false', () => {
      expect(analyzeArray.check('1,2,3')).toBeFalsy();
    });

    test('if array does not contain only numbers, return false', () => {
      expect(analyzeArray.checkIfNum([1,'a',2,3,4,0.5, -1])).toBeFalsy();
    });

    test('it should return the length of an array', () => {
      expect(analyzeArray.length([0, 1.3, -0.5, 200.607])).toEqual(4);
      });
  
    test('should return the max value from the array', () => {
      expect(analyzeArray.max([1,2,3])).toEqual(3);
    });
  
    test('should return the min value from the array', () => {
      expect(analyzeArray.min([1,2, - 0.5, 3])).toEqual(-0.5);
    });

    test('should return the average of numebrs in the array', () => {
      expect(analyzeArray.average([2,4,6,8])).toEqual(5);
    });

});



 

