import { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import { Input, Space, Table, Typography, message, Tabs } from 'antd'
const { Search } = Input
import decodeJWT from '../../utils/decode-JWT'
const { Title, Text } = Typography
const { TabPane } = Tabs
import 'moment/locale/vi'
import '../../static/css/scroll_container.css'

export default function Default() {
  const userFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
  const userNameLogin = userFromLocalStorage?.login || 'none'
  const userId = userFromLocalStorage.id
  const page = 1
  const pageSize = 100
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 820)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className="w-full h-screen bg-slate-50">
      <Helmet>
        <title>ITM - {t('Default')}</title>
      </Helmet>
      {/* <div className="h-full pb-20 lg:pb-4">
        <div className="h-full p-3 overflow-auto scrollable-content">
         
        </div>
      </div>  */}

      <div className="grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <svg
            className="mx-auto h-56 w-auto text-black sm:h-64"
            viewBox="0 0 1466 1393"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M62.5388 639.179C70.7391 639.179 77.3868 632.531 77.3868 624.331C77.3868 616.131 70.7391 609.483 62.5388 609.483C54.3385 609.483 47.6908 616.131 47.6908 624.331C47.6908 632.531 54.3385 639.179 62.5388 639.179Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M91.634 625.843C121.583 622.761 168.575 626.406 174.13 649.573C179.684 672.739 158.474 681.212 147.176 682.552C104.158 689.389 47.1191 686.172 47.1191 649.573"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M80.8132 660.88C82.7056 660.88 84.2396 659.346 84.2396 657.454C84.2396 655.561 82.7056 654.027 80.8132 654.027C78.9208 654.027 77.3867 655.561 77.3867 657.454C77.3867 659.346 78.9208 660.88 80.8132 660.88Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M113.936 657.454C113.936 659.118 112.385 660.88 109.938 660.88C107.491 660.88 105.941 659.118 105.941 657.454C105.941 655.789 107.491 654.027 109.938 654.027C112.385 654.027 113.936 655.789 113.936 657.454Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M139.063 660.88C140.955 660.88 142.49 659.346 142.49 657.454C142.49 655.561 140.955 654.027 139.063 654.027C137.171 654.027 135.637 655.561 135.637 657.454C135.637 659.346 137.171 660.88 139.063 660.88Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M1189.27 221.151C1196.84 221.151 1202.98 215.015 1202.98 207.445C1202.98 199.876 1196.84 193.74 1189.27 193.74C1181.7 193.74 1175.57 199.876 1175.57 207.445C1175.57 215.015 1181.7 221.151 1189.27 221.151Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M1216.2 195.453C1226.24 195.453 1254.94 195.453 1268.44 195.453C1279.38 195.453 1284.64 197.872 1284.64 214.803C1284.64 231.253 1284.5 252.563 1284.64 261.163C1284.73 267.21 1281.72 273.901 1271.68 274.869C1261.64 275.836 1221.33 275.272 1202.43 274.869C1195.41 274.869 1182.99 270.89 1182.99 254.712V236.571"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1209.26 224.007L1234.39 241.139"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1234.39 241.139L1280.07 198.879"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1245.97 230.859L1258.45 243.423L1270.94 255.987"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1200.12 255.987L1218.54 230.859"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1289.71 1077.74C1285.92 1081.55 1282.65 1084.82 1280.39 1087.08C1274.52 1092.96 1268.34 1089.53 1265.99 1087.08L1228.5 1050.96C1222.97 1045.81 1218.29 1040.73 1197.37 1020.77C1195.23 1018.63 1191.83 1013.15 1195.39 1008.4C1198.95 1003.65 1218.95 978.71 1228.5 966.834C1231.4 962.635 1237.7 957.641 1245.73 965.11C1252.65 971.543 1276.37 993.81 1296.63 1010.74"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1228.11 968.119C1229.28 989.786 1237.24 1024.66 1278.36 1037.79"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1332.39 1039.47C1330.51 1034.68 1316.04 1029.1 1310.56 1039.47C1304.93 1050.16 1309.24 1059.17 1312.91 1060.94C1317.59 1063.2 1324.46 1064.38 1331.73 1051.39"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1333.59 1032.8C1333.17 1035.3 1332.73 1036.35 1332.39 1039.47C1331.95 1043.52 1331.66 1047.78 1331.73 1051.39C1331.87 1057.74 1333.12 1062.12 1336.69 1060C1343.84 1055.76 1347.7 1052.29 1348.72 1048.74C1350.44 1042.78 1350.45 1031.36 1340.81 1023.9C1329.18 1014.89 1316.07 1015.13 1305.76 1023.9C1295.52 1032.6 1292.72 1046.53 1293.28 1053.76C1293.89 1061.66 1299.79 1078.64 1319.04 1078.9C1338.28 1079.17 1348.71 1068.79 1350.31 1063.93"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M318.951 896.814C314.845 880.962 301.21 851.727 279.528 861.609C257.844 871.491 270.492 889.196 279.528 896.814C285.607 900.931 298.678 905.337 302.319 890.019C305.96 874.703 290.616 868.403 286.303 875.197C284.029 877.873 281.46 884.585 289.383 890.019"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M412.129 113.373C412.057 112.965 412.484 112.651 412.852 112.842L439.902 126.865C441.509 127.699 443.423 127.688 445.02 126.836L471.908 112.503C472.274 112.308 472.704 112.618 472.636 113.026L467.658 143.086C467.362 144.872 467.964 146.689 469.267 147.945L491.207 169.087C491.506 169.375 491.345 169.88 490.935 169.942L460.808 174.496C459.018 174.766 457.476 175.9 456.684 177.528L443.356 204.928C443.175 205.3 442.645 205.303 442.46 204.933L428.819 177.688C428.009 176.069 426.454 174.953 424.661 174.703L394.484 170.494C394.073 170.437 393.907 169.934 394.202 169.643L415.898 148.251C417.187 146.98 417.768 145.156 417.452 143.373L414.99 143.81L417.452 143.373L412.129 113.373Z"
              stroke="black"
              strokeWidth="5"
            />
            <path
              d="M768.389 639.082V736.165"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M841.486 650.504V743.018"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M670.515 1070.91C646.378 1073.92 589.873 1085 577.495 1107.54C573.782 1114.31 569.474 1130.76 581.951 1142.48C594.428 1154.2 617.229 1151.12 627.068 1148.12L684.44 1125.01"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M999.446 900.819C954.408 902.268 755.489 998.57 661.659 1046.54C653.669 1099.4 687.387 1137.35 705.245 1149.72C798.772 1122.57 990.728 1067.54 1010.34 1064.64C1029.96 1061.75 1049.39 1047.75 1056.65 1041.11C1107.5 981.736 1069.97 931.291 1044.85 913.491C1026.96 900.818 1011.52 900.43 999.446 900.819Z"
              fill="black"
            />
            <path
              d="M577.571 887.349C609.482 889.477 748.688 943.428 814.646 971.704L663.802 1047.08C596.294 1066.88 554.823 1060.36 542.158 1056.09C469.052 1020.87 497.695 933.975 526.741 901.788C545.461 885.855 566.138 886.586 577.571 887.349Z"
              fill="black"
            />
            <path
              d="M932.729 1081.19C952.673 1090.78 963.456 1103.33 968.924 1113.63C980.641 1140.45 959.602 1156.57 935.581 1148.99C922.307 1144.8 919.178 1141.99 912.148 1136.16C908.58 1133.2 891.918 1117.72 872.896 1099.44"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M549.668 622.079L565.136 903.177C565.428 908.479 569.812 912.628 575.121 912.628H1005.09C1010.62 912.628 1015.09 908.151 1015.09 902.628V615.524C1015.09 609.949 1010.53 605.45 1004.96 605.525L559.518 611.53C553.833 611.607 549.356 616.402 549.668 622.079Z"
              fill="black"
            />
            <rect
              x="562.801"
              y="916.625"
              width="452.293"
              height="21.7009"
              rx="10"
              fill="black"
            />
            <path
              d="M842.629 484.891C882.414 484.32 969.979 514.587 1004.81 609.957"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M755.254 484.32C664.453 502.024 621.051 540.857 586.786 615.668"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1059.07 574.648L1081.34 537.528"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1081.34 584.927L1111.61 559.8"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1085.91 602.059C1091.81 604.343 1105.21 606.514 1111.61 596.919"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M501.696 567.698L467.431 532.291"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M536.532 561.987L515.973 508.877"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M493.13 587.685L467.431 577.977"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1027.66 674.015C1048.79 707.137 1072.77 746.541 1027.66 820.684"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M843.2 487.747C848.339 472.899 843.657 462.907 839.088 461.003C811.677 486.131 770.102 476.803 754.683 461.574C749.201 466.6 752.398 481.465 754.683 486.033C784.379 518.927 826.638 500.501 843.2 487.747Z"
              fill="black"
            />
            <path
              d="M721.561 579.119L732.647 562.103C740.473 550.09 755.705 545.294 769.002 550.656L796.952 561.926C808.891 566.74 822.571 563.401 830.949 553.627L858.048 522.011"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M542.813 695.048C534.247 715.226 524.082 764.148 551.951 798.413"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M921.944 254.297C909.38 299.412 903.098 303.41 884.824 323.397C884.824 303.644 881.43 270.488 881.43 256.681C821.593 256.681 771.095 232.255 753.325 220.042C753.962 261.461 715.132 288.542 715.132 288.542C715.132 288.542 720.702 305.269 723.885 342.705C726.431 372.654 719.111 366.866 715.132 360.228C703.674 323.27 684.895 333.147 676.938 342.705C579.299 184.055 729.454 153.4 758.098 156.321C779.741 137.842 809.924 123.36 831.142 121.236C907.667 113.576 942.315 181.145 921.944 254.297Z"
              fill="black"
            />
            <path
              d="M716.47 388.466C726.749 451.221 795.744 496.347 845.533 445.511C895.322 394.674 885.358 301.62 880.039 258.198"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M675.81 338.816C669.528 354.235 675.421 388.403 716.47 388.403"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M693.914 347.285C693.005 350.585 693.732 358.402 703.906 363.276"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M878.656 380.408C892.053 374.822 901.499 354.138 897.865 321.016"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M803.273 418.099C816.408 421.525 815.578 412.096 825.545 403.822"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="842.484" cy="338.319" r="8.56615" fill="black" />
            <circle cx="767.102" cy="339.461" r="8.56615" fill="black" />
            <path
              d="M748.45 319.874C750.253 314.566 758.031 304.747 774.72 307.932"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M828.401 309.594C832.381 306.147 843.207 301.32 854.67 309.594"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M800.769 333.58C799.438 344.857 798.534 367.727 805.558 368.986"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1129.88 851.619C1282.36 893.879 1556.25 942.42 1431.98 798.509C1392.77 759.866 1334.9 714.561 1241.81 674.586"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M1294.92 556.359C1389.72 495.634 1542.43 370.188 1394.86 354.198C1247.29 338.208 1112.56 393.602 1063.64 423.298"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M927.719 467.62C990.537 332.275 1092.19 51.7622 996.248 12.4722C876.322 -36.6404 720.989 104.987 594.21 443.064"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M454.502 351.029C314.017 274.124 27.2225 155.835 3.9226 297.919C-19.3773 440.003 265.285 558.52 410.529 600.018"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M447.822 674.586C242.805 779.093 -14.0767 923.627 128.213 998.957C186.462 1029.8 335.513 1010.95 404.042 982.967"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <ellipse
              cx="783.237"
              cy="1358.74"
              rx="282.683"
              ry="34.2646"
              fill="black"
            />
          </svg>

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!!!!!!!!!!
          </h1>

          <p className="mt-4 text-gray-500">
            The website is in development stage.
          </p>
        </div>
      </div>
    </div>
  )
}
