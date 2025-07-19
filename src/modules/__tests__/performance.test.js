import { describe, it, expect, beforeEach } from 'vitest';
import { Bench } from 'tinybench';
import { Utils } from '../utils';
import { FormValidator } from '../formValidator';
import { ImageMapping } from '../imageMapping';
import { LocalStorageHandler } from '../localStorage';

describe('Performance Tests', () => {
  describe('Utils Performance', () => {
    it('debounce performance with rapid calls', async () => {
      const bench = new Bench({ time: 100 });
      let callCount = 0;
      const testFn = () => callCount++;
      const debouncedFn = Utils.debounce(testFn, 10);

      bench.add('debounce rapid calls', () => {
        for (let i = 0; i < 1000; i++) {
          debouncedFn();
        }
      });

      await bench.run();
      const result = bench.results[0];

      // デバウンスは1000回呼ばれても実行は制限される
      expect(result.mean).toBeLessThan(5); // 平均5ms以下
      expect(callCount).toBeLessThan(20); // 実際の実行回数は少ない
    });

    it('throttle performance with rapid calls', async () => {
      const bench = new Bench({ time: 100 });
      let callCount = 0;
      const testFn = () => callCount++;
      const throttledFn = Utils.throttle(testFn, 10);

      bench.add('throttle rapid calls', () => {
        for (let i = 0; i < 1000; i++) {
          throttledFn();
        }
      });

      await bench.run();
      const result = bench.results[0];

      expect(result.mean).toBeLessThan(5); // 平均5ms以下
      expect(callCount).toBeGreaterThanOrEqual(1); // スロットルは少なくとも1回は実行
    });

    it('deepClone performance with nested objects', async () => {
      const bench = new Bench({ time: 100 });

      const complexObject = {
        level1: {
          level2: {
            level3: {
              array: [1, 2, 3, 4, 5],
              date: new Date(),
              string: 'test'.repeat(100),
            },
          },
          moreData: Array(100).fill({ key: 'value' }),
        },
      };

      bench.add('deepClone complex object', () => {
        Utils.deepClone(complexObject);
      });

      await bench.run();
      const result = bench.results[0];

      expect(result.mean).toBeLessThan(1); // 平均1ms以下
    });

    it('parseQueryString performance with large query', async () => {
      const bench = new Bench({ time: 100 });

      // 100個のパラメータを持つクエリ文字列
      const params = [];
      for (let i = 0; i < 100; i++) {
        params.push(`param${i}=value${i}`);
      }
      const largeQuery = params.join('&');

      bench.add('parseQueryString large query', () => {
        Utils.parseQueryString(largeQuery);
      });

      await bench.run();
      const result = bench.results[0];

      expect(result.mean).toBeLessThan(3); // 平均3ms以下
    });
  });

  describe('FormValidator Performance', () => {
    it('validateEmail performance', async () => {
      const bench = new Bench({ time: 100 });

      const testEmails = [
        'test@example.com',
        'user.name+tag@example.co.jp',
        'invalid-email',
        'test@',
        '@example.com',
        'test@domain.with.many.subdomains.example.com',
      ];

      bench.add('validateEmail multiple checks', () => {
        testEmails.forEach(email => {
          FormValidator.validateEmail(email);
        });
      });

      await bench.run();
      const result = bench.results[0];

      expect(result.mean).toBeLessThan(0.1); // 平均0.1ms以下
    });

    it('validateForm performance with large form', async () => {
      const bench = new Bench({ time: 100 });

      // 大きなフォームを作成
      document.body.innerHTML = '<form id="largeForm"></form>';
      const form = document.getElementById('largeForm');

      // 50個の入力フィールドを追加
      for (let i = 0; i < 50; i++) {
        const input = document.createElement('input');
        input.type = i % 3 === 0 ? 'email' : 'text';
        input.name = `field${i}`;
        input.value = i % 3 === 0 ? 'test@example.com' : `value${i}`;
        input.required = i % 2 === 0;
        form.appendChild(input);
      }

      bench.add('validateForm large form', () => {
        FormValidator.validateForm(form);
      });

      await bench.run();
      const result = bench.results[0];

      expect(result.mean).toBeLessThan(5); // 平均5ms以下
    });
  });

  describe('ImageMapping Performance', () => {
    it('getAvoidItemImage performance', async () => {
      const bench = new Bench({ time: 100 });

      const testCases = [
        { gender: 'male', itemId: 'tight' },
        { gender: 'female', itemId: 'excessive-exposure' },
        { gender: 'male', itemId: 'invalid-id' },
        { gender: 'invalid', itemId: 'tight' },
      ];

      bench.add('getAvoidItemImage multiple lookups', () => {
        testCases.forEach(({ gender, itemId }) => {
          ImageMapping.getAvoidItemImage(gender, itemId);
        });
      });

      await bench.run();
      const result = bench.results[0];

      expect(result.mean).toBeLessThan(0.05); // 平均0.05ms以下
    });

    it('getAttractiveStyleImage performance', async () => {
      const bench = new Bench({ time: 100 });

      const testCases = [];
      const genders = ['male', 'female'];
      const styles = ['elegant', 'mode', 'minimal', 'street', 'natural'];

      // 全組み合わせのテストケース
      genders.forEach(gender => {
        styles.forEach(style => {
          for (let i = 1; i <= 15; i++) {
            testCases.push({ gender, styleId: `${style}-${i}` });
          }
        });
      });

      bench.add('getAttractiveStyleImage batch lookups', () => {
        testCases.forEach(({ gender, styleId }) => {
          ImageMapping.getAttractiveStyleImage(gender, styleId);
        });
      });

      await bench.run();
      const result = bench.results[0];

      expect(result.mean).toBeLessThan(1); // 平均1ms以下
    });
  });

  describe('LocalStorage Performance', () => {
    beforeEach(() => {
      localStorage.clear();
      document.body.innerHTML = '';
    });

    it('saveFormData performance with large form', async () => {
      const bench = new Bench({ time: 100 });

      // 大きなフォームを作成
      document.body.innerHTML = '<form id="styleForm"></form>';
      const form = document.getElementById('styleForm');

      // 100個のフィールドを追加
      for (let i = 0; i < 100; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `field${i}`;
        input.value = `value${i}`.repeat(10); // 長めの値
        form.appendChild(input);
      }

      bench.add('saveFormData large form', () => {
        LocalStorageHandler.saveFormData();
      });

      await bench.run();
      const result = bench.results[0];

      expect(result.mean).toBeLessThan(2); // 平均2ms以下
    });

    it('restoreFormData performance with large data', async () => {
      const bench = new Bench({ time: 100 });

      // 大きなフォームを作成
      document.body.innerHTML = '<form id="styleForm"></form>';
      const form = document.getElementById('styleForm');

      // 100個のフィールドを追加
      const largeData = {};
      for (let i = 0; i < 100; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `field${i}`;
        form.appendChild(input);
        largeData[`field${i}`] = `value${i}`.repeat(10);
      }

      // データを保存
      localStorage.setItem(LocalStorageHandler.FORM_DATA_KEY, JSON.stringify(largeData));

      bench.add('restoreFormData large data', () => {
        LocalStorageHandler.restoreFormData();
      });

      await bench.run();
      const result = bench.results[0];

      expect(result.mean).toBeLessThan(3); // 平均3ms以下
    });
  });

  describe('Memory Usage Tests', () => {
    it('debounce does not cause memory leaks', () => {
      const initialMemory = performance.memory?.usedJSHeapSize || 0;
      const functions = [];

      // 1000個のデバウンス関数を作成
      for (let i = 0; i < 1000; i++) {
        functions.push(Utils.debounce(() => i, 10));
      }

      // 全てキャンセル
      functions.forEach(fn => fn.cancel && fn.cancel());

      // メモリ使用量の増加が妥当な範囲内
      const finalMemory = performance.memory?.usedJSHeapSize || 0;
      const memoryIncrease = finalMemory - initialMemory;

      // メモリ増加が10MB以下
      expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024);
    });

    it('deepClone does not cause excessive memory usage', () => {
      const initialMemory = performance.memory?.usedJSHeapSize || 0;

      // 大きなオブジェクトを作成してクローン
      const largeObject = {
        data: Array(1000).fill({
          nested: {
            array: Array(100).fill('test data'),
            date: new Date(),
          },
        }),
      };

      const clones = [];
      for (let i = 0; i < 10; i++) {
        clones.push(Utils.deepClone(largeObject));
      }

      const finalMemory = performance.memory?.usedJSHeapSize || 0;
      const memoryIncrease = finalMemory - initialMemory;

      // メモリ増加が想定される範囲内（元のオブジェクトの10倍程度）
      expect(memoryIncrease).toBeLessThan(50 * 1024 * 1024);
    });
  });
});
