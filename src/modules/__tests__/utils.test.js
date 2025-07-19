import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Utils } from '../utils';

describe('Utils', () => {
  describe('debounce', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('指定した遅延時間後に関数を実行する', () => {
      const mockFn = vi.fn();
      const debouncedFn = Utils.debounce(mockFn, 300);

      debouncedFn('test');
      expect(mockFn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(300);
      expect(mockFn).toHaveBeenCalledWith('test');
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('連続して呼び出された場合は最後の呼び出しのみ実行する', () => {
      const mockFn = vi.fn();
      const debouncedFn = Utils.debounce(mockFn, 300);

      debouncedFn('first');
      vi.advanceTimersByTime(100);
      debouncedFn('second');
      vi.advanceTimersByTime(100);
      debouncedFn('third');

      expect(mockFn).not.toHaveBeenCalled();

      vi.advanceTimersByTime(300);
      expect(mockFn).toHaveBeenCalledWith('third');
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('throttle', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('最初の呼び出しは即座に実行される', () => {
      const mockFn = vi.fn();
      const throttledFn = Utils.throttle(mockFn, 300);

      throttledFn('first');
      expect(mockFn).toHaveBeenCalledWith('first');
      expect(mockFn).toHaveBeenCalledTimes(1);
    });

    it('指定時間内の追加の呼び出しは無視される', () => {
      const mockFn = vi.fn();
      const throttledFn = Utils.throttle(mockFn, 300);

      throttledFn('first');
      throttledFn('second');
      throttledFn('third');

      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith('first');

      vi.advanceTimersByTime(300);
      throttledFn('fourth');
      expect(mockFn).toHaveBeenCalledTimes(2);
      expect(mockFn).toHaveBeenCalledWith('fourth');
    });
  });

  describe('formatDate', () => {
    it('日付を指定フォーマットで整形する', () => {
      const date = new Date('2024-01-15T10:30:00');

      expect(Utils.formatDate(date, 'YYYY-MM-DD')).toBe('2024-01-15');
      expect(Utils.formatDate(date, 'YYYY/MM/DD')).toBe('2024/01/15');
      expect(Utils.formatDate(date, 'DD/MM/YYYY')).toBe('15/01/2024');
    });

    it('時刻も含めて整形できる', () => {
      const date = new Date('2024-01-15T10:30:45');

      expect(Utils.formatDate(date, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-01-15 10:30:45');
      expect(Utils.formatDate(date, 'HH:mm')).toBe('10:30');
    });

    it('無効な日付の場合は空文字を返す', () => {
      expect(Utils.formatDate(null, 'YYYY-MM-DD')).toBe('');
      expect(Utils.formatDate(undefined, 'YYYY-MM-DD')).toBe('');
      expect(Utils.formatDate('invalid', 'YYYY-MM-DD')).toBe('');
    });
  });

  describe('deepClone', () => {
    it('オブジェクトをディープクローンする', () => {
      const original = {
        a: 1,
        b: { c: 2, d: { e: 3 } },
        f: [1, 2, { g: 4 }],
      };

      const clone = Utils.deepClone(original);

      expect(clone).toEqual(original);
      expect(clone).not.toBe(original);
      expect(clone.b).not.toBe(original.b);
      expect(clone.b.d).not.toBe(original.b.d);
      expect(clone.f).not.toBe(original.f);
      expect(clone.f[2]).not.toBe(original.f[2]);
    });

    it('プリミティブ値はそのまま返す', () => {
      expect(Utils.deepClone(42)).toBe(42);
      expect(Utils.deepClone('string')).toBe('string');
      expect(Utils.deepClone(true)).toBe(true);
      expect(Utils.deepClone(null)).toBe(null);
      expect(Utils.deepClone(undefined)).toBe(undefined);
    });

    it('Date、RegExpなどの特殊オブジェクトも正しくクローンする', () => {
      const date = new Date('2024-01-15');
      const regex = /test/gi;

      const clonedDate = Utils.deepClone(date);
      const clonedRegex = Utils.deepClone(regex);

      expect(clonedDate).toEqual(date);
      expect(clonedDate).not.toBe(date);
      expect(clonedRegex.source).toBe(regex.source);
      expect(clonedRegex.flags).toBe(regex.flags);
      expect(clonedRegex).not.toBe(regex);
    });
  });

  describe('isEmpty', () => {
    it('空の値を正しく判定する', () => {
      expect(Utils.isEmpty(null)).toBe(true);
      expect(Utils.isEmpty(undefined)).toBe(true);
      expect(Utils.isEmpty('')).toBe(true);
      expect(Utils.isEmpty('   ')).toBe(true);
      expect(Utils.isEmpty([])).toBe(true);
      expect(Utils.isEmpty({})).toBe(true);
    });

    it('空でない値を正しく判定する', () => {
      expect(Utils.isEmpty('text')).toBe(false);
      expect(Utils.isEmpty(0)).toBe(false);
      expect(Utils.isEmpty(false)).toBe(false);
      expect(Utils.isEmpty([1, 2])).toBe(false);
      expect(Utils.isEmpty({ a: 1 })).toBe(false);
    });
  });

  describe('generateId', () => {
    it('ユニークなIDを生成する', () => {
      const id1 = Utils.generateId();
      const id2 = Utils.generateId();

      expect(id1).toBeTruthy();
      expect(id2).toBeTruthy();
      expect(id1).not.toBe(id2);
    });

    it('プレフィックスを付けることができる', () => {
      const id = Utils.generateId('user');
      expect(id).toMatch(/^user_/);
    });
  });

  describe('parseQueryString', () => {
    it('クエリ文字列をオブジェクトに変換する', () => {
      const query = '?name=test&age=30&active=true';
      const result = Utils.parseQueryString(query);

      expect(result).toEqual({
        name: 'test',
        age: '30',
        active: 'true',
      });
    });

    it('URLエンコードされた値をデコードする', () => {
      const query = '?name=%E3%83%86%E3%82%B9%E3%83%88&city=New%20York';
      const result = Utils.parseQueryString(query);

      expect(result).toEqual({
        name: 'テスト',
        city: 'New York',
      });
    });

    it('空のクエリ文字列の場合は空のオブジェクトを返す', () => {
      expect(Utils.parseQueryString('')).toEqual({});
      expect(Utils.parseQueryString('?')).toEqual({});
    });
  });

  describe('buildQueryString', () => {
    it('オブジェクトからクエリ文字列を生成する', () => {
      const params = {
        name: 'test',
        age: 30,
        active: true,
      };

      const result = Utils.buildQueryString(params);
      expect(result).toBe('?name=test&age=30&active=true');
    });

    it('値をURLエンコードする', () => {
      const params = {
        name: 'テスト',
        city: 'New York',
      };

      const result = Utils.buildQueryString(params);
      expect(result).toBe('?name=%E3%83%86%E3%82%B9%E3%83%88&city=New+York');
    });

    it('空のオブジェクトの場合は空文字を返す', () => {
      expect(Utils.buildQueryString({})).toBe('');
    });

    it('null/undefinedの値は無視する', () => {
      const params = {
        name: 'test',
        age: null,
        city: undefined,
      };

      expect(Utils.buildQueryString(params)).toBe('?name=test');
    });
  });
});
