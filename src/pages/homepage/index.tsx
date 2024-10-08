import { Button, Container, ScrollButton } from '~/shared/ui';
import { styles } from './styles';
import { AnimatedHeading, Banner, Form } from '~/components';
import { scrollIntoView } from '~/shared/lib';
import { motion } from 'framer-motion';

export const Homepage = () => {
  return (
    <div css={styles.wrapper}>
      <header css={styles.header}>
        <Container>
          <div css={styles.headerWrapper}>
            <a href="/" css={styles.logo} aria-label="Go to homepage">
              <svg
                width="116"
                height="33"
                viewBox="0 0 116 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_95)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9225 0C11.1986 0 11.4225 0.223858 11.4225 0.5V17.7682C11.4225 17.778 11.4225 17.778 11.4225 17.7878C11.4425 19.714 13.0972 21.3159 15.0627 21.3159H15.0727C17.0382 21.3061 18.6828 19.7239 18.6928 17.8075C18.6928 17.7977 18.6928 17.7878 18.6928 17.7878L18.6831 0.510109C18.6829 0.233857 18.9069 0.00982753 19.1831 0.00982753H29.5747C29.8509 0.00982753 30.0747 0.233685 30.0747 0.509828V6.02428C26.0735 6.02428 22.8345 9.19857 22.8345 13.1198C22.8345 16.9722 25.9632 20.1071 29.8742 20.2152C28.6909 27.183 22.5436 32.48 15.0827 32.48H15.0226C6.7193 32.48 0.0506195 25.8857 0.0405915 17.7682L0.0308457 0.500282C0.0306898 0.224029 0.254593 0 0.530846 0H10.9225Z"
                    fill="url(#paint0_linear_4_95)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.7157 31.7529L19.7959 31.7332C14.09 33.4531 8.16335 32.2738 3.67076 27.3895C0.832807 23.9695 -0.159974 21.2571 0.0205314 14.8889C0.0205314 14.309 0.0205314 9.57216 0.0305595 9.56233C0.0807 7.52803 1.66514 5.98511 3.6507 6.02442C5.59615 6.01459 7.27084 7.52803 7.25079 9.46405C7.31096 13.3754 7.31096 15.8323 7.27085 17.7683C6.83964 24.3626 12.0442 29.581 18.6928 29.6596C23.4863 29.5614 27.3672 26.9079 29.2725 22.4659C27.7282 26.8097 24.6295 30.0626 19.7157 31.7529Z"
                    fill="url(#paint1_linear_4_95)"
                  />
                  <path
                    d="M30.1149 17.5422C32.6238 17.5422 34.6576 15.549 34.6576 13.0903C34.6576 10.6316 32.6238 8.63843 30.1149 8.63843C27.606 8.63843 25.5721 10.6316 25.5721 13.0903C25.5721 15.549 27.606 17.5422 30.1149 17.5422Z"
                    fill="#13D9F7"
                  />
                  <path
                    d="M42.2974 24.3448C41.157 24.3448 40.0429 24.1976 38.9552 23.9033C37.8674 23.609 36.9989 23.2369 36.3498 22.7868L37.613 20.3199C38.2446 20.7354 38.999 21.0729 39.8763 21.3326C40.771 21.575 41.6483 21.6962 42.508 21.6962C44.473 21.6962 45.4555 21.1855 45.4555 20.1641C45.4555 19.6794 45.2011 19.3418 44.6923 19.1514C44.201 18.961 43.4027 18.7792 42.2974 18.6061C41.1395 18.433 40.1921 18.2339 39.4552 18.0088C38.7358 17.7838 38.1042 17.3943 37.5603 16.8403C37.034 16.2691 36.7708 15.4814 36.7708 14.4773C36.7708 13.1617 37.3235 12.1144 38.4288 11.3353C39.5517 10.539 41.0605 10.1409 42.9554 10.1409C43.9203 10.1409 44.8853 10.2534 45.8502 10.4784C46.8152 10.6862 47.6047 10.9718 48.2188 11.3353L46.9555 13.8022C45.7625 13.1098 44.4203 12.7635 42.929 12.7635C41.9641 12.7635 41.2272 12.9107 40.7184 13.205C40.2271 13.4819 39.9815 13.8541 39.9815 14.3215C39.9815 14.8409 40.2447 15.2131 40.771 15.4381C41.3149 15.6459 42.1483 15.8449 43.2712 16.0354C44.394 16.2085 45.3151 16.4076 46.0344 16.6326C46.7538 16.8576 47.3678 17.2385 47.8766 17.7751C48.403 18.3118 48.6662 19.0735 48.6662 20.0602C48.6662 21.3586 48.096 22.3973 46.9555 23.1763C45.8151 23.9553 44.2624 24.3448 42.2974 24.3448Z"
                    fill="white"
                  />
                  <path
                    d="M59.289 10.1409C60.6575 10.1409 61.8769 10.4352 62.9471 11.0237C64.0349 11.6123 64.8858 12.4433 65.4998 13.5166C66.1139 14.5899 66.4209 15.8276 66.4209 17.2298C66.4209 18.6321 66.1139 19.8785 65.4998 20.9691C64.8858 22.0424 64.0349 22.8733 62.9471 23.4619C61.8769 24.0505 60.6575 24.3448 59.289 24.3448C57.3942 24.3448 55.8941 23.7216 54.7888 22.4752V29.2006H51.4992V10.2967H54.6309V12.1144C55.1748 11.4565 55.8415 10.9632 56.631 10.6342C57.438 10.3053 58.324 10.1409 59.289 10.1409ZM58.9206 21.5663C60.1312 21.5663 61.1224 21.1682 61.8944 20.3718C62.6839 19.5755 63.0787 18.5282 63.0787 17.2298C63.0787 15.9315 62.6839 14.8842 61.8944 14.0878C61.1224 13.2915 60.1312 12.8934 58.9206 12.8934C58.1311 12.8934 57.4205 13.0751 56.7889 13.4387C56.1573 13.7849 55.6572 14.2869 55.2888 14.9448C54.9204 15.6026 54.7362 16.3643 54.7362 17.2298C54.7362 18.0954 54.9204 18.8571 55.2888 19.5149C55.6572 20.1728 56.1573 20.6834 56.7889 21.047C57.4205 21.3932 58.1311 21.5663 58.9206 21.5663Z"
                    fill="white"
                  />
                  <path
                    d="M83.0124 10.2967V24.163H79.8807V22.3713C79.3368 23.0291 78.6613 23.5225 77.8543 23.8514C77.0648 24.1803 76.1875 24.3448 75.2226 24.3448C73.8541 24.3448 72.626 24.0505 71.5382 23.4619C70.468 22.8733 69.6258 22.0424 69.0117 20.9691C68.4152 19.8958 68.117 18.6494 68.117 17.2298C68.117 15.8103 68.4152 14.5726 69.0117 13.5166C69.6258 12.4433 70.468 11.6123 71.5382 11.0237C72.626 10.4352 73.8541 10.1409 75.2226 10.1409C76.1349 10.1409 76.9683 10.2967 77.7227 10.6083C78.4947 10.9199 79.1614 11.3786 79.7228 11.9845V10.2967H83.0124ZM75.591 21.5663C76.8016 21.5663 77.8017 21.1682 78.5912 20.3718C79.3807 19.5755 79.7754 18.5282 79.7754 17.2298C79.7754 15.9315 79.3807 14.8842 78.5912 14.0878C77.8017 13.2915 76.8016 12.8934 75.591 12.8934C74.3804 12.8934 73.3804 13.2915 72.5909 14.0878C71.8189 14.8842 71.4329 15.9315 71.4329 17.2298C71.4329 18.5282 71.8189 19.5755 72.5909 20.3718C73.3804 21.1682 74.3804 21.5663 75.591 21.5663Z"
                    fill="white"
                  />
                  <path
                    d="M93.4984 24.3448C92.0422 24.3448 90.7351 24.0418 89.5771 23.4359C88.4192 22.83 87.5156 21.9904 86.8665 20.9171C86.2173 19.8265 85.8927 18.5974 85.8927 17.2298C85.8927 15.8622 86.2173 14.6418 86.8665 13.5685C87.5156 12.4952 88.4104 11.6556 89.5508 11.0497C90.7088 10.4438 92.0246 10.1409 93.4984 10.1409C94.8844 10.1409 96.095 10.4179 97.1301 10.9718C98.1828 11.5258 98.9723 12.3221 99.4987 13.3608L96.9722 14.8149C96.5687 14.1744 96.0599 13.6983 95.4458 13.3867C94.8493 13.0578 94.1914 12.8934 93.4721 12.8934C92.2439 12.8934 91.2263 13.2915 90.4193 14.0878C89.6122 14.8668 89.2087 15.9142 89.2087 17.2298C89.2087 18.5455 89.6034 19.6015 90.393 20.3978C91.2 21.1768 92.2264 21.5663 93.4721 21.5663C94.1914 21.5663 94.8493 21.4105 95.4458 21.0989C96.0599 20.77 96.5687 20.2853 96.9722 19.6448L99.4987 21.0989C98.9548 22.1376 98.1565 22.9426 97.1038 23.5138C96.0687 24.0678 94.8669 24.3448 93.4984 24.3448Z"
                    fill="white"
                  />
                  <path
                    d="M115.682 10.2967V22.0597C115.682 26.9415 113.253 29.3824 108.393 29.3824C107.112 29.3824 105.884 29.2092 104.708 28.863C103.55 28.5341 102.594 28.0494 101.84 27.4089L103.313 24.968C103.91 25.47 104.638 25.8682 105.498 26.1625C106.357 26.4568 107.261 26.6039 108.208 26.6039C109.647 26.6039 110.7 26.2577 111.366 25.5652C112.051 24.8901 112.393 23.8427 112.393 22.4232V21.7741C111.866 22.3453 111.226 22.7868 110.472 23.0984C109.717 23.3927 108.901 23.5398 108.024 23.5398C106.147 23.5398 104.664 23.0291 103.577 22.0078C102.506 20.9864 101.971 19.4543 101.971 17.4116V10.2967H105.261V16.9961C105.261 18.2252 105.542 19.1514 106.103 19.7746C106.682 20.3805 107.498 20.6834 108.551 20.6834C109.726 20.6834 110.656 20.3286 111.34 19.6188C112.042 18.909 112.393 17.879 112.393 16.5287V10.2967H115.682Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_4_95"
                    x1="6.70258"
                    y1="15.5215"
                    x2="30.0581"
                    y2="13.5627"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2A18F0" />
                    <stop offset="0.631373" stopColor="#861ACC" />
                    <stop offset="1" stopColor="#E31DA8" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4_95"
                    x1="1.72151"
                    y1="9.51769"
                    x2="17.7754"
                    y2="35.0615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#13D9F7" />
                    <stop offset="1" stopColor="#452AF4" />
                  </linearGradient>
                  <clipPath id="clip0_4_95">
                    <rect width="116" height="32.48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <Button onClick={() => scrollIntoView('contact-form')}>
              Зареєструватися
            </Button>
          </div>
        </Container>
      </header>

      <main>
        <section css={styles.hero.wrapper}>
          <Container>
            <div css={styles.hero.content.wrapper}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true, amount: 0.5 }}
                css={styles.hero.info}
              >
                <p>Онлайн-конференція</p>
                <div css={styles.divider}></div>
                <p>30 квітня о 10:00</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.5, duration: 0.7 },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <AnimatedHeading duration={1000} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.5, duration: 0.7 },
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Button
                  onClick={() => scrollIntoView('contact-form')}
                  css={styles.hero.content.button}
                  variant="primary"
                >
                  Зареєструватися
                </Button>
              </motion.div>

              <div css={styles.row}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5, duration: 0.7 },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  css={styles.col.left}
                >
                  <h3 css={styles.hero.content.title}>
                    Про що ця <br />
                    онлайн-конференція
                  </h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5, duration: 0.7 },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  css={styles.col.right}
                >
                  <p css={styles.hero.content.desc}>
                    Щодня ми ходимо на роботу, зустрічаємося з друзями, донатимо
                    на Перемогу, робимо рутинні речі. Але чи замислюємося ми
                    щодня навіщо це все? Чи є у цьому сенс? Чи бачимо ми своє
                    майбутнє? Чи мріємо ми?
                  </p>

                  <ScrollButton
                    onClick={() => scrollIntoView('contact-form')}
                  />
                </motion.div>
              </div>
            </div>
          </Container>

          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 1, duration: 0.7 },
            }}
            viewport={{ once: true, amount: 0.5 }}
            css={styles.bgElement}
          >
            <svg
              width="1668"
              height="362"
              viewBox="0 0 1668 362"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.17"
                d="M1437.79 361.92C1424.03 361.92 1410.11 359.68 1396.03 355.2C1382.27 351.04 1371.07 345.44 1362.43 338.4L1394.11 274.56C1399.55 279.36 1405.79 283.04 1412.83 285.6C1420.19 288.48 1427.39 289.92 1434.43 289.92C1444.35 289.92 1452.19 287.68 1457.95 283.2C1463.71 278.72 1468.67 271.68 1472.83 262.08L1484.83 231.84L1492.03 222.72L1580.35 4.31982H1667.23L1554.91 275.04C1545.95 297.44 1535.55 314.88 1523.71 327.36C1512.19 340.16 1499.23 349.12 1484.83 354.24C1470.75 359.36 1455.07 361.92 1437.79 361.92ZM1473.31 275.52L1358.59 4.31982H1452.19L1536.67 214.56L1473.31 275.52Z"
                fill="url(#paint0_linear_4_57)"
                fillOpacity="0.2"
              />
              <path
                opacity="0.17"
                d="M1265.58 268.8C1236.78 268.8 1211.02 263.04 1188.3 251.52C1165.9 240 1148.3 224.16 1135.5 204C1122.7 183.52 1116.3 160.16 1116.3 133.92C1116.3 107.68 1122.7 84.48 1135.5 64.32C1148.3 44.16 1165.9 28.48 1188.3 17.28C1211.02 5.75998 1236.78 0 1265.58 0C1295.02 0 1320.46 6.23999 1341.9 18.72C1363.34 31.2 1378.54 48.8 1387.5 71.52L1316.94 107.52C1310.86 95.36 1303.34 86.56 1294.38 81.12C1285.42 75.36 1275.66 72.48 1265.1 72.48C1254.54 72.48 1244.94 74.88 1236.3 79.68C1227.66 84.48 1220.78 91.52 1215.66 100.8C1210.86 109.76 1208.46 120.8 1208.46 133.92C1208.46 147.36 1210.86 158.72 1215.66 168C1220.78 177.28 1227.66 184.32 1236.3 189.12C1244.94 193.92 1254.54 196.32 1265.1 196.32C1275.66 196.32 1285.42 193.6 1294.38 188.16C1303.34 182.4 1310.86 173.44 1316.94 161.28L1387.5 197.28C1378.54 220 1363.34 237.6 1341.9 250.08C1320.46 262.56 1295.02 268.8 1265.58 268.8Z"
                fill="url(#paint1_linear_4_57)"
                fillOpacity="0.2"
              />
              <path
                opacity="0.17"
                d="M1010.81 264.48V216L1004.57 204V114.72C1004.57 100.32 1000.09 89.28 991.127 81.6C982.487 73.6 968.567 69.6 949.367 69.6C936.887 69.6 924.247 71.68 911.447 75.84C898.647 79.68 887.767 85.12 878.807 92.16L848.087 30.24C862.807 20.64 880.407 13.28 900.887 8.15997C921.687 2.71999 942.327 0 962.807 0C1005.05 0 1037.69 9.75999 1060.73 29.28C1084.09 48.48 1095.77 78.72 1095.77 120V264.48H1010.81ZM934.007 268.8C913.207 268.8 895.607 265.28 881.207 258.24C866.807 251.2 855.767 241.6 848.087 229.44C840.727 217.28 837.047 203.68 837.047 188.64C837.047 172.64 841.047 158.88 849.047 147.36C857.367 135.52 870.007 126.56 886.967 120.48C903.927 114.08 925.847 110.88 952.727 110.88H1014.17V158.4H965.207C950.487 158.4 940.087 160.8 934.007 165.6C928.247 170.4 925.367 176.8 925.367 184.8C925.367 192.8 928.407 199.2 934.487 204C940.567 208.8 948.887 211.2 959.447 211.2C969.367 211.2 978.327 208.8 986.327 204C994.647 198.88 1000.73 191.2 1004.57 180.96L1017.05 214.56C1012.25 232.48 1002.81 246.08 988.727 255.36C974.967 264.32 956.727 268.8 934.007 268.8Z"
                fill="url(#paint2_linear_4_57)"
                fillOpacity="0.2"
              />
              <path
                opacity="0.17"
                d="M711.485 268.8C689.405 268.8 670.525 264 654.845 254.4C639.165 244.48 627.165 229.76 618.845 210.24C610.845 190.4 606.845 165.12 606.845 134.4C606.845 103.36 610.685 78.08 618.365 58.56C626.045 38.72 637.565 24 652.925 14.4C668.605 4.79999 688.125 0 711.485 0C735.165 0 756.605 5.59998 775.805 16.8C795.325 27.68 810.685 43.2 821.885 63.36C833.405 83.2 839.165 106.88 839.165 134.4C839.165 161.92 833.405 185.76 821.885 205.92C810.685 226.08 795.325 241.6 775.805 252.48C756.605 263.36 735.165 268.8 711.485 268.8ZM547.805 357.6V4.31996H634.685V48.48L634.205 134.4L639.005 220.8V357.6H547.805ZM692.285 196.32C702.525 196.32 711.645 193.92 719.645 189.12C727.965 184.32 734.525 177.28 739.325 168C744.445 158.72 747.005 147.52 747.005 134.4C747.005 121.28 744.445 110.08 739.325 100.8C734.525 91.52 727.965 84.48 719.645 79.68C711.645 74.88 702.525 72.48 692.285 72.48C682.045 72.48 672.765 74.88 664.445 79.68C656.445 84.48 649.885 91.52 644.765 100.8C639.965 110.08 637.565 121.28 637.565 134.4C637.565 147.52 639.965 158.72 644.765 168C649.885 177.28 656.445 184.32 664.445 189.12C672.765 193.92 682.045 196.32 692.285 196.32Z"
                fill="url(#paint3_linear_4_57)"
                fillOpacity="0.2"
              />
              <path
                opacity="0.17"
                d="M403.864 268.8C381.784 268.8 360.184 266.24 339.064 261.12C318.264 256 301.464 249.6 288.664 241.92L316.024 179.52C328.184 186.88 342.424 192.8 358.744 197.28C375.064 201.44 391.064 203.52 406.744 203.52C422.104 203.52 432.664 201.92 438.424 198.72C444.504 195.52 447.544 191.2 447.544 185.76C447.544 180.64 444.664 176.96 438.904 174.72C433.464 172.16 426.104 170.24 416.824 168.96C407.864 167.68 397.944 166.24 387.064 164.64C376.184 163.04 365.144 160.96 353.944 158.4C343.064 155.52 332.984 151.36 323.704 145.92C314.744 140.16 307.544 132.48 302.104 122.88C296.664 113.28 293.944 101.12 293.944 86.4C293.944 69.76 298.744 55.04 308.344 42.24C318.264 29.12 332.664 18.88 351.544 11.52C370.424 3.83999 393.464 0 420.664 0C438.904 0 457.304 1.91999 475.864 5.75998C494.744 9.27999 510.584 14.72 523.384 22.08L496.024 84C483.224 76.64 470.424 71.68 457.624 69.12C444.824 66.24 432.664 64.8 421.144 64.8C405.784 64.8 394.904 66.56 388.504 70.08C382.424 73.6 379.384 77.92 379.384 83.04C379.384 88.16 382.104 92.16 387.544 95.04C392.984 97.6 400.184 99.68 409.144 101.28C418.424 102.56 428.504 104 439.384 105.6C450.264 106.88 461.144 108.96 472.024 111.84C483.224 114.72 493.304 119.04 502.264 124.8C511.544 130.24 518.904 137.76 524.344 147.36C529.784 156.64 532.504 168.64 532.504 183.36C532.504 199.36 527.544 213.76 517.624 226.56C508.024 239.36 493.624 249.6 474.424 257.28C455.544 264.96 432.024 268.8 403.864 268.8Z"
                fill="url(#paint4_linear_4_57)"
                fillOpacity="0.2"
              />
              <path
                opacity="0.17"
                d="M110.4 268.8C89.28 268.8 70.24 264.64 53.28 256.32C36.64 248 23.52 235.04 13.92 217.44C4.64 199.52 0 176.96 0 149.76V4.31982H91.2V134.88C91.2 155.04 94.88 169.44 102.24 178.08C109.92 186.72 120.64 191.04 134.4 191.04C143.36 191.04 151.52 188.96 158.88 184.8C166.24 180.64 172.16 174.08 176.64 165.12C181.12 155.84 183.36 144 183.36 129.6V4.31982H274.56V264.48H187.68V191.04L204.48 211.68C195.52 230.88 182.56 245.28 165.6 254.88C148.64 264.16 130.24 268.8 110.4 268.8Z"
                fill="url(#paint5_linear_4_57)"
                fillOpacity="0.2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4_57"
                  x1="606.678"
                  y1="-102.02"
                  x2="606.679"
                  y2="316.98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_4_57"
                  x1="606.681"
                  y1="-102.02"
                  x2="606.681"
                  y2="316.98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_4_57"
                  x1="606.678"
                  y1="-102.02"
                  x2="606.678"
                  y2="316.98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_4_57"
                  x1="606.681"
                  y1="-102.02"
                  x2="606.681"
                  y2="316.98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_4_57"
                  x1="606.68"
                  y1="-102.02"
                  x2="606.68"
                  y2="316.98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_4_57"
                  x1="606.68"
                  y1="-102.02"
                  x2="606.68"
                  y2="316.98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </section>

        <section css={styles.contact.wrapper}>
          <Container>
            <div css={styles.formWrapper}>
              <Form
                formTitle={
                  <h2>
                    Відвідати <br /> онлайн-конференцію
                  </h2>
                }
              />
            </div>
          </Container>
        </section>
      </main>

      <Banner />
    </div>
  );
};
