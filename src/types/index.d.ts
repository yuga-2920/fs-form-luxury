// Type definitions for the style form application

export interface FormData {
  [key: string]: string | boolean | number | FileList;
  name?: string;
  email?: string;
  phone?: string;
  postal?: string;
  gender?: 'male' | 'female';
  age?: string;
  agree?: boolean;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export interface ImageMapping {
  male: Record<string, string>;
  female: Record<string, string>;
}

export interface AvoidItems extends ImageMapping {}

export interface AttractiveStyles extends ImageMapping {}

export type Gender = 'male' | 'female';

export interface ProgressCallback {
  (progress: number, status: string): void;
}

export interface SerializationFormat {
  format: 'json' | 'csv';
}

export interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  cancel: () => void;
}

export interface ThrottledFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
}

export interface DateFormatOptions {
  format: 'YYYY-MM-DD' | 'YYYY/MM/DD' | 'DD-MM-YYYY' | 'DD/MM/YYYY' | 'MM-DD-YYYY' | 'MM/DD/YYYY';
}

export interface QueryParams {
  [key: string]: string | string[] | undefined;
}