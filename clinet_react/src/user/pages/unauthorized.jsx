import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
const { Search } = Input
import decodeJWT from '../../utils/decode-JWT'
const { Title, Text } = Typography
const { TabPane } = Tabs
import 'moment/locale/vi'
import './static/css/scroll_container.css'

export default function Unauthorized() {
  const { t } = useTranslation()

  return (
    <div className="w-full h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('Unauthorized')}</title>
      </Helmet>

    {/*   <div className="grid h-screen place-content-center bg-px-4">
        <div className="text-center flex flex-col  justify-center items-center">
          <svg
            className="  w-96 h-96"
            viewBox="0 0 284 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_870)">
              <path
                d="M169.3 157.8C163.6 170.2 162.4 184.3 162.9 197.9C163.4 213.6 166 229.6 173.6 243.5C181.2 257.3 194.3 268.7 209.9 271.2C224.9 273.6 240.5 267.5 251.6 257.1C262.7 246.7 269.6 232.4 273.4 217.7C279.1 195.7 277.8 170.9 265.1 152.1C242 118 187 119.6 169.3 157.8Z"
                fill="white"
              />
              <path
                d="M268.2 218C264.9 230.9 258.8 243.4 249.1 252.6C239.4 261.7 225.7 267.1 212.5 265C200 263 189.2 254.4 182.4 243.6C188.9 250.8 197.4 256.1 206.9 257.6C220.1 259.7 233.8 254.4 243.5 245.2C253.2 236.1 259.3 223.6 262.6 210.7C267.4 192.1 266.5 171.2 256.5 154.9C258.1 156.6 259.6 158.5 261 160.6C272.1 176.9 273.2 198.7 268.2 218Z"
                fill="#E6E6E6"
              />
              <path
                d="M216.5 274C214.1 274 211.8 273.8 209.4 273.4C194.2 270.9 180 260.1 171.5 244.5C164.7 232.2 161.1 216.9 160.5 197.9C159.9 180.8 162 167.7 167.1 156.7C175.4 138.8 192.5 127.2 213 125.5C234.6 123.8 255.2 133.4 266.9 150.6C278.9 168.3 282.1 192.9 275.6 218.1C271.3 234.9 263.5 248.9 253.1 258.6C242.7 268.5 229.4 274 216.5 274ZM218.1 130.1C216.6 130.1 215 130.2 213.5 130.3C194.7 131.8 179 142.5 171.4 158.8C166.6 169.1 164.7 181.5 165.2 197.9C165.8 216.2 169.2 230.7 175.6 242.4C183.5 256.8 196.4 266.7 210.2 268.9C223.7 271.1 238.6 266.1 250 255.4C259.7 246.3 267 233 271.1 217.1C277.3 193.2 274.3 170 263.1 153.4C253.2 138.7 236.3 130.1 218.1 130.1Z"
                fill="#333333"
              />
              <path
                d="M30.5001 152.9C22.5001 166.4 19.0001 182.2 17.5001 197.9C15.5001 218.6 18.0001 242 33.5001 255.9C51.0001 271.5 80.3001 268.2 97.7001 252.4C115.1 236.6 121.8 211.7 120.6 188.2C119.8 172.3 115.5 156.2 105.4 143.9C82.5001 116.1 47.6001 124.2 30.5001 152.9Z"
                fill="white"
              />
              <path
                d="M98.7999 247.8C98.4999 248.1 98.1 248.4 97.7999 248.8C81.5 263.5 53.9999 266.7 37.5999 252C22.9999 239 20.6999 217.1 22.5999 197.6C23.9999 182.9 27.2999 168.1 34.7999 155.4C39.1999 148 44.8999 142.1 51.1999 137.9C47.5999 141.3 44.3999 145.4 41.5999 150C34.0999 162.7 30.7999 177.5 29.3999 192.2C27.5999 211.7 29.7999 233.6 44.3999 246.6C58.9999 259.6 82.2999 258.6 98.7999 247.8Z"
                fill="#E6E6E6"
              />
              <path
                d="M62.2004 268.5C51.0004 268.5 40.1004 264.9 32.0004 257.6C14.9004 242.3 13.4004 216.6 15.2004 197.6C17.0004 178.8 21.3004 163.7 28.5004 151.6C37.9004 135.8 52.9004 125.6 68.7004 124.4C83.1004 123.3 96.8004 129.7 107.3 142.3C116.6 153.7 122.1 169.5 123 188C124.4 215.1 115.8 239.1 99.3004 254C88.8004 263.7 75.2004 268.5 62.2004 268.5ZM32.5004 154.1C25.7004 165.6 21.5004 180 19.8004 198.1C18.1004 216 19.4004 240.2 35.0004 254.1C52.3004 269.5 80.5004 264.8 96.1004 250.7C111.5 236.8 119.6 214.1 118.2 188.4C117.6 176.2 114.5 158.8 103.5 145.4C94.2004 134 81.9004 128.2 69.0004 129.2C54.8004 130.3 41.1004 139.6 32.5004 154.1Z"
                fill="#333333"
              />
              <path
                d="M79.4 209C81.9 210.5 85.3 210.4 87.8 208.8C94 205 89.2 196.5 83.1 196.4C76.2 196.3 73.4 205.4 79.4 209Z"
                fill="#333333"
              />
              <path
                d="M188.6 207.7C190.5 208.9 193.1 208.8 195.1 207.6C199.9 204.7 196.2 198.1 191.4 198C186.2 197.9 184 204.9 188.6 207.7Z"
                fill="#333333"
              />
              <path
                d="M114.5 0C116.1 5.6 117.4 11.3 118.4 17C120.2 26.7 114.7 36.3 105.4 39.7C92.2002 44.6 79.2002 50.1 65.6002 54.2C52.2002 58.2 38.5002 62.4 26.9002 70.2C15.3002 78 6.00016 90.3 5.00016 104.3C-4.99984 88.4 0.90016 67 14.2002 53.7C27.5002 40.4 45.8002 33.7 63.4002 27.3C81.1002 20.9 101.7 13.7 114.5 0Z"
                fill="#333333"
              />
              <path
                d="M169 0C166.8 7.8 165.1 15.7 164 23.7C163.1 29.8 166.8 35.7 172.6 37.7C187.8 43 202.4 49.5 217.8 54.2C231.2 58.2 244.9 62.4 256.5 70.2C268.1 78 277.6 90.3 278.5 104.3C288.5 88.4 282.6 67 269.4 53.7C256.1 40.4 237.8 33.7 220.2 27.3C202.5 20.9 181.9 13.7 169 0Z"
                fill="#333333"
              />
              <path
                d="M191.7 322.9H83.4001C82.1001 322.9 81.1001 321.9 81.1001 320.6C81.1001 319.3 82.1001 318.3 83.4001 318.3H191.7C193 318.3 194 319.3 194 320.6C194 321.9 193 322.9 191.7 322.9Z"
                fill="#333333"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_870">
                <rect className="  w-96 h-96" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!!!!!!!!!!
          </h1>

          <p className="mt-4 text-gray-500">
            {t(
              'Bạn không có quyền truy cập trang này. Vui lòng liên hệ với quản trị viên để được hỗ trợ.',
            )}
          </p>
        </div>
      </div> */}
    </div>
  )
}
