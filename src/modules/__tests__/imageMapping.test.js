import { describe, it, expect, beforeEach } from 'vitest';
import { ImageMapping } from '../imageMapping';

describe('ImageMapping', () => {
  describe('getAvoidItemImage', () => {
    it('男性用の回避アイテム画像を取得できる', () => {
      const result = ImageMapping.getAvoidItemImage('male', 'logo');
      expect(result).toEqual({
        name: 'ロゴ',
        image: 'images/avoid-logo.jpg',
      });
    });

    it('女性用の回避アイテム画像を取得できる', () => {
      const result = ImageMapping.getAvoidItemImage('female', 'frills-lace');
      expect(result).toEqual({
        name: 'フリル・レース',
        image: 'images/avoid-frills-lace.jpg',
      });
    });

    it('存在しないアイテムの場合はundefinedを返す', () => {
      const result = ImageMapping.getAvoidItemImage('male', 'non-existent');
      expect(result).toBeUndefined();
    });

    it('無効な性別の場合はundefinedを返す', () => {
      const result = ImageMapping.getAvoidItemImage('invalid', 'logo');
      expect(result).toBeUndefined();
    });
  });

  describe('getAttractiveStyleImage', () => {
    it('男性用の魅力的なスタイル画像を取得できる', () => {
      const result = ImageMapping.getAttractiveStyleImage('male', 'suit');
      expect(result).toEqual({
        name: 'スーツ',
        image: 'images/style-suit.jpg',
      });
    });

    it('女性用の魅力的なスタイル画像を取得できる', () => {
      const result = ImageMapping.getAttractiveStyleImage('female', 'elegant');
      expect(result).toEqual({
        name: 'エレガント',
        image: 'images/style-elegant-f.jpg',
      });
    });

    it('存在しないスタイルの場合はundefinedを返す', () => {
      const result = ImageMapping.getAttractiveStyleImage('male', 'non-existent');
      expect(result).toBeUndefined();
    });
  });

  describe('getAvoidItemsByGender', () => {
    it('男性用の回避アイテムリストを取得できる', () => {
      const result = ImageMapping.getAvoidItemsByGender('male');
      expect(result).toBeDefined();
      expect(Object.keys(result)).toContain('logo');
      expect(Object.keys(result)).toContain('animal-pattern');
      expect(Object.keys(result)).not.toContain('frills-lace');
    });

    it('女性用の回避アイテムリストを取得できる', () => {
      const result = ImageMapping.getAvoidItemsByGender('female');
      expect(result).toBeDefined();
      expect(Object.keys(result)).toContain('logo');
      expect(Object.keys(result)).toContain('frills-lace');
      expect(Object.keys(result)).toContain('excessive-exposure');
    });

    it('無効な性別の場合は空のオブジェクトを返す', () => {
      const result = ImageMapping.getAvoidItemsByGender('invalid');
      expect(result).toEqual({});
    });
  });

  describe('getAttractiveStylesByGender', () => {
    it('男性用の魅力的なスタイルリストを取得できる', () => {
      const result = ImageMapping.getAttractiveStylesByGender('male');
      expect(result).toBeDefined();
      expect(Object.keys(result)).toContain('suit');
      expect(Object.keys(result)).toContain('casual');
      expect(Object.keys(result)).not.toContain('feminine');
    });

    it('女性用の魅力的なスタイルリストを取得できる', () => {
      const result = ImageMapping.getAttractiveStylesByGender('female');
      expect(result).toBeDefined();
      expect(Object.keys(result)).toContain('elegant');
      expect(Object.keys(result)).toContain('feminine');
      expect(Object.keys(result)).not.toContain('suit');
    });
  });

  describe('getAllAvoidItems', () => {
    it('すべての回避アイテムを取得できる', () => {
      const result = ImageMapping.getAllAvoidItems();
      expect(result).toBeDefined();
      expect(result).toHaveProperty('male');
      expect(result).toHaveProperty('female');
      expect(result.male).toHaveProperty('logo');
      expect(result.female).toHaveProperty('frills-lace');
    });
  });

  describe('getAllAttractiveStyles', () => {
    it('すべての魅力的なスタイルを取得できる', () => {
      const result = ImageMapping.getAllAttractiveStyles();
      expect(result).toBeDefined();
      expect(result).toHaveProperty('male');
      expect(result).toHaveProperty('female');
      expect(result.male).toHaveProperty('suit');
      expect(result.female).toHaveProperty('elegant');
    });
  });

  describe('validateGender', () => {
    it('有効な性別の場合はtrueを返す', () => {
      expect(ImageMapping.validateGender('male')).toBe(true);
      expect(ImageMapping.validateGender('female')).toBe(true);
    });

    it('無効な性別の場合はfalseを返す', () => {
      expect(ImageMapping.validateGender('invalid')).toBe(false);
      expect(ImageMapping.validateGender('')).toBe(false);
      expect(ImageMapping.validateGender(null)).toBe(false);
      expect(ImageMapping.validateGender(undefined)).toBe(false);
    });
  });
});
