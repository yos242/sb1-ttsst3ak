import React from 'react';

interface OTPDigitProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  autoFocus?: boolean;
}

export function OTPDigit({ 
  value, 
  onChange, 
  onKeyDown, 
  onPaste, 
  inputRef,
  autoFocus 
}: OTPDigitProps) {
  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="numeric"
      pattern="\d*"
      maxLength={1}
      value={value}
      autoFocus={autoFocus}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      className="w-12 h-14 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0070ba] focus:border-transparent"
    />
  );
}