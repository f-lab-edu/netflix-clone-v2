import localFont from 'next/font/local';

const NetflixSans = localFont({
  src: [
    { path: '../../../assets/font/Netflix Sans Bold.otf', weight: '700', style: 'normal' },
    { path: '../../../assets/font/Netflix Sans Light.otf', weight: '300', style: 'normal' },
    { path: '../../../assets/font/Netflix Sans Regular.otf', weight: '400', style: 'normal' },
    { path: '../../../assets/font/NetflixSans-Medium.otf', weight: '500', style: 'normal' }
  ],
  display: 'swap'
})

export default NetflixSans
