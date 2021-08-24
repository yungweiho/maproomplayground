import * as React from "react";
import styles from "../materials/PanoramaButton.module.scss";

const PanoramaButton = () => {
  return (
    <div className={styles.container}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="#8E8E8E" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.5508 14.758C32.5681 14.9462 32.5753 15.1359 32.5753 15.3227C32.5829 18.4085 32.5858 21.489 32.5839 24.5642C32.5781 27.4987 30.1922 29.2294 27.4143 28.3247C25.5343 27.7053 23.5897 27.3087 21.6195 27.1427C18.3779 26.8971 15.1203 27.3002 12.0325 28.3291C9.25465 29.2382 6.86294 27.5031 6.86294 24.5685C6.85526 21.4846 6.85526 18.3993 6.86294 15.3125C6.86294 15.1257 6.87015 14.936 6.88744 14.7477H6.87881C6.88745 14.6792 6.89897 14.612 6.91194 14.5449C6.91124 14.5406 6.91124 14.5361 6.91194 14.5318C7.34994 12.1532 9.51832 10.8574 11.9994 11.6658C15.0964 12.6979 18.3641 13.1005 21.6152 12.8507C22.8367 12.7511 24.0493 12.5604 25.2431 12.2801H25.2647C25.4909 12.2276 25.7171 12.1707 25.9419 12.1109L26.1191 12.0627L26.5052 11.9547C26.7809 11.8769 27.0556 11.7932 27.3293 11.7037C27.3571 11.694 27.3828 11.6873 27.4098 11.6802C27.4151 11.6788 27.4205 11.6774 27.4259 11.676H27.4388C27.7574 11.5713 28.0857 11.4999 28.4186 11.463L28.4415 11.4601C28.5757 11.4436 28.703 11.4279 28.8393 11.4279L28.8307 11.4367C30.6922 11.409 32.1718 12.6231 32.5263 14.542C32.527 14.5463 32.527 14.5508 32.5263 14.5551C32.5392 14.6222 32.5508 14.6894 32.5594 14.758H32.5508ZM7.73607 14.7127C7.71574 14.8578 7.70419 15.004 7.70149 15.1505C7.69092 16.0027 7.69316 16.8543 7.6954 17.706C7.69652 18.1319 7.69764 18.5579 7.69716 18.984V22.063C8.09672 21.753 8.48529 21.4507 8.86549 21.155C9.71645 20.493 10.5255 19.8637 11.3222 19.2525C12.4748 18.3682 13.5698 18.3638 14.7224 19.2525C15.3 19.7001 15.8754 20.1505 16.4506 20.6008C17.1956 21.1839 17.9402 21.7668 18.6889 22.3432C19.4425 22.9225 20.0649 22.9502 20.8703 22.4643C21.0938 22.3298 21.313 22.1894 21.5328 22.0487C21.7353 21.919 21.9382 21.7891 22.1454 21.6632C23.2274 20.9963 24.2662 21.0386 25.2748 21.7901C25.5438 21.9903 25.809 22.1952 26.0741 22.3999C26.3017 22.5757 26.5292 22.7514 26.7588 22.924C27.7227 23.6478 28.5944 23.6536 29.5813 22.9415C29.7124 22.8466 29.8442 22.7526 29.976 22.6585C30.4486 22.3215 30.9213 21.9842 31.3607 21.6077C31.5527 21.4365 31.6914 21.2124 31.7598 20.9627C31.754 18.6206 31.7425 15.8626 31.7338 15.1505C31.7311 15.004 31.7196 14.8578 31.6993 14.7127C31.3347 12.9353 29.9343 12.0335 28.0858 12.3619C28.0724 12.366 28.0588 12.37 28.0453 12.374C28.0107 12.3842 27.9758 12.3945 27.9417 12.4071C24.7042 13.4899 21.3847 14.0196 18.0002 13.6708C15.8952 13.4333 13.812 13.0273 11.7703 12.4567C9.71427 11.9022 8.12796 12.804 7.73607 14.7127ZM28.7063 18.9778C28.3064 19.3834 27.7666 19.6159 27.2008 19.6264C26.9144 19.6255 26.631 19.5669 26.3672 19.4541C26.1034 19.3413 25.8643 19.1766 25.6639 18.9694C25.4635 18.7622 25.3057 18.5167 25.1998 18.2472C25.0938 17.9777 25.0418 17.6896 25.0468 17.3996C25.0664 16.8311 25.3049 16.2931 25.7113 15.9004C26.1176 15.5078 26.6595 15.2918 27.2211 15.2987C27.7826 15.3055 28.3193 15.5347 28.7161 15.9372C29.113 16.3396 29.3386 16.8834 29.3447 17.4521C29.3351 18.0252 29.1062 18.5722 28.7063 18.9778Z"
          fill="white"
        />
      </svg>

      <div className={styles.text}>全景圖</div>
    </div>
  );
};

export default PanoramaButton;