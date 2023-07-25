import React, { useMemo, useState } from 'react'
import s from './PhotosList.module.css'
import MyButton from '../UI/myButton/MyButton'
import MyInput from '../UI/myInput/MyInput'
import PhotosService from '../../API/PhotosService'
import { useEffect } from 'react'
import { useFetching } from '../../hooks/useFetching'
import Loader from '../UI/loader/Loader'
import Pagination from '../UI/pagination/Pagination'
import { getPageCount } from '../../utils/pages'

const PhotosList = () => {

  const [photos, setPhotos] = useState([])
  const [searchPhoto, setSearchPhoto] = useState('')

  const searchPhotoDescription = (event) => {
    setSearchPhoto(event.target.value)
  }

  const filteredPhotos =  photos.filter((post) => 
    post.description.toLowerCase().includes(searchPhoto.toLowerCase()));
  
  

  const [fetchPhotos, isPhotosLoading, photosError] = useFetching(async () => {
    const response = await PhotosService.getPhotos()
    setPhotos(response.data);
})

  useEffect(() => {
    fetchPhotos()
  }, [])

  
  return (
    <div>
        <h1 className={s.myPhoto}>Мои фото</h1>
      <div className={s.inputDiv}>
        <MyInput 
          className={s.searchPhoto}
          placeholder='Поиск фото по его порядковому номеру....'
          value={searchPhoto}
          onChange={searchPhotoDescription}
        />
      </div>
      {photosError && 
        <h1>Произошла ошибка {photosError}</h1>
      }
      {isPhotosLoading ? (<div className={s.loaderDiv}><Loader/></div>)
         : filteredPhotos.length > 0 ? (filteredPhotos.map(photo =>
          <div className={s.container} key={photo.id}>
            <div className={s.numberdiV}>Номер {photo.description}</div> 
              <img 
                className={s.img}
                src={photo.url}
                placeholder={photo.description}
                alt={photo.description}
              />
          </div>
          )) : (<div className={s.notFind}>Фото не найдены...</div>)
      }
        {/* <div className={s.paginationSpan}> */}
          {/* <Pagination
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
          /> 
        </div> */}
    </div>
  )
}

export default PhotosList