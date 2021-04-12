import React, { useState } from 'react';
import styled from 'styled-components';
import GuestMenuItem from './GuestMenuItem';
import { guestsData } from './guestsDataArr';
import { getNewObjectAmount, getTextToShown } from './guestUtils';
import { FaChevronDown } from 'react-icons/fa';

function GuestsMenu({ callBack }) {
  let [open, setOpen] = useState(false);
  let [textShown, setTextShown] = useState('Guests');

  let [guestTypesAndamount, setGuestTypesAndamount] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const updateAmount = (type, amount) => {
    const updatedObj = getNewObjectAmount(guestTypesAndamount, type, amount);
    console.log(updatedObj);

    setGuestTypesAndamount(updatedObj);
    let str = getTextToShown(updatedObj);
    setTextShown(str);
  };

  const handleClick = () => {
    setOpen(!open);
    callBack();
  };

  const helpRenderListItem = () => {
    return [
      guestsData.map((elem) => (
        <GuestMenuItem
          {...elem}
          amount={guestTypesAndamount[elem.type]}
          cb={updateAmount}
        />
      )),
      <ApplyBox>
        <ApplyButton onClick={() => setOpen(false)}>Apply</ApplyButton>
      </ApplyBox>,
    ];
  };
  return (
    <>
      <Label>Guests</Label>
      <Box open={open} onClick={handleClick}>
        <label>{textShown}</label>
        <ArrowDown open={open} />
      </Box>
      {open ? <DropDownMenu>{helpRenderListItem()}</DropDownMenu> : null}
    </>
  );
}

export default GuestsMenu;

const Box = styled.div`
  color: grey;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ open }) => (open ? `#008489` : '#e3e3e3')};
  border-radius: 0.4rem;
  cursor: pointer;
  padding: 1.4rem;
  letter-spacing: normal;
  font-size: 1.8rem;
  font-weight: 300;
`;

const Label = styled.h4`
  color: grey;
  letter-spacing: normal;
  letter-spacing: 0.5px;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
`;

const DropDownMenu = styled.div`
  background: white;
  width: 100%;
  box-shadow: 0px 2rem 4.6rem -1rem rgba(26, 26, 29, 0.3);
  border-radius: 0.3rem;
`;

const ApplyButton = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  color: #008489;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ApplyBox = styled.div`
  color: grey;
  min-height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 2rem;
  margin: 1rem;
  background: white;
`;

const ArrowDown = styled(FaChevronDown)`
  color: #484848;
  transition: transform 350ms;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : '')};
  font-size: 18px;
  font-weight: 100;
`;
