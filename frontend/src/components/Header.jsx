import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn'
import ResetPassword from './ResetPassword';
function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* {Site branding } */}
          <div className="flex-shrink-0 mr-4">
            {/* { Logo } */}
            {<Link to="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link>}
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">

<li>         <Link to="/login" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
               </li>
               </ul> 

               <ul>
               <li>
                <Link to="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                     <svg className="w-8 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>                
                </Link>
                </li>
                </ul>
          </nav>

        </div> 
      </div>
    </header>
  );
}

export default Header;
// import { Fragment, useState } from 'react'
// import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="bg-white">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
//         <div className="flex lg:flex-1">
//           <a href="#" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
//           </a>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <Popover.Group className="hidden lg:flex lg:gap-x-12">
//           <Popover className="relative">
//             <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//               Product
//               <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
//             </Popover.Button>

//             <Transition
//               as={Fragment}
//               enter="transition ease-out duration-200"
//               enterFrom="opacity-0 translate-y-1"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition ease-in duration-150"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 translate-y-1"
//             >
//               <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//                 <div className="p-4">
//                   {products.map((item) => (
//                     <div
//                       key={item.name}
//                       className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
//                     >
//                       <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                         <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
//                       </div>
//                       <div className="flex-auto">
//                         <a href={item.href} className="block font-semibold text-gray-900">
//                           {item.name}
//                           <span className="absolute inset-0" />
//                         </a>
//                         <p className="mt-1 text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//                   {callsToAction.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
//                     >
//                       <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//               </Popover.Panel>
//             </Transition>
//           </Popover>

//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Features
//           </a>
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Marketplace
//           </a>
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Company
//           </a>
//         </Popover.Group>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Log in <span aria-hidden="true">&rarr;</span>
//           </a>
//         </div>
//       </nav>
//       <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//         <div className="fixed inset-0 z-10" />
//         <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-between">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 className="h-8 w-auto"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                 alt=""
//               />
//             </a>
//             <button
//               type="button"
//               className="-m-2.5 rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <span className="sr-only">Close menu</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-2 py-6">
//                 <Disclosure as="div" className="-mx-3">
//                   {({ open }) => (
//                     <>
//                       <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
//                         Product
//                         <ChevronDownIcon
//                           className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
//                           aria-hidden="true"
//                         />
//                       </Disclosure.Button>
//                       <Disclosure.Panel className="mt-2 space-y-2">
//                         {[...products, ...callsToAction].map((item) => (
//                           <Disclosure.Button
//                             key={item.name}
//                             as="a"
//                             href={item.href}
//                             className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                           >
//                             {item.name}
//                           </Disclosure.Button>
//                         ))}
//                       </Disclosure.Panel>
//                     </>
//                   )}
//                 </Disclosure>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Features
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Marketplace
//                 </a>
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Company
//                 </a>
//               </div>
//               <div className="py-6">
//                 <a
//                   href="#"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Log in
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Dialog.Panel>
//       </Dialog>
//     </header>
//   )
// }

