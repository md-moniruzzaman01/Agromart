import { GrFacebookOption,GrTwitter,GrPinterest,GrLinkedinOption } from 'react-icons/gr';
import { FaTelegram } from 'react-icons/fa';

const NavItems= [
    {name:"Home", link:"/"},
    {name:"Shop", link:"/shop"},
    {name:"Blog", link:"/blog"},
    {name:"Page", link:"/page"},
    {name:"About us", link:"/about-us"}
]

const OfferItems=[
    {name:"Special Offer", link:"/offer"},
    {name:"Purchase Theme", link:"/theme"},
]
const SocialIcons=[
    {Icon:<GrFacebookOption/>, link:"/"},
    {Icon:<GrTwitter/>, link:"/"},
    {Icon:<GrPinterest/>, link:"/"},
    {Icon:<GrLinkedinOption/>, link:"/"},
    {Icon:<FaTelegram/>, link:"/"},
    
]

export {NavItems,OfferItems,SocialIcons}