import React from 'react';
import Typography from '../../UI/Typography';

export default function FooterContact() {
  return (
    <div className="text-center lg:text-left">
      <Typography component={'h4'}>Contact</Typography>
      <div className="flex flex-col gap-y-2 mt-5">
        <p className="text-sm font-[google] text-primary-50 tracking-wide ">
          <span className="font-medium">Head Office: </span>
          785 15h Street, Office 478 Berlin, De 81566
        </p>
        <p className="text-sm font-[google] text-primary-50 tracking-wide">
          <span className="font-medium">Tel: </span>
          0123456778
        </p>
        <p className="text-sm font-[google] text-primary-50 tracking-wide">
          <span className="font-medium">Email: </span>
          hello@naturis.com
        </p>
      </div>
    </div>
  );
}
