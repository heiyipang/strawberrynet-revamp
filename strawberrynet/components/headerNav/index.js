import styles from './HeaderNav.module.css'
import Link from 'next/link'
import { Button, Input, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
// import { profileIcon } from "../../public/res/profileIcon";
import Icon from '@ant-design/icons';


export default function HeaderNav() {
    return (
        <>
            <div className={styles.headerNavContainer}>
                <ul className={styles.navBar}>
                    <li className={styles.navItem}>Shop by Brand</li>
                    <li className={styles.navItem}>Skincare</li>
                    <li className={styles.navItem}>Makeup</li>
                    <li className={styles.navItem}>Haircare</li>
                    <li className={styles.navItem}>Perfume</li>
                    <li className={styles.navItem}>Men's</li>
                    <li className={styles.navItem}>Home Scents</li>
                    <li className={styles.navItem}>Health Care</li>
                    <li className={styles.navItem}>Blog</li>
                </ul>
            </div>
        </>
    )
}