const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Forte para 50 Operações Aritméticas', () => {
  
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar números', () => { 
    expect(soma(2, 3)).toBe(5); 
    expect(soma(-2, 3)).toBe(1);
    expect(soma(0, 0)).toBe(0);
  });
  test('2. deve subtrair números', () => { 
    expect(subtracao(5, 2)).toBe(3); 
    expect(subtracao(2, 5)).toBe(-3);
  });
  test('3. deve multiplicar números', () => { 
    expect(multiplicacao(3, 4)).toBe(12); 
    expect(multiplicacao(3, 0)).toBe(0);
    expect(multiplicacao(-3, 4)).toBe(-12);
  });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida');
  });
  test('5. deve calcular a potência', () => { 
    expect(potencia(2, 3)).toBe(8); 
    expect(potencia(2, 0)).toBe(1);
  });
  test('6. deve calcular a raiz quadrada (incluindo o zero)', () => { 
    expect(raizQuadrada(16)).toBe(4); 
    expect(raizQuadrada(0)).toBe(0); // Matando o Mutante 2!
    expect(() => raizQuadrada(-1)).toThrow();
  });
  test('7. deve retornar o resto da divisão', () => { 
    expect(restoDivisao(10, 3)).toBe(1); 
    expect(restoDivisao(10, 2)).toBe(0);
  });
  test('8. deve calcular o fatorial', () => { 
    expect(fatorial(4)).toBe(24); 
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(() => fatorial(-1)).toThrow();
  });
  test('9. deve calcular a média de um array', () => { 
    expect(mediaArray([10, 20, 30])).toBe(20); 
    expect(mediaArray([])).toBe(0); // A função original tem uma trava que retorna 0
  });
  test('10. deve somar um array', () => { 
    expect(somaArray([1, 2, 3])).toBe(6); 
    expect(somaArray([])).toBe(0);
  });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo', () => { 
    expect(maximoArray([1, 50, 10])).toBe(50); 
    expect(() => maximoArray([])).toThrow();
  });
  test('12. deve encontrar o valor mínimo', () => { 
    expect(minimoArray([10, 2, 100])).toBe(2); 
    expect(() => minimoArray([])).toThrow();
  });
  test('13. deve retornar o valor absoluto', () => { 
    expect(valorAbsoluto(-5)).toBe(5); 
    expect(valorAbsoluto(5)).toBe(5);
    expect(valorAbsoluto(0)).toBe(0);
  });
  test('14. deve arredondar um número', () => { 
    expect(arredondar(9.8)).toBe(10); 
    expect(arredondar(9.2)).toBe(9); 
  });
  test('15. deve validar número par', () => { 
    expect(isPar(100)).toBe(true); 
    expect(isPar(7)).toBe(false); 
  });
  test('16. deve validar número ímpar', () => { 
    expect(isImpar(7)).toBe(true); 
    expect(isImpar(100)).toBe(false); 
  });
  test('17. deve calcular porcentagem', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar valor em porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir valor em porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal', () => { 
    expect(inverterSinal(42)).toBe(-42); 
    expect(inverterSinal(-42)).toBe(42);
    expect(inverterSinal(0)).toBe(-0);
  });

  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural', () => { 
    expect(logaritmoNatural(Math.E)).toBeCloseTo(1); 
    expect(logaritmoNatural(0)).toBe(-Infinity); // Log de 0 no JS é -Infinity
  });
  test('25. deve calcular o logaritmo na base 10', () => { 
    expect(logaritmoBase10(100)).toBe(2); 
    expect(logaritmoBase10(-1)).toBeNaN(); // Log de negativo no JS é Not-a-Number
  });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar se é primo', () => { 
    expect(isPrimo(7)).toBe(true); 
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(1)).toBe(false);
  });
  test('34. deve calcular termo de Fibonacci', () => { 
    expect(fibonacci(10)).toBe(55); 
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });
  test('35. deve calcular o produto de um array', () => { 
    expect(produtoArray([2, 3, 4])).toBe(24); 
    expect(produtoArray([])).toBe(1);
  });
  test('36. deve manter valor no intervalo (clamp)', () => { 
    expect(clamp(5, 0, 10)).toBe(5); 
    expect(clamp(-5, 0, 10)).toBe(0); 
    expect(clamp(15, 0, 10)).toBe(10); 
  });
  test('37. deve verificar divisibilidade', () => { 
    expect(isDivisivel(10, 2)).toBe(true); 
    expect(isDivisivel(10, 3)).toBe(false); 
  });
  test('38. deve converter C para F', () => { 
    expect(celsiusParaFahrenheit(0)).toBe(32); 
    expect(celsiusParaFahrenheit(100)).toBe(212); 
  });
  test('39. deve converter F para C', () => { 
    expect(fahrenheitParaCelsius(32)).toBe(0); 
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });
  test('40. deve calcular o inverso', () => { 
    expect(inverso(4)).toBe(0.25); 
    expect(() => inverso(0)).toThrow();
  });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular área do círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular área do retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular perímetro do retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se é maior', () => { 
    expect(isMaiorQue(10, 5)).toBe(true); 
    expect(isMaiorQue(5, 10)).toBe(false); 
    expect(isMaiorQue(5, 5)).toBe(false); // Mata mutantes de >=
  });
  test('45. deve verificar se é menor', () => { 
    expect(isMenorQue(5, 10)).toBe(true); 
    expect(isMenorQue(10, 5)).toBe(false); 
    expect(isMenorQue(5, 5)).toBe(false); // Mata mutantes de <=
  });
  test('46. deve verificar igualdade', () => { 
    expect(isEqual(7, 7)).toBe(true); 
    expect(isEqual(7, 8)).toBe(false); // Mata mutantes de desigualdade
  });
  test('47. deve calcular a mediana', () => { 
    expect(medianaArray([5, 1, 4, 2, 3])).toBe(3); 
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5); 
  });
  test('48. deve calcular o dobro', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade', () => { expect(metade(20)).toBe(10); });
});