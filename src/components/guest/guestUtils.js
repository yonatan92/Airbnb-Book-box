import { Children } from 'react';

export const getNewObjectAmount = (stateObj, type, amount) => {
  let { adults, children, infants } = stateObj;
  let res;

  if (type !== 'adults') {
    if (amount > 0 && adults <= 0) {
      res = { ...stateObj, [type]: amount, adults: 1 };
    } else if (amount > 0 && adults > 0) {
      res = { ...stateObj, [type]: amount };
    } else if (amount <= 0) {
      res = { ...stateObj, [type]: 0 };
    }
  } else {
    if (amount <= 0) {
      if (children > 0 || infants > 0) {
        res = { ...stateObj, [type]: 1 };
      } else {
        res = { ...stateObj, [type]: 0 };
      }
    } else {
      res = { ...stateObj, [type]: amount };
    }
  }

  return res;

  // return amount < 0
  //   ? {
  //       ...stateObj,
  //     }
  //   : {
  //       ...stateObj,
  //       [type]: amount,
  //       ...(type == 'adults' && { [type]: amount, children, infants }),
  //       ...(type !== 'adults' && adults < 0 && { [type]: amount }),
  //     };
};

export const getTextToShown = ({ adults, children, infants }) => {
  let ans = '';
  let infants_count = 0;
  let guests_count = 0;
  if (adults > 0) {
    guests_count += adults + children;
    infants_count += infants;
  } else if (adults == 0) {
    if (children > 0 || infants > 0) {
      guests_count += 1 + children;
      infants_count += infants;
    }
  }
  ans = `${
    guests_count == 0
      ? 'Guests'
      : `${guests_count} guests${
          infants_count > 0 ? `, ${infants_count} infant` : ''
        }`
  }`;
  return ans;
};
