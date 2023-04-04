
import { HiHome } from 'react-icons/hi';
import { BsCollectionPlay} from 'react-icons/bs';
import { MdOutlinePlaylistAdd} from 'react-icons/md';
import { AiOutlinePlaySquare} from 'react-icons/ai';
import {GiBackwardTime } from 'react-icons/gi';
import {BsPlayBtn } from 'react-icons/bs';
import {BiTimeFive } from 'react-icons/bi';
import {HiOutlineScissors } from 'react-icons/hi';
import {AiOutlineMore } from 'react-icons/ai';
import {AiOutlineLike } from 'react-icons/ai';
import {BiDislike } from 'react-icons/bi';
import {FiMoreHorizontal } from 'react-icons/fi';

import samar from '../image/channels4_profile.jpg'
import turfa from '../image/channels4_profile (1).jpg'
import subekitve from '../image/channels4_profile (6).jpg'
import yangliklar from '../image/channels4_profile (3).jpg'
import kids from '../image/channels4_profile (4).jpg'
import el from '../image/channels4_profile (5).jpg'
import javohir from '../image/unnamed.jpg'
import jalolidin from '../image/maxresdefault.jpg'
import narixat from '../image/mqdefault_6s.jpg'
import dawn from '../image/hq720.jpg'
import img1 from '../image/hq720.jpg'
import img2 from '../image/hq721.jpg'
import img3 from '../image/hq722.jpg'
import img4 from '../image/hq723.jpg'
import img5 from '../image/hq724.jpg'
import img6 from '../image/hq725.jpg'

import img8 from '../image/hq727.jpg'

export {BiVideoPlus} from 'react-icons/bi';
export { TbBellRinging } from 'react-icons/tb';
export { AiOutlineSearch } from 'react-icons/ai';



const homeIcon=[
    {
        icon:<HiHome/>, name:'Home',
    },
    {
        icon:<MdOutlinePlaylistAdd/>, name:'Shorts',
    },
    {
        icon:<BsCollectionPlay/>, name:'Folawers',
    },
]

export const yourInfo=[
    {
        icon:<AiOutlinePlaySquare/>, name:'Librey',
    },
    {
        icon:<GiBackwardTime/>, name:'Shorts',
    },
    {
        icon:<BsPlayBtn/>, name:'Vidoes',
    },
    {
        icon:<BiTimeFive/>, name:'Nexttime',
    },
    {
        icon:<HiOutlineScissors/>, name:'Yourvideo',
    },
    {
        icon:<HiOutlineScissors/>, name:'More',
    },
    {
        icon:<HiOutlineScissors/>, name:'Like',
    },
    {
        icon:<HiOutlineScissors/>, name:'Almati',
    },
]

export const follow=[
    {
        name:'Samar Badridinov', image:samar
    },
    {
        name:'TURFA OLAM', image:turfa
    },
    {
        name:'SUBEKITVE', image:subekitve
    },
    {
        name:'yangliklar', image:yangliklar
    },
    {
        name:'kids', image:kids
    },
    {
        name:'el', image:el
    },
    {
        name:'javohir', image:javohir
    },
]
export const minNavbar=[
    {
        name:'music', id:1,
    },
    {
        name:'live', id:2,
    },
    {
        name:'location', id:3,
    },
    {
        name:'top', id:4,
    },
    {
        name:'hit',id:5,
    },
    {
        name:'natura', id:6,
    },
]

export const cardInfo=[
    {
        nameVideo:'jalolidin', inofVideo:'32 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:jalolidin, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>, imgBlog:turfa,  blogName:'TURFA OLAM',  id:1, catigory:'music', yourInfo:'Librey', Homename:'Shorts',
    },
    {
        nameVideo:"Shaxriyor - O'rik gullaganda | Шахриёр - Урик гуллаганда", inofVideo:'2 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:img8, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>,  imgBlog:javohir, blogName:'javohir',  id:2, catigory:'top', yourInfo:'Vidoes', Homename:'Folawers'
    },
    {
        nameVideo:"QARAKESEK - ҚУРАҒАН ГҮЛ | GAKKU FEST", inofVideo:'24 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:img1, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>, imgBlog:subekitve, blogName:'SUBEKITVE',  id:3, catigory:'live', yourInfo:'Nexttime', Homename:'Folawers'
    },
    {
        nameVideo:"Xamdam Sobirov - Yaxshi ko'rsam nima qipti (Videoklip)", inofVideo:'18 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:img2, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>, imgBlog:kids, blogName:'kids',  id:4, catigory:'hit', yourInfo:'Like', Homename:'Shorts'
    },
    {
        nameVideo:"Doston Ergashev - Meni sog'insang (Official Music Video)", inofVideo:'75 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:img3, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>, imgBlog:yangliklar, blogName:'yangliklar',  id:5, catigory:'music', yourInfo:'Nexttime', Homename:'Shorts'
    },
    {
        nameVideo:"QARAKESEK - ҚУРАҒАН ГҮЛ | GAKKU FEST", inofVideo:'24 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:img4, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>, imgBlog:subekitve, blogName:'SUBEKITVE',  id:6, catigory:'live', yourInfo:'Nexttime', Homename:'Folawers'
    },
    {
        nameVideo:"Xamdam Sobirov & Mirjalol Nematov - Menga o’xshagani tug’ilmaydi", inofVideo:'32 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:img5, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>, imgBlog:turfa,  blogName:'TURFA OLAM',  id:7, catigory:'music', yourInfo:'Librey', Homename:'Shorts',
    },
    {
        nameVideo:"Xamdam Sobirov - Yaxshi ko'rsam nima qipti (Videoklip)", inofVideo:'18 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:img6, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>, imgBlog:yangliklar, blogName:'yangliklar',  id:8, catigory:'hit', yourInfo:'Like', Homename:'Shorts'
    },
    {
        nameVideo:"QARAKESEK - ҚУРАҒАН ГҮЛ | GAKKU FEST", inofVideo:'24 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:narixat, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>, imgBlog:subekitve, blogName:'SUBEKITVE',  id:9, catigory:'live', yourInfo:'Nexttime', Homename:'Folawers'
    },
    {
        nameVideo:"Shaxriyor - O'rik gullaganda | Шахриёр - Урик гуллаганда", inofVideo:'2 ming marta 2soat oldin', titelVideo:'cu hudhvs s dhsvds', imageVideo:img4, iconVideo:<AiOutlineMore/>, likeVideo:<AiOutlineLike/>, dislike:<BiDislike/>, horizontVideo:<FiMoreHorizontal/>,  imgBlog:el, blogName:'el',  id:2, catigory:'top', yourInfo:'Vidoes', Homename:'Folawers'
    },
]




export default  homeIcon;




























