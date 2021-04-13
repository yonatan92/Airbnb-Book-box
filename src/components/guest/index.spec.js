import { getNewObjectAmount, getTextToShown } from './guestUtils';

describe('add one adult', () => {
  const expected = {
    adults: 1,
    children: 0,
    infants: 0,
  };
  const actual = getNewObjectAmount(
    {
      adults: 0,
      children: 0,
      infants: 0,
    },
    'adults',
    1
  );
  it('should be equal', () => {
    expect(actual).toEqual(expected);
  });
});

describe('add one children, no adults', () => {
  let expected = {
    adults: 1,
    children: 1,
    infants: 0,
  };
  let actual = getNewObjectAmount(
    {
      adults: 0,
      children: 0,
      infants: 0,
    },
    'children',
    1
  );
  it('should be equal', () => {
    expect(actual).toEqual(expected);
  });
});

describe('add one infant, no adults', () => {
  let expected = {
    adults: 1,
    children: 0,
    infants: 1,
  };
  let actual = getNewObjectAmount(
    {
      adults: 0,
      children: 0,
      infants: 0,
    },
    'infants',
    1
  );
  it('should be equal', () => {
    expect(actual).toEqual(expected);
  });
});

describe('sub one adult to zero adults, has children in order ', () => {
  let expected = {
    adults: 1,
    children: 1,
    infants: 0,
  };
  let actual = getNewObjectAmount(
    {
      adults: 1,
      children: 1,
      infants: 0,
    },
    'adults',
    0
  );
  it('should be equal', () => {
    expect(actual).toEqual(expected);
  });
});

describe('sub one adult to zero adults, no children in order ', () => {
  let expected = {
    adults: 0,
    children: 0,
    infants: 0,
  };
  let actual = getNewObjectAmount(
    {
      adults: 1,
      children: 0,
      infants: 0,
    },
    'adults',
    0
  );
  it('should be equal', () => {
    expect(actual).toEqual(expected);
  });
});

describe('sub three childrens to zero adults, have adults and infants in order ', () => {
  let expected = {
    adults: 1,
    children: 0,
    infants: 2,
  };
  let actual = getNewObjectAmount(
    {
      adults: 1,
      children: 3,
      infants: 2,
    },
    'children',
    0
  );
  it('should be equal', () => {
    expect(actual).toEqual(expected);
  });
});

describe('order of 3 adults', () => {
  let expected = '3 guests';
  let actual = getTextToShown({
    adults: 3,
    children: 0,
    infants: 0,
  });
  it('should be equal', () => {
    expect(actual).toBe(expected);
  });
});

describe('order of 1 adult and 1 children', () => {
  let expected = '2 guests';
  let actual = getTextToShown({
    adults: 1,
    children: 1,
    infants: 0,
  });
  it('should be equal', () => {
    expect(actual).toBe(expected);
  });
});

describe('order of 1 adult and 1 children and 1 infant', () => {
  let expected = '2 guests, 1 infant';
  let actual = getTextToShown({
    adults: 1,
    children: 1,
    infants: 1,
  });
  it('should be equal', () => {
    expect(actual).toBe(expected);
  });
});
