import React from 'react';
import LeftIndicator from './LeftIndicator';
import OrgLine from './OrgLine';
import { work } from './constant';
import { GoDotFill } from 'react-icons/go';

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
                  <LeftIndicator size={200} />
                  <div className='space-y-3'>
                    <h1 className='text-4xl font-bold font-serif text-slate-200'>
                      Software Developer
                    </h1>
                    <OrgLine
                      name={'Cloud Civil Technologies'}
                      year={'Oct 2023 - Apr 2024'}
                    />
                    <div className='space-y-1'>
                      {work[0].map((item) => (
                        <div className='flex flex-row items-start'>
                          <div className='mt-1 mr-1'>
                            <GoDotFill color='white' size={20} />
                          </div>
                          <p className='leading-7'>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='flex flex-row'>
                  <LeftIndicator size={170} />
                  <div className='space-y-3'>
                    <h1 className='text-4xl font-bold font-serif text-slate-200'>
                      React Native Developer
                    </h1>
                    <OrgLine
                      name={'TGG Technologies Private Limited'}
                      year={'Sep 2023 - Nov 2023'}
                    />
                    <div className='space-y-1'>
                      {work[1].map((item) => (
                        <div className='flex flex-row items-start'>
                          <div className='mt-1 mr-1'>
                            <GoDotFill color='white' size={20} />
                          </div>
                          <p className='leading-7'>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='flex flex-row'>
                  <LeftIndicator size={0} />
                  <div className='space-y-3'>
                    <h1 className='text-4xl font-bold font-serif text-slate-200'>
                      Software Developement Intern
                    </h1>
                    <OrgLine name={'AID24x7'} year={'Feb 2023 - Aug 2023'} />
                    <div className='space-y-1'>
                      {work[2].map((item) => (
                        <div className='flex flex-row items-start'>
                          <div className='mt-1 mr-1'>
                            <GoDotFill color='white' size={20} />
                          </div>
                          <p className='leading-7'>{item}</p>
                        </div>
                      ))}
                    </div>
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
