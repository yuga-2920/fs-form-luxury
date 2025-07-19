// Utility Functions Module
export const Utils = {
  // 関数の実行を遅延させる（連続呼び出しを防ぐ）
  debounce: function (func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  },

  // 関数の実行頻度を制限する
  throttle: function (func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // 日付をフォーマットする
  formatDate: function (date, format) {
    if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
      return '';
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return format
      .replace('YYYY', year)
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  },

  // オブジェクトをディープクローンする
  deepClone: function (obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (obj instanceof Date) {
      return new Date(obj.getTime());
    }

    if (obj instanceof RegExp) {
      return new RegExp(obj.source, obj.flags);
    }

    if (obj instanceof Array) {
      return obj.map(item => this.deepClone(item));
    }

    const cloned = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = this.deepClone(obj[key]);
      }
    }
    return cloned;
  },

  // 値が空かどうかを判定する
  isEmpty: function (value) {
    if (value === null || value === undefined) {
      return true;
    }

    if (typeof value === 'string') {
      return value.trim() === '';
    }

    if (Array.isArray(value)) {
      return value.length === 0;
    }

    if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    }

    return false;
  },

  // ユニークなIDを生成する
  generateId: function (prefix) {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    const id = `${timestamp}_${random}`;
    return prefix ? `${prefix}_${id}` : id;
  },

  // クエリ文字列をオブジェクトに変換する
  parseQueryString: function (queryString) {
    const params = {};

    if (!queryString || queryString === '?') {
      return params;
    }

    const searchParams = new URLSearchParams(queryString);

    for (const [key, value] of searchParams) {
      params[key] = value;
    }

    return params;
  },

  // オブジェクトからクエリ文字列を生成する
  buildQueryString: function (params) {
    const searchParams = new URLSearchParams();

    for (const key in params) {
      if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== undefined) {
        searchParams.append(key, params[key]);
      }
    }

    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : '';
  },
};
