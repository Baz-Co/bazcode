import React from 'react'

import './SideHandle.css'

export default function SideHandle({ children }) {
  return (
    <>
        <div class="fixed bottom-40 left-4 flex items-end justify-start w-full h-0">
        <div></div>
        <div id="notify0" class="max-w-sm flex p-2 pr-4 text-sky-400 rounded-r-lg shadow-xl border border-l-0 border-sky-900">
            <div class="flex-shrink-0">
            </div>
            <div class="text-xl text-grey-900 font-bold">
                {children || (
                    <>
                        <a href='login.html'><h4>Login</h4></a>
                        <a href='lt.html'><h4>Forest</h4></a>
                    </>
                )}
            </div>
        </div>
    </div>
    </>
  )
}
