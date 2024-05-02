import React from 'react';
import LeftIndicator from './LeftIndicator';
import OrgLine from './OrgLine';

const WorkComponent = () => {
  return (
    <div className='mx-56 flex relative'>
      <div className='flex flex-row h-screen space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-20'>
            <h1 className='text-6xl font-serif font-bold text-white'>
              Work History
            </h1>
            <div className='flex flex-row space-x-5'>
              <div className=' text-white'>
                <div className='flex flex-row'>
                  <LeftIndicator size={140} />
                  <div className='space-y-3'>
                    <h1 className='text-4xl font-bold font-serif text-slate-200'>
                      Bachelor of Technology
                    </h1>
                    <h1 className='text-2xl font-semibold text-slate-300'>
                      Electronics and Communication Engineering
                    </h1>
                    <OrgLine name={'Tezpur University'} year={'2023'} />
                  </div>
                </div>

                <div className='flex flex-row'>
                  <LeftIndicator size={90} />
                  <div className='space-y-3'>
                    <h1 className='text-3xl font-bold font-serif text-slate-200'>
                      Higher Secondary, AHSEC
                    </h1>
                    <OrgLine name={'Cotton University'} year={'2018'} />
                  </div>
                </div>

                <div className='flex flex-row'>
                  <LeftIndicator size={0} />
                  <div className='space-y-3'>
                    <h1 className='text-3xl font-bold font-serif text-slate-200'>
                      High School, SEBA
                    </h1>
                    <OrgLine name={'Navarun Jatiya Vidyalaya'} year={'2016'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;
