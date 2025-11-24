import { useState, useEffect } from 'react';

/**
 * Хук для задержки (debounce) ввода значения.
 * Значение обновляется только после того, как пользователь 
 * перестанет печатать в течение 'delay' миллисекунд.
 * * @param {string} value - Входное значение (то, что печатают).
 * @param {number} delay - Задержка в миллисекундах.
 * @returns {string} - Задержанное значение.
 */
function useDebounce(value, delay) {
  // Состояние для хранения задержанного значения
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Устанавливаем таймер для обновления debouncedValue
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Функция очистки (cleanup function): 
    // Если value изменится до того, как сработает таймер,
    // мы отменяем предыдущий таймер. Это и есть debounce.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Запускаем эффект при изменении value или delay

  return debouncedValue;
}

export default useDebounce;