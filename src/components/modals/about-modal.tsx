import { Dialog, Transition } from '@headlessui/react';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

export const AboutModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300 delay-100'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300 delay-100'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-primary-500 p-6 align-middle shadow-xl transition-all relative'>
                <div
                  className='absolute top-5 right-5 text-white cursor-pointer w-fit h-fit'
                  onClick={() => setIsOpen(false)}
                >
                  <IoMdCloseCircle size={25} />
                </div>
                <Dialog.Title
                  as='h2'
                  className='text-sm font-black leading-6 flex flex-col items-center gap-5 w-3/4 mx-auto'
                >
                  Quem foi o doido que fez esse jogo? 🤠
                </Dialog.Title>
                <div className='my-6'>
                  <p className='text-sm mb-2'>
                    Desenvolvido por{' '}
                    <a
                      className='font-black underline'
                      href='https://instagram.com/_hnqg'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Henrique Gonçalves 🐉
                    </a>
                  </p>
                  <p className='text-xs mb-2'>
                    Este projeto é open source e você pode vê-lo no{' '}
                    <a
                      className='font-black underline'
                      href='https://github.com/hnqg/anti-termo'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Github
                    </a>
                    .
                  </p>
                  <p className='text-xs mb-2'>
                    Anti Termo é inspirado nos jogos{' '}
                    <a
                      className='font-black underline'
                      href='https://term.ooo'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Termo
                    </a>{' '}
                    <a
                      className='font-black underline'
                      href='https://twitter.com/fserb'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      (@fserb)
                    </a>
                    ,{' '}
                    <a
                      className='font-black underline'
                      href='https://www.antiwordle.com'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      AntiWordle
                    </a>{' '}
                    e{' '}
                    <a
                      className='font-black underline'
                      href='https://dontwordle.com'
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      Don&apos;t Wordle
                    </a>
                    .
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
