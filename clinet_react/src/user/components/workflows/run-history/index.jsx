import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Image,
  notification,
} from 'antd'
import { useState } from 'react'
import ThreePaneLayout from './pane-layout'

const { Title, Text } = Typography
const UpdateIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-80 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="-160"
        y="-209"
        width="1063"
        height="398"
        rx="20"
        stroke="#1C274C"
        strokeOpacity="0.05"
      />
      <path
        d="M12 8V12L14.5 14.5"
        stroke="#1C274C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.60423 5.60414L5.0739 5.07381V5.07381L5.60423 5.60414ZM4.33785 6.87052L3.58786 6.87429C3.58992 7.28556 3.92281 7.61844 4.33408 7.62051L4.33785 6.87052ZM6.87963 7.6333C7.29384 7.63539 7.63131 7.30129 7.63339 6.88708C7.63547 6.47287 7.30138 6.1354 6.88717 6.13332L6.87963 7.6333ZM5.07505 4.3212C5.07297 3.90699 4.7355 3.5729 4.32129 3.57498C3.90708 3.57706 3.57298 3.91453 3.57507 4.32874L5.07505 4.3212ZM3.82669 10.7849C3.88294 10.3745 3.59587 9.99627 3.18549 9.94002C2.77512 9.88377 2.39684 10.1708 2.34059 10.5812L3.82669 10.7849ZM18.8623 5.13777C15.0421 1.31758 8.86882 1.27889 5.0739 5.07381L6.13456 6.13447C9.33367 2.93536 14.5572 2.95395 17.8017 6.19843L18.8623 5.13777ZM5.13786 18.8622C8.95805 22.6824 15.1314 22.7211 18.9263 18.9262L17.8656 17.8655C14.6665 21.0646 9.443 21.0461 6.19852 17.8016L5.13786 18.8622ZM18.9263 18.9262C22.7212 15.1313 22.6825 8.95796 18.8623 5.13777L17.8017 6.19843C21.0461 9.44291 21.0647 14.6664 17.8656 17.8655L18.9263 18.9262ZM5.0739 5.07381L3.80752 6.34019L4.86818 7.40085L6.13456 6.13447L5.0739 5.07381ZM4.33408 7.62051L6.87963 7.6333L6.88717 6.13332L4.34162 6.12053L4.33408 7.62051ZM5.08784 6.86675L5.07505 4.3212L3.57507 4.32874L3.58786 6.87429L5.08784 6.86675ZM2.34059 10.5812C1.93916 13.5099 2.87401 16.5984 5.13786 18.8622L6.19852 17.8016C4.27794 15.881 3.48672 13.2652 3.82669 10.7849L2.34059 10.5812Z"
        fill="#1C274C"
      />
    </svg>
  )
}
const ShowIcon = () => {
  return (
    <svg
      className="w-4 h-4 opacity-80 "
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.46997 13.4599L12 9.93994L15.53 13.4599"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default function RunHistory({
  handleOnClickShowRuncode,
  showRunHistory,
}) {
  return (
    <>
      {showRunHistory ? (
        <>
          <div className="w-full h-[1000px] bg-white border-t  ">
            <ThreePaneLayout
              handleOnClickShowRuncode={handleOnClickShowRuncode}
            />
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-9 bg-white border-t p-2 flex justify-between">
            <div className="flex gap-1 items-center ">
              <UpdateIcon />
              <Text> Logs</Text>
            </div>
            <div className="flex gap-3 items-center ">
              <Text> 0 entries</Text>
              <div
                onClick={handleOnClickShowRuncode}
                className="flex gap-1 items-center cursor-pointer "
              >
                <ShowIcon />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
