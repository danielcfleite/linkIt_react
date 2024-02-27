import { useState } from 'react';

export const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e:any) => {
    const inputPhoneNumber = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    let formattedPhoneNumber = '';

    if (inputPhoneNumber.length <= 10) {
      // Format as (XXX) XXX-XXXX for US numbers
      formattedPhoneNumber = inputPhoneNumber.replace(
        /(\d{3})(\d{0,3})(\d{0,4})/,
        '($1) $2-$3'
      );
    } else {
      // Handle longer numbers (e.g., international numbers)
      // You can implement your own logic here
      formattedPhoneNumber = inputPhoneNumber;
    }

    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <input
      type="tel"
      value={phoneNumber}
      onChange={handleChange}
      placeholder="Enter phone number"
    />
  );
};

