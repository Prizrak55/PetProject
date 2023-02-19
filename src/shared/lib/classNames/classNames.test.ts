import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, hide: false },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });
});
