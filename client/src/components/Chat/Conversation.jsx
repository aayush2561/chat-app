import React from 'react'

const Conversation = () => {
  return (
    <div className="flex gap-2 items-center hover:bg-[#0462d4] rounded-full p-2 py-4 my-2  cursor-pointer">
    <div className="avatar online">
     <div className="w-12 rounded-full">
    <img
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
      alt="user"
    />
    </div>
    </div>
    <div className="flex flex-col flex-1">
     <div className="flex gap-3 justify-between">
    <p className="font-bold text-white">John Doe</p>
  </div>
</div>
</div>
  )
}

export default Conversation
