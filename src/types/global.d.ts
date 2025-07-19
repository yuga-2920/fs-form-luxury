/// <reference types="vite/client" />
/// <reference types="vitest" />

declare global {
  interface Window {
    LocalStorageHandler: typeof import('../modules/localStorage').LocalStorageHandler;
    FormValidator: typeof import('../modules/formValidator').FormValidator;
    ImageMapping: typeof import('../modules/imageMapping').ImageMapping;
    Utils: typeof import('../modules/utils').Utils;
    FormSubmit: typeof import('../modules/formSubmit').FormSubmit;
  }
}

export {};