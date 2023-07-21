import s from '../LeftNavigation.module.css'
import {BiNews} from 'react-icons/bi'

const News = () => {
  return (
        <div className={s.leftNavigation}>
            <div className={s.leftNavigationIconDiv}>
                <BiNews className={s.leftNavigationIcon}/>
            </div>
            <div className={s.myLeftNavigation}>
                News
            </div>
      </div>
  )
}

export default News