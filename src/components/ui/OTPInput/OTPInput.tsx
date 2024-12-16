import React, { useRef, KeyboardEvent, ClipboardEvent } from 'react';
import { OTPDigit } from './OTPDigit';

interface OTPInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
}

export function OTPInput({ value, onChange, length = 6 }: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusNext = (index: number) => {
    if (index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const focusPrevious = (index: number) => {
    if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleChange = (index: number, digit: string) => {
    if (/^\d*$/.test(digit)) {
      const newValue = value.split('');
      newValue[index] = digit;
      onChange(newValue.join(''));
      if (digit !== '') {
        focusNext(index);
      }
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (value[index] === '') {
        focusPrevious(index);
      }
    } else if (e.key === 'ArrowLeft') {
      focusPrevious(index);
    } else if (e.key === 'ArrowRight') {
      focusNext(index);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, length);
    if (/^\d*$/.test(pastedData)) {
      onChange(pastedData.padEnd(length, ''));
    }
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }, (_, i) => (
        <OTPDigit
          key={i}
          value={value[i] || ''}
          onChange={(digit) => handleChange(i, digit)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          inputRef={(el) => (inputRefs.current[i] = el)}
          autoFocus={i === 0}
        />
      ))}
    </div>
  );
}