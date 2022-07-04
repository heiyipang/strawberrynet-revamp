import styles from './Header.module.css'
import Link from 'next/link'
import { Button, Input, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import { profileIcon } from "../../public/res/profileIcon";
import Icon from '@ant-design/icons';
import HeaderNav from '../headerNav';


export default function Header() {
    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.notificationBar}>
                    <h4>Don’t miss Free Shipping + 4% Point Rewards on your first order!&nbsp;
                        <a href="/">
                            <span className={styles.linkStrip}>Sign up now&#62;&#62;</span>
                        </a>
                    </h4>
                </div>
                <div className={styles.headerBar}>
                    <div className={styles.headerBarInner}>
                        <Input className={styles.searchBar}/>
                        <img className={styles.logoImg} src="/res/companyLogo.png" alt="" title="" />
                        <div className={styles.buttonWrapper}>
                            <Link href="/about" className={styles.headerIcon}>
                                <img src="/res/cartIcon.svg" alt="" title="" className={styles.headerIcon} />
                            </Link>
                            <Link href="/about" className={styles.headerIcon}>
                                <img src="/res/loveIcon.svg" alt="" title="" className={styles.headerIcon} />
                            </Link>
                            <Link href="/about" className={styles.headerIcon}>
                                <img src="/res/profileIcon.svg" alt="" title="" className={styles.headerIcon} />
                            </Link>
                            <Link href="/about" >
                                <img src="/res/langIcon.png" alt="" title="" className={styles.headerIcon} />
                            </Link>
                        </div>
                    </div>
                    <HeaderNav/>
                </div>
            </div>
        </>
    )
}