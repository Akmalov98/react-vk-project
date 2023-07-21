import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import NavbarParent from './NavbarParent';
import { CgProfile } from 'react-icons/cg';
import { BiNews } from 'react-icons/bi';
import { TbMessageCircle2 } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineUserGroup, HiOutlinePhotograph } from 'react-icons/hi';
import { BsMusicPlayer, BsCameraVideo } from 'react-icons/bs';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavLink to="/myProfile">
                <NavbarParent label={'MyProfile'} child={<CgProfile className={s.leftNavigationIcon} />} />
            </NavLink>
            <NavLink to="/newsContent">
                <NavbarParent label={'News'} child={<BiNews className={s.leftNavigationIcon} />} />
            </NavLink>
            <NavLink to="/dialogs">
                <NavbarParent label={'Messenger'} child={<TbMessageCircle2 className={s.leftNavigationIcon} />} />
            </NavLink>
            <NavLink to="/friendsList">
                <NavbarParent label={'Friends'} child={<FiUsers className={s.leftNavigationIcon} />} />
            </NavLink>
            <NavLink to="/groupsList">
                <NavbarParent label={'Groups'} child={<HiOutlineUserGroup className={s.leftNavigationIcon} />} />
            </NavLink>
            <NavLink to="/musicsList">
                <NavbarParent label={'Musics'} child={<BsMusicPlayer className={s.leftNavigationIcon} />} />
            </NavLink>
            <NavLink to="/photosList">
                <NavbarParent label={'Photos'} child={<HiOutlinePhotograph className={s.leftNavigationIcon} />} />
            </NavLink>
            <NavLink to="/videosList">
                <NavbarParent label={'Videos'} child={<BsCameraVideo className={s.leftNavigationIcon} />} />
            </NavLink>
        </nav>
    )
}

export default Navbar